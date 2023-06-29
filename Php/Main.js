
const baseURL = "https://api.themoviedb.org/3";
const apiKey = "633e13feb64782177da6da3e1f6b1dc2";

$(document).ready(() => {
  const searchForm = $("#searchForm");
  searchForm.submit((event) => {
    event.preventDefault();
    const searchQuery = $("#searchInput").val();
    const url = `${baseURL}/search/movie?api_key=${apiKey}&query=${searchQuery}`;

    $.get(url)
      .done((data) => {
        const results = data.results;
        const searchResultsDiv = $("#searchResults");
        searchResultsDiv.empty();
        if (results.length === 0) {
          searchResultsDiv.append("<p>No results found</p>");
          return;
        }
        results.forEach((result) => {
          const posterURL = `https://image.tmdb.org/t/p/w185${result.poster_path}`;
          const linkURL = `movie.html?id=${result.id}`;

          const resultDiv = $(`<a href="${linkURL}" target="_blank"><div><img src="${posterURL}">${result.title}</div></a>`);
          searchResultsDiv.append(resultDiv);
        });
      })
      .fail(() => {
        $("#searchResults").append("<p>Error fetching search results</p>");
      });
  });
});




