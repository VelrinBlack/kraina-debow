import { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import StyledWrapper from './Photo.styles';

const Photo = ({ photoData: { url, alt } }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledWrapper>
      <Image
        src={url}
        alt={alt}
        layout="fill"
        onClick={() => setIsActive(true)}
      />

      {isActive && (
        <div className="active-photo-shadow" onClick={() => setIsActive(false)}>
          <div className="active-photo-container">
            <Image src={url} alt={alt} layout="fill" />
          </div>
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
