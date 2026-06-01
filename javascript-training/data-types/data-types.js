//1. Primitive data types.
//2. Non premitive data types.
//immutable-- cannot change.
let a=10;
a+10;
console.log(a);

//mmutable
let ob={
    "name":"Krishna",
    "id":123
}
    Object.age=35;
    console.log(ob);
// non
const obj = {
    name: "Durga",
    id: 124,
    location: "Kailash",
    family: {
        husband: "siva",
        son1: "Vignesh",
        son2: "subbu"
    }
};
console.log(obj.name,"*************");
console.log(obj.family.son);



console.log(obj.name);
console.log(obj.family.son);



// non-primitive (mutable) object example



//Arrays 
let fruites=["apple","banana","grapes"];
console.log(fruites[0]);
fruites.push("orange");
console.log(fruites);