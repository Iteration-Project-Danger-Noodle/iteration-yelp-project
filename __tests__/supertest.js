const request = require('supertest');
const path = require('path');
const assert = require('assert');

const server = 'http://localhost:3000';
const db = require('../server/models/userModel')

async function deleteTestData()  {
    const query = 'DELETE FROM users WHERE username = $1'
    try {
        await db.query(query, ['test1'])
        console.log('deleted test data successful')
    } catch (err) {
        console.log('err in deleting test data')
    } 
}
describe('GET /', () => {
    it('should serve the index.html file', async () => {
      const response = await request(server).get('/');
  
      expect(response.status).toBe(200);
      expect(response.type).toEqual('text/html');
    });
  });
  
describe ('POST /signup', () => {

    afterEach(async () => {
        await deleteTestData();
      });
    
    it ('should return new account', async () => {
        // create test user account to be submitted
        const user = {
        "first_name": "test1",
        "last_name": "test1",
        "password": "test1",
        "username": "test1",
        "zipcode": "12345"
        };
        
    const response = await request(server)
        .post ('/signup')
        .send(user)
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    })
    
    
});

describe ('POST /login', () => {
    
    it ('should login successful', async () => {
        // create test user account to be submitted
        const user = { 
        "username": "test",
        "password": "test"
        };
        
    const response = await request(server)
        .post ('/login')
        .send(user)
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('username');
    expect(response.body).toHaveProperty('first_name');
    expect(response.body).toHaveProperty('last_name');
    expect(response.body).toHaveProperty('password');
    expect(response.body).toHaveProperty('zipcode');
    })
    
    it ('should send error with incorrect password or username', async () => {
        const user = {
            "username": "doesnotexist",
            "password": "doesnotexist"
        }
        const response = await request(server).post('/login').send(user);

    expect(response.status).toBe(500);
    })

});

