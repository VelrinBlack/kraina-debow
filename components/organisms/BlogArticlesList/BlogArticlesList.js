import { useEffect, useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import Loader from 'components/atoms/Loader/Loader';
import BlogArticleCard from 'components/molecules/BlogArticleCard/BlogArticleCard';
import StyledWrapper from './BlogArticlesList.styles';

export const query = gql`
  query Articles($articlesLength: IntType) {
    allArticles(first: 3, skip: $articlesLength) {
      id
      image {
        url
        alt
      }
      title
      tags
      createdAt
    }
  }
`;

const BlogArticlesList = () => {
  const [articles, setArticles] = useState([]);

  const [fetchArticles, { loading, error, data }] = useLazyQuery(query, {
    variables: { articlesLength: 0 },
  });

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    data &&
      setArticles((prevArticles) => {
        const updatedArticles = [...prevArticles, ...data.allArticles];

        fetchArticles({
          variables: { articlesLength: updatedArticles.length },
        });

        return updatedArticles;
      });
  }, [data]);

  return (
    <StyledWrapper>
      {articles.map((article) => (
        <BlogArticleCard {...article} key={article.id} />
      ))}
      {error && <p className="error">Ups! Coś poszło nie tak</p>}
      {loading && <Loader />}
    </StyledWrapper>
  );
};

export default BlogArticlesList;
