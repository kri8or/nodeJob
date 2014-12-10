
function Job(){

this.dados = {
 title:null,
 company:null,
 location:null,
 description:null
 };


this.defineJob = function(jobData){
	for (var prop in this.dados){
 		if (this.dados[prop] !== 'undefined'){
        	this.dados[prop] = jobData[prop];
 		}
	}
}


this.getJob= function(){
		return this.dados;
}

}

module.exports = function(jobData){
	var instanciaJob = new Job();
	instanciaJob.defineJob(jobData);
	return instanciaJob.dados;

}






