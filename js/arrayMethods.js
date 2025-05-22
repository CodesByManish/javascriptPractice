// 1. Multiply each number by 3
let arr = ["2","4","6"];
let double = arr.map(n => n* 3);
console.log(double);

// 2. Extract names from objects
const extractobject = [{fname:"manish",designation:"developer"}]
let exract = extractobject.map(n => {n.fname ,n.designation});
console.log(exract);


//3. make array to uppercase
const upcase =  ["manish","ajay","pradip"];
const makeUp = upcase.map(up => up.toUpperCase());
console.log(makeUp);


//filter()
// 1. Get even numbers
const data = ["2","3","4"]
const numbers = data.filter(num=> Number(num)%2 ===0)
console.log(numbers);

//✅ 4. forEach()
const nums = [1, 2, 3];
nums.forEach(n => console.log(n));

// Apply 'highlight' class to all <li> elements
  document.querySelectorAll("li").forEach(li => {
    li.classList.add("highlight");
  });
