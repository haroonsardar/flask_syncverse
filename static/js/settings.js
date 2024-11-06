// Function to apply the saved theme
function applyTheme() {
    const theme = localStorage.getItem('theme');
    const mainContainer = document.getElementById('main-container');
    const sidebar = document.getElementById('sidebar');
    const settingsSection = document.getElementById('settings-section');

    if (theme === 'dark') {
        mainContainer.classList.add('dark-mode');
        sidebar.classList.add('dark-mode');
        settingsSection.classList.add('dark-mode');
        document.getElementById('theme').value = 'dark';
    } else {
        mainContainer.classList.remove('dark-mode');
        sidebar.classList.remove('dark-mode');
        settingsSection.classList.remove('dark-mode');
        document.getElementById('theme').value = 'light';
    }
}

// Function to change the theme
function changeTheme() {
    const mainContainer = document.getElementById('main-container');
    const sidebar = document.getElementById('sidebar');
    const settingsSection = document.getElementById('settings-section');
    const selectedTheme = document.getElementById('theme').value;

    if (selectedTheme === 'dark') {
        mainContainer.classList.add('dark-mode');
        sidebar.classList.add('dark-mode');
        settingsSection.classList.add('dark-mode');
    } else {
        mainContainer.classList.remove('dark-mode');
        sidebar.classList.remove('dark-mode');
        settingsSection.classList.remove('dark-mode');
    }
}

// Function to save settings
function saveSettings() {
    const theme = document.getElementById('theme').value;
    localStorage.setItem('theme', theme);
    alert(`Settings saved! Current theme: ${theme}`);
}

// Apply theme on page load
window.onload = applyTheme;