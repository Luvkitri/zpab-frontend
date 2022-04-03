export interface UserDataProps {
  id?: number;
  firstName?: string;
  phoneNumber?: string;
  email?: string;
  admin?: boolean;
}

export interface ResponseUserDataProps {
  data: Array<UserDataProps>;
}
