//elements

const movie = document.getElementById("movie-container");
const seat = document.querySelectorAll(".row .seat:not(.booked)"); //when we use queryselector only it gives 1st element only if we use queryselecterAll it give all elements in node list

console.log(movie);
console.log(seat);

//global variables

let ticketPrice = 0;
let ticketCounts = 0;
let totalFare = 0;
//events

movie.addEventListener("change", (e) => {
  console.log(e);
  ticketPrice = Number(e.target.value);
  console.log(ticketPrice);
});

seat.addEventListener("click", (e) => {
  e.target;
  console.log(e.target);
});
