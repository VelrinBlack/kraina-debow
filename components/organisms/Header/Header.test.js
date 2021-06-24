import { render, cleanup, screen } from 'testUtils';
import Header from './Header';

afterEach(cleanup);

describe('Header', () => {
  it('Displays hamburger menu on small screens', () => {
    window.innerWidth = 1280;
    render(<Header backgroundImage="-" title="test" description="test" />);

    screen.getByTestId('hamburger nav');
  });

  it('Displays navbar on big screens', () => {
    window.innerWidth = 1281;
    render(<Header backgroundImage="-" title="test" description="test" />);

    screen.getByTestId('navbar');
  });
});
