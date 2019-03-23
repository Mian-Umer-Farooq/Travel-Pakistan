var cities = require('./model-cities')
module.exports = function (server){


    server.get('api/lahore', (req, res) => {
    cities.
      find({
        Name: { $in: ['lahore fort']}
      })
  
    res.json(customers);
  });
}


