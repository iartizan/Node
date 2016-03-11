//readfile.js
//get file asynchronously

var fs=require("fs");
fs.readFile('file.txt','utf-8',function(err,data){
	if(err){
	  console.error(err);
	}else{
	  console.log(data);
	}
});

console.log("Why am I here at the fisrt place?");