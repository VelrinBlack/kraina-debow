import StyledWrapper from './BlogArticleCard.styles';
import PropTypes from 'prop-types';
import Tag from 'components/atoms/Tag/Tag';
import { formatDate } from 'helpers';
import Link from 'next/link';

const BlogArticleCard = ({ image, title, tags, createdAt, id }) => (
  <Link href={`/blog/${id}`}>
    <a>
      <StyledWrapper>
        <img src={image.url} alt={image.alt} />

        <div className="container">
          <time dateTime={createdAt}>{formatDate(createdAt)}</time>
          <h2 className="title">{title}</h2>
          <div className="tags-container">
            {tags.map((content, id) => (
              <Tag content={content} key={id} />
            ))}
          </div>
        </div>
      </StyledWrapper>
    </a>
  </Link>
);

BlogArticleCard.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default BlogArticleCard;
