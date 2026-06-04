# Testing

- The website must contain a drop-down which lists five users
  -Tested manually by loading the application and confirming that users 1, 2, 3, 4 and 5 appear in the dropdown menu.

- Selecting a user must display the list of bookmarks for the relevant user
  - Tested manually by selecting different users and confirming that only bookmarks belonging to the selected user are displayed.

- If there are no bookmarks for the selected user, a message is displayed
  - Tested manually by clearing bookmarks for a user and confirming that the message "No bookmarks found for this user." appears.

- The list of bookmarks must be shown in reverse chronological order
  - Unit tests in utils.test.js.

- Each bookmark has a title, description and created at timestamp displayed
  - Tested manually by creating a bookmark and confirming that all three fields are visible.

- Each bookmark’s title is a link to the bookmark’s URL
  - Tested manually by clicking the bookmark title and confirming that the correct URL opens.

- Each bookmark's "Copy to clipboard" button must copy the URL of the bookmark
  - Tested manually by clicking the Copy button and pasting the clipboard contents into a text editor.

- Each bookmark's like counter works independently, and persists data across sessions
  - Tested manually by liking multiple bookmarks, refreshing the page and confirming that each bookmark retains its own like count.

- The website must contain a form with inputs for a URL, a title, and a description
  - Tested manually by inspecting the form and confirming that all required inputs are present.

- Submitting the form adds a new bookmark for the relevant user only
  - Tested manually by creating a bookmark for one user and confirming that it does not appear for other users.

- After creating a new bookmark, the list of bookmarks for the current user is shown
  - Tested manually by creating a bookmark and confirming that it appears immediately in the bookmark list.

- The website must score 100 for accessibility in Lighthouse
  - Tested using Lighthouse in Microsoft Edge. Accessibility score: 100.

- Unit tests must be written for at least one non-trivial function
  - Unit tests in utils.test.js.
