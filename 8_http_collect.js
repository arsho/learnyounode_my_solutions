http=require("http");
url=process.argv[2];
res="";
http.get(url,function(response){
	response.setEncoding("utf8");
	response.on("data",function(data){
		res+=data;
	});
	response.on("end",function(){
		console.log(res.length);
		console.log(res);		
	})
})