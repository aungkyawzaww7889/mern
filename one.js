
// const arrFun = ()=> "aung aung";
// const arrFun = ()=> {
//     return {
//         name: "codeHub"
//     }
// };

// console.log(arrFun());


const info = {
    companyName : "codeHub",
    city : "Yangon",
    job : {
        firstJob : "Larvel developer",
        secondaryjob : "node developer"
    }
}


// console.log(info.companyName);
// const {companyName,city,job:{secondaryjob}} = info;
// console.log(companyName); //codeHub
// console.log(city);  //Yangon
// console.log(secondaryjob); //node developer




let numbers = [1,2,3,4,5,6,7,8];


// map function 
// --------------------

// numbers.map(function(number){
//     console.log(number);
// });


// numbers.map((number)=>{
//     console.log(number);
// });


// filter function 
// --------------------

// numbers.filter((number)=>{
//     console.log(number);
// });

// const filternumber = numbers.filter((number)=>{
//     return number > 2;
// });

// console.log(filternumber); //(6) [3, 4, 5, 6, 7, 8]




// find function 
// --------------------
// တစ်ခုထဲကိုပဲ သီးသန့်ထုတ်ပေး 

const findnumber = numbers.find((number)=>{
    return number > 2;
});

console.log(findnumber); //3

// ... method 
// --------------------
 
let num = [1,2,3];
let newnum = [5,6,7];
console.log([...num,...newnum]); 


const infor = {
    companyName : "code Hub"
}

const updateinfor = {...infor,address : "yangon"}
console.log(updateinfor);



const arrfun = (x,y,...tmprs) =>{
    return console.log(x,y,tmprs);
}

arrfun(1,2,4,5);
