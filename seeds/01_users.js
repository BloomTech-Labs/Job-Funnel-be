const bcrypt = require('bcryptjs');

// exports.seed = function(knex) {
//   return knex('users').insert([
//     {farmID: 1, isFarmer: true, email: 'bestfarmer@farm.com', username: 'bestfarmer', password: bcrypt.hashSync('pass', 12), name: 'jim best', addressStreet: '443 48th ST', addressCity: 'Seattle', addressState: 'WA', zipCode: 54321},
//     {farmID: 3, isFarmer: true, email: 'farmerfred@gmail.com', username: 'farmerfred', password: bcrypt.hashSync('pass', 12), name: 'farmer fred', zipCode: 22222},
//     {farmID: 2, isFarmer: true, email: 'worstfarmer@farm.com', username: 'worstfarmer', password: bcrypt.hashSync('pass', 12), name: 'jim worst', zipCode: 18231},
//     {isFarmer: false, email: 'justaguy@gmail.com', username: 'justaguy', password: bcrypt.hashSync('pass', 12), name: 'just aguy', zipCode: 11111},
//   ], 'id');
// };