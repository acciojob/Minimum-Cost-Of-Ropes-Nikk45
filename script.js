function calculateMinCost() {
  //your code here
	const input = document.getElementsByTagName('input')[0];
  
	let inputValues = input.value.split(',');
	
  // let arr = [4, 2, 7, 6, 9];
  let arr =[];
  for(let x of inputValues){
    let num = parseInt(x);
    arr.push(num);
  }
  
arr.sort((a,b)=>a-b);
  // alert(arr);

let res = [];

while(arr.length > 1){
    
    let val1 = arr.shift();
    let val2 = arr.shift();

    let sum = val1 + val2;
    
    arr.push(sum);
    res.push(sum);
    arr.sort((a,b)=> a-b);
}

let sum = 0;
for(let x of res){
    sum+=x;
  // console.log(typeof(x));
}

// console.log(sum);
	const result = document.getElementById('result');
	result.innerHTML = sum;

}  

module.exports = calculateMinCost;
