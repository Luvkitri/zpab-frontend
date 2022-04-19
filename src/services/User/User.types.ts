export interface UserDataProps {
  id: number;
  firstName: string;
  phoneNumber?: string;
  email?: string;
  admin?: boolean;
}

export interface SelectedUserProps {
  firstName: string;
  phoneNumber?: string;
  email?: string;
  city?: string;
  street?: string;
}

export interface ResponseUserDataProps {
  data: Array<UserDataProps>;
}
