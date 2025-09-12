import type { AuthInfoLevel, AuthInfoStatus } from '../../enums/user/auth.enum';

export interface AuthInfoRes {
  id: number;
  username: string;
  name: string;
  email: string | null;
  phone: string;
  referralCode: string;
  status: AuthInfoStatus;
  role?: string | null;
  lastLogin?: number | null;
  isActive?: boolean | null;
  createdAt?: number | null;
  updatedAt?: number | null;
  level: AuthInfoLevel;
  regionId: string;
  wardId: string | null;
  cityId: string;
  upgradedAt?: number | null;
  mentorId?: number | null;
  referenceBy?: number | null;
  externalUserId?: number | null;
  sourceCode: string;
  address: string;
  mentorLineage?: string | null;
  referenceLineage?: string | null;
  urlAvatar?: string | null;
}
