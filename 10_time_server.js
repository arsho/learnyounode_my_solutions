var net=require("net");
port=process.argv[2];
function zero_fill_format(val){
	var ret_str="";
	if(val<10)
		ret_str+="0"+val;
	else 
		ret_str+=""+val;
	return ret_str;
}
var server=net.createServer(function (socket){
	date=new Date();
	year=zero_fill_format(date.getFullYear());
	month=zero_fill_format(date.getMonth()+1);
	day=zero_fill_format(date.getDate());
	hour=zero_fill_format(date.getHours());
	min=zero_fill_format(date.getMinutes());
	res=year+"-"+month+"-"+day+" "+hour+":"+min;
	socket.write(res);
	socket.end();
})
server.listen(port);