import theme from '@/helpers/ThemeProvider';
import useMediaQuery from '@mui/material/useMediaQuery';

const useWindowSize = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return isMobile;
};
export default useWindowSize;
