import { describe, it, expect } from "vitest";
import { getOpenStatus, formatMinutes, parseHour } from "@/lib/openStatus";

// Datas em UTC; Campina Grande = UTC-3 (sem horário de verão)
const at = (iso: string) => new Date(iso);

describe("getOpenStatus", () => {
  it("is open on a weekday morning", () => {
    // Quarta, 07/10/2026 10:00 local
    const s = getOpenStatus(at("2026-10-07T13:00:00Z"));
    expect(s.isOpen).toBe(true);
    expect(s.detail).toBe("até 00h");
  });

  it("is closed before 05h on weekdays and opens today", () => {
    // Quarta 04:00 local
    const s = getOpenStatus(at("2026-10-07T07:00:00Z"));
    expect(s.isOpen).toBe(false);
    expect(s.detail).toBe("abre hoje às 05h");
  });

  it("handles saturday lunch break", () => {
    // Sábado 10/10/2026 13:00 local
    const s = getOpenStatus(at("2026-10-10T16:00:00Z"));
    expect(s.isOpen).toBe(false);
    expect(s.detail).toBe("abre hoje às 14h");
  });

  it("points to monday after sunday closing", () => {
    // Domingo 11/10/2026 15:00 local
    const s = getOpenStatus(at("2026-10-11T18:00:00Z"));
    expect(s.isOpen).toBe(false);
    expect(s.detail).toBe("abre amanhã às 05h");
  });
});

describe("time helpers", () => {
  it("formats minutes", () => {
    expect(formatMinutes(5 * 60)).toBe("05h");
    expect(formatMinutes(18 * 60 + 40)).toBe("18h40");
    expect(formatMinutes(24 * 60)).toBe("00h");
  });

  it("parses hour strings", () => {
    expect(parseHour("19h40")).toBe(19 * 60 + 40);
    expect(parseHour("09h30")).toBe(9 * 60 + 30);
    expect(parseHour("20h00")).toBe(20 * 60);
  });
});
