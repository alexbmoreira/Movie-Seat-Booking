const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movie_select = document.getElementById("movies");
let ticket_price = +movie_select.value;

container.addEventListener("click", function (e)
{
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied"))
    {
        e.target.classList.toggle("selected");

        updateCount();
    }
});

movie_select.addEventListener("change", function (e)
{
    ticket_price = +e.target.value;

    updateCount();
});

function updateCount()
{
    const selected = document.querySelectorAll(".row .seat.selected");

    const selected_count = selected.length;
    count.innerText = selected_count;

    total.innerText = selected_count * ticket_price;

    // Copy selected seats
    // Map through array
    // Return new array of indexes
    const seats_index = [...selected].map(seat => [...seats].indexOf(seat));

    saveMovieData(seats_index, movie_select.selectedIndex, ticket_price);
}

function saveMovieData(selected_seats, index, price)
{
    localStorage.setItem("seats", JSON.stringify(selected_seats));
    localStorage.setItem("movie_index", index);
    localStorage.setItem("movie_price", price);
}