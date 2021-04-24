import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { formatDate } from 'helpers';
import Tag from 'components/atoms/Tag/Tag';
import StyledWrapper from './Article.styles';

const Article = ({ createdAt, title, tags, content }) => (
  <StyledWrapper>
    <time dateTime={createdAt}>{formatDate(createdAt)}</time>
    <h1 className="title">{title}</h1>
    <div className="tags-container">
      {tags.map((text, id) => (
        <Tag key={id}>{text}</Tag>
      ))}
    </div>
    <ReactMarkdown className="content">{content}</ReactMarkdown>
  </StyledWrapper>
);

Article.propTypes = {
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.string.isRequired,
};

export default Article;
