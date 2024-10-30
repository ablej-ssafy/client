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
