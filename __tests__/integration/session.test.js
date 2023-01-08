const { User } = require('../../src/app/models');

describe('Authentication', () => {
  it('should receive jwt token when authenticated with valid credentials', async () => {
    const user = await User.create({
      name: 'rafael',
      email: 'rafael@gmail.com',
      password_hash: '123123'
    });
    console.log(user);

    expect(user.email).toBe('rafael@gmail.com');
  })
})