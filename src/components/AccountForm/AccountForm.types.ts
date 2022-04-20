import { UserDataProps } from '@services/User/User.types';

export interface AccountProps {
  user: UserDataProps;
  onEdit: (user: UserDataProps) => any;
  onPasswordChange: (newPassword: string) => any;
}
