document.addEventListener("DOMContentLoaded", function () {
    /*** Handle Gallery Item Clicks ***/
    
    function redirectToOrder(name, image, price) {
        const url = `order.html?name=${encodeURIComponent(name)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}`;
        window.location.href = url;
    }
    /*** Highlight Active Menu Link on Scroll ***/
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    function updateActiveNav() {
        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", updateActiveNav);

    /*** Fade-in Animation for Gallery Items on Scroll ***/
    const galleryItems = document.querySelectorAll(".gallery-item");

    function fadeInOnScroll() {
        galleryItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight - 100;
            if (itemPosition < screenPosition) {
                item.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Trigger initial load

    /*** Hide Navbar on Scroll Down, Show on Scroll Up ***/
    let lastScrollTop = 0;
    const navbar = document.querySelector("header");

    window.addEventListener("scroll", function () {
        let currentScroll = window.scrollY;
        if (currentScroll > lastScrollTop) {
            navbar.style.top = "-80px"; // Hide navbar when scrolling down
        } else {
            navbar.style.top = "0"; // Show navbar when scrolling up
        }
        lastScrollTop = currentScroll;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("vJWjbNfEwIOJqxeUq"); // Replace with your actual Public Key

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form values
        let params = {
            name: document.getElementById("name").value,
            gender: document.getElementById("gender").value,
            email: document.getElementById("email").value,
            address: document.getElementById("address").value,
            contact: document.getElementById("contact").value,
            selected_brew: document.getElementById("contact").value,
            contact: document.getElementById("selected brew").value,
            paymentmethod: document.getElementById("payment").value,
        };

        function goBack() {
            window.location.href = "order.html";
        }
        
        function cancelOrder() {
            alert("Order has been canceled.");
            localStorage.clear();
            window.location.href = "index.html";
        }
        
        // Replace with your Service ID and Template ID
        emailjs.send("service_2gev5dw", "template_tforz43", params)
            .then(function (response) {
                document.getElementById("status-message").innerText = "Email sent successfully!";
            })
            .catch(function (error) {
                document.getElementById("status-message").innerText = "Failed to send email.";
                console.error("EmailJS Error:", error);
            });
    });
});

