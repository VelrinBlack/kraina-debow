import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { formatDate } from 'helpers';
import Tag from 'components/atoms/Tag/Tag';
import StyledWrapper from './BlogArticleCard.styles';

const BlogArticleCard = ({ image, title, tags, createdAt, id }) => (
  <Link href={`/blog/${id}`}>
    <a>
      <StyledWrapper>
        <div className="image-container">
          <Image src={image.url} alt={image.alt} layout="fill" />
        </div>

        <div className="container">
          <time dateTime={createdAt} className="date-created">
            {formatDate(createdAt)}
          </time>
          <h2 className="title">{title}</h2>
          <div className="tags-container">
            {tags.map((text, id) => (
              <Tag key={id}>{text}</Tag>
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
  id: PropTypes.string.isRequired,
};

export default BlogArticleCard;
