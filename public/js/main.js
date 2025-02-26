document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
  this.textContent = menu.classList.contains("hidden") ? "☰" : "✕";
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Active State pada Scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#menu a");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${section.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

function toggleAnswer(index) {
  const answers = document.querySelectorAll("#faq p");
  const icons = document.querySelectorAll("#faq h3 span");

  answers.forEach((ans, i) => {
    if (i === index) {
      ans.classList.toggle("hidden");
      icons[i].textContent = ans.classList.contains("hidden") ? "+" : "-";
    } else {
      ans.classList.add("hidden");
      icons[i].textContent = "+";
    }
  });
}
