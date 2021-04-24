import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { DiscussionEmbed } from 'disqus-react';
import unidecode from 'unidecode';
import PropTypes from 'prop-types';
import absoluteUrl from 'next-absolute-url';
import StyledWrapper from './Comments.styles';

const Comments = ({ title }) => {
  const router = useRouter();
  const [url, setUrl] = useState('');

  useEffect(() => {
    const { origin } = absoluteUrl();
    setUrl(`${origin}/blog/${router.query.id}`);
  }, []);

  return (
    <StyledWrapper>
      <DiscussionEmbed
        shortname="w-krainie-debow"
        config={{
          url,
          identifier: unidecode(title),
          title: unidecode(title),
          language: 'pl',
        }}
      />
    </StyledWrapper>
  );
};

Comments.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Comments;
