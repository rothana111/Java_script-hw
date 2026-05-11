const API_URL = "https://api.tvmaze.com/shows/30/episodes";

let allMovies = [];

// ================= LOADER =================
function showLoader() {
    document.getElementById("loader-container").style.display = "flex";
}

function hideLoader() {
    document.getElementById("loader-container").style.display = "none";
}

// ================= LOAD MOVIES =================
async function loadMovies() {
    showLoader();

    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        allMovies = data;
        renderTable(allMovies);

    } catch (error) {
        console.log(error);
        alert("Error loading movies");
    } finally {
        hideLoader();
    }
}

// ================= RENDER =================
function renderTable(data) {
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    data.forEach((m, i) => {
        tableBody.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${m.name}</td>
                <td>${m.type}</td>
                <td>
                    <img src="${m.image?.medium}" width="80">
                </td>
                <td>${m.airdate || "-"}</td>
                <td>${m.runtime || "-"} min</td>
                <td>${m.rating?.average || "-"}</td>
            </tr>
        `;
    });
}

// ================= SEARCH =================
function searchMovies() {
    let value = document.getElementById("txtSearch").value.toLowerCase();

    let filtered = allMovies.filter(m =>
        m.name.toLowerCase().includes(value)
    );

    renderTable(filtered);
}


// auto load
document.addEventListener("DOMContentLoaded", loadMovies);