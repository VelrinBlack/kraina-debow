import { render, screen } from 'testUtils';
import * as Apollo from '@apollo/client';
import BlogArticlesList from './BlogArticlesList';
import data from 'data/apiTestData';

jest.spyOn(Apollo, 'useLazyQuery').mockImplementation(() => {
  return [
    jest.fn(),
    {
      loading: false,
      error: undefined,
      data: data.BlogArticlesList,
    },
  ];
});

describe('BlogArticlesList', () => {
  it('Loads and displays articles', () => {
    render(<BlogArticlesList />);

    screen.getByText('Test title 1');
    screen.getByText('Test title 2');
  });
});
