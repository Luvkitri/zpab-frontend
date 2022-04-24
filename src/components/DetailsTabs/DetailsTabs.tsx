import { FC, ReactElement, SyntheticEvent, useState } from 'react';

import { Avatar, Tab, Tabs, Typography } from '@mui/material';

import { DetailsTabsProps, TabPanelProps } from './DetailsTabs.types';
import * as Styled from './DetailsTabs.styles';

const TabPanel: FC<TabPanelProps> = ({ value, index, children }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {children}
    </div>
  );
};

const DetailsTabs = ({
  firstName,
  phoneNumber,
  email,
  city,
  street,
}: DetailsTabsProps): ReactElement => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Styled.TabsWrapper>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
          centered
        >
          <Tab label="Contact" />
          <Tab label="Location" />
        </Tabs>
      </Styled.TabsWrapper>
      <TabPanel value={value} index={0}>
        <Styled.ContactTabContainer>
          <Styled.UserInfoContainer>
            <Avatar sx={{ width: 96, height: 96 }}>
              {firstName.charAt(0).toUpperCase()}
            </Avatar>
            <Typography variant="h6">{firstName}</Typography>
          </Styled.UserInfoContainer>
          <Styled.UserContactContainer>
            <Styled.ContactWrapper>
              <Styled.InfoWrapper>
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  color="text.secondary"
                >
                  Phone number:
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {phoneNumber}
                </Typography>
              </Styled.InfoWrapper>
            </Styled.ContactWrapper>
            <Styled.ContactWrapper>
              <Styled.InfoWrapper>
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  color="text.secondary"
                >
                  Email:
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {email}
                </Typography>
              </Styled.InfoWrapper>
            </Styled.ContactWrapper>
          </Styled.UserContactContainer>
        </Styled.ContactTabContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {city} {street}
      </TabPanel>
    </>
  );
};

export default DetailsTabs;
