import { gql } from '@apollo/client';
import client from 'apolloClient';
import Page from 'components/templates/Page/Page';
import Article from 'components/organisms/Article/Article';
import PropTypes from 'prop-types';
import Comments from 'components/organisms/Comments/Comments';

const ArticlePage = ({ articleData }) => (
  <Page headerImage={articleData.image.url}>
    <Article {...articleData} />
    <Comments title={articleData.title} />
  </Page>
);

ArticlePage.propTypes = {
  articleData: PropTypes.shape({
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export const getServerSideProps = async (context) => {
  const res = await client
    .query({
      query: gql`
      {
        article(filter: { id: { eq: ${context.params.id} } }) {
          image {
            url
            alt
          }
          createdAt
          title
          tags
          content
        }
      }
    `,
    })
    .catch(() => {});

  if (!res?.data?.article) {
    context.res.setHeader('Location', '/404');
    context.res.statusCode = 302;
    context.res.end();
  }

  return {
    props: {
      articleData: res.data.article,
    },
  };
};

export default ArticlePage;
