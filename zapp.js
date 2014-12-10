
//App.JS


var job = require('./modules/job');

//em vez de:

//job.setTitle('Web App Engineer');
//job.setCompany('MyOwn');
//job.setLocation('Everywhere I want');
//job.setDescription('The best Job in the world');



//fazemos assim:

var job1= job({title:'123',location:'456',description:'descr...',company:'google'}); 

var job2= job({title:'outro',location:'outra',description:'outra desc.',company:'yahoo'});

//anotherJob.setTitle('ehehehe Web App Engineer');


console.log(job1.getJob()); //faz o print da sua respectiva 
console.log(job2.getJob()); //faz o print da sua respectiva




