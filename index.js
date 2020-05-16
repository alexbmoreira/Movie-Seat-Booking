const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movie_select = document.getElementById("movies");
let ticket_price = +movie_select.value;

loadMovieData();

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

function loadMovieData()
{
    const selected_seats = JSON.parse(localStorage.getItem("seats"));
    const index = localStorage.getItem("movie_index");
    const price = localStorage.getItem("movie_price");

    if (selected_seats != null && selected_seats.length > 0)
    {
        seats.forEach(function (seat, index)
        {
            if (selected_seats.indexOf(index) !== -1)
            {
                seat.classList.toggle("selected");
            }
        });
    }

    movie_select.selectedIndex = index
    updateCount();
}