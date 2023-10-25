import { toast } from 'react-toastify';

const notifyOptions = {
  position: 'top-center',
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

const showNotification = (message, type) => {
  switch (type) {
    case 'success':
      toast.success(message, notifyOptions);
      break;
    case 'info':
      toast.info(message, notifyOptions);
      break;
    case 'warning':
      toast.warning(message, notifyOptions);
      break;
    case 'error':
      toast.error(message, notifyOptions);
      break;
    default:
      toast(message, notifyOptions);
      break;
  }
};

export default showNotification;
