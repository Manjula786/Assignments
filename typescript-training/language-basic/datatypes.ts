let empid: number=1234;
console.log(empid);

let firstname: string ="Manjula";
console.log(firstname);

let age: undefined;
console.log(age);

//Union ==> Union represents more than one data type which can stored in the variabel.
let empaddress: string | number | boolean;
empaddress="Hyderabd";
console.log((empaddress));
empaddress=101;
console.log((empaddress));

//Any ==> Any represents any data type which can stored in the variabel.any

interface empaddrss1{

    name:string;
    age:number;
    city:string;
}


let empaddress1: {

    name:"Manjula",
    age: 25,
    city: "Hyderabad"
};

//Array
let array1:number[]; 
let array2:string[];
let array3:boolean[];
array1=[1,2,3,4];
console.log(array1);
array2=["Alice","Bob","Charlie"];
console.log(array2);
array3=[true,false,true];
console.log(array3);
//multiple typeof of aayry
let multiarray:(number  | boolean)[]= ([123,true]);
console.log(multiarray[0]);

//tuple allows only order type if string number we should enter values in the ame format

//set== allows only one type of data
let empidset:Set<number>=new Set();
empidset.add(10);
empidset.add(12);

console.log(empidset.size );
//map
let empmap: Map<number,string >=new Map();
empmap.set(195,"Manjula");
console.log(empmap.get(195));

