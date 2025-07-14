import blogData from "../data.js";

function getPostId() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"), 10);
}

function renderPost() {
  const id = getPostId();
  const post = blogData.find(p => p.id === id);

  if (!post) {
    document.getElementById("post-title").textContent = "Post not found";
    document.getElementById("post-content").innerHTML = "<p>The blog you're looking for does not exist.</p>";
    return;
  }

  document.getElementById("post-title").textContent = post.title;
  document.getElementById("post-date").textContent = post.date;
  document.getElementById("post-content").innerHTML = post.content;

  document.title = `${post.title} | @hoppxi`;

}

document.addEventListener("DOMContentLoaded", renderPost);

