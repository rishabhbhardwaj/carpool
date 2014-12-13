module.exports = function(app) {
  var express = require('express');
  var pointsRouter = express.Router();

  pointsRouter.get('/', function(req, res) {
    res.send({
      "points": []
    });
  });

  pointsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  pointsRouter.get('/:id', function(req, res) {
    res.send({
      "points": {
        "id": req.params.id
      }
    });
  });

  pointsRouter.put('/:id', function(req, res) {
    res.send({
      "points": {
        "id": req.params.id
      }
    });
  });

  pointsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/points', pointsRouter);
};
