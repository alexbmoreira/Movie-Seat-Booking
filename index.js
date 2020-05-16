const container = document.querySelector(".container");
const seat = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movie_select = document.getElementById("movies");
const ticket_price = +movie_select.value;

container.addEventListener("click", function (e)
{
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied"))
    {
        e.target.classList.toggle("selected")
    }
});