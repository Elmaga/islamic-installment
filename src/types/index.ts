export interface Order {
  id: number
  productName: string
  purchasePlace: string
  fullName: string
  phone: string
  amount: number
  term: number
  monthlyPayment: number
  totalAmount: number
  isRead: boolean
  createdAt: string
}

export interface CreateOrderPayload {
  productName: string
  purchasePlace: string
  fullName: string
  phone: string
  amount: number
  term: number
  monthlyPayment: number
  totalAmount: number
  isRead: false
  createdAt: string
}

export interface AuthUser {
  id: number
  email: string
  fullName?: string
}

export interface AuthResponse {
  token: string
  data: AuthUser
}

export interface InstallmentResult {
  monthlyPayment: number
  lastPayment: number
  paymentsCount: number
  totalAmount: number
  amount: number
  term: number
  hasUnevenLastPayment: boolean
}

export interface OrderStats {
  today: number
  week: number
  month: number
  total: number
}
