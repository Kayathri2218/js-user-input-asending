// Get the input fields and sort button
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let sortBtn = document.getElementById("sortBtn");
let result = document.getElementById("result");

// Add event listener to the sort button
sortBtn.addEventListener("click", function() {
  // Get the values of the input fields
  let n1 = Number(num1.value);
  let n2 = Number(num2.value);
  let n3 = Number(num3.value);

  // Sort the numbers in ascending order
  let numbers = [n1, n2, n3];
  numbers.sort(function(a, b) {
    return a - b;
  });

  // Display the sorted numbers
  result.innerHTML = numbers;
});

