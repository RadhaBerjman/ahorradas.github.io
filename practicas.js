//Codigo de Pili

const renderUsers = (users) => {
    cleanContainer("#table")
    if (users.length) {
        hideElement(".no-results")
        for (const { id, fullname, email, profession, age } of users) {
            const professionSelected = getData("professions").find(prof => prof.id === profession)
            $("#table").innerHTML += `
                <td>${fullname}</td>
                <td>${email}</td>
                <td>${professionSelected.professionName}</td>
                <td>${age}</td>
                <td>
                    <button class="btn btn-success" onclick="editUserForm('${id}')"><i class="fa-solid fa-pencil"></i></button>
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete-modal" onclick="openDeleteModal('${id}', '${fullname}')"><i class="fa-solid fa-trash"></i></button>
                </td>
            `
        }
    } else {
        showElement(".no-results")
    }
}