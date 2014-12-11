var express = require('express');
var router = express.Router();

var job = require('../modules/job');
//var ctg = require('../modules/caterory');

var cats = job.createCategory([]);

var jobs= [];
jobs.push(job.createJob({title:'IT Support',status:'open',posted:false, categories:['Porto','outra']}));
jobs.push(job.createJob({title:'Engineer',status:'closed',posted:true, categories:['Edp']}));
jobs.push(job.createJob({title:'Engineer Blabla',status:'open',posted:true, categories:['Coisas']}));
jobs.push(job.createJob({title:'Coach',status:'open',posted:true,categories:['Benfica']}));

jobs.push(job.createJob({title:'Coach2'}));






router.post('/add',function(req,res){
	jobs.push(job.createJob({title:req.param('title'),status:'open',posted:false, categories:['Porto','outra']}));
	res.render('addJob',{page_title: 'All Jobs',arrayJobs: jobs,subTitle:'Add new Job', added:"job was added"})
});

router.get('/', function(req, res) {
  res.render('layout');
});

router.get('/add', function(req, res) {
  res.render('addJob', {page_title: 'All Jobs',arrayJobs: jobs,subTitle:'Add new Job'});
});

router.get('/job/:n', function(req, res) {
  	(jobs[req.param('n')]) ? res.json(jobs[req.param('n')].getJob()) : res.json(void(0));
});


router.get('/list', function(req, res) {
  res.render('list',{page_title: 'All Jobs', arrayJobs: jobs})
});

router.get('/categories', function(req, res) {
  res.render('ctgs',{page_title: 'All Categories', ctgsArray: cats.getAllCategories()})
});

router.get('/categories', function(req, res) {
  res.render('layout');
  console.log(cats.getAllCategories());
});


module.exports = router;


