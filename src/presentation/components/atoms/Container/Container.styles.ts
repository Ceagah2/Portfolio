import styled from 'styled-components';
import { IMAGE_BG_URL } from '../../../../infra/utils/constants';

export const MainContainer = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
    url(${IMAGE_BG_URL});
  background-size: cover;
  background-position: center;
`;