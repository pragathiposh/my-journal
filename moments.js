let images = [];

function uploadImage() {
    const imageUpload = document.getElementById('imageUpload');
    const imageName = document.getElementById('imageName').value;
    const file = imageUpload.files[0];

    if (file && imageName) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const image = { name: imageName, src: e.target.result };
            images.push(image);
            displayImages();
            clearInputs();
        };
        reader.readAsDataURL(file);
    } else {
        alert("Please provide both an image and a name.");
    }
}
function displayImages() {
    const container = document.getElementById('imagesContainer');
    container.innerHTML = '';
    images.forEach((image, index) => {
        const imgDiv = document.createElement('div');
        imgDiv.innerHTML = `
            <h3>${image.name}</h3>
            <img src="${image.src}" alt="${image.name}" width="100">
            <button onclick="deleteImage(${index})">Delete</button>
        `;
        container.appendChild(imgDiv);
    });
}

function clearInputs() {
    document.getElementById('imageUpload').value = '';
    document.getElementById('imageName').value = '';
}

function deleteImage(index) {
    images.splice(index, 1);
    displayImages();
}