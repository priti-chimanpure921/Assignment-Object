//Dice Roll
let dice = Math.floor(Math.random() * 6 ) + 1 ;
console.log(dice);

//Car object
let car = {
    name : "celerio",
    model : 2018,
    color : "white"
};
console.log(car.name);

//Person object
let person = {
    name : "Priti",
    age : 36 ,
    city : "Pune"
};
console.log(person.city);
person.city = "New York";
console.log(person.city);
person.country = "United States";
console.log(person.country);
console.log(person);

//function to dice a roll
function rollDice()
{
    let dice = Math.floor(Math.random() * 6 ) + 1 ;
    console.log(dice);
}
rollDice();

//function that gives the average of 3 numbers
function ave(n1,n2,n3)
{
    let average = (n1+n2+n3)/3 ; 
    console.log(`Average of ${n1},${n2},${n3} is ${average}.`);
}
ave(1,2,3);

//function that prints multiplication table of a number
function mul(n)
{
    for(let i=1 ; i<=10 ; i++)
    {
        console.log( n * i ); 
    }
}
mul(5);

//function that returns sum of numbers from 1 to n
function sum(n)
{
    let sum = 0 ;
    for(let i = 1 ; i<=n ; i++)
    {
        sum = sum + i;
    }
    return sum ; 
}

console.log(sum(5));

//function returns concatination of all strings in an array
let array_strings = [ "Priti" , "Rakesh" , "Chimanpure"];

function concatStrings(arr)
{
    let result = "";
    for(let i = 0 ; i < arr.length ; i++)
    {
        result = result.concat(arr[i]);
    }
    return result;
}
console.log(concatStrings(array_strings));


