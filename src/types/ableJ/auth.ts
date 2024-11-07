import type {Job} from '@/types/ableJ/resume';
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

export interface Profile {
  id: number;
  name: Name;
  email: Email;
  career: number;
  jobCategoryResponse: Job[];
}

export interface LoginResponseData {
  accessToken: AccessToken;
  refreshToken: RefreshToken;
}

export type LoginResponse = ResponseType<LoginResponseData>;
export type SignUpResponse = ResponseType<null>;
export type ProfileResponse = ResponseType<Profile>;
