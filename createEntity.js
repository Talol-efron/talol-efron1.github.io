function createEntityComponent(url, imageUrl, altText = '') {
    return `
        <div class="entity">
            <div class="picture">
                <a href="${url}">
                    <img src="${imageUrl}" alt="${altText}">
                </a>
            </div>
        </div>
    `;
}

const books = [
    { url: 'book_html/namiya.html', imageUrl: 'https://github.com/Talol-efron/talol-efron1.github.io/blob/master/book_img/namiya.jpg?raw=true'},
    { url: 'book_html/hennaie.html', imageUrl: 'https://github.com/Talol-efron/talol-efron1.github.io/blob/master/book_img/hennaie.jpg?raw=true' },
    { url: 'book_html/konbini.html', imageUrl: 'https://github.com/Talol-efron/talol-efron1.github.io/blob/master/book_img/konbini.jpg?raw=true' },
    { url: 'book_html/bokuai.html',  imageUrl: "https://github.com/Talol-efron/talol-efron1.github.io/blob/master/book_img/bokuai.jpg?raw=true"  },
    { url: "book_html/driver.html",  imageUrl: "https://github.com/Talol-efron/talol-efron1.github.io/blob/master/book_img/Driver.jpg?raw=true"  },
    { url: "book_html/tegami.html", imageUrl: "https://github.com/Talol-efron/talol-efron1.github.io/blob/master/book_img/Tegami.jpg?raw=true"   },
    { url: "book_html/time_limit.html", imageUrl: "https://github.com/Talol-efron/talol-efron1.github.io/blob/master/book_img/time_limit.jpg?raw=true"  },
    { url: "book_html/think_experiment.html", imageUrl: "https://github.com/Talol-efron/talol-efron1.github.io/blob/master/book_img/think_experiment.jpg?raw=true" },
    { url: "book_html/die_with_zero.html", imageUrl: "https://github.com/Talol-efron/talol-efron1.github.io/blob/master/book_img/die_with_zero.jpg?raw=true"}
];

const listElement = document.querySelector('.list');
books.forEach(book => {
    listElement.innerHTML += createEntityComponent(book.url, book.imageUrl);
});
