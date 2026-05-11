const API_URL = "https://api.tvmaze.com/shows/30/episodes";

const itemsPerPage = 10;

let allMovies = [];
let currentPage = 1;
let totalPages = 1;

// DOM
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const pageNumbers = document.getElementById("page-numbers");

// ================= LOAD DATA =================
async function loadMovies() {
    const res = await fetch(API_URL);
    const data = await res.json();

    allMovies = data;
    totalPages = Math.ceil(allMovies.length / itemsPerPage);

    renderTable(currentPage);
    updatePagination();
}

// ================= RENDER TABLE =================
function renderTable(page) {

    let tableBody = document.getElementById("myTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const pageData = allMovies.slice(startIndex, endIndex);

    pageData.forEach((m, i) => {

        tableBody.innerHTML += `
            <tr>
                <td>${startIndex + i + 1}</td>
                <td>${m.name}</td>
                <td>${m.type}</td>
                <td><img src="${m.image?.medium}" width="70"></td>
                <td>${m.airdate || "-"}</td>
                <td>${m.runtime || "-"}</td>
                <td>${m.rating?.average || "-"}</td>
            </tr>
        `;
    });
}

// ================= PAGINATION =================
function updatePagination() {
    pageNumbers.textContent = `Page ${currentPage} of ${totalPages}`;

    prevButton.classList.toggle("disabled", currentPage === 1);
    nextButton.classList.toggle("disabled", currentPage === totalPages);
}

// ================= EVENTS =================
prevButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (currentPage > 1) {
        currentPage--;
        renderTable(currentPage);
        updatePagination();
    }
});

nextButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (currentPage < totalPages) {
        currentPage++;
        renderTable(currentPage);
        updatePagination();
    }
});

// auto load
document.addEventListener("DOMContentLoaded", loadMovies);