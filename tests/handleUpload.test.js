import { act } from 'react-dom/test-utils';
import { handleUpload } from '../pages/AddHousePage/handleUpload';
import toast from 'react-hot-toast';
import fetchConsultant from '../pages/AddHousePage/fetchConsultant';

jest.mock('react-hot-toast', () => ({
  error: jest.fn(),
  success: jest.fn(),
}));

jest.mock('../pages/AddHousePage/fetchConsultant', () => ({
  __esModule: true,
  default: jest.fn(),
}));

global.fetch = jest.fn();
global.localStorage = {
  getItem: jest.fn(),
};

describe('handleUpload', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle empty fields', async () => {
    const navigate = jest.fn();

    await act(async () => {
      await handleUpload({
        name: '',
        price: '',
        type_id: '',
        description: '',
        addres: '',
        bathrooms_number: '',
        car_space: '',
        bedrooms_number: ''
      }, navigate);
    });

    expect(toast.error).toHaveBeenCalledWith('Поля не должны быть пустыми');
  });

  it('should handle successful upload', async () => {
    const mockState = {
      name: 'Test House',
      price: '100000',
      type_id: '2',
      description: 'A beautiful house',
      addres: '123 Test Street',
      bathrooms_number: '2',
      car_space: '1',
      bedrooms_number: '3',
    };

    fetchConsultant.mockResolvedValue('1');
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Success' }),
    });

    const navigate = jest.fn();

    await act(async () => {
      await handleUpload(mockState, navigate);
    });

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(toast.success).toHaveBeenCalledWith('данные успешно добавились', 'Success');
    expect(navigate).toHaveBeenCalledWith('/houses');
  });

  it('should handle upload error', async () => {
    const mockState = {
      name: 'Test House',
      price: '100000',
      type_id: '2',
      description: 'A beautiful house',
      addres: '123 Test Street',
      bathrooms_number: '2',
      car_space: '1',
      bedrooms_number: '3',
    };

    fetchConsultant.mockResolvedValue('1');
    global.fetch.mockRejectedValueOnce('Upload error');

    const navigate = jest.fn();

    await act(async () => {
      await handleUpload(mockState, navigate);
    });

  });
});
