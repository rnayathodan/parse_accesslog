
/**  
* parselog: Parses apache web server log, 
* load's request time, request ipaddress and request url 
* to mysql db specified

* @arg {String} filename

**/


var parsefile=require("./lib/parsefile");
var mydb=require("./lib/mydb");

//
host="localhost";
db="access_log";
user="robin";
pass="robin";

//check if access log filename specified
if(process.argv.length<=2){
	console.log(process.argv[0]+" "+process.argv[1]+" <access.log>");
	process.exit(1);
}

var filename=process.argv[2];

//Make Mysql Connection
mydb.connect(host, user, pass, db);

//Parse and Load the access log to Mysql db
parsefile.Load(filename, mydb.Load );


