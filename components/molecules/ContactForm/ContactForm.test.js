import { render, screen, fireEvent, waitFor, cleanup } from 'testUtils';
import ContactForm from './ContactForm';

beforeAll(() => {
  const xhrMockClass = () => ({
    open: jest.fn(),
    send: jest.fn(),
    setRequestHeader: jest.fn(),
  });

  window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
});

beforeEach(() => {
  render(<ContactForm />);
});

afterEach(cleanup);

describe('ContactForm', () => {
  it('Displays error if any field is empty', async () => {
    const submitButton = screen.getByText('Wyślij');
    fireEvent.click(submitButton);

    await waitFor(() => {
      screen.getByText('Wypełnij proszę wszystkie pola');
    });
  });

  it('Displays error if email is invalid', async () => {
    const emailInput = screen.getByPlaceholderText('Email');
    const submitButton = screen.getByText('Wyślij');
    fireEvent.change(emailInput, { target: { value: 'invalid email' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      screen.getByText('Adres email jest nieprawidłowy');
    });
  });

  it('Displays popup if message is sent', async () => {
    const nameInput = screen.getByPlaceholderText('Imię');
    const emailInput = screen.getByPlaceholderText('Email');
    const messageInput = screen.getByPlaceholderText('Wiadomość');
    const submitButton = screen.getByText('Wyślij');

    fireEvent.change(nameInput, { target: { value: 'Test name' } });
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      screen.getByText('Wiadomość została wysłana 😀');
    });
  });

  it('Resets all fields if message is sent', async () => {
    const nameInput = screen.getByPlaceholderText('Imię');
    const emailInput = screen.getByPlaceholderText('Email');
    const messageInput = screen.getByPlaceholderText('Wiadomość');
    const submitButton = screen.getByText('Wyślij');

    fireEvent.change(nameInput, { target: { value: 'Test name' } });
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(nameInput).toHaveValue('');
      expect(emailInput).toHaveValue('');
      expect(messageInput).toHaveValue('');
    });
  });

  it('Closes popup after click', async () => {
    const nameInput = screen.getByPlaceholderText('Imię');
    const emailInput = screen.getByPlaceholderText('Email');
    const messageInput = screen.getByPlaceholderText('Wiadomość');
    const submitButton = screen.getByText('Wyślij');

    fireEvent.change(nameInput, { target: { value: 'Test name' } });
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    fireEvent.click(submitButton);

    const popup = await waitFor(() =>
      screen.getByText('Wiadomość została wysłana 😀')
    );

    fireEvent.click(popup);

    expect(popup).not.toBeInTheDocument();
  });
});
