http=require("http");
map=require("through2-map");
port=process.argv[2];
var server=http.createServer(function(request,response){
	if(request.method!="POST") return;
	request.pipe(map(function(data){
		return data.toString().toUpperCase();
	})).pipe(response);
});
server.listen(port);
