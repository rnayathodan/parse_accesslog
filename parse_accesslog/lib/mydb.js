var mysql=require("mysql");

/**
* Connects to Mysql DB
* @param {String} host
* @param {String} user
* @param {String} pass
* @param {String} db
* @return {Boolean}
* @api public
**/
exports.connect=function(host, user, pass, db){
	exports.host=host;
	exports.user=user;
	exports.pass=pass;
	exports.db=db;
	exports.conn=mysql.createConnection({
		host: host,
		user: user,
		password: pass,
		database: db
	});
	
	return true;
	
	
}

/**
* Loads records in Array provided to mysql table 
* @param {Array} dataArr
* @return {Boolean}
* @api public
**/
exports.Load=function(dataArr){

	for(i=0; i<dataArr.length; i++){
		var str="insert into access_details(req_time, req_ip, req_url) values('"+dataArr[i]["req_time"]+"', '"+dataArr[i]["req_ip"]+"', '"+dataArr[i]["req_url"]+"')";
		exports.conn.query(str);
	}
	//exports.Close();
	return true;
}

/**
* Close the mysql DB connection
* @return {Boolean}
* @api public
**/
exports.Close=function(){
	exports.conn.end();
	return true;
}