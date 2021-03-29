import Tag from 'components/atoms/Tag/Tag';
import StyledWrapper from './Article.styles';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const Article = ({ content, createdAt, tags, title }) => (
  <StyledWrapper>
    <time>12.03.2021</time>
    <h1 className="title">{title}</h1>
    <div className="tags-container">
      {tags.map((tag, id) => (
        <Tag content={tag} key={id} />
      ))}
    </div>
    <ReactMarkdown className="content">{content}</ReactMarkdown>
  </StyledWrapper>
);

Article.propTypes = {
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Article;
