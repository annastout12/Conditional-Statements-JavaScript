var containerEle = document.body.querySelector(".container");
var num1=Number(prompt("Enter a number:"));
if(isNaN(num1)){
  containerEle.innerHTML= "Error.";
  end;
}
var num2=Number(prompt("Enter a second number: "));
if(isNaN(num2)){
  containerEle.innerHTML= "Error.";
  end;
}
var sym=prompt("Enter +,-,*,/: ");
if(sym==='+'){
  var total= (num1+num2)
  containerEle.innerHTML= total
}else{
  containerEle.innerHTML="Error";
}
if(sym==='-'){
  var total= (num1-num2)
  containerEle.innerHTML= total
}
if(sym==='*'){
  var total= (num1*num2)
  containerEle.innerHTML= total
}
if(sym==='/'){
  var total= (num1/num2)
  containerEle.innerHTML= total
}