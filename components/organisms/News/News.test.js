import { render, screen } from 'testUtils';
import * as Apollo from '@apollo/client';
import News from './News';
import data from 'data/apiTestData';

jest.spyOn(Apollo, 'useQuery').mockImplementation(() => {
  return {
    loading: false,
    error: undefined,
    data: data.News,
  };
});

describe('News', () => {
  it('Loads and displays news', () => {
    render(<News />);

    screen.getByText('Test title 1');
    screen.getByText('Test title 2');
    screen.getByText('Test title 3');
  });
});
