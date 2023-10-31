import { isIOS } from '@app/constants/platform.constants';
import { useEffect } from 'react';
import { Keyboard, KeyboardEventListener } from 'react-native';

const useKeyboardShowHideListener = (
  showListener: KeyboardEventListener,
  hideListener: KeyboardEventListener,
) => {
  useEffect(() => {
    let unsubShow: () => void;
    let unsubHide: () => void;
    if (isIOS) {
      unsubShow = Keyboard.addListener('keyboardWillShow', showListener).remove;
      unsubHide = Keyboard.addListener('keyboardWillHide', hideListener).remove;
    } else {
      unsubShow = Keyboard.addListener('keyboardDidShow', showListener).remove;
      unsubHide = Keyboard.addListener('keyboardDidHide', hideListener).remove;
    }
    return () => {
      unsubShow();
      unsubHide();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useKeyboardShowHideListener;
