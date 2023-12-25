// handlePasswordRecovery.test.js
import { handlePasswordRecovery } from '../shared/components/ForgotPasswordModal/handlePasswordRecovery'; 
import toast from 'react-hot-toast';

jest.mock('react-hot-toast', () => ({
  error: jest.fn(),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
  })
);

console.error = jest.fn();

describe('handlePasswordRecovery', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle empty email', async () => {
    const email = '';
    const isEmailValid = true;
    const setUserData = jest.fn();
    const setIsResettingPassword = jest.fn();

    await handlePasswordRecovery(email, isEmailValid, setUserData, setIsResettingPassword);

    expect(toast.error).toHaveBeenCalledWith('Поле не должны быть пустыми');
  });

  it('should handle invalid email format', async () => {
    const email = 'invalidEmail';
    const isEmailValid = false;
    const setUserData = jest.fn();
    const setIsResettingPassword = jest.fn();

    await handlePasswordRecovery(email, isEmailValid, setUserData, setIsResettingPassword);

    expect(toast.error).toHaveBeenCalledWith('Неверный формат почты');
  });

  it('should handle successful password recovery', async () => {
    const email = 'validEmail@example.com';
    const isEmailValid = true;
    const setUserData = jest.fn();
    const setIsResettingPassword = jest.fn();

    await handlePasswordRecovery(email, isEmailValid, setUserData, setIsResettingPassword);

    expect(global.fetch).toHaveBeenCalledWith(
      'http://localhost:8000/api/GetUserByEmail',
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      })
    );

    expect(setUserData).toHaveBeenCalled();
    expect(setIsResettingPassword).toHaveBeenCalledWith(true);
  });

  it('should handle errors', async () => {
    const errorData = { error: 'Error message' };
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve(errorData),
      })
    );

    await handlePasswordRecovery('validEmail@example.com', true, jest.fn(), jest.fn());

    expect(toast.error).toHaveBeenCalledWith(errorData.error);
  });

  it('should handle exceptions', async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject('Network error'));

    await handlePasswordRecovery('validEmail@example.com', true, jest.fn(), jest.fn());

    expect(console.error).toHaveBeenCalledWith(
      'Ошибка при отправке запроса:',
      'Network error'
    );
  });
});
