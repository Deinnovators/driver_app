import React from 'react';
import { InteractionManager } from 'react-native';

const useInteractionManagerMount = (
  func: () => Function | void | Promise<void> | Promise<Function>,
) =>
  React.useEffect(() => {
    InteractionManager.runAfterInteractions(func);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

export default useInteractionManagerMount;
