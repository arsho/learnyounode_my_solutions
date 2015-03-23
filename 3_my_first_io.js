fs=require("fs");
buf=fs.readFileSync(process.argv[2]);
str_buf=buf.toString();
ar=str_buf.split("\n");
ar_len=ar.length;
console.log(ar_len-1);