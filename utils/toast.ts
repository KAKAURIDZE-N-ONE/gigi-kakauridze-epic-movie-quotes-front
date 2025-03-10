import { toast, ToastOptions } from "react-toastify";

const toastOptions: ToastOptions = {
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  style: {
    paddingRight: "2rem",
  },
  theme: "colored",
};

export const showSuccessToast = (message: string) => {
  toast.success(message, toastOptions);
};

export const showErrorToast = (message: string) => {
  toast.error(message, toastOptions);
};

export const showInfoToast = (message: string) => {
  toast.info(message, toastOptions);
};

export const showWarningToast = (message: string) => {
  toast.warning(message, toastOptions);
};
