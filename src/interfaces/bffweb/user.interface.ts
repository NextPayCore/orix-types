import { UserRole } from "@/enums/bffweb/user.enum"

export interface IUser {
  userId: string
  username: string
  mobile: string
  name: string
  dateOfBirth: string
  isTracking: boolean
  isUserDefault: boolean
  companyCode: string
  typeSale: string
  adminLocations: string[]
  region: string[]
  isSSO: boolean
  role: UserRole
}
