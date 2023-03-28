import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';

export const Backdrop = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalContent = styled(animated.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  max-width: 90vw;
  width: auto;
  height: auto;
  padding: 12px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

export const useModalAnimation = () => {
  const modalBackground = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const modalContent = useSpring({
    transform: 'translate(-50%, -50%) scale(1)',
    from: { transform: 'translate(-50%, -50%) scale(0.5)' },
  });

  return {
    modalBackground,
    modalContent,
  };
};