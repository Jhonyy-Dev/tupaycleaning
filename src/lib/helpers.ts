export function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

export function formatPhone(phone: string): string {
  return phone.replace(/\D/g, '');
}
