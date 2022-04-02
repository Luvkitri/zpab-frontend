import { useContext } from 'react';

import { LayoutContext } from '@context/layout/Layout.context';
import * as Styled from './Layout.styles';

const Layout = () => {
  const { layout } = useContext(LayoutContext);
  const { background, assets, showHeader, title, alignCenter } = layout;

  return (
    <Styled.Wrapper background={background}>
      {showHeader && (
        <Styled.HeaderWrapper>
          <p>Header</p>
          <p>Yes</p>
          <p>Yep</p>
        </Styled.HeaderWrapper>
      )}
    </Styled.Wrapper>
  );
};

export default Layout;
