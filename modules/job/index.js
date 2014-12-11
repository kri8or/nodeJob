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

this.updateCategories=function(jobData){  
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

exports.createJob = function(jobData){
	var instanciaJob = new Job();	
	var categoriesInstance = new Category();
	instanciaJob.defineJobData(jobData);
	if (jobData['categories']!== undefined){
		//console.log('lol')
		categoriesInstance.addNew(jobData['categories']);
	}
	instanciaJob.setId();
	return instanciaJob;
}


//************************* categories ***********************

//List of all categories
function Category() {  //singleton, each instance referes to the very same object

  if ( arguments.callee.single )
    return arguments.callee.single;
  arguments.callee.single = this;

  var categories = [];

  this.addNew = function(categoryArray){
  	categoryArray.forEach(function(value){
  		if (categories.indexOf(value) === -1){
  		 categories.push(value)
  		} 
  	})
  };
  

  this.getAllCategories = function(){
  	return categories;
  };
}


exports.createCategory = function(categoryArray){
  var categoriesInstance = new Category();
  categoriesInstance.addNew(categoryArray);
  return categoriesInstance;
}

//************************* end categories ***********************




