import { fetchConsultant } from '../pages/AddHousePage/fetchConsultant';

global.fetch = jest.fn();

describe('fetchConsultant', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch consultants and return a random consultant id', async () => {
    const mockConsultants = [
      { id: '1', name: 'Consultant 1' },
      { id: '2', name: 'Consultant 2' },
      { id: '3', name: 'Consultant 3' },
    ];

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockConsultants,
    });

    const consultantId = await fetchConsultant();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:8000/api/GetAllConsultant');
    expect(mockConsultants.map(c => c.id)).toContain(consultantId);
  });

  it('should handle fetch error', async () => {
    const error = jest.spyOn(console, 'error');
    error.mockImplementation(() => {});

    global.fetch.mockRejectedValueOnce('Fetch error');

    await fetchConsultant();

    error.mockRestore();
  });
});
