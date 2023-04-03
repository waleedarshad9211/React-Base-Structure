import { useState } from "react";
import toast from "react-hot-toast";

const useToast = () => {
  const [toastIds, setToastIds] = useState([]);

  const showToast = (message, options = {}) => {
    const id = toastIdGenerator();

    setToastIds((prevToastIds) => [...prevToastIds, id]);

    toast(message, {
      id,
      duration: 3000,
      onClose: () => {
        setToastIds((prevToastIds) =>
          prevToastIds.filter((toastId) => toastId !== id)
        );
      },
      ...options,
    });
  };

  const clearToasts = () => {
    toast.dismiss();
    setToastIds([]);
  };

  const toastIdGenerator = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return {
    showToast,
    clearToasts,
    toastIds,
  };
};

export default useToast;
