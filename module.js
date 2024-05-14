import info,{otherinfo} from "./app.js";


let {name,city} = info;
console.log(name,city); // aung aung yangon

console.log(otherinfo.address); //23streetBagoRoad

let {address,phone} = otherinfo;
console.log(address); // 23streetBagoRoad
console.log(phone); // 097993999200