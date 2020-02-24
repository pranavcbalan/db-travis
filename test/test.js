const {expect} = require('chai');

//desribe group of tests done
describe('Describe Test Scenarios', function () {

  let knexMysql;
  let knexPg;

  before(function (done) {
    //start appln
    knexMysql = require('knex')({
      client: 'mysql',
      connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'chinook'
      }
    });
    //start appln
    knexPg = require('knex')({
      client: 'pg',
      connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '',
        database: 'chinook'
      }
    });

    done();
  });

  it('Describe test - mysql', function (done) {
    //testcase



    knexMysql('Album').select('*').then(res=>{

      expect(res.length).to.not.equal(0)
      done();
    }).catch(done);
  });

  it('Describe test - pg',  function (done) {
    //testcase

    knexPg('Album').select('*').then(res=>{

      expect(res.length).to.not.equal(0)
      done();
    }).catch(done);

  });

});