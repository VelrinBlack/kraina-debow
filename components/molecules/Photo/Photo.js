import { useState } from 'react';
import PropTypes from 'prop-types';
import StyledWrapper from './Photo.styles';

const Photo = ({ photoData: { url, alt } }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledWrapper>
      <img src={url} alt={alt} onClick={() => setIsActive(true)} />

      {isActive && (
        <div
          className="active-photo-container"
          onClick={() => setIsActive(false)}
        >
          <img src={url} alt={alt} />
        </div>
      )}
    </StyledWrapper>
  );
};

Photo.propTypes = {
  photoData: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Photo;
