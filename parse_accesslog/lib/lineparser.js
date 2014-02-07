//Line Parser for apache access log
//Sample String: 66.249.80.70 - - [02/Feb/2014:03:35:46 +0530] "GET /staging/9x/?chname=9X%20Music&width=100pct&height=462px HTTP/1.1" 302 - "http://www.9xm.in/livetv.aspx" "Mozilla/5.0 (en-us) AppleWebKit/534.14 (KHTML, like Gecko; Google Wireless Transcoder) Chrome/9.0.597 Safari/534.14"
/**
* Returns: An array with the following fields {request_ip, request_time, url}
* @param {String} name
* @return {Array}
* @api public
**/
exports.parseLine=function(str){
	var result=new Array();
	var fields=str.split(" ");
	result["req_ip"]=fields[0];
	result["req_time"]= "";
	if(fields[3]) result["req_time"]= fields[3].replace('[','');
	result["req_url"]=fields[6];
	
	return result;
	
	
	
}