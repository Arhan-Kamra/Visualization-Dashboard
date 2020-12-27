/* eslint-disable no-unused-vars */
// Fetch the html resource to dynamically load it on the page
const htmlResourceUrl = 'resources/data/extra__data.txt';
const fetchBtn = document.querySelector('.fetch');
fetchBtn.style.display = 'block';
const aboutPlaceholder = document.querySelector('.about');

function fetchText() {
  const response = fetch(htmlResourceUrl);
  response
    .then((data) => data.text())
    .then((resp) => {
      aboutPlaceholder.innerHTML = resp;
      fetchBtn.style.display = 'none';
    })
    .catch(
      (error) =>
        (aboutPlaceholder.innerHTML = `data could not be fetched due to Error: ${error}`)
    );
}

const htmlResourceUrl2 = 'resources/data/some__data.json';
const fetchBtn2 = document.querySelector('.fetch2');
fetchBtn2.style.display = 'block';
const aboutPlaceholder2 = document.querySelector('.about2');

const fetchTable = function () {
  const response = fetch(htmlResourceUrl2);
  response
    .then((data) => data.json())
    .then((resp) => {
      let li = `<thead><tr><th>Id</th><th>Name</th><th>Username</th><th>Email</th></tr></thead>`;
      resp.forEach((user) => {
        li += `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.username}</td><td>${user.email}</tr>`;
      });
      aboutPlaceholder2.innerHTML = li;
      fetchBtn2.style.display = 'none';
    })
    .catch(
      (error) =>
        (aboutPlaceholder2.innerHTML = `data could not be fetched due to Error: ${error}`)
    );
};

const str = document.querySelector('.str');
const find = document.querySelector('.find');
const find2 = document.querySelector('.find2');
const regex2 = /i/g;
function findText() {
  if (regex2.test(str)) {
    find.innerHTML =
      "<b>here are your instances of 'i''s in the above paragraph</b>";
  }
}

let count = 0;

function addon() {
  find2.innerHTML = `<em class="p-2 lead font-weight-bold bg-light">${count} is my favorite number</em>`;
}

(function stopCount(addIt) {
  const time = 3;
  const interval = setInterval(() => {
    find2.innerHTML = count;
    // eslint-disable-next-line no-plusplus
    count++;
  }, time);

  setInterval(() => {
    if (count === 360) {
      clearInterval(interval);
      addIt();
    }
  }, time);
})(addon);

// eslint-disable-next-line no-unused-expressions
!(function autoClickBtn() {
  const time = 3000;
  const timeTwice = 5000;
  setTimeout(() => {
    fetchBtn.click();
  }, time);

  setTimeout(() => {
    fetchBtn2.click();
  }, timeTwice);
})();
