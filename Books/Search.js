const webpages = [
  "Books.html",
  "page2.html",
  "page3.html",
  "page4.html",
  // add more web 
];


const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    search(searchTerm);
  }
});


function search(searchTerm) {
  webpages.forEach(page => {
    fetch(page)
      .then(response => response.text())
      .then(data => {
        if (data.includes(searchTerm)) {
          console.log(`Found "${searchTerm}" in ${page}`);
        }
      })
      .catch(error => console.error(error));
  });
}