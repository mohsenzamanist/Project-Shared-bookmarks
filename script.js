// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getData, getUserIds, setData } from "./storage.js";

const form = document.querySelector("form");
const userDropDown = document.getElementById("select-user");
const bookmarksList = document.querySelector(".bookmarks-list");

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userId = "1";
  if (!userId) {
    bookmarksList.innerHTML = "<p>Please select a user.</p>";
    return;
  }
  const formData = new FormData(form);
  const dataObject = Object.fromEntries(formData);
  const timeStamp = new Date().toISOString();

  const finalObject = { ...dataObject, timeStamp };
  const existingBookmarks = getData(userId) || [];
  existingBookmarks.push(finalObject);
  setData(userId, existingBookmarks);
});

window.onload = function () {
  populateUserDropdown();
};

function populateUserDropdown() {
  const userSelect = document.getElementById("select-user");
  const userIds = getUserIds();

  userIds.forEach((userId) => {
    const option = document.createElement("option");
    option.value = userId;
    option.textContent = userId;
    userSelect.appendChild(option);
  });
}
