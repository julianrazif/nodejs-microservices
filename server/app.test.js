const supertest = require('supertest')
const app = require('./app')

const agent = supertest(app)

describe('Test App functionality', () => {
  test('Should success when request page', async (done) => {
    try {
      const res = await agent.get('/').expect('Content-Type', /json/)

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('message', 'this is server 01')

      done()
    } catch (err) {
      done(err)
    }
  })
})
