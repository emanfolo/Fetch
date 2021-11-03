const fetchGitHubRepo = require("./fetchgithubrepo");

const button = document.querySelector("#button");
let text = document.querySelector("#input");

let title = document.querySelector("#title");
let stars = document.querySelector("#stars");
let forks = document.querySelector("#forks");
let language = document.querySelector("#language");
let picSpace = document.querySelector("#pic");
let pic = document.createElement("IMG");
let address = document.createElement("LINK");

button.addEventListener("click", () => {
  fetchGitHubRepo(text.value, (repoData) => {
    console.log(repoData);
    title.innerText = repoData.full_name;
    stars.innerText = repoData.stargazers_count;
    forks.innerText = repoData.forks_count;
    language.innerText = repoData.language;
    pic.setAttribute("src", repoData.owner.avatar_url);
    picSpace.prepend(pic);
    address.setAttribute("href", repoData.html_url);
  });
});