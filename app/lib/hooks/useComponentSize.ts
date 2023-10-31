import { useCallback, useState } from 'react';

export interface ISize {
  width: number;
  height: number;
}

export default (): [ISize, any] => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  const onLayout = useCallback((event: any) => {
    const layout = event.nativeEvent.layout;
    const newSize = { width: layout.width, height: layout.height };
    if (size.width !== newSize.width || size.height !== newSize.height) {
      setSize(newSize);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [size, onLayout];
};
