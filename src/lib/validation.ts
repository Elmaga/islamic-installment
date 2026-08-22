export interface ApplicationFormValues {
  productName: string
  purchasePlace: string
  fullName: string
  phone: string
}

export type ApplicationFormErrors = Partial<Record<keyof ApplicationFormValues, string>>

export function normalizePhone(phone: string): string {
  return phone.replace(/[^\d+]/g, '')
}

export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '')
  return digits.length >= 10 && digits.length <= 15
}

export function validateApplicationForm(
  values: ApplicationFormValues,
): ApplicationFormErrors {
  const errors: ApplicationFormErrors = {}

  if (!values.productName.trim()) {
    errors.productName = 'Укажите наименование товара или услуги'
  }

  if (!values.purchasePlace.trim()) {
    errors.purchasePlace = 'Укажите место покупки'
  }

  if (!values.fullName.trim()) {
    errors.fullName = 'Укажите ваше ФИО'
  } else if (values.fullName.trim().split(/\s+/).length < 2) {
    errors.fullName = 'Введите фамилию и имя'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Укажите номер телефона'
  } else if (!isValidPhone(values.phone)) {
    errors.phone = 'Введите корректный номер телефона'
  }

  return errors
}
