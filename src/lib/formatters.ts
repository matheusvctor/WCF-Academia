/**
 * Formats a raw phone string into Brazilian standard format:
 * - Up to 2 digits: (XX
 * - Up to 6 digits: (XX) XXXX
 * - Up to 10 digits: (XX) XXXX-XXXX (landline)
 * - 11 digits: (XX) XXXXX-XXXX (mobile)
 */
export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}
