// array methods


//concat() that concatenates two or more arrays

// let arr1=[1,2,3];
// let x=[121,24,33,30,0] ;
// let arr2=arr1.concat( x,[4,5],[!true])
// let arr3=arr1.concat(arr2)
// let arr3=arr2.concat(arr1)
// console.log(arr2);



// merge two arrays by using only two variable
// let arr1=[1,2,3];
// let arr2=[4,5,6]
// console.log(arr1.concat(arr2));

// let arr1=[1,2,3];
// arr1=arr1+[,4,5,6];
// console.log([arr1]);

// three variable

// let arr1=[1,2,3];
// let arr2=[,4,5,6]
// let arr3=arr1+arr2;
// console.log([arr3]);

//one variable
// let arr1=[1,2,3];
// arr1=arr1.concat(4,5)
// console.log(arr1);






// fill()
// one
// let arr1=[1,2,3];
// arr1.fill(90)
// console.log(arr1);

// two
// let arr1=[1,2,3];
// console.log(arr1.fill(90));

//to find the length
// let arr1=[1,2,3];
// console.log(arr1.length);

// method 3 fill and length check
// let arr1=[1,2,3,true,"false",-0];
// // let lengthOfArray=arr1.length;
// // console.log(lengthOfArray);
// let modified=arr1.map((item)=>{return 90})
// console.log(modified);

// method 4
// let arr1=[1,2,3];
// let newModifiedArr=[];
// for (let index = 0; index < arr1.length; index++) {
//     newModifiedArr[index] = 90 ;     
// }
// console.log(newModifiedArr);



// method 2 lenght check
// let arr1=[1,2,3,true,"false",-1,];
// let lengthOfArray=arr1.length;
// console.log(lengthOfArray);





// filter
// let ages=[32,11,32,77,82,true]
// let result=ages.filter((item)=>{return item>=18})
// console.log(result);

// let ages=[32,11,32,77,82,true]
// let result=ages.filter((item)=>{
//     return typeof item === 'number' && item>=18})
// console.log(result);


// let ages=[32,11,32,77,82,true]
// let result=ages.filter(checkAdult);

// function checkAdult(age){
//     return age>=18
// }
// console.log(result);
let ages=[32,11,32,77,82,true]
let result= ages.map((item)=>{ if(item>=18) {return  item}   })
// delete result()
let undefinedIndex=result.indexOf(undefined)
console.log(result);

 




