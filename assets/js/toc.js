document.addEventListener("DOMContentLoaded", () => {
  const toc = document.getElementById("toc");
  if (!toc) return;

  const headings = document.querySelectorAll(
    ".post-content h2, .post-content h3"
  );

  if (!headings.length) return;

  headings.forEach((heading, index) => {
    if (!heading.id) {
      heading.id = "section-" + index;
    }

    const li = document.createElement("li");
    li.className = heading.tagName.toLowerCase();

    const a = document.createElement("a");
    a.href = "#" + heading.id;
    a.textContent = heading.textContent;

    li.appendChild(a);
    toc.appendChild(li);
  });

  const toggle = document.querySelector(".toc-toggle");
  toggle.addEventListener("click", () => {
    toc.classList.toggle("open");
    toggle.classList.toggle("open");
  });
});
