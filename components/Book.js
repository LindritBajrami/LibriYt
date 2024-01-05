export default function Book(id, div) {
    const api_url =`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyA4x2dGHEc684-r5JrNlhLEWe11ge7PtQ4&q=life&maxResults=2`;

  fetch(api_url)
    .then((response) => response.json())
    .then(data => {
      div.innerHTML =  `
       <div class="row">
           <div class="col-5">
           <img src="${data.volumeInfo.imageLinks.thumbnail}" class="card-img-top" alt="${data.volumeInfo.title}">
           </div>
           <div class="col-5 offset-1">
           <h5 class="mb-3">${data.volumeInfo.title}</h5>
               <p class="mb-4">
               <i class="bi bi-calendar-check "></i> ${data.volumeInfo.publishedDate}
               <br>
               <i class="bi bi-tag"></i> ${data.volumeInfo.categories}
               <br>
               <i class="bi bi-book"></i> ${data.volumeInfo.pageCount}
               </p>
               <a href="/books.html" class="btn  btn-outline-primary"><i class="bi bi-arrow-left"></i>Kthehu te librat</a>
               <button id="add-to-fav" book-id="${data.id}"  class="btn btn-outline-primary ms-3"><i class="bi bi-heart"></i>Shto</>
       </div>
        </div>`
       
    })
}