module.exports = function(app) {
  var express = require('express');
  var carsRouter = express.Router();

  carsRouter.get('/', function(req, res) {
    res.send({
      "cars": [
              
			{
				"owner":"ram",
				"car":"car1",
				"passengers":[
								"harishyam"
							 ]
			},
			{
				"owner":"shyam",
				"car":"car2",
				"passengers":[
								"hari"
							 ]
			}
        ]
    });
  });

  carsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  carsRouter.get('/:id', function(req, res) {
    res.send({
      "cars": {
        "id": req.params.id
      }
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
