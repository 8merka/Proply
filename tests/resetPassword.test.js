import { resetPassword } from '../shared/components/ForgotPasswordModal/resetPassword'; // Подставьте путь к вашему файлу
import toast from 'react-hot-toast';

// Мокирование необходимых зависимостей
jest.mock('react-hot-toast', () => ({
  success: jest.fn(),
  error: jest.fn(),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
  })
);

// Мокирование console.error
console.error = jest.fn();

describe('resetPassword', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should reset password successfully', async () => {
    const userData = { id: 1 };
    const password = 'newPassword';
    const setIsResettingPassword = jest.fn();
    const onClose = jest.fn();

    await resetPassword(userData, password, setIsResettingPassword, onClose);

    expect(global.fetch).toHaveBeenCalledWith(
      'http://localhost:8000/api/PutUser/1',
      expect.objectContaining({
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...userData,
          password,
        }),
      })
    );

    expect(setIsResettingPassword).toHaveBeenCalledWith(false);
    expect(onClose).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(toast.success).toHaveBeenCalledWith('Пароль изменен');
  });

  it('should handle errors', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ error: 'Error message' }),
      })
    );

    await resetPassword({}, '', jest.fn(), jest.fn());

    expect(toast.error).toHaveBeenCalledWith('Error message');
  });

  it('should handle exceptions', async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject('Network error'));

    await resetPassword({}, '', jest.fn(), jest.fn());

    expect(console.error).toHaveBeenCalledWith(
      'Ошибка при отправке запроса:',
      'Network error'
    );
  });
});