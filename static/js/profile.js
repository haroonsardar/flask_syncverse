function editProfile() {
    document.querySelector('.profile-edit').style.display = 'block';
    document.querySelector('.edit-profile-button').style.display = 'none';
}

function saveProfile() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    document.getElementById('user-name').textContent = name;
    document.getElementById('user-email').textContent = email;

    document.querySelector('.profile-edit').style.display = 'none';
    document.querySelector('.edit-profile-button').style.display = 'block';
}