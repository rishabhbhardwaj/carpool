module.exports = function(app) {
  var express = require('express');
  var pointsRouter = express.Router();

  pointsRouter.get('/', function(req, res) {
    res.send({
      "points": [
                  {
            "name": "JayaNagar1st",
            "id": "1",
            "lat": "12.9312",
            "long": "77.6005"
        },
        {
            "name": "JayaNagar2nd",
            "id": "2",
            "lat": "13.0000",
            "long": "77.6015"
        },
        {
            "name": "HosurRd",
            "id": "3",
            "lat": "13.0005",
            "long": "77.6025"
        },
        {
            "name": "Domlur",
            "id": "4",
            "lat": "13.0007",
            "long": "77.6029"
        },
        {
            "name": "Murugeshpalya",
            "id": "5",
            "lat": "13.0009",
            "long": "77.6031"
        },
        {
            "name": "WindTunnelRoad",
            "id": "6",
            "lat": "13.0010",
            "long": "77.6035"
        },
        {
            "name": "Marathalli",
            "id": "7",
            "lat": "13.0015",
            "long": "77.6038"
        },
        {
            "name": "Bellandur",
            "id": "8",
            "lat": "13.0019",
            "long": "77.6041"
        },
        {
            "name": "Sarjapur",
            "id": "9",
            "lat": "13.0021",
            "long": "77.6045"
        },
        {
            "name": "Kormangala",
            "id": "10",
            "lat": "13.0025",
            "long": "77.6047"
        },
        {
            "name": "Indiranagar",
            "id": "11",
            "lat": "13.0027",
            "long": "77.6049"
        },
        {
            "name": "Trinity",
            "id": "12",
            "lat": "13.0029",
            "long": "77.6050"
        },
        {
            "name": "MGRoad",
            "id": "13",
            "lat": "13.0030",
            "long": "77.6051"
        },
        {
            "name": "BrigadeRoad",
            "id": "14",
            "lat": "13.0031",
            "long": "77.6050"
        },
        {
            "name": "ChurshStreet",
            "id": "15",
            "lat": "13.0033",
            "long": "77.6050"
        },
        {
            "name": "StMarksRoad",
            "id": "16",
            "lat": "13.0035",
            "long": "77.6050"
        },
        {
            "name": "ChurchRoad",
            "id": "17",
           "lat": "13.0037",
            "long": "77.6050"
        },
        {
            "name": "ABCRoad",
            "id": "18",
            "lat": "13.0039",
            "long": "77.6050"
        },
        {
            "name": "Yashwantpur",
            "id": "19",
            "lat": "13.0041",
            "long": "77.6050"
        },
        {
            "name": "Airport",
            "id": "20",
            "lat": "13.0044",
            "long": "77.6050"
        }
                ]
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
