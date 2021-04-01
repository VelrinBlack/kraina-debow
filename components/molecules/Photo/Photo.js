import { useState } from 'react';
import StyledWrapper from './Photo.styles';
import PropTypes from 'prop-types';

const Photo = ({ photoData: { url, alt } }) => {
  const [active, setActive] = useState(false);

  return (
    <StyledWrapper>
      <img src={url} alt={alt} onClick={() => setActive(true)} />

      {active && (
        <div className="active-container" onClick={() => setActive(false)}>
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
