const request = require('supertest');
const app = require('../app');

let server; // Declare a server variable

beforeAll(() => {
  server = app.listen(4000); // Start the server on a different port
});

afterAll((done) => {
  server.close(done); // Close the server after tests
});

describe('GET /', () => {
  it('should return Hello World!', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Hello World!');
  });
});
