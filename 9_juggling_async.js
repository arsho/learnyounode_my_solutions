http=require("http");
var urls=Array();
urls.push(process.argv[2]);
urls.push(process.argv[3]);
urls.push(process.argv[4]);

function my_function(urls,pos){
	if(pos>urls.length-1) return;
	http.get(urls[pos],function(response){
		var res="";
		response.setEncoding("utf8");
		response.on("data",function(data){
			res+=data.toString();
		})
		response.on("end",function(){
			console.log(res);
			my_function(urls,pos+1);
		})
	})
}
my_function(urls,0);
