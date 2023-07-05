const db = require('../models/userModel');

const UserController = {
  // Create a new user in the Database
  // Their information will be sent in the request body
  // This should send the created user
  async createUser(req, res, next) {

    // favorites, users, userfavorites
    // const createQuery = `INSERT INTO users (first_name, last_name, username, password, zipcode) VALUES (${first_name},${last_name},${username},${password},${zipcode})`
    console.log('------entering create user controller----');
    console.log('body: ', req.body);
    try {
      const { first_name, last_name, password, username, zipcode } = req.body;
      const createQuery = 'INSERT INTO users(first_name, last_name, username, password, zipcode) VALUES ($1, $2, $3, $4, $5) RETURNING *';
      const values = [first_name, last_name, username, password, zipcode];
      await db.query(createQuery, values)
      res.locals.newUser = req.body;
      return next()
    }
    catch (error) {
      return next({
        log: 'An error occurred in UserController.createUser',
        status: 500,
        message: { err: 'An error occurred in UserController.createUser' },
      })
    }
  },
}
module.exports = UserController;
