// JS scripts placed here

function nextPage(pageId) {
    document.querySelectorAll(".hero-page, .question-page").forEach(page => {
        page.style.display = "none";
    });

    document.getElementById(pageId).style.display = "block";
}

function previousPage(pageId) {
    nextPage(pageId);
}
