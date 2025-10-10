 <script>
                  function showProducts() {
                    const productsTab =
                      document.getElementById("wr-productsTab");
                    const supportTab = document.getElementById("supportTab");
                    const productsContent =
                      document.getElementById("productsContent");
                    const supportContent =
                      document.getElementById("supportContent");
                    productsTab.classList.add("active");
                    supportTab.classList.remove("active");
                    productsContent.classList.add("active");
                    supportContent.classList.remove("active");
                  }

                  function showSupport() {
                    const productsTab =
                      document.getElementById("wr-productsTab");
                    const supportTab = document.getElementById("supportTab");
                    const productsContent =
                      document.getElementById("productsContent");
                    const supportContent =
                      document.getElementById("supportContent");
                    supportTab.classList.add("active");
                    productsTab.classList.remove("active");
                    supportContent.classList.add("active");
                    productsContent.classList.remove("active");
                  }
                    const productsTab =
                      document.getElementById("wr-productsTab");
                    const supportTab = document.getElementById("supportTab");
                    const productsContent =
                      document.getElementById("productsContent");
                    const supportContent =
                      document.getElementById("supportContent");

                    const cards = document.querySelectorAll(".wr-ptql-card h2");
                    

                  function toggleAccordion(headerElement) {
  if (window.innerWidth <= 767) {
    const card = headerElement.parentElement;
    const links = card.querySelector(".wr-ptql-links");
    
    // Add null check for safety
    if (!links) return;
    
    const isCurrentlyActive = card.classList.contains("active");

    if (isCurrentlyActive) {
      card.classList.remove("active");
      links.style.maxHeight = "0px";
      // Update ARIA attribute
      headerElement.setAttribute('aria-expanded', 'false');
    } else {
      card.classList.add("active");
      const scrollHeight = links.scrollHeight;
      links.style.maxHeight = scrollHeight + "px";
      // Update ARIA attribute
      headerElement.setAttribute('aria-expanded', 'true');

      setTimeout(() => {
        if (card.classList.contains("active")) {
          links.style.maxHeight = "auto";
        }
      }, 400);
    }
  }
}

            

// Accessibility: Enable keyboard access without addEventListener
const wrHeaders = document.querySelectorAll(".wr-ptql-card h2");

// Ensure headers are focusable and behave like buttons
for (let i = 0; i < wrHeaders.length; i++) {
  wrHeaders[i].setAttribute("tabindex", "0");
  wrHeaders[i].setAttribute("role", "button");

  // Inline keyboard handling using onkeydown property
  wrHeaders[i].onkeydown = function (e) {
    const key = e.key || e.keyCode;
    if (key === "Enter" || key === " " || key === "Spacebar" || key === 13 || key === 32) {
      e.preventDefault(); // prevent scroll on Space
      toggleAccordion(this);
    }
  };
}


                   
// Accessibility improvement: skip links in collapsed cards when tabbing
const wrHeaders = document.querySelectorAll(".wr-ptql-card h2");

for (let i = 0; i < wrHeaders.length; i++) {
  const header = wrHeaders[i];
  header.setAttribute("tabindex", "0");
  header.setAttribute("role", "button");

  // Handle Enter/Space for toggling (without addEventListener)
  header.onkeydown = function (e) {
    const key = e.key || e.keyCode;
    if (key === "Enter" || key === " " || key === "Spacebar" || key === 13 || key === 32) {
      e.preventDefault();
      toggleAccordion(this);
      updateLinkFocusState(); // ensure tab behavior updates after toggle
    }
  };
}

// Function to disable/enable tabbing for collapsed cards
function updateLinkFocusState() {
  const cards = document.querySelectorAll(".wr-ptql-card");
  for (let i = 0; i < cards.length; i++) {
    const links = cards[i].querySelectorAll(".wr-ptql-links a");
    const isExpanded = cards[i].classList.contains("active");
    for (let j = 0; j < links.length; j++) {
      if (isExpanded && window.innerWidth <= 767) {
        links[j].setAttribute("tabindex", "0"); // focusable
      } else {
        links[j].setAttribute("tabindex", "-1"); // skip when collapsed
      }
    }
  }
}

// Initialize tab states on page load
updateLinkFocusState();

// Reapply tab state on resize or orientation change (to keep behavior consistent)
window.onresize = function () {
  updateLinkFocusState();
};
window.onorientationchange = function () {
  setTimeout(updateLinkFocusState, 200);
};

                </script>
