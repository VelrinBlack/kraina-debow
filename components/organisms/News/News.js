import { gql, useQuery } from '@apollo/client';
import NewsArticleCard from 'components/molecules/NewsArticleCard/NewsArticleCard';
import Loader from 'components/atoms/Loader/Loader';
import StyledWrapper from './News.styles';

const query = gql`
  {
    allArticles(first: 3) {
      id
      image {
        url
        alt
      }
      title
      tags
    }
  }
`;

const News = () => {
  const { loading, error, data } = useQuery(query);

  return (
    <StyledWrapper>
      <h2 className="heading">
        Najnowsze wpisy
        <div className="underline"></div>
      </h2>

      {data && (
        <div className="cards-container">
          {data?.allArticles.map(({ image, title, tags, id }) => (
            <NewsArticleCard
              image={image}
              title={title}
              tags={tags}
              id={id}
              key={id}
            />
          ))}
        </div>
      )}

      {loading && <Loader className="loader" />}

      {error && <p className="error">Ups! Coś poszło nie tak</p>}
    </StyledWrapper>
  );
};

export default News;
