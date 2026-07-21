var firstName = document.getElementById("fName");
var lastName = document.getElementById("lName");
var age = document.getElementById("age");
var submitBtn = document.getElementById("submit-button");
var clearBtn = document.getElementById("clear-button");
var yesRadio = document.getElementById("yes");
var noRadio = document.getElementById("no");
var tableBody = document.querySelector(".table tbody");
var searchInput = document.getElementById("name-search");
var gradSearch = document.getElementById("grad-filter");

var userData = [];

let editMode = false;
let globalIndex;

if (localStorage.getItem("userList")) {
    userData = JSON.parse(localStorage.getItem("userList"));
}
//def val here
function drawTable(dataToDraw = userData) {
    tableBody.innerHTML = " ";
    if (dataToDraw.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" class="empty-state">
                    <div class="empty-content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-inbox" viewBox="0 0 16 16">
                          <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625A.5.5 0 0 1 16 8.5V13a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5a.5.5 0 0 1 .128-.344l3.7-4.625zM1 8.5v4.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5h-4.134a2.5 2.5 0 0 1-4.732 0H1z"/>
                        </svg>
                        <p>No users found!</p>
                    </div>
                </td>
            </tr>
        `;
        return;
    }
//index to delete and edit here 
    dataToDraw.forEach((user, index) => {
        tableBody.innerHTML += `<tr>
            <th scope="row">${index + 1}</th>
            <td>${user.fName}</td>
            <td>${user.lName}</td>
            <td>${user.age}</td>
            <td>${user.gradStatus}</td>
            <td class="action-buttons">
                <button onclick="editUser(${index})" class="btn edit-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>
                </button>
                <button onclick="deleteUser(${index})" class="btn delete-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                </button>
            </td>
            </tr>`
    })
}

drawTable();

function deleteUser(index) {
    userData.splice(index, 1);
    localStorage.setItem("userList", JSON.stringify(userData));
    drawTable();
}

clearBtn.addEventListener("click", () => {
    userData.splice(0, userData.length);
    localStorage.removeItem("userList");
    drawTable();
})


function editUser(index) {
    firstName.value = userData[index].fName;
    lastName.value = userData[index].lName;
    age.value = userData[index].age;

    if (userData[index].gradStatus === "yes") {
        yesRadio.checked = true;
    } else if (userData[index].gradStatus === "no") {
        noRadio.checked = true;
    } else {
        yesRadio.checked = false;
        noRadio.checked = false;
    }

    submitBtn.innerHTML = "Update";
    submitBtn.style.backgroundColor = "#3aa483";
    editMode = true;
    globalIndex = index;
}

submitBtn.addEventListener("click", () => {
    var graduatedState = "not specified";
    if (yesRadio.checked) {
        graduatedState = "yes";
    } else if (noRadio.checked) {
        graduatedState = "no";
    }

    if (firstName.value.trim() === "" || lastName.value.trim() === "" || age.value.trim() === "") {
        alert("Please fill in all required fields!");
        return;
    }

    var newUser = {
        fName: firstName.value,
        lName: lastName.value,
        age: age.value,
        gradStatus: graduatedState
    };

    if (editMode === true) {
        userData[globalIndex] = newUser;
        editMode = false;
        submitBtn.innerHTML = "submit";
        submitBtn.style.backgroundColor = "#1a252f";
    } else {
        userData.push(newUser);
    }

    
    localStorage.setItem("userList", JSON.stringify(userData));
    drawTable();
    
    firstName.value = "";
    lastName.value = "";
    age.value = "";
    yesRadio.checked = false;
    noRadio.checked = false;
});

function filterData() {
    var searchValue = searchInput.value.toLowerCase();
    var grade = gradSearch.value;
    var finalFilteredUsers = userData.filter((user) => {
        var firstNameMatch = user.fName.toLowerCase().includes(searchValue);
        var lastNameMatch = user.lName.toLowerCase().includes(searchValue);
        var isNameMatching = firstNameMatch || lastNameMatch;
        var isGradMatching = (grade === "all") || (user.gradStatus === grade);

        return isNameMatching && isGradMatching;
    });

    drawTable(finalFilteredUsers);
}

searchInput.addEventListener("input", filterData);
gradSearch.addEventListener("change", filterData);

//found bug when two functions separared //
    // searchInput.addEventListener("input", () => {
    //     var searchValue = searchInput.value.toLowerCase();
    //     var filteredUsers = userData.filter((user) => {
    //         var firstNameMatch = user.fName.toLowerCase().includes(searchValue);
    //         var lastNameMatch = user.lName.toLowerCase().includes(searchValue);
    //         return firstNameMatch || lastNameMatch;
    //     });
    //     drawTable(filteredUsers);
    // });
    // gradSearch.addEventListener("change", () => {
    //     var grade = gradSearch.value;
    //     var filteredGrade = userData.filter((user) => {
    //         if (grade === "all") {
    //             return true;
    //         }
    //         return user.gradStatus === grade;
    //     })
    //     drawTable(filteredGrade);
    // })