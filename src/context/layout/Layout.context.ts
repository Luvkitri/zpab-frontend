import { createContext } from 'react';

import { LayoutContextProps } from './Layout.types';
import { initialLayoutData } from './Layout.utils';

export const LayoutContext = createContext<LayoutContextProps>({
  layout: initialLayoutData,
  updateLayout: () => {},
});
