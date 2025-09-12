export interface IRegisterOtpRes {
  phone: string
  otpMethod: 'zalo' | 'sms'
  purpose: 'REGISTER'
  expiresIn: number
  message: string
  requestId: string
}
