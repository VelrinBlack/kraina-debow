import StyledWrapper from './BlogArticlesList.styles';
import { useEffect, useState } from 'react';
import BlogArticleCard from 'components/molecules/BlogArticleCard/BlogArticleCard';
import { gql, useLazyQuery } from '@apollo/client';
import Loader from 'components/atoms/Loader/Loader';

const BlogArticlesList = () => {
  const [articles, setArticles] = useState([]);

  const [fetchArticles, { loading, error, data }] = useLazyQuery(
    gql`
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
    `,
    {
      variables: { articlesLength: 0 },
    }
  );

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
      {articles.map((articleData) => (
        <BlogArticleCard {...articleData} key={articleData.id} />
      ))}
      {error && <p className="error">Ups! Coś poszło nie tak</p>}
      {loading && <Loader />}
    </StyledWrapper>
  );
};

export default BlogArticlesList;
