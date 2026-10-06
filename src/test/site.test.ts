import { describe, it, expect } from "vitest";
import { SITE_INFO, NAV_LINKS, getWhatsAppUrl } from "@/constants/site";
import { formatPhone } from "@/lib/formatters";

describe("formatPhone", () => {
  it("should handle empty strings", () => {
    expect(formatPhone("")).toBe("");
  });

  it("should format short strings under 2 digits", () => {
    expect(formatPhone("8")).toBe("(8");
    expect(formatPhone("83")).toBe("(83");
  });

  it("should format intermediate numbers up to 6 digits", () => {
    expect(formatPhone("839888")).toBe("(83) 9888");
  });

  it("should format 10-digit landline numbers", () => {
    expect(formatPhone("8333214455")).toBe("(83) 3321-4455");
  });

  it("should format 11-digit mobile numbers with 9 prefix", () => {
    expect(formatPhone("83981386488")).toBe("(83) 98138-6488");
  });

  it("should strip non-digit characters and truncate beyond 11 digits", () => {
    expect(formatPhone("+55 (83) 9 8138-6488 999")).toBe("(55) 83981-3864");
    expect(formatPhone("abc83xyz981386488")).toBe("(83) 98138-6488");
  });
});

describe("getWhatsAppUrl", () => {
  it("should generate a valid WhatsApp URL with default message", () => {
    const url = getWhatsAppUrl();
    expect(url).toContain("https://api.whatsapp.com/send?phone=558381386488");
    expect(url).toContain("text=");
    expect(url).toContain("WCF%20Academia");
  });

  it("should correctly encode custom messages and trim whitespace", () => {
    const custom = "  Olá! Quero saber sobre o Studio Pilates & Solo  ";
    const url = getWhatsAppUrl(custom);
    expect(url).toContain("text=Ol%C3%A1!%20Quero%20saber%20sobre%20o%20Studio%20Pilates%20%26%20Solo");
  });
});

describe("SITE_INFO & NAV_LINKS consistency", () => {
  it("should have unified working hours configuration", () => {
    expect(SITE_INFO.workingHours.weekdays).toBe("05h00 – 00h00");
    expect(SITE_INFO.workingHours.saturday).toBe("08h00 – 12h00 · 14h00 – 17h00");
    expect(SITE_INFO.workingHours.sunday).toBe("08h00 – 14h00");
    expect(SITE_INFO.workingHours.summary).toContain("Seg a Sex: 05h–00h");
  });

  it("should have correct address and phone details", () => {
    expect(SITE_INFO.phoneRaw).toBe("558381386488");
    expect(SITE_INFO.address.city).toBe("Campina Grande");
    expect(SITE_INFO.address.state).toBe("PB");
    expect(SITE_INFO.address.cep).toBe("58415-240");
  });

  it("should include Planos in navigation links", () => {
    const planosNav = NAV_LINKS.find((link) => link.href === "/horarios");
    expect(planosNav).toBeDefined();
    expect(planosNav?.label).toBe("Planos");
  });


  it("should ensure all navigation links have valid routes and labels", () => {
    NAV_LINKS.forEach((link) => {
      expect(link.href.startsWith("/")).toBe(true);
      expect(link.label.length).toBeGreaterThan(0);
    });
  });
});
