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

  it('Describe test - mysql', async function (done) {
    //testcase

    console.log(JSON.stringify(await knexMysql.raw('show tables'), 0, 2))


    let res = await knexMysql('Album').select('*');

    expect(res.length).to.not.equal(0)
    done();
  });

  it('Describe test - pg', async function (done) {
    //testcase

    let res = await knexPg('Album').select('*');

    expect(res.length).to.not.equal(0)
    done();
  });

});