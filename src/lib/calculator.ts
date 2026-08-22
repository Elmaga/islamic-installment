import type { InstallmentResult } from '../types'

export const AMOUNT_MIN = 10_000
export const AMOUNT_MAX = 1_000_000
export const AMOUNT_STEP = 1_000
export const AMOUNT_DEFAULT = 100_000

export const TERM_MIN = 3
export const TERM_MAX = 36
export const TERM_STEP = 1
export const TERM_DEFAULT = 12

/**
 * Islamic installment: no interest.
 * Splits total into equal monthly payments with last-payment remainder adjustment.
 */
export function calculateInstallment(
  amount: number,
  term: number,
): InstallmentResult {
  const safeAmount = Math.max(amount, 0)
  const safeTerm = Math.max(Math.floor(term), 1)

  const monthlyPayment = Math.round((safeAmount / safeTerm) * 100) / 100
  const paidBeforeLast = Math.round(monthlyPayment * (safeTerm - 1) * 100) / 100
  const lastPayment = Math.round((safeAmount - paidBeforeLast) * 100) / 100

  return {
    amount: safeAmount,
    term: safeTerm,
    monthlyPayment,
    lastPayment,
    paymentsCount: safeTerm,
    totalAmount: safeAmount,
    hasUnevenLastPayment: lastPayment !== monthlyPayment,
  }
}
