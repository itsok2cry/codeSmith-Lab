// 8 Question
// ADD CODE HERE
let addThis= 0 
let sum = 0
while(addThis < 10){
  sum= addThis + sum;
  addThis++
}

// Uncomment the line below to check your work!
 console.log(sum);

 // 9 Question
 const num = 40;
let final;
// ADD CODE HERE
if(num > 100){
  final = null
}else{
  final= num * 2 
}

// Log final to the console below to check your work
console.log(final)

// 10 Question
const fb = [];
// ADD CODE HERE
for(let i = 1; i <=16; i++ ){
  if(i % 3 === 0 && i % 5 ===0  ){
    fb.push('fizzbuzz');
  }else if(i % 3 ===0){
    fb.push('fizz');
  }else if(i % 5 ===0){
    fb.push('buzz')
  }else{
    fb.push(i)
  }
}
console.log(fb)

// 11 Question
const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
// ADD CODE HERE
for(let i = 0; i < timesTenIfOverFive.length; i++){
  if(timesTenIfOverFive[i] >= 5){
    timesTenIfOverFive[i] *= 10;
    continue;
    
  }
}

// Uncomment the line below to check your work!
 console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]

 // 12 Question
 const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  let found = 0;
  // ADD CODE HERE
  for(const key in checkObj){
    if(checkObj[key]=== checkObj.foundNum){
     found += 1
    }
  }

  // 13 Question
  const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  const objToArray = [];
  // ADD CODE HERE
  for(const key in checkObj){
    if(checkObj[key] >=2){
      objToArray.push(checkObj[key])
    }
  }

  // 14 Question
  const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  let divBy6 = false;
  // ADD CODE HERE
  const objToArray= Object.values(checkObj)
  for(let i=1;i<= objToArray.length;i++){
    if(objToArray[i] % 6 ===0){
      divBy6 =true
    }
  }

  //15 Question
  const nestedArr = [];
// ADD CODE HERE
for(let i=0;i < 5; i++){
  nestedArr.push([`loop${i}`, i]);
}

//16 Question
const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE
for(let i =0; i < possibleIterable.length; i+=1){
  if(possibleIterable[i] % 3 ===0){
    divByThree[possibleIterable[i]] = i;
  }
}

// 17 Question
const sumMe = {
    hello: 'there',
    you: 8,
    are: 7,
    almost: '10',
    done: '!'
  };
  let total = 0;
  // ADD CODE HERE
  for(const key in sumMe){
    if(typeof sumMe[key] === 'number'){
      total += sumMe[key]
    }
  }