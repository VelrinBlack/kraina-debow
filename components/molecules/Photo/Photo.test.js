import { render, screen, fireEvent } from 'testUtils';
import Photo from './Photo';

const photoData = {
  url: '-',
  alt: '-',
};

describe('Photo', () => {
  it('Opens and closes actual photo', () => {
    render(<Photo photoData={photoData} />);

    const previewPhoto = screen.getByTestId('preview photo');
    fireEvent.click(previewPhoto);

    const actualPhoto = screen.getByTestId('actual photo');
    fireEvent.click(actualPhoto);

    expect(actualPhoto).not.toBeInTheDocument();
  });
});
