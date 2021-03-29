import StyledWrapper from './Tag.styles';
import PropTypes from 'prop-types';

const Tag = ({ content }) => (
  <StyledWrapper className="tag">{content}</StyledWrapper>
);

Tag.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Tag;
