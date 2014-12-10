var Job = function(title){	
	this.id = Job.id=(Job.id || 0) + 1;
	this.title=title;
	this.status = 'pending'; //open ,closed
	this.posted = false;
	this.category = [];
	
	this.setTitle = function(title){
		this.title=title;
	}

	//adaptar isto a modulo, ver o index.js do job
}