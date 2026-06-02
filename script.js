// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getData, getUserIds, setData } from "./storage.js";

const form = document.querySelector("form");
const userDropDown = document.getElementById("select-user");
const bookmarksList = document.querySelector(".bookmarks-list");

function renderBookmarks(userId) {
  const bookmarks = getData(userId);

  if (!bookmarks || bookmarks.length === 0) {
    bookmarksList.innerHTML = "<p>No bookmarks found for this user.</p>";
    return;
  }

  bookmarksList.innerHTML = "";

  bookmarks.forEach((bookmark) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3><a href="${bookmark.url}" target="_blank">${bookmark.title}</a></h3>
      <p>${bookmark.description}</p>
      <p>Created at: ${bookmark.timeStamp}</p>
      <p>Likes: ${bookmark.likes}</p>
      `;

    bookmarksList.appendChild(div);
  });
}

userDropDown.addEventListener("change", function () {
  renderBookmarks(userDropDown.value);
});

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userId = userDropDown.value;

  if (!userId) {
    bookmarksList.innerHTML = "<p>Please select a user.</p>";
    return;
  }
  const formData = new FormData(form);
  const dataObject = Object.fromEntries(formData);
  const timeStamp = new Date().toISOString();

  const finalObject = { ...dataObject, timeStamp, likes: 0 };
  const existingBookmarks = getData(userId) || [];
  existingBookmarks.push(finalObject);
  setData(userId, existingBookmarks);

  renderBookmarks(userId);
  form.reset();
});

window.onload = function () {
  populateUserDropdown();
};

function populateUserDropdown() {
  const userIds = getUserIds();
  userDropDown.innerHTML = '<option value="">No user selected</option>';

  userIds.forEach((userId) => {
    const option = document.createElement("option");
    option.value = userId;
    option.textContent = userId;
    userDropDown.appendChild(option);
  });
}
