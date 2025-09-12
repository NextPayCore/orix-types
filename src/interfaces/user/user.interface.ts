export interface IUserRegisterRes {
  token: string
  userId: number
  username: string
  externalUserId?: string
  name: string
  phone: string
  level: 'O3' | 'O2' | 'O1'
  sourceCode: 'ORIX' | 'MNP'
  referralCode: string
  role: 'MEMBER' | 'ADMIN'
  mentorLineage: string
  referenceLineage: string
  urlAvatar?: string
}
