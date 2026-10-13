// JS scripts placed here


function nextPage(pageId) {
    // Hide all quiz pages
    document.querySelectorAll(".thankyou-page, .hero-page, .question-page").forEach(page => {
        page.classList.remove("active");
        page.style.display = "none";
    });

    // Find the page we want to show
    const next = document.getElementById(pageId);

    if (next) {
        next.classList.add("active");
        next.style.display = "flex";

        // Start at the top of the new page
        window.scrollTo(0, 0);
    }
}

function previousPage(pageId) {
    nextPage(pageId);
}

// Show the intro page when the website first loads
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".thankyou-page, .hero-page, .question-page").forEach(page => {
        page.classList.remove("active");
        page.style.display = "none";
    });

    const firstPage = document.getElementById("hero-page");

    if (firstPage) {
        firstPage.classList.add("active");
        firstPage.style.display = "flex";
    }
});

