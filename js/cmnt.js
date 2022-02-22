function loadData() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayCmnt(data));
}

function displayCmnt(cmnts) {
  const cmntContainer = document.getElementById("cmnt");
  for (const cmnt of cmnts) {
    console.log(cmnt.name);
    const div = document.createElement("div");
    div.innerHTML = `   
    <h1>Name: ${cmnt.name}</h1>
    <h3>Email: ${cmnt.email}</h3>
    <p>Comment: ${cmnt.body}</p>
    `;
    cmntContainer.appendChild(div);
  }
}

loadData();
