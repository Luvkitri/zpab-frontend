export interface UserDataProps {
  id: number;
  firstName: string;
  phoneNumber?: string;
  email?: string;
  admin?: boolean;
  password?: string;
}

export interface SelectedUserProps {
  firstName: string;
  phoneNumber?: string;
  email?: string;
  city?: string;
  street?: string;
}

export interface ResponseUserDataProps {
  data: UserDataProps;
}
