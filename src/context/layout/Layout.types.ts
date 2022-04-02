interface LayoutAssetCoordinatesProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}

interface LayoutAssetProps {
  id: number;
  asset: string;
  coordinates: LayoutAssetCoordinatesProps;
  degRotate?: number;
  scale?: number;
}

export interface LayoutDataProps {
  showHeader?: boolean;
  background?: string;
  title?: string;
  alignCenter?: boolean;
  assets: Array<LayoutAssetProps>;
}

export interface LayoutContextProps {
  layout: LayoutDataProps;
  updateLayout: (data: LayoutDataProps) => void;
}
