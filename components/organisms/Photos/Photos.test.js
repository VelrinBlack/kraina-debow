import { render, screen } from 'testUtils';
import * as Apollo from '@apollo/client';
import Photos from './Photos';
import data from 'data/apiTestData';

jest.spyOn(Apollo, 'useLazyQuery').mockImplementation(() => {
  return [
    jest.fn(),
    {
      loading: false,
      error: undefined,
      data: data.Photos,
    },
  ];
});

describe('Photos', () => {
  it('Loads and displays photos', () => {
    render(<Photos />);

    screen.getByAltText('Test alt 1');
    screen.getByAltText('Test alt 2');
  });
});
