// problem statement 1 : 
function problem01(){

    let arr = new Array(6);
    arr[1] = 20;
    arr[3] = 10;
    arr[5] = 30;
    for (const value in arr) {
        console.log(value);
    }
    for (const value of arr) {
        console.log(value);
    }
}
// problem statement 2
function problem02(){
    // objects are not iterable 
    let student = new Object();
    student.name = "kartikay";
    student.age = 19;
    student.marks = 100;
    student.city = "delhi";
    // for...in iterates over enumerable property names (keys) of an object.  It doesn't access elements by index (because objects don't have indices). Instead, it walks through the string names of the object's properties.
    for (const key in student){
        // console.log(key +":"+ student[key]);
    }
    // objects are not iterable we need to use .entries()
    let student_values=Object.entries(student)
    // console.log(student_values);
    for (const [key,value] of student_values) {
        console.log(`key:${key},value:${value}`);
    }
}
// problem statement 3
function problem03(){
    let arr = [2, -5, 8, -3, 7, -1, 10]
    // using map()
    let positive_numbersMapped= arr.map(number =>{
        if(number < 0) return 0
        else return number
    
    })
    // using filter
    let positive_numbers = positive_numbersMapped.filter(number => number!== 0)
    // using reduce as inbuilt callback function 
    const sum01 = arr.reduce((accumulator,currentValue)=>{
        return accumulator + currentValue
    },0)
    // making a sum function outside and using it as a callback in reduce
    function summing(accumulator,currentValue){
        return accumulator + currentValue
    }
    const sum02 = arr.reduce(summing,0)
    console.log(sum02);
}
function problem04(){
    let arr = [3, 5, -2, 8, -6, 4];
    let first_value  = arr.find(i => i<0)
    console.log(first_value); 
}
function problem05(){
    //  destructuring
    let arr = [1,2,3]
    let [a,b,c] = arr
    console.log(a,b,c);
}
problem05()

