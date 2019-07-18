import express from 'express';
import Ioc from 'electrolyte';

let router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
