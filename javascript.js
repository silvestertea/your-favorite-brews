document.addEventListener("DOMContentLoaded", function () {
    // Toggle Navbar Menu
    const menu = document.querySelector(".nav-links");
    document.querySelector(".hamburger").addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Gallery Fullscreen View
    const fullscreen = document.createElement("div");
    fullscreen.classList.add("fullscreen");
    fullscreen.innerHTML = `<img><span class="close-btn">&times;</span>`;
    document.body.appendChild(fullscreen);

    const fullImg = fullscreen.querySelector("img");
    const closeBtn = fullscreen.querySelector(".close-btn");

    document.querySelector(".gallery-container").addEventListener("click", function (e) {
        if (e.target.tagName === "IMG") {
            fullImg.src = e.target.src;
            fullscreen.style.display = "flex";
        }
    });

    // Close fullscreen when clicking outside or on the close button
    fullscreen.addEventListener("click", function (e) {
        if (e.target !== fullImg || e.target === closeBtn) {
            fullscreen.style.display = "none";
        }
    });

    // Search Function (Placeholder Example)
    document.querySelector(".search-box button").addEventListener("click", function () {
        const query = document.getElementById("search").value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
        }
    });
});
