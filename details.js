const container = document.querySelector(".details");
const id = new URLSearchParams(window.location.search).get("id");
const deleteBtn = document.querySelector(".deleteBtn");

const renderDetails = async () => {
  const res = await fetch("http://localhost:3000/posts/" + id);
  const post = await res.json();
  //console.log(post);

  const template = `
    <div class="single-post">
        <h2>${post.title}</h2>
        <p>by ${post.author}</p>
        <p>${post.body}</p>
        <a href="/index.html">Previous Page</a>
        
    </div>
`;

  container.innerHTML = template;
};

deleteBtn.addEventListener("click", async (e) => {
  const res = await fetch("http://localhost:3000/posts/" + id, {
    method: "DELETE",
  });
  window.location.replace("/index.html");
});

window.addEventListener("DOMContentLoaded", () => renderDetails());
