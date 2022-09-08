countEle = document.getElementById("count-el");
saveEle=document.getElementById("save-el");

let count = 0
function increment() {
  count +=1;
  countEle.innerText = count;
}

function save() {
  let countStr=count+"-" 
  saveEle.innerText+=countStr 
  console.log(count);
}

function decrement(){
  count-=1
  countEle.innerText=count;
}