import styled from "styled-components";
import PropTypes from 'prop-types';

const Li = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const Img = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

// Add hover effect to image
const HoverImg = styled(Img)`
  &:hover {
    transform: scale(1.1);
  }
`;

export const ImageGalleryItem = ({ src, alt, showBigImg, largeImageURL }) => {
  return (
    <Li onClick={() => showBigImg(largeImageURL)}>
      <HoverImg src={src} alt={alt} />
    </Li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  showBigImg: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};