const sum = require('./sum')

describe('test', () => {
  test('Should return 3', (done) => {
    expect(sum(1, 2)).toBe(3)
    done()
  })
})
