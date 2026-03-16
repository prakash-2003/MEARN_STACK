//var num=1664
//num=copy;
//var rem=0, sum="";
//while(num!=0){
//    rem=num%10;
//    sum+=rem;
  //  num=parseInt(num/10);
//}

//console.log(sum==num+sum)
//var arr=[5,12,17,23,30,19,28]
//console.log("original"+arr)
//var even=arr.filter((i)=>i%3==0)
//console.log("updated"+even)

//var arr=[12,16,20,22,42,37]
//console.log("original"+arr)
//arr.push("prakash")
//console.log("updated"+arr)

var arr=[12,16,20,22,42,37]
console.log("Original"+arr)
arr.splice(3,1,"Football")
arr.push("heros")
arr.unshift("BIGBULLL")
console.log("updated"+arr)