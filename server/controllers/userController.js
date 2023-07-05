const db = require('../models/userModel');
const bcrypt = require('bcrypt');

const UserController = {
  // Create a new user in the Database
  // Their information will be sent in the request body
  // This should send the created user
  async createUser(req, res, next) {
    try {
      console.log('------entering create user controller----');
      console.log('body: ', req.body);
      const { first_name, last_name, password, username, zipcode } = req.body;
      const hashed = await bcrypt.hash(password, 12);
      const query =
        'INSERT INTO users (first_name, last_name, username, password, zipcode) VALUES ($1, $2, $3, $4, $5)';
      const values = [first_name, last_name, username, hashed, zipcode];
      await db.query(query, values);

      // log the sign up
      console.log('New user signup:', {
        first_name,
        last_name,
        username,
        zipcode,
      });
      res.locals.newUser = {
        first_name,
        last_name,
        password,
        username,
        zipcode,
      };
      return next();
    } catch (error) {
      console.error('Error during user signup:', error);
      return next({
        log: 'Express error in createUser Middleware',
        status: 500,
        message: { err: 'An error occurred during sign-up' },
      });
    }
  },  
  // get method for fetching user based off of username
  async userLogin(req, res, next) {
    try {
      console.log('------entering userLogin controller----');
      console.log('body: ', req.body);
      const { username, password } = req.body;
      const query = 
        `SELECT * FROM users WHERE username = '${username}'`; 
      const data = await db.query(query);
      // console.log('data', data);
      res.locals.data = data.rows[0];
      const hashedPass = data.rows[0].password;
      const passOk = await bcrypt.compare(password, hashedPass);
      // console.log(passOk);
      if (passOk) return next();
      else{
        return next({
          log: 'Failed credentials',
          status: 400,
          message: { err: 'Failed matching user credentials' },
        })
      }
    }
    catch(error){
      console.error('Error during user login:', error);
      return next({
        log: 'Express error in userLogin Middleware',
        status: 500,
        message: { err: 'An error occurred during login' },
      });
    }
  }
};


module.exports = UserController;
