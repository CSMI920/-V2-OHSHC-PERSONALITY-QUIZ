// JS scripts placed here

function nextPage(pageId) {
  // Find the currently visible question page
  const activePage = document.querySelector('.question-page.active'); 

  // If the user is currently on a question page, validate their input
  if (activePage) {
    // Check if at least one radio button is checked (adjust selector if using checkboxes or buttons)
    const selectedAnswer = activePage.querySelector('input[type="radio"]:checked');
    
    // If no answer is selected, block progress and alert the user
    if (!selectedAnswer) {
      alert('Please select an answer before continuing.');
      return; 
    }
  }

  // Hide all quiz pages
  document.querySelectorAll('.thankyou-page, .hero-page, .question-page').forEach(page => {
    page.classList.remove('active');
    page.style.display = 'none';
  });

  // Find the page we want to show
  const next = document.getElementById(pageId);
  if (next) {
    next.classList.add('active');
    next.style.display = 'flex';
    // Start at the top of the new page
    window.scrollTo(0, 0);
  }
}

// Back button function
function previousPage(pageId) {
  nextPage(pageId);
}

// Show the intro page when the website first loads
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.thankyou-page, .hero-page, .question-page').forEach(page => {
    page.classList.remove('active');
    page.style.display = 'none';
  });

  const firstPage = document.getElementById('hero-page');
  if (firstPage) {
    firstPage.classList.add('active');
    firstPage.style.display = 'flex';
  }
});

