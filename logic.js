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

                    window.addEventListener("resize", () => {
                      if (window.innerWidth > 767) {
                        const allCards =
                          document.querySelectorAll(".wr-ptql-card");
                        allCards.forEach((card) => {
                          card.classList.remove("active");
                          const links = card.querySelector(".wr-ptql-links");
                          if (links) {
                            links.style.maxHeight = "";
                          }
                        });
                      } else {
                        const activeCards = document.querySelectorAll(
                          ".wr-ptql-card.active"
                        );
                        activeCards.forEach((card) => {
                          const links = card.querySelector(".wr-ptql-links");
                          if (links) {
                            const scrollHeight = links.scrollHeight;
                            links.style.maxHeight = scrollHeight + "px";
                          }
                        });
                      }
                    });

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


                    window.addEventListener("orientationchange", () => {
                      setTimeout(() => {
                        if (window.innerWidth <= 767) {
                          const activeCards = document.querySelectorAll(
                            ".wr-ptql-card.active"
                          );
                          activeCards.forEach((card) => {
                            const links = card.querySelector(".wr-ptql-links");
                            if (links) {
                              const scrollHeight = links.scrollHeight;
                              links.style.maxHeight = scrollHeight + "px";
                            }
                          });
                        }
                      }, 100);
                    });
                </script>
