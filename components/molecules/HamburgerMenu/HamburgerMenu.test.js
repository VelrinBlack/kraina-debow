import { render, screen, fireEvent } from 'testUtils';
import HamburgerMenu from './HamburgerMenu';

describe('HamburgerMenu', () => {
  it('Opens and closes menu', () => {
    render(<HamburgerMenu />);

    const openingButton = screen.getByLabelText('open navigation');
    const closingButton = screen.getByLabelText('close navigation');
    const navigation = screen.getByTestId('hamburger nav');

    fireEvent.click(openingButton);
    expect(navigation).toHaveClass('is-open');

    fireEvent.click(closingButton);
    expect(navigation).not.toHaveClass('is-open');
  });
});
