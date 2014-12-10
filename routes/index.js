var express = require('express');
var router = express.Router();

var job = require('../modules/job')



var jobs= [];
jobs.push(job({title:'IT Support',status:'open',posted:'false', categories:['Porto']}));
jobs.push(job({title:'Engineer',status:'closed',posted:'true', categories:['Edp']}));
jobs.push(job({title:'Coach',status:'open',posted:'true',categories:['Benfica']}));






router.get('/', function(req, res) {
  res.render('layout');
});

router.get('/job/:n', function(req, res) {
  	(jobs[req.param('n')]) ? res.json(jobs[req.param('n')].getJob()) : res.json(void(0));

  	
});


router.get('/list', function(req, res) {
  res.render('list',{page_title: 'All Jobs', arrayJobs: jobs})
});


module.exports = router;


