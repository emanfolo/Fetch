(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // fetchgithubrepo.js
  var require_fetchgithubrepo = __commonJS({
    "fetchgithubrepo.js"(exports, module) {
      fetchGithubRepo = (repoName, onDataFetched) => {
        fetch(`https://api.github.com/repos/${repoName}`).then((response) => response.json()).then((jsonData) => {
          onDataFetched(jsonData);
        });
      };
      module.exports = fetchGithubRepo;
    }
  });

  // index.js
  var fetchGitHubRepo = require_fetchgithubrepo();
  var button = document.querySelector("#button");
  var text = document.querySelector("#input");
  var title = document.querySelector("#title");
  var stars = document.querySelector("#stars");
  var forks = document.querySelector("#forks");
  var language = document.querySelector("#language");
  var picSpace = document.querySelector("#pic");
  var pic = document.createElement("IMG");
  var address = document.createElement("LINK");
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
})();
