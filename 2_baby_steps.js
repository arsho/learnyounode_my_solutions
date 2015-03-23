var argv_len=process.argv.length;
var sum=0,i;
for(i=2;i<argv_len;i++)
{
	var tmp=Number(process.argv[i]);
	sum+=tmp;
}
console.log(sum);