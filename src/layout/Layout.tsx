import { useContext, Fragment, FC } from 'react';

import { LayoutContext } from '@context/layout/Layout.context';
import * as Styled from './Layout.styles';

const Layout: FC = ({ children }) => {
  const { layout } = useContext(LayoutContext);
  const { background, assets, showHeader, title, alignCenter } = layout;

  return (
    <Styled.Wrapper background={background}>
      <Fragment>
        {showHeader && <Styled.HeaderWrapper></Styled.HeaderWrapper>}
        {children}
      </Fragment>
    </Styled.Wrapper>
  );
};

export default Layout;
