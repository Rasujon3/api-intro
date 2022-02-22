function loadData() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => displayPhoto(data));
}

function displayPhoto(photos) {
  const photosContainer = document.getElementById("photos");
  for (const photo of photos) {
    const div = document.createElement("div");
    div.innerHTML = `
    <h1>Title: ${photo.title}</h1>
    <img src="${photo.url}"  />
    <br/>
    <img src="${photo.thumbnailUrl}"  />
    `;
    photosContainer.appendChild(div);
  }
}

loadData();
