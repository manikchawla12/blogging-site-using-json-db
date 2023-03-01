const form = document.querySelector("form");

const createPost = async (e) => {
  e.preventDefault();

  const record = {
    title: form.title.value,
    author: form.author.value,
    body: form.body.value,
    likes: 0,
  };

  await fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify(record),
    headers: { "Content-Type": "application/json" },
  });

  window.location.replace("/");
};

form.addEventListener("submit", createPost);
