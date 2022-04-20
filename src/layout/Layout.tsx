import { useContext, Fragment, FC } from 'react';

import Header from '@components/Header';

import { LayoutContext } from '@context/layout/Layout.context';
import * as Styled from './Layout.styles';

const Layout: FC = ({ children }) => {
  const { layout } = useContext(LayoutContext);
  const { background, assets, showHeader, title, alignCenter } = layout;

  return (
    <Styled.Wrapper background={background}>
      <Fragment>
        {showHeader && (
          <Styled.HeaderWrapper>
            <Header />
          </Styled.HeaderWrapper>
        )}
        <Styled.PageWrapper>{children}</Styled.PageWrapper>
      </Fragment>
    </Styled.Wrapper>
  );
};

export default Layout;
