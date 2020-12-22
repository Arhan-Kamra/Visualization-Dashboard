/* eslint-disable no-unused-vars */
// Fetch the html resource to dynamically load it on the page
const htmlResourceUrl = 'resources/data/extra__data.txt';
const fetchBtn = document.querySelector('.fetch');
fetchBtn.style.display = 'block';
const aboutPlaceholder = document.querySelector('.about');

function fetchData() {
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

const fetchData2 = function () {
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
