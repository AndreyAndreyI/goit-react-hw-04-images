import { LoaderWrapper } from './Loader.styled';
import { Rings } from 'react-loader-spinner';

<LoaderWrapper>
  <Rings
    height="80"
    width="80"
    color="#4fa94d"
    radius="6"
    visible={true}
    ariaLabel="rings-loading"
  />
  <span className="loading-text">Loading...</span>
</LoaderWrapper>;
