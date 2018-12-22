/* global tw */
import styled, { keyframes } from 'react-emotion';

const upDownAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`;

const upDownWideAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`;

export const UpDown = styled.div`
  animation: ${upDownAnimation} 4s ease-in-out infinite alternate;
  ${tw('pin absolute')};
`;

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation} 18s ease-in-out infinite alternate;
  ${tw('pin absolute')};
`;
