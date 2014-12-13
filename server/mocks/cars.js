module.exports = function(app) {
  var express = require('express');
  var carsRouter = express.Router();

  var dataSet = [{
        "owner":"ram",
        "id":"car1",
        "passengers":[
                "harishyam"
               ]
      },
      {
        "owner":"shyam",
        "id":"car2",
        "passengers":[
                "hari"
               ]
      }];

  carsRouter.get('/', function(req, res) {
    res.send({
      "cars": dataSet
    });
  });

  carsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  carsRouter.get('/:id', function(req, res) {
    res.send({
      "cars": dataSet.filter(function(car) { return car.id == req.params.id; })[0] || {}
    });
  });

  carsRouter.put('/:id', function(req, res) {
    res.send({
      "cars": {
        "id": req.params.id
      }
    });
  });

  carsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/cars', carsRouter);
};
