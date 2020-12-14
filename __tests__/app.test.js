const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('creates response from GET /', async() => {
    const response = await request(app)
      .get('/');

    expect(response.text).toEqual('hi');
  });

  it('creates response from POST /echo', async() => {

    const text = 'plain text';
    const response = await request(app)
      .post('/echo')
      .send(text);

    expect(response.text).toEqual(text);
    expect(response.status).toEqual(200);
  });

  it('creates response from GET /red', async() => {
    const response = await request(app)
      .get('/red');

    expect(response.text).toEqual('<h1>red</h1>');
  });

  it('creates response from GET /green', async() => {
    const response = await request(app)
      .get('/green');

    expect(response.text).toEqual('<h1>green</h1>');
  });

  it('creates response from GET /blue', async() => {
    const response = await request(app)
      .get('/blue');

    expect(response.text).toEqual('<h1>blue</h1>');
  });

});
