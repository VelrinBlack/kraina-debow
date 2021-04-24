import Link from 'next/link';
import PropTypes from 'prop-types';
import Tag from 'components/atoms/Tag/Tag';
import StyledWrapper from './NewsArticleCard.styles';

const NewsArticleCard = ({ image, title, tags, id }) => (
  <StyledWrapper>
    <Link href={`/blog/${id}`}>
      <a>
        <img src={image.url} alt={image.alt} />
        <h3 className="title">{title}</h3>
        <div className="tags-container">
          {tags.map((text, id) => (
            <Tag key={id}>{text}</Tag>
          ))}
        </div>
      </a>
    </Link>
  </StyledWrapper>
);

NewsArticleCard.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  id: PropTypes.string.isRequired,
};

export default NewsArticleCard;
