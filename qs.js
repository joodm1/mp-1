// Function to calculate the power (x^y)
function mypow() {
  let x = document.getElementById("first").value;
  let y = document.getElementById("second").value;

  // Check if either input is not a number
  if (isNaN(x) || isNaN(y)) {
    document.getElementById("output").innerHTML = `<p>One or both of these inputs are not numbers</p>`;
  } else {
    // Convert inputs to numbers
    x = Number(x);
    y = Number(y);

    let z = 1;
    // Calculate x^y
    for (let i = 0; i < y; i++) {
      z = z * x;
    }

    output.style.color = "black";
    // Display the result
    output.innerHTML = `<p>${z}</p>`;
  }
}

// Function to add two integers
function add() {
  let x = document.getElementById("first").value;
  let y = document.getElementById("second").value;

  // Check if inputs are numbers
  if (isNaN(x) || isNaN(y)) {
    document.getElementById("output").innerHTML = `<p>One or both of these inputs are not numbers</p>`;
  } else if (x % 1 !== 0 || y % 1 !== 0) {
    // Check if inputs are integers
    document.getElementById("output").innerHTML = `<p>One or both of these inputs are not integers</p>`;
  } else {
    // Convert inputs to integers and add them
    x = Number(x);
    y = Number(y);
    let z = x + y;

    output.style.color = "black";
    // Display the result
    output.innerHTML = `<p>${z}</p>`;
  }
}

// Function to multiply two integers
function mult() {
  let x = document.getElementById("first").value;
  let y = document.getElementById("second").value;

  // Check if inputs are numbers
  if (isNaN(x) || isNaN(y)) {
    document.getElementById("output").innerHTML = `<p>One or both of these inputs are not numbers</p>`;
  } else if (x % 1 !== 0 || y % 1 !== 0) {
    // Check if inputs are integers
    document.getElementById("output").innerHTML = `<p>One or both of these inputs are not integers</p>`;
  } else {
    // Convert inputs to integers and multiply them
    x = Number(x);
    y = Number(y);
    let z = x * y;

    output.style.color = "black";
    // Display the result
    output.innerHTML = `<p>${z}</p>`;
  }
}

// Function to subtract two integers
function sub() {
  let x = document.getElementById("first").value;
  let y = document.getElementById("second").value;

  // Check if inputs are numbers
  if (isNaN(x) || isNaN(y)) {
    document.getElementById("output").innerHTML = `<p>One or both of these inputs are not numbers</p>`;
  } else if (x % 1 !== 0 || y % 1 !== 0) {
    // Check if inputs are integers
    document.getElementById("output").innerHTML = `<p>One or both of these inputs are not integers</p>`;
  } else {
    // Convert inputs to integers and subtract them
    x = Number(x);
    y = Number(y);
    let z = x - y;

    // Change output color based on whether result is negative
    if (z < 0) {
      output.style.color = "red";
    } else {
      output.style.color = "black";
    }

    // Display the result
    output.innerHTML = `<p>${z}</p>`;
  }
}

// Function to clear the input fields and output
function clr() {
  document.getElementById("first").value = '';  // Clear the first input field
  document.getElementById("second").value = ''; // Clear the second input field
  document.getElementById("output").innerHTML = ''; // Clear the output div
}
