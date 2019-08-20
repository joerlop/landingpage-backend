const router = require('express').Router();

const db = require('./emails-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
  db.find()
    .then(emails => {
      res.status(200).json(emails);
    })
    .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
    db.add(req.body)
    .then(email => {
        res.status(201).json({message: "Success"})
    }).catch(err => {
      res.status(500).json({message: err})
    })
  
});

module.exports = router;
