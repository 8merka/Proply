import { handleTypeChange } from '../pages/AddHousePage/handleTypeChange';

describe('handleTypeChange', () => {
  it('should set the type correctly', () => {
    const setType = jest.fn();
    const mockEvent = {
      target: {
        value: '2',
      },
    };

    handleTypeChange(mockEvent, setType);

    expect(setType).toHaveBeenCalledTimes(1);
    expect(setType).toHaveBeenCalledWith('2');
  });
});
