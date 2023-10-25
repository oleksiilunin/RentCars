import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';
import '../../css/variables.css';

const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="110"
        width="110"
        radius="8"
        color="var(--accent-color)"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderWrapper>
  );
};

export default Loader;
