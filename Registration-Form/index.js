// selectors
const button = document.querySelector(".btn");
let table = document.getElementById("myData");

// event-listeners
button.addEventListener("click", function (e) {
  let name = document.querySelector(".input-name").value;
  let email = document.querySelector(".input-email").value;
  let course = document.querySelector(".input-course").value;
  let lang = document.querySelector('input[name="fav_language"]:checked').value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  console.log(gender);
  let row = document.createElement("tr");

  // Create cells
  let c1 = document.createElement("td");
  let c2 = document.createElement("td");

  let ul = document.createElement("ul");
  let newTodo = document.createElement("li");

  ul.innerHTML = `
  <ul>
  <li><span>Name:</span>${name}</li>
  <li><span>Email:</span>${email}</li>
  <li><span>Course:</span>${course}</li>
  <li><span>Sex:</span>${gender}</li>
  <li><span>Lang:</span>${lang}</li>
  </ul>
  `;

  c1.append(ul); // adding details to the td

  const img = document.createElement("img");

  // adding male or female icon
  if (gender === "Female") {
    img.src = "images/profile-women.png";
  } else {
    img.src = "images/profile-men.png";
  }

  c2.append(img); // adding to the td

  // Append cells to row
  row.appendChild(c1);
  row.appendChild(c2);

  // Append row to table body
  table.appendChild(row);
});
