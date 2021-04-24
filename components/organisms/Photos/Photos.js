import { useEffect, useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import Photo from 'components/molecules/Photo/Photo';
import Loader from 'components/atoms/Loader/Loader';
import StyledWrapper from './Photos.styles';

const query = gql`
  query Photos($photosLength: IntType) {
    allPhotos(first: 3, skip: $photosLength) {
      photo {
        id
        url
        alt
      }
    }
  }
`;

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  const [fetchPhotos, { loading, error, data }] = useLazyQuery(query, {
    variables: { photosLength: 0 },
  });

  useEffect(() => {
    fetchPhotos();
  }, []);

  useEffect(() => {
    data &&
      setPhotos((prevPhotos) => {
        const updatedPhotos = [...prevPhotos, ...data.allPhotos];

        fetchPhotos({
          variables: { photosLength: updatedPhotos.length },
        });

        return updatedPhotos;
      });
  }, [data]);

  return (
    <StyledWrapper>
      <div className="container">
        {photos.map(({ photo }, id) => (
          <Photo photoData={photo} key={id} />
        ))}
      </div>

      {error && <p className="error">Ups! Coś poszło nie tak</p>}
      {loading && <Loader />}
    </StyledWrapper>
  );
};

export default Photos;
