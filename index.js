//part1
const book = {
  title: "JavaScript: The Definitive Guide",
  author: "David Flanagan",
  publishedYear: 2020,
  gener: "Programming",
};

//part2
console.log(`${book.title} - ${book["publishedYear"]}`);
book.pageCount = 1096;
//console.log(book);
book.publishedYear = 2021;
//console.log(book);
book.author = ["David Flanagan", "Author Author"];
//console.log(book);

//part3
/*
{
reviewr:"Book Critic",
Comment:"A Comprehensive guide to JavaScript"
}
*/
book.reviews = [
  { reviewr: "Book Critic", Comment: "A Comprehensive guide to JavaScript" },
];
//console.log(book);
console.log(book.reviews[0].reviewr);
