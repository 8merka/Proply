import { fetchHouseInfo } from '../pages/InformationDesign/fetchHouseInfo';

global.fetch = jest.fn();
console.error = jest.fn();

describe('fetchHouseInfo', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch house info successfully', async () => {
    const setHouseInfo = jest.fn();
    const setTypeData = jest.fn();
    const setSellerData = jest.fn();
    const setConsultantData = jest.fn();
    const setUserData = jest.fn();
    const id = '123';

    const mockHouseResponse = {
      ok: true,
      json: () => Promise.resolve({ type_id: '789', consultant_id: '012', seller_id: '345' }),
    };
    const mockTypeResponse = {
      ok: true,
      json: () => Promise.resolve({ type: 'Type Data' }),
    };
    const mockConsultantResponse = {
      ok: true,
      json: () => Promise.resolve({ consultant: 'Consultant Data' }),
    };
    const mockSellerResponse = {
      ok: true,
      json: () => Promise.resolve({ seller: 'Seller Data' }),
    };

    global.fetch
      .mockImplementationOnce(() => Promise.resolve(mockHouseResponse))
      .mockImplementationOnce(() => Promise.resolve(mockTypeResponse))
      .mockImplementationOnce(() => Promise.resolve(mockConsultantResponse))
      .mockImplementationOnce(() => Promise.resolve(mockSellerResponse));

    await fetchHouseInfo(id, setHouseInfo, setTypeData, setSellerData, setConsultantData, setUserData);

    expect(global.fetch).toHaveBeenCalledTimes(4);
    expect(setHouseInfo).toHaveBeenCalledWith({ type_id: '789', consultant_id: '012', seller_id: '345' });
    expect(setTypeData).toHaveBeenCalledWith({ type: 'Type Data' });
    expect(setConsultantData).toHaveBeenCalledWith({ consultant: 'Consultant Data' });
    expect(setSellerData).toHaveBeenCalledWith({ seller: 'Seller Data' });
  });

  it('should handle exceptions', async () => {
    const setHouseInfo = jest.fn();
    const setTypeData = jest.fn();
    const setSellerData = jest.fn();
    const setConsultantData = jest.fn();
    const setUserData = jest.fn();
    const id = '123';

    const networkError = 'Network error';

    global.fetch.mockImplementationOnce(() => Promise.reject(networkError));

    await fetchHouseInfo(id, setHouseInfo, setTypeData, setSellerData, setConsultantData, setUserData);

    expect(console.error).toHaveBeenCalledWith('Ошибка:', networkError);
  });
});
