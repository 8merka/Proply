import { deleteHouseAndRedirect } from '../pages/InformationDesign/deleteHouseAndRedirect';
import toast from 'react-hot-toast';

jest.mock('react-hot-toast', () => ({
  error: jest.fn(),
  success: jest.fn(),
}));

global.fetch = jest.fn();
console.error = jest.fn();

describe('deleteHouseAndRedirect', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle successful deletion', async () => {
    const navigate = jest.fn();
    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({ success: true }),
    };

    global.fetch.mockImplementationOnce(() => Promise.resolve(mockResponse));

    await deleteHouseAndRedirect('123', navigate);

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:8000/api/DeleteRealeEstateObject/123', expect.objectContaining({
      method: 'DELETE',
    }));
    expect(toast.success).toHaveBeenCalledWith('Дизайн был удален');
    expect(navigate).toHaveBeenCalledWith('/houses');
  });

  it('should handle deletion error', async () => {
    const navigate = jest.fn();
    const mockResponse = {
      ok: false,
      json: () => Promise.resolve({ error: 'Deletion error' }),
    };

    global.fetch.mockImplementationOnce(() => Promise.resolve(mockResponse));

    await deleteHouseAndRedirect('123', navigate);

    expect(toast.error).toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();
  });

  it('should handle exceptions', async () => {
    const navigate = jest.fn();
    const networkError = 'Network error';

    global.fetch.mockImplementationOnce(() => Promise.reject(networkError));

  });
});
