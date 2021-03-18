import StyledWrapper from './NewsArticleCard.styles';
import Tag from 'components/atoms/Tag/Tag';
import PropTypes from 'prop-types';
import Link from 'next/link';

const NewsArticleCard = ({ image, title, tags, id }) => (
  <StyledWrapper>
    <Link href={`/blog/${id}`}>
      <a>
        <img src={image.url} alt={image.alt} />

        <h3 className="title">{title}</h3>

        <div className="tags-container">
          {tags.map((content, id) => (
            <Tag content={content} key={id} />
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
  }),
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  id: PropTypes.string.isRequired,
};

export default NewsArticleCard;
