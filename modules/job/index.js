function Job(){

var dados = {
 id:null,
 title:null,
 status:null, //pending, open, closed
 posted:null, //false ou true
 categories:null //array com valores
 };


//se as props de dados não estao definidas 
//pega nas que sao fornecidas por instanciaJob
this.defineJobData = function(jobData){
	for (var prop in dados){
 		if (dados[prop] !== 'undefined'){ 
        	dados[prop] = jobData[prop];
 		}
	}
}

this.getJob= function(){
			return dados;
}



this.setId=function(){  //may be done by DB in the future....
	Job.id = (Job.id || 0) + 1;
	dados['id'] = Job.id;
}

 this.setCategories=function(jobData){  
	 //update categories in module
}

this.setTitle = function(title){
	dados['title']=title;
}
this.setPosted = function(title){
	dados['title']=title;
}
this.setStatus = function(title){
	dados['title']=title;
}

}

module.exports = function(jobData){
	var instanciaJob = new Job();	
	instanciaJob.defineJobData(jobData);
	instanciaJob.setId();
	//console.log(instanciaJob.getCategories());
	return instanciaJob;

}






