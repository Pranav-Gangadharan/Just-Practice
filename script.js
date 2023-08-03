/*
        Day -13 Array Methods

==> MRF(Map Reduce Filter)

# HOF=>Higher Order Function
# HOC=>Higher Order Component

==> Map (We need to pass a function)

# example 1:-

const arr =[1,2,3,4,5]; //[2,4,6,8,10]

function double(ele){
    return ele*2;
}

const output = arr.map(double)
console.log(output)


# example 2:-

const arr = [1, 2, 3, 4, 5]; //[2,4,6,8,10]

const output = arr.map(function (x) {
    return x * 2;
});
console.log(output);

# example 3:-

const arr = [1, 2, 3, 4, 5]; //[2,4,6,8,10]

//when there is only one line in function which return something
==>filter (it simply filters value from array)

# example 1:- (odd)

const arr = [4, 3, 1, 2, 5];
const output = arr.filter((odd) => odd % 2);
console.log(output);

# example 2:- (even)

const arr = [4, 3, 1, 2, 5];
const output = arr.filter((even) => even % 2==0);
console.log(output);

# example 3:- 

const arr = [4, 3, 1, 2, 5];
const output = arr.filter((x) => x>3);
console.log(output);

==> Reduce()
arrayname.reduce(function(accumlator,current value)=>{},[initial value])

# example 1:-

const arr = [1, 2, 3, 4, 5,8,9];

const add = arr.reduce((x, a) => {
    if(a > x){
        x = a;  
    }
    return x
},0);
console.log(add);


# list full names

const arr = [
    { firstName: "Kamal", lastName: "Hasan", age: 60 },
    { firstName: "Donalt", lastName: "trump", age: 60 },
    { firstName: "Rajini", lastName: "kanth", age: 70 },
    { firstName: "Ajith", lastName: "Kumar", age: 40 },
];

const fullName = arr.map((x) => x.firstName + " " + x.lastName)

console.log(fullName);


# count the age 

const arr = [
    { firstName: "Kamal", lastName: "Hasan", age: 60 },
    { firstName: "Donalt", lastName: "trump", age: 60 },
    { firstName: "Rajini", lastName: "kanth", age: 70 },
    { firstName: "Ajith", lastName: "Kumar", age: 40 },
];

const ageCount = arr.reduce((count, x) => {
   //check whether age is present or not
    if (count[x.age]) {
        count[x.age] = ++count[x.age]; //{60:2}
    } else {
        count[x.age] = 1; //{60:1}
    }
    return count
},{}) 

console.log(ageCount); //{ '40': 1, '60': 2, '70': 1 }

# check age with condition and return name

const arr = [
    { firstName: "Kamal", lastName: "Hasan", age: 60 },
    { firstName: "Donalt", lastName: "trump", age: 60 },
    { firstName: "Rajini", lastName: "kanth", age: 70 },
    { firstName: "Ajith", lastName: "Kumar", age: 40 },
];

const ageConName = arr.filter(x => x.age<70).map(x=>x.firstName)

console.log(ageConName); //[ 'Kamal', 'Donalt', 'Ajith' ]

*/



const arr = [
    { firstName: "Kamal", lastName: "Hasan", age: 60 },
    { firstName: "Donalt", lastName: "trump", age: 60 },
    { firstName: "Rajini", lastName: "kanth", age: 70 },
    { firstName: "Ajith", lastName: "Kumar", age: 40 },
];

const ageConName = arr.filter(x => x.age < 70).map(x => x.firstName);

console.log(ageConName); //[ 'Kamal', 'Donalt', 'Ajith' ]



