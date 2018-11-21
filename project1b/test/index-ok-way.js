const expect = require('chai').expect;
const nock = require('nock');

const getUser = require('../index').getUser;

const response = require('./response');

const selectUser = 'mugan86';

describe('Test using Nock - Good way!!', () => {
  /**
   * Con Nock, puede especificar el punto final HTTP a simular, así como la respuesta esperada de 
   * la solicitud en formato JSON. La idea detrás de esto es que no estamos probando la API de Github,
   * estamos probando nuestra propia aplicación. Por esta razón, asumimos que la respuesta de la API de Github es predecible.
   * Para simular la solicitud, importaremos nock en nuestra prueba y agregaremos la solicitud y la 
   * respuesta esperada en el método beforeEach.
   */
  beforeEach(() => {
    nock('https://api.github.com')
      .get('/users/mugan86')
      .reply(200, response);
  });

  it('Get a user by username', () => {
    return getUser(selectUser)
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');
        console.log(response);
        //Test result of name, company, location and followers greather than 0 for the response
        expect(response.name).to.equal('Anartz Mugika Ledo');
        expect(response.company).to.equal('@servirace @CrazyWords ');
        expect(response.location).to.equal('Soraluze (Basque Country) (EU)');
        expect(response.followers).to.greaterThan(0);
        expect(typeof response.followers).to.equal('number');
        expect(response.login).to.equal(selectUser);
        expect(typeof response.id).to.equal('number');
      });
  });
}); 

