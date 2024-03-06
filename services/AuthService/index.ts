import axios from 'axios';

export default class AuthService {
  static async login(
    userData: any,
    handleClose: () => void,
    setErrors: (errors: string[] | null) => void,
  ) {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      const accessToken = response.data.token;
      window.localStorage.setItem('accessToken', accessToken);
      handleClose();
    }).catch((e) => {
      if (typeof e.response?.data?.message === 'string') {
        setErrors([e.response?.data?.message]);
      } else {
        setErrors(e.response?.data?.message);
      }
    });
  }

  static async registration(
    userData: any,
    handleClose: () => void,
    setErrors: (errors: string[] | null) => void,
  ) {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/registration`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      setErrors(null);
      handleClose();
    }).catch((e) => {
      if (typeof e.response?.data?.message === 'string') {
        setErrors([e.response?.data?.message]);
      } else {
        setErrors(e.response?.data?.message);
      }
    });
  }
}
