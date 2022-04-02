import { FC, useMemo, useState } from 'react';

import { LayoutContext } from './Layout.context';
import { LayoutDataProps } from './Layout.types';
import { initialLayoutData } from './Layout.utils';

export const LayoutProvider: FC = ({ children }) => {
  const [layout, setLayout] = useState<LayoutDataProps>(initialLayoutData);

  const updateLayout = useMemo(
    () => (layoutData: LayoutDataProps) => {
      setLayout({ ...initialLayoutData, ...layoutData });
    },
    [setLayout],
  );

  return <LayoutContext.Provider value={{ layout, updateLayout }}>{children}</LayoutContext.Provider>;
};

export default LayoutProvider;
