document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const imagePreviewContainer = document.getElementById('imagePreviewContainer');
    const imagePreview = document.getElementById('imagePreview');
    
    if (file) {
        // Create a URL for the image file
        const objectURL = URL.createObjectURL(file);
        imagePreview.src = objectURL;
        
        // Show the image preview container
        imagePreviewContainer.style.display = 'block';
    } else {
        // Hide the image preview if no file is selected
        imagePreviewContainer.style.display = 'none';
    }
});