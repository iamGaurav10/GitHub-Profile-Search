let input = document.querySelector(".customInput")

function getUserDetails() {
  input.addEventListener("keypress", async function (e) {
    if (e.key == "Enter") {
      e.preventDefault();
      let username = input.value;

      const url = `https://api.github.com/users/${username}`;

      const raw = await fetch(url);
      const data = await raw.json();
      console.log(data);

      createUserCard(data);
    }
  });
}


function createUserCard(data) {
  console.log(data);

  const name = document.querySelector("#name");
  name.textContent = data.name;

  const description = document.querySelector("#description");
  description.textContent = data.bio;

  const img = document.querySelector("img");
  img.setAttribute("src", data.avatar_url);

  const followers = document.querySelector("#followers");
  followers.textContent = data.followers;

  const following = document.querySelector("#following");
  following.textContent = data.following;

  const repos = document.querySelector("#repos");
  repos.textContent = data.public_repos;

  const twitter = document.querySelector("#twitter");
  twitter.textContent = data.twitter_username;

  const location = document.querySelector("#location");
  location.textContent = data.location;
}


getUserDetails();