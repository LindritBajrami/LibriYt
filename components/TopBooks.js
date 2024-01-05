export default function TopBooks(div) {
  const api_url =`https://www.googleapis.com/books/v1/volumes?key=AIzaSyA4x2dGHEc684-r5JrNlhLEWe11ge7PtQ4&q=beatyfull&maxResults=20`;

  fetch(api_url)
    .then((response) => response.json())
    .then((data) => {
      const books = data.items;
      const top_books = books.slice(0, 8);
      let books_html = `<div class="row">`;
      top_books.forEach(b => books_html += `
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
  </div>`
     );
        books_html += `</div>`
        div.innerHTML = books_html
    });
}
