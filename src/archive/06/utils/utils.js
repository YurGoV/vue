export function getFormattedCardNumber(number) {
  const cleaned = number.replace(/\D+/g, "");
  return cleaned.toString().replace(/(\d{4})(?=\d)/g, "$1 ");
}

export function getFormattedExpireDate(number) {
  const cleaned = number.toString().replace(/\D+/g, "");
  if (cleaned.length <= 2) return cleaned;
  return cleaned.substring(0, 2) + " / " + cleaned.substring(2, 4);
}
