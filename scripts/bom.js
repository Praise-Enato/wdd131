const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
  // Check if the input is not blank
  if (input.value.trim() !== '') {
    // Create a new list item
    const li = document.createElement('li');
    // Create a delete button
    const deleteButton = document.createElement('button');

    // Populate the li element with the input value
    li.textContent = input.value;
    // Populate the delete button with a ❌
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    // Add an aria-label for accessibility
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

    // Append the delete button to the li element
    li.append(deleteButton);
    // Append the li element to the unordered list
    list.append(li);

    // Add an event listener to the delete button to remove the li element when clicked
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      // Set focus back to the input field
      input.focus();
    });

    // Clear the input field
    input.value = '';
  } else {
    // If the input is blank, provide a message or do nothing and return focus to the input field
    alert('Please enter a Book of Mormon chapter.');
  }
  // Set focus back to the input field whether or not a list item was created
  input.focus();
});