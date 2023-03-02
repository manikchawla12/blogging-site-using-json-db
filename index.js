const container = document.querySelector(".blogs");
const search = document.querySelector(".search");

const renderPosts = async (term) => {
  let uri = "https://manikchawla12.github.io/blogging-site-using-json-db/db.json?_sort=likes&_order=desc"; //we used likes for sorting the order

  if (term) {
    uri += `&q=${term}`;    // the 'q' is a key we use while searching something
  }

  const res = await fetch(uri);
  const posts = await res.json();
  //console.log(posts);
  let template = " ";
  posts.forEach((post) => {
    template += `
            <div class="posts">
                <h2>${post.title}</h2>
                <p>by ${post.author}</p>
                <p>${post.body.slice(0, 200)}...</p>
                <p><small>${post.likes} Likes</small></p>
                <a href="./details.html?id=${post.id}">Read more</a>
            </div>
        `;
  });
  container.innerHTML = template;
};

search.addEventListener("submit", (e) => {
  e.preventDefault();
  renderPosts(search.term.value.trim());
});

window.addEventListener("DOMContentLoaded", () => renderPosts());
