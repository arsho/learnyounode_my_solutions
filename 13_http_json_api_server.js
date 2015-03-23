var http=require("http");
var url=require("url");
var port=process.argv[2];
function convert_unix_obj(my_date){
	passed_mili_seconds=my_date.getTime();
	time_obj={unixtime: passed_mili_seconds};
	ret_str=JSON.stringify(time_obj);
	return ret_str;
}
function convert_iso_obj(my_date){
	vhour=my_date.getHours();
	vmin=my_date.getMinutes();
	vsec=my_date.getSeconds();
	time_obj={hour: vhour,minute: vmin,second: vsec};
	ret_str=JSON.stringify(time_obj);
	return ret_str;
}

var server=http.createServer(function(request,response){
	parsed_url=url.parse(request.url,true);	
	iso_time=parsed_url.query.iso;
	path_name=parsed_url.pathname;
	my_date_obj=new Date(iso_time);
	var return_str=""
	if(path_name=="/api/parsetime")
	{
		return_str=convert_iso_obj(my_date_obj);
	}
	else if(path_name=="/api/unixtime")
	{
		return_str=convert_unix_obj(my_date_obj);
	}
	response.writeHead(200,{"Content-Type":"application/json"});	
	response.end(return_str);
});
server.listen(port);