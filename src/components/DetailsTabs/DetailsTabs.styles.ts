import { styled } from '@mui/material/styles';

export const TabsWrapper = styled('div')`
  width: 100%;
`;

export const ContactTabContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const UserInfoContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const UserContactContainer = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 24px 120px;
`;

export const ContactWrapper = styled('div')`
  display: flex;
`;

export const InfoWrapper = styled('div')`
  display: flex;
  & > h6 {
    margin-right: 4px;
  }
`;
