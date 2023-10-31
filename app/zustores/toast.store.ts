import { ToastDuration } from '@app/lib/enums';
import { create } from 'zustand';

export interface ToastState {
  message?: string;
  toastVisible?: boolean;
  showToast: (message: string, duration?: ToastDuration) => void;
  hideToast: () => void;
}

const useToastStore = create<ToastState>(set => ({
  message: '',
  toastVisible: false,
  showToast: (message, duration = ToastDuration.SHORT) => {
    set({ message, toastVisible: true });
    setTimeout(() => set({ message, toastVisible: false }), duration);
  },
  hideToast: () => set({ message: '', toastVisible: false }),
}));

export const useToast = () => {
  const { showToast, hideToast } = useToastStore();
  return { showToast, hideToast };
};

export default useToastStore;
