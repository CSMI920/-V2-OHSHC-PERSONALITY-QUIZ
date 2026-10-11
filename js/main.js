// JS scripts placed here

function nextPage(pageId) {
    // 1. Locate the currently visible page
    const currentPage = Array.from(document.querySelectorAll(".hero-page, .question-page, .thankyou-page"))
                             .find(page => page.style.display === "block" || getComputedStyle(page).display === "block");

    if (currentPage) {
        // 2. Check if the active page contains any radio buttons
        const radios = currentPage.querySelectorAll('input[type="radio"]');
        
        if (radios.length > 0) {
            // 3. Verify if at least one radio button is checked
            const isChecked = Array.from(radios).some(radio => radio.checked);
            
            if (!isChecked) {
                alert("Please select an option before continuing.");
                return; // Blocks navigation by exiting early
            }
        }
    }

    // 4. Proceed to the next page if validation passes or no radios exist
    document.querySelectorAll(".hero-page, .question-page").forEach(page => {
        page.style.display = "none";
    });

    document.getElementById(pageId).style.display = "block";
}

function previousPage(pageId) {
    // Bypasses validation so the user can always navigate backward freely
    document.querySelectorAll(".hero-page, .question-page").forEach(page => {
        page.style.display = "none";
    });

    document.getElementById(pageId).style.display = "block";
}
