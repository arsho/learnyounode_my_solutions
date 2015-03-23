fs=require("fs");
path=require("path");

function my_func(directory,filter_ext,callback){	
	my_list=Array();
	fs.readdir(directory,function(err,list){
		if(err){
			return callback(err);
		}
		else{
			for(i=0;i<list.length;i++){
				file_ext=path.extname(list[i]);
				if(file_ext==="."+filter_ext){
					my_list.push(list[i]);
				}
			}
		}
		return callback(null,my_list);
	});	
}
module.exports=my_func;
