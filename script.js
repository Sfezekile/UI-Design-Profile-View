// Get elements
const nameInput = document.querySelector('.input-name');
const emailInput = document.querySelector('.input-email');
const headerName = document.querySelector('.header-name h1');
const headerEmail = document.querySelector('.header-email p');
const emailDisplay = document.querySelector('.email-display');
const saveBtn = document.querySelector('.save-btn');
const cancelBtn = document.querySelector('.cancle-btn');
const logoutBtn = document.querySelector('.log-out-btn');
const supportSwitch = document.querySelector('.switch input');

// Initial values
let originalName = headerName.textContent;
let originalEmail = headerEmail.textContent;

// Update header name in real-time
nameInput.addEventListener('input', () => {
    headerName.textContent = nameInput.value || originalName;
});

// Update header email in real-time
emailInput.addEventListener('input', () => {
    const username = emailInput.value || 'Henrysullivan';
    headerEmail.textContent = username + emailDisplay.textContent;
});

// Save changes (for now, just alert; could save to localStorage)
saveBtn.addEventListener('click', () => {
    originalName = headerName.textContent;
    originalEmail = headerEmail.textContent;
    alert('Changes saved!');
});

// Cancel changes
cancelBtn.addEventListener('click', () => {
    headerName.textContent = originalName;
    headerEmail.textContent = originalEmail;
    nameInput.value = originalName;
    emailInput.value = 'Henrysullivan'; // Reset to placeholder
});

// Log out button
logoutBtn.addEventListener('click', () => {
    alert('Logged out from all devices!');
});

// Support access switch (just toggle, no action for now)
supportSwitch.addEventListener('change', () => {
    console.log('Support access:', supportSwitch.checked ? 'Enabled' : 'Disabled');
});

// View Profile button (placeholder)
document.querySelector('.btn-view .btn').addEventListener('click', () => {
    alert('Viewing profile...');
});