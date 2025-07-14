import blogData from "../data.js";

function renderBlogCard({ id, title, image, date, type }) {
	const card = document.createElement("div");
	card.className = "card";
	card.setAttribute("data-href", `view.html?id=${id}`);
	card.style.gap = "1.5rem";

	card.innerHTML = `
		<img src="${image}" alt="Blog logo" style="width: 100px; height: 100px;" />
		<div class="text">
			<h2 style="font-size: 1.5rem; font-weight: 600; color: var(--md-sys-color-on-surface); margin-bottom: 0.25rem;">
				${title}
			</h2>
			<p style="color: var(--md-sys-color-on-surface-variant); font-size: 0.95rem; display: flex; align-items: center; gap: 0.5rem;">
				<i class="fas fa-${type === "blog" ? "blog" : "code"}" style="vertical-align: middle;"></i>
				${type} · 
				<i class="fas fa-calendar" style="vertical-align: middle;"></i>
				${date} views
			</p>
		</div>
	`;

	return card;
}

const container = document.getElementById("blog-container");
blogData.forEach(blog => {
	const card = renderBlogCard(blog);
	container.appendChild(card);
});

container.addEventListener("click", (e) => {
	const card = e.target.closest(".card");
	if (card && card.dataset.href) {
		window.location.href = card.dataset.href;
	}
});