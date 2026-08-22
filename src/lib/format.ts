export function formatMoney(value: number): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: Number.isInteger(value) ? 0 : 2,
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
  }).format(value)
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('ru-RU').format(value)
}

export function formatTerm(months: number): string {
  const mod10 = months % 10
  const mod100 = months % 100

  let word = 'месяцев'
  if (mod100 < 11 || mod100 > 14) {
    if (mod10 === 1) word = 'месяц'
    else if (mod10 >= 2 && mod10 <= 4) word = 'месяца'
  }

  return `${months} ${word}`
}

export function formatDateTime(iso: string): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return '—'

  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}
