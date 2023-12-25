import { handleRegClick } from '../pages/LogInPage/handleRegClick'; 

describe('handleRegClick', () => {
  it('should navigate to /reg', async () => {
    const navigate = jest.fn();

    await handleRegClick(navigate);

    expect(navigate).toHaveBeenCalledWith('/reg');
  });
});
