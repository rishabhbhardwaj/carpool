module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    res.send({
      "users": [
                {
            "id": "ram",
            "src": "1",
            "dest": "20",
            "email": "ram@abc.com",
            "car": "car1"
        },
        {
            "id": "shyam",
            "src": "3",
            "dest": "16",
            "email": "shyam@abc.com",
            "car": "car2"
        },
        {
            "id": "hari",
            "src": "5",
            "dest": "10",
            "email": "hari@abc.com",
            "car": "car2"
        },
        {
            "id": "harishyam",
            "src": "2",
            "dest": "11",
            "email": "hari@abc.com",
            "car": "car1"
        }
        ]
    });
  });

  usersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      "users": {
        "id": req.params.id
      }
    });
  });

  usersRouter.put('/:id', function(req, res) {
    res.send({
      "users": {
        "id": req.params.id
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/users', usersRouter);
};
