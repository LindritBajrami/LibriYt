function getQueryStringFromURL(url) {
  const url_parts = url.split("?");
  const qa_index = url_parts.length - 1;
  return url_parts[qa_index];
}

function displayBooks(page, div) {
  const api_url = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyA4x2dGHEc684-r5JrNlhLEWe11ge7PtQ4&q=beautiful&orderBy=newest&maxResults=12&startIndex=${page}`;
  fetch(api_url)
    .then((response) => response.json())
    .then((data) => {
      const books = data.items;
      let books_html = `<div class="row">`;
      books.forEach(
        (b) =>
          (books_html += `
      <div class="col-3">
      <div class="card mb-5" >
          <img src="${b.volumeInfo.imageLinks.thumbnail}" alt="..." style="height:400px">
          <div class="card-body" style="height:220px">
              <h5 class="card-title">${b.volumeInfo.title}</h5>
              <p class="card-text">
              <i class="bi bi-calendar-check"></i> ${b.volumeInfo.publishedDate}
              <br>
              <i class="bi bi-tag"></i> ${b.volumeInfo.authors}
              <br>
              <i class="bi bi-book"></i> ${b.volumeInfo.pageCount}
              </p>
              
              <a href="books-details.html?id=${b.id}" class="btn btn-outline-primary"><i class="bi bi-arrow-right"></i></a>
          </div>
      </div>
  </div>`)
      );
      books_html += `</div>`;
      div.innerHTML = books_html;
    });
}

// function addToFav(book) {
//     const books = localStorage.getItem('favbooks') == null ? [] : JSON.parse(localStorage.getItem('favbooks'))
//     if(books.length > 0) {

//     }
// }

function getFavBooks() {
    return localStorage.getItem('favbooks') == null ? [] : JSON.parse(localStorage.getItem('favbooks'))
}

function isValid(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return email.match(regex) !== null
}
