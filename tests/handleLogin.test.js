import { handleLogin } from '../pages/LogInPage/handleLogin';
import toast from 'react-hot-toast';

jest.mock('react-hot-toast');

// Mock navigate function
const navigate = jest.fn();

// Mock localStorage
global.localStorage = {
  setItem: jest.fn(),
};

// Mock fetch
global.fetch = jest.fn();

// Mock console.error
console.error = jest.fn();

describe('handleLogin', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should show an error toast when login or password is empty', async () => {
    await handleLogin('', '', navigate);
    expect(toast.error).toHaveBeenCalledWith('Поля не должны быть пустыми');
    expect(fetch).not.toHaveBeenCalled();
    expect(localStorage.setItem).not.toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();
  });

  it('should handle successful login', async () => {
    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({ id: '123' }),
    };
    fetch.mockImplementationOnce(() => Promise.resolve(mockResponse));

    await handleLogin('test', 'test', navigate);

    expect(fetch).toHaveBeenCalledWith('http://localhost:8000/api/login', expect.objectContaining({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: 'test',
        password: 'test',
      }),
    }));
    expect(localStorage.setItem).toHaveBeenCalledWith('authorization', '1');
    expect(localStorage.setItem).toHaveBeenCalledWith('id', '123');
    expect(navigate).toHaveBeenCalledWith('/main');
  });

  it('should handle unsuccessful login', async () => {
    const mockError = { error: 'Login error' };
    const mockResponse = {
      ok: false,
      json: () => Promise.resolve(mockError),
    };
    fetch.mockImplementationOnce(() => Promise.resolve(mockResponse));

    await handleLogin('test', 'test', navigate);

    expect(toast.error).toHaveBeenCalledWith('Login error');
    expect(localStorage.setItem).not.toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();
  });

  it('should handle fetch error', async () => {
    const networkError = 'Network error';
    fetch.mockImplementationOnce(() => Promise.reject(networkError));

    await handleLogin('test', 'test', navigate);

    expect(console.error).toHaveBeenCalledWith('Ошибка при отправке запроса:', networkError);
    expect(localStorage.setItem).not.toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();
  });
});
