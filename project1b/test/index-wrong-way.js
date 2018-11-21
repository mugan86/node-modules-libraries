const expect = require('chai').expect;

const getUser = require('../index').getUser;

const selectUser = 'mugan86';

// Disable with xdescribe
xdescribe('Test without use Nock - Wrong way!!', () => {
  
  it('Get a user by username', () => {
    return getUser(selectUser)
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');
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

  it('', ()=> {
    return getUser('octocat')
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');

        //Test result of name, company and location for the response
        expect(response.name).to.equal('The Octocat')
        expect(response.company).to.equal('GitHub')
        expect(response.location).to.equal('San Francisco')
      });
  })
}); 

