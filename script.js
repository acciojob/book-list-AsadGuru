//your JS code here. If required.
// script.js
document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById('submit');
    const bookList = document.getElementById('book-list');

    submitButton.addEventListener('click', function() {
        // Get input values
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;

        // Validate inputs
        if (title === '' || author === '' || isbn === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Create a new table row
        const newRow = document.createElement('tr');

        // Create cells for title, author, isbn, and action
        newRow.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><button class="btn btn-danger delete">Clear</button></td>
        `;

        // Append the new row to the book list
        bookList.appendChild(newRow);

        // Clear the input fields
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';

        // Add event listener for the clear button
        const clearButton = newRow.querySelector('.delete');
        clearButton.addEventListener('click', function() {
            bookList.removeChild(newRow);
        });
    });
});
