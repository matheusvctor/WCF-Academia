/**
 * Status de funcionamento em tempo real da WCF Academia.
 * Calculado sempre no fuso de Campina Grande (America/Recife, UTC-3),
 * independente do fuso do dispositivo do visitante.
 */

/** Janelas de funcionamento em minutos desde 00:00. Índice = dia da semana (0 = Domingo). */
export const OPENING_SLOTS: Record<number, Array<[number, number]>> = {
  0: [[8 * 60, 14 * 60]],
  1: [[5 * 60, 24 * 60]],
  2: [[5 * 60, 24 * 60]],
  3: [[5 * 60, 24 * 60]],
  4: [[5 * 60, 24 * 60]],
  5: [[5 * 60, 24 * 60]],
  6: [
    [8 * 60, 12 * 60],
    [14 * 60, 17 * 60],
  ],
};

export const WEEKDAY_NAMES = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"] as const;

const WEEKDAY_INDEX: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

export interface LocalNow {
  /** 0 = Domingo … 6 = Sábado */
  day: number;
  /** Minutos desde 00:00 */
  minutes: number;
}

/** Retorna dia da semana e minuto atual no fuso da academia. */
export function getAcademyNow(date: Date = new Date()): LocalNow {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Recife",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    }).formatToParts(date);
    const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
    const day = WEEKDAY_INDEX[get("weekday")];
    const minutes = (Number(get("hour")) % 24) * 60 + Number(get("minute"));
    if (day === undefined || Number.isNaN(minutes)) throw new Error("Intl parse error");
    return { day, minutes };
  } catch {
    return { day: date.getDay(), minutes: date.getHours() * 60 + date.getMinutes() };
  }
}

/** Formata minutos como "05h", "18h40", "00h". */
export function formatMinutes(total: number): string {
  const h = Math.floor(total / 60) % 24;
  const m = total % 60;
  return `${String(h).padStart(2, "0")}h${m ? String(m).padStart(2, "0") : ""}`;
}

export interface OpenStatus {
  isOpen: boolean;
  /** Ex.: "Aberto agora" / "Fechado agora" */
  title: string;
  /** Ex.: "até 00h" / "abre amanhã às 05h" */
  detail: string;
}

export function getOpenStatus(date: Date = new Date()): OpenStatus {
  const { day, minutes } = getAcademyNow(date);

  const current = OPENING_SLOTS[day].find(([start, end]) => minutes >= start && minutes < end);
  if (current) {
    return { isOpen: true, title: "Aberto agora", detail: `até ${formatMinutes(current[1])}` };
  }

  // Procura a próxima abertura (hoje ou nos próximos 7 dias)
  for (let offset = 0; offset <= 7; offset++) {
    const d = (day + offset) % 7;
    const next = OPENING_SLOTS[d].find(([start]) => offset > 0 || start > minutes);
    if (next) {
      const when = offset === 0 ? "hoje" : offset === 1 ? "amanhã" : WEEKDAY_NAMES[d].toLowerCase();
      return { isOpen: false, title: "Fechado agora", detail: `abre ${when} às ${formatMinutes(next[0])}` };
    }
  }

  return { isOpen: false, title: "Fechado agora", detail: "" };
}

/** Converte "19h40" / "09h30" em minutos. Retorna Infinity se inválido. */
export function parseHour(value: string): number {
  const match = value.match(/(\d{1,2})h(\d{2})?/);
  if (!match) return Number.POSITIVE_INFINITY;
  return Number(match[1]) * 60 + Number(match[2] ?? 0);
}
