import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Backdrop, ModalContent } from './Modal.styled';

export const Modal = ({ show, alt, src }) => {
  const modalAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
  });

  useEffect(() => {
    const closeModal = e => {
      if (e.code === 'Escape') {
        show();
      }
    };

    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [show]);

  return (
    <Backdrop onClick={() => show()}>
      <animated.div style={modalAnimation}>
        <ModalContent>
          <img src={src} alt={alt} />
        </ModalContent>
      </animated.div>
    </Backdrop>
  );
};

Modal.propTypes = {
  show: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};