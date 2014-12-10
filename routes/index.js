var express = require('express');
var router = express.Router();

var job = require('../modules/job')
var jobs= [];
jobs.push(job({title:'IT Support',location:'Lisboa',description:'descr...',company:'google'}));
jobs.push(job({title:'Engineer',location:'Braga',description:'outra desc.',company:'yahoo'}));
jobs.push(job({title:'Doctor',location:'Porto',description:'outra desc.',company:'yahoo'}));


router.get('/', function(req, res) {
  res.render('layout');
});

router.get('/job/:n', function(req, res) {
  res.json(jobs[req.param('n')]);
  // res.json(jobs[1]);
});

router.get('/list', function(req, res) {
  res.render('list',{page_title: 'All Jobs', arrayJobs: jobs})
});


module.exports = router;


