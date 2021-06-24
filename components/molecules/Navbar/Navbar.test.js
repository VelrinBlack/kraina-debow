import { render, screen, fireEvent } from 'testUtils';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('Centers navbar after 200px scroll', () => {
    render(<Navbar isHomePage={false} />);

    fireEvent.scroll(window, { target: { scrollY: 201 } });

    const navbar = screen.getByTestId('navbar');
    expect(navbar).toHaveClass('centered');
  });
});
