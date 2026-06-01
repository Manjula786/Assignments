//1. Temperature of a city in degrees Celsius: 25.5

console.log("*****************************************:");
let tempareture:number=25.5
console.log(`Tempareture of the city  ${tempareture} degree Celsius\n`);


//2.Whether a customer has placed an order: true or false.
console.log("*****************************************:");
let orederplaces:boolean=true;
console.log(`Customer has placed an order: ${orederplaces}\n`);

// 3. Person's phone number: "123-456-7890"
console.log("*****************************************:");
let phonenumber: string="123-456-7896"; 
console.log(`Person's phone number ${phonenumber}\n`);

console.log("*****************************************:");
//44. Amount of money in a customer's bank account: 1000.50
let money: any=100.50;
console.log(`Amount of money in a customer's bank account:${money}\n`);

//5.Person's email address: "john.doe@example.com"
("*****************************************:");
let email: string="john.doe@example.com";
console.log(`Person's email address:${email}\n`);

//6.Coordinates of a location (latitude, longitude): 37.7749, -122.4194
("*****************************************:");
interface location {
    latitude : number;
    longitude :number;
}
("*****************************************:");
let locationdetails : location={
    latitude:37.7749,
    longitude:-122.4194,
};
console.log(`Coordinates of a location (latitude, longitude):${locationdetails.latitude},${locationdetails.longitude}`)
console.log("*****************************************:");
/*Person's marital status: true or false
8. Person's occupation: "Software Engineer"
9. Person's favourite colour: "Blue" */

interface persondetails{
    maritialstatus:string,
    occupation:string,
    favouritecolour:string,
};
let P_details : persondetails={
    maritialstatus:"Married",
    occupation:"Software Engineer",
    favouritecolour:"Blue",
}
console.log(`Person's marital status: true or false ${P_details.maritialstatus}`);
console.log(`Person's occupation: ${P_details.occupation}`);
console.log(`Person's favourite colour: "Blue" ${P_details.favouritecolour}/n`);
console.log("*****************************************:\n");
//10.Current year: 2023
let currentdate=new Date();
let currentyear:number=currentdate.getFullYear();
console.log(`Current year:${currentyear}`);

//11.Number of followers on a social media platform: 1,000,000
let followers:number=10000000
console.log(`Number of followers on a social media platform:${followers}`);
console.log("*****************************************:\n");

//12.Rating of a movie: 7.5
let rating:number=7.5;
console.log(`Rating of a movie:${rating}`);
console.log("*****************************************:\n");

// /13.Person's blood type: 'A'

let bloodtype:string="A";
console.log(`Peson's blood type: ${bloodtype}`);
console.log("*****************************************:\n");

//14.Title of a book: "To Kill a Mockingbird"

let titleofabook="To Kill a Mockingbird";
console.log(`Title of a book:${titleofabook}`);
console.log("******************************************:\n");

//15.Number of employees in a company: 500
let numberofemplyess:number=500;
console.log(`Number of employees in a company:${numberofemplyess}`);
console.log("******************************************:\n");

//16.Time of an event: 2:30 PM

let timeofevent:string='2:30 PM';
console.log(`Time of an event: ${timeofevent}`);
console.log("******************************************:\n");

/*17.Name of a country: "United States"
18.Person's eye color: "Brown"
19.Person's birthplace: "New York City"
20. Distance between two cities: 200.5 */

let details : (string | string | string | number)[]=["United States","Brown","New York City",200.5 ];
console.log(`Name of a country: ${details[0]}`);
console.log("******************************************:\n");
console.log(`Person's eye color: ${details[1]}`);
console.log("******************************************:\n");
console.log(`Person's birthplace:: ${details[2]}`);
console.log("******************************************:\n");
console.log(`Distance between two cities: ${details[3]}`);
console.log("******************************************:\n");