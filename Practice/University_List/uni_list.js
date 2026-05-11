const API_URL = "http://universities.hipolabs.com/search?country=cambodia";

let deleteId = null;
let universityData = [];

async function loadUniversities() {
    try {
        const res = await fetch(API_URL);
        universityData = await res.json();

        renderTable(universityData);
    } catch (err) {
        console.log(err);
    }
}

function renderTable(data) {
    const tbody = $("#myTableBody");
    tbody.empty();

    $.each(data, function (index, item) {

        let row = `
        <tr>
            <td class="text-center">${index + 1}</td>
            <td>${item.name}</td>
            <td><a href="${item.web_pages[0]}" target="_blank">${item.web_pages[0]}</a></td>
            <td class="text-center">${item.country}</td>

            <td class="text-center">
                <button class="btn btn-success btn-sm btn-onoff">On/Off</button>
            </td>

            <td class="text-center">
                <button class="btn btn-danger btn-sm btn-delete" data-id="${index}">Delete</button>
            </td>

            <td class="text-center">
                <button class="btn btn-primary btn-sm btn-edit" data-id="${index}">Edit</button>
            </td>
        </tr>
        `;

        tbody.append(row);
    });
}



$(document).on("click", "#btnShow", function () {
    loadUniversities();
});


$(document).on("click", ".btn-delete", function () {
    deleteId = $(this).data("id");
    $("#deleteModal").modal("show");
});

$("#confirmDelete").click(function () {
    if (deleteId !== null) {
        universityData.splice(deleteId, 1);
        renderTable(universityData);
        $("#deleteModal").modal("hide");
    }
});


$(document).on("click", ".btn-onoff", function () {
    $(this).toggleClass("btn-success btn-secondary");
});


$(document).on("click", ".btn-edit", function () {
    let id = $(this).data("id");
    alert("Edit university: " + universityData[id].name);
});