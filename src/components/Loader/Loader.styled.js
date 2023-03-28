import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .react-spinner-loader {
    margin-right: 10px;
  }

  .loading-text {
    font-size: 24px;
    font-weight: bold;
    color: #4fa94d;
    text-transform: uppercase;
  }
`;