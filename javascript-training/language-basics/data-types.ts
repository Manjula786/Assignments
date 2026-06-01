console.log("Hello, Krishna and Durga");
console.log("***************assign number type***************\n");
let empid : number=1234;
console.log("let empid:number=",empid,"\n");
console.log("***************assign number type***************\n");
let firstname:string;
let lastname:string;
firstname="Manjula";
console.log("Defining string in TS:: let firstname:stinng=",firstname);
lastname="B";
console.log("let lastname:string=",lastname,"\n");

console.log("***************Object type***************\n");
let person = {
    name:"Manjula",
    age:30,
    empid:195,
    address:{
        city:"Hyderabd",
        Flatno:101
    }
}
    console.log(person);
console.log(person.address.city,"\n");