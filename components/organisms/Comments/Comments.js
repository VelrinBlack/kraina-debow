import StyledWrapper from './Comments.styles';
import { DiscussionEmbed } from 'disqus-react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import unidecode from 'unidecode';
import absoluteUrl from 'next-absolute-url';
import { useEffect, useState } from 'react';

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
