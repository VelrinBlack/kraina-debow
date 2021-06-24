import { render, screen } from 'testUtils';
import router from 'next/router';
import NavigationLink from './NavigationLink';

jest.mock('next/router', () => require('next-router-mock'));

describe('NavigationLink', () => {
  it("Bolds link when it's active", () => {
    router.push('/test');
    render(<NavigationLink text="Test" destination="/test" />);

    const element = screen.getByText('Test');
    const expectedStyle = 'font-weight: 700';
    expect(element).toHaveStyle(expectedStyle);
  });
});
