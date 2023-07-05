const { Pool } = require('pg');

require ('dotenv').config();

const pool = new Pool({
  connectionString: process.env.PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback)
  }
}

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// // set a schema for the 'users' collectionx
// const userSchema = new Schema({
//   first_name: {
//     type: String,
//     required: true,
//   },
//   last_name: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   username: {
//     type: String,
//     required: true,
//   },
//   zipcode: {
//     type: Number,
//     required: true,
//   },
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;
