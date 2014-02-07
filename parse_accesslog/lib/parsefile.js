var fs=require("fs");
var lineparser=require("./lineparser");


/**
* Loads the file and parse each line
* Store each record in an Array
* Call the callback function with the data array
* @param {String} filename
* @param {Function} callback
* @return {Boolean}
* @api public
**/
exports.Load=function(filename, callback){
	exports.callback=callback;
	fs.readFile(filename, function(err, data){
		if(err){
		
			console.log(err);
			throw err;
		}
		var lines=data.toString().split("\n");
		var data=new Array();
		for(i=0; i<lines.length; i++){
			var fields=lineparser.parseLine(lines[i]);
			data[i]=fields;
		
		}
		exports.callback(data);
	});
	
	return true;
}