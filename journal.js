let entries = [];

function saveEntry() {
    const title = document.getElementById('entryTitle').value;
    const content = document.getElementById('entryContent').value;

    if (title && content) {
        const entry = { title, content };
        entries.push(entry);
        displayEntries();
        clearInputs();
    } else {
        alert("Please provide both title and content.");
    }
}
function displayEntries() {
    const container = document.getElementById('entriesContainer');
    container.innerHTML = '';
    entries.forEach((entry, index) => {
        const entryDiv = document.createElement('div');
        entryDiv.innerHTML = `
            <h3>${entry.title}</h3>
            <p>${entry.content}</p>
            <button onclick="editEntry(${index})">Edit</button>
            <button onclick="deleteEntry(${index})">Delete</button>
        `;
        container.appendChild(entryDiv);
    });
}
function clearInputs() {
    document.getElementById('entryTitle').value = '';
    document.getElementById('entryContent').value = '';
}

function editEntry(index) {
    const entry = entries[index];
    document.getElementById('entryTitle').value = entry.title;
    document.getElementById('entryContent').value = entry.content;
    deleteEntry(index); // Remove the original entry after loading it for editing.
}

function deleteEntry(index) {
    entries.splice(index, 1);
    displayEntries();
}