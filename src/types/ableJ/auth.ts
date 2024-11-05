import {ResponseType} from '@/types/common';

export type Email = string;
export type Password = string;
export type Name = string;

export type AccessToken = string;
export type RefreshToken = string;

export interface SignupForm {
  email: Email;
  password: Password;
  name: Name;
  careerYear: number;
  jobIds: number[];
}

export interface LoginResponseData {
  accessToken: AccessToken;
  refreshToken: RefreshToken;
}

export type LoginResponse = ResponseType<LoginResponseData>;
export type SignUpResponse = ResponseType<null>;
