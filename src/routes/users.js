import express from 'express';
import Ioc from 'electrolyte';

let router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
