const form = document.getElementById('mailform');
const fileInput = document.getElementById('attachment');
const statusDiv = document.getElementById('status');
const fileNameDisplay = document.getElementById('file-name');
const imagePreview = document.getElementById('image-preview');

fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = fileInput.files[0].name;
        const file = fileInput.files[0];
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            imagePreview.style.display = 'none';
        }
    } else {
        fileNameDisplay.textContent = 'No file chosen';
        imagePreview.style.display = 'none';
    }
});


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusDiv.textContent = 'Sending...';
    statusDiv.className = '';

    const formData = new FormData(form);
    try {
        const response = await fetch('/sendmail/', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
            }
        });
        const result = await response.json();
        if (response.ok) {
            statusDiv.textContent = 'Email sent successfully!';
            statusDiv.className = 'success';
            form.reset();
            fileNameDisplay.textContent = 'No file chosen';
            imagePreview.style.display = 'none';
        } else {
            statusDiv.textContent = `Error: ${result.error}`;
            statusDiv.className = 'error';
        }
    } catch (error) {
        statusDiv.textContent = `Error: ${error.message}`;
        statusDiv.className = 'error';
    }
});
