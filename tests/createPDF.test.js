import { createPdf } from '../pages/InformationDesign/createPdf';

global.fetch = jest.fn();

console.error = jest.fn();

describe('createPdf', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle successful PDF creation', async () => {
    const typeData = { type: 'Type1' };
    const houseInfo = { 
      price: '1000', 
      car_space: '1', 
      bedrooms_number: '2', 
      bathrooms_number: '1', 
      addres: 'Address1' 
    };

    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({ success: true }),
    };

    global.fetch.mockImplementationOnce(() => Promise.resolve(mockResponse));

    await createPdf(typeData, houseInfo);

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:8000/create-pdf', expect.objectContaining({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [
          `Type: ${typeData.type}`,
          `Price: ${houseInfo.price}`,
          `Car: ${houseInfo.car_space}`,
          `Bedrooms: ${houseInfo.bedrooms_number}`,
          `Bathrooms: ${houseInfo.bathrooms_number}`,
          `Addres: ${houseInfo.addres}`
        ]
      }),
    }));
  });
});
