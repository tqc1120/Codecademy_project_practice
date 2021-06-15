console.log = () => {};
const rewire = require('rewire');
const expect = require('chai').expect;
const request = require('supertest');

describe('', function() {
  it('', function(done) {
    process.env.PORT = 8000;
    const appModule = rewire('../app.js');
    const app = appModule.__get__('app');
    const animals = appModule.__get__('animals');
    const invalidAnimal = {name: 'test'};
    const validAnimal = {name: 'testGood', emoji: 'test'};
    let originalanimals;
    request(app)
    .post('/animals')
    .query(validAnimal)
    .then((response) => {
      const lastCreated = animals[animals.length - 1];
      expect(response.body, 'Did you send back a single expression object instead of the whole array?').to.not.be.an.instanceof(Array);
      expect(response.status, 'Did you send a 201 response from the POST /animals route?').to.equal(201);
      let validPlusId = Object.assign(validAnimal, {id: response.body.id});
      expect(response.body, 'Did you send back the new expression?').to.deep.equal(validPlusId);
      const validFromDb = animals.find((element) => {
        return element.id === Number(response.body.id);
      });
      expect(response.body, 'Did you add the object created by `createElement` to the `animals` array?').to.deep.equal(validFromDb);
    })
    .then(() => {
      originalAnimals = Array.from(animals);
      return request(app)
      .post('/animals')
      .send(invalidAnimal);
    })
    .then((response) => {
      expect(response.status, 'Your POST route should send back a 400 response on request that causes `createElement` to return `false`.').to.equal(400);
      expect(animals, 'A POST /animals should not alter update any animals on a request with invalid input.').to.deep.equal(originalAnimals);
      done();
    })
    .catch(done);
  });
});
