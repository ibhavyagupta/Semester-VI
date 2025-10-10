<div class="container wr-container">
                  <h1 class="wr-title" id="main-heading">
                    What are you looking for today?
                  </h1>

                  <div
                    class="wr-tab-container"
                    role="tablist"
                    aria-labelledby="main-heading"
                  >
                    <div class="wr-tabs">
                      <button
                        id="wr-productsTab"
                        class="wr-tab-option active"
                        type="button"
                        role="tab"
                        aria-selected="true"
                        aria-controls="productsContent"
                        tabindex="0"
                        title="View products and services"
                        onclick="showProducts()"
                      >
                        Products
                      </button>
                      <button
                        id="supportTab"
                        class="wr-tab-option"
                        type="button"
                        role="tab"
                        aria-selected="false"
                        aria-controls="supportContent"
                        tabindex="0"
                        title="View support and help options"
                        onclick="showSupport()"
                      >
                        Support
                      </button>
                    </div>
                  </div>

                  <!-- Products Tab Content -->
                  <div
                    id="productsContent"
                    class="wr-tab-content active"
                    role="tabpanel"
                    aria-labelledby="wr-productsTab"
                    tabindex="-1"
                  >
                    <div class="wr-ptql-container">
                      <article
                        class="wr-ptql-card"
                        aria-labelledby="banking-heading"
                      >
                        <h2
                          id="banking-heading"
                          tabindex="-1"
                          aria-expanded="false"
                          aria-controls="banking-links"
                        >
                          <img
                            class="wr-ptql-decorative"
                            src="https://www.natwest.com/content/dam/natwest/assets/prototyping/nws-pers-1.svg"
                            alt="decorative"
                            role="img"
                          />
                          Banking
                          <img
                            src="https://www.natwest.com/content/dam/natwest/assets/shared/icons/icons-web-purple-chevron-right.svg"
                            alt=""
                            class="wr-ptql-arrow"
                            role="presentation"
                            aria-hidden="true"
                          />
                        </h2>
                        <ul
                          class="wr-ptql-links"
                          id="banking-links"
                          role="list"
                          aria-labelledby="banking-heading"
                        >
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/current-accounts.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="banking-heading"
                              >Current accounts</a
                            >
                          </li>
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/current-accounts/childrens-accounts.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="banking-heading"
                              >Child and teen accounts</a
                            >
                          </li>
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/current-accounts/joint-account.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="banking-heading"
                              >Joint accounts</a
                            >
                          </li>
                        </ul>
                      </article>

                      <article
                        class="wr-ptql-card"
                        aria-labelledby="mortgages-heading"
                      >
                        <h2
                          id="mortgages-heading"
                          tabindex="-1"
                          aria-expanded="false"
                          aria-controls="mortgages-links"
                        >
                          <img
                            class="wr-ptql-decorative"
                            src="https://www.natwest.com/content/dam/natwest/assets/prototyping/nws-pers-house.svg"
                            alt="decorative"
                            role="img"
                          />
                          Mortgages
                          <img
                            src="https://www.natwest.com/content/dam/natwest/assets/shared/icons/icons-web-purple-chevron-right.svg"
                            alt=""
                            class="wr-ptql-arrow"
                            role="presentation"
                            aria-hidden="true"
                          />
                        </h2>
                        <ul
                          class="wr-ptql-links"
                          id="mortgages-links"
                          role="list"
                          aria-labelledby="mortgages-heading"
                        >
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/mortgages/mortgage-calculators/how-much-can-i-borrow.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="mortgages-heading"
                              >How much can you borrow?</a
                            >
                          </li>
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/mortgages/first-time-buyers.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="mortgages-heading"
                              >First time buyers</a
                            >
                          </li>
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/mortgages/remortgage-to-natwest.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="mortgages-heading"
                              >Remortgage</a
                            >
                          </li>
                        </ul>
                      </article>

                      <article
                        class="wr-ptql-card"
                        aria-labelledby="savings-heading"
                      >
                        <h2
                          id="savings-heading"
                          tabindex="-1"
                          aria-expanded="false"
                          aria-controls="savings-links"
                        >
                          <img
                            class="wr-ptql-decorative"
                            src="https://www.natwest.com/content/dam/natwest/assets/prototyping/nws-pers-saving-money.svg"
                            alt="decorative"
                            role="img"
                          />
                          Savings
                          <img
                            src="https://www.natwest.com/content/dam/natwest/assets/shared/icons/icons-web-purple-chevron-right.svg"
                            alt=""
                            class="wr-ptql-arrow"
                            role="presentation"
                            aria-hidden="true"
                          />
                        </h2>
                        <ul
                          class="wr-ptql-links"
                          id="savings-links"
                          role="list"
                          aria-labelledby="savings-heading"
                        >
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/savings.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="savings-heading"
                              >Savings accounts</a
                            >
                          </li>
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/savings/isa-overview.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="savings-heading"
                              >ISAs</a
                            >
                          </li>
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/savings/first-saver.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="savings-heading"
                              >Children's savings</a
                            >
                          </li>
                        </ul>
                      </article>

                      <article
                        class="wr-ptql-card"
                        aria-labelledby="borrowing-heading"
                      >
                        <h2
                          id="borrowing-heading"
                          tabindex="-1"
                          aria-expanded="false"
                          aria-controls="borrowing-links"
                        >
                          <img
                            class="wr-ptql-decorative"
                            src="https://www.natwest.com/content/dam/natwest/assets/prototyping/nws-pers-bank-cards.svg"
                            alt="decorative"
                            role="img"
                          />
                          Borrowing
                          <img
                            src="https://www.natwest.com/content/dam/natwest/assets/shared/icons/icons-web-purple-chevron-right.svg"
                            alt=""
                            class="wr-ptql-arrow"
                            role="presentation"
                            aria-hidden="true"
                          />
                        </h2>
                        <ul
                          class="wr-ptql-links"
                          id="borrowing-links"
                          role="list"
                          aria-labelledby="borrowing-heading"
                        >
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/credit-cards.html?intcam=PC_HP-P4-1-ALL-DEF"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="borrowing-heading"
                              >Credit cards</a
                            >
                          </li>
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/loans.html?intcam=PC_HP-P4-1-ALL-DEF"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="borrowing-heading"
                              >Loans</a
                            >
                          </li>
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/current-accounts/overdrafts.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="borrowing-heading"
                              >Overdrafts</a
                            >
                          </li>
                        </ul>
                      </article>
                    </div>
                  </div>

                  <!-- Support Tab Content -->
                  <div
                    id="supportContent"
                    class="wr-tab-content"
                    role="tabpanel"
                    aria-labelledby="supportTab"
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <div class="wr-ptql-container wr-support-layout">
                      <article
                        class="wr-ptql-card"
                        aria-labelledby="banking-help-heading"
                      >
                        <h2
                          id="banking-help-heading"
                          tabindex="-1"
                          aria-expanded="false"
                          aria-controls="banking-help-links"
                        >
                          <img
                            class="wr-ptql-decorative"
                            src="https://www.natwest.com/content/dam/natwest/assets/prototyping/nws-pers-signpost.svg"
                            alt="decorative"
                            role="img"
                          />
                          Help with your banking
                          <img
                            src="https://www.natwest.com/content/dam/natwest/assets/shared/icons/icons-web-purple-chevron-right.svg"
                            alt=""
                            class="wr-ptql-arrow"
                            role="presentation"
                            aria-hidden="true"
                          />
                        </h2>
                        <ul
                          class="wr-ptql-links"
                          id="banking-help-links"
                          role="list"
                          aria-labelledby="banking-help-heading"
                        >
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/banking-with-natwest/register-for-online-banking.html?q=lost+or+stolen+cards&brand=NATWEST&section=personal&enginekey=********************"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="banking-help-heading"
                              >Register for Online Banking</a
                            >
                          </li>
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/support-centre/banking-from-home/login-help.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="banking-help-heading"
                              >Login help</a
                            >
                          </li>
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/search-results/locator.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="banking-help-heading"
                              >Branch locator</a
                            >
                          </li>
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/support-centre/banking-from-home/make-payments.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="banking-help-heading"
                              >Make a payment</a
                            >
                          </li>
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/support-centre/view-or-change-your-details.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="banking-help-heading"
                              >Change my details</a
                            >
                          </li>
                          <div class="wr-cta-wrapper">
                            <a
                              href="https://www.natwest.com/banking-with-natwest.html"
                              class="wr-cta-button"
                              role="button"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Learn more about banking with us - opens in new window"
                            >
                              Banking with us
                            </a>
                          </div>
                        </ul>
                      </article>

                      <article
                        class="wr-ptql-card"
                        aria-labelledby="security-help-heading"
                      >
                        <h2
                          id="security-help-heading"
                          tabindex="-1"
                          aria-expanded="false"
                          aria-controls="security-help-links"
                        >
                          <img
                            class="wr-ptql-decorative"
                            src="https://www.natwest.com/content/dam/natwest/assets/prototyping/nws-pers-prevention.svg"
                            alt="decorative"
                            role="img"
                          />
                          Support and Security
                          <img
                            src="https://www.natwest.com/content/dam/natwest/assets/shared/icons/icons-web-purple-chevron-right.svg"
                            alt="decorative"
                            class="wr-ptql-arrow"
                            role="presentation"
                            aria-hidden="true"
                          />
                        </h2>
                        <ul
                          class="wr-ptql-links"
                          id="security-help-links"
                          role="list"
                          aria-labelledby="security-help-heading"
                        >
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/support-centre/help-with-your-product.html?q=lost+or+stolen+cards&brand=NATWEST&section=personal&enginekey=********************"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="security-help-heading"
                              >Product help</a
                            >
                          </li>
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/support-centre/help-with-your-card/card-functionality/how-do-i-report-a-lost-stolen-or-damaged-debit-card-and-order-a-replacement.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="security-help-heading"
                              >Lost or stolen card</a
                            >
                          </li>
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/fraud-and-security/report-fraud.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="security-help-heading"
                              >Report fraud</a
                            >
                          </li>
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/fraud-and-security/fraud-guide.html#What"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="security-help-heading"
                              >Latest scams</a
                            >
                          </li>
                          <div class="wr-cta-wrapper">
                            <a
                              href="https://www.natwest.com/support-centre.html"
                              class="wr-cta-button"
                              role="button"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Visit our Support Centre - opens in new window"
                            >
                              Visit our Support Centre
                            </a>
                          </div>
                        </ul>
                      </article>

                      <article
                        class="wr-ptql-card"
                        aria-labelledby="life-help-heading"
                      >
                        <h2
                          id="life-help-heading"
                          tabindex="-1"
                          aria-expanded="false"
                          aria-controls="life-help-links"
                        >
                          <img
                            class="wr-ptql-decorative"
                            src="https://www.natwest.com/content/dam/natwest/assets/prototyping/nws-pers-life-ring.svg"
                            alt="decorative"
                            role="img"
                          />
                          Life and family
                          <img
                            src="https://www.natwest.com/content/dam/natwest/assets/shared/icons/icons-web-purple-chevron-right.svg"
                            alt=""
                            class="wr-ptql-arrow"
                            role="presentation"
                            aria-hidden="true"
                          />
                        </h2>
                        <ul
                          class="wr-ptql-links"
                          id="life-help-links"
                          role="list"
                          aria-labelledby="life-help-heading"
                        >
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/life-moments/bereavement.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="life-help-heading"
                              >Bereavement support</a
                            >
                          </li>
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/life-moments/Struggling-financially.html?q=lost+or+stolen+cards&brand=NATWEST&section=personal&enginekey=********************"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="life-help-heading"
                              >Struggling financially</a
                            >
                          </li>
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/support-centre/view-or-change-your-details/add-a-party-to-an-account/registering-a-power-of-attorney.html?q=power+of+attorney&brand=NATWEST&section=personal&enginekey=********************"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="life-help-heading"
                              >Register a power of attorney</a
                            >
                          </li>
                          <li role="listitem">
                            <a
                              href="https://www.natwest.com/financial-health-check.html?q=get+a+financial+health+check&brand=NATWEST&section=personal&enginekey=wYnTjXmfABgYKBU6GMG3#what"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-describedby="life-help-heading"
                              >Get a financial health check</a
                            >
                          </li>
                          <div class="wr-cta-wrapper">
                            <a
                              href="https://www.natwest.com/life-moments.html"
                              class="wr-cta-button"
                              role="button"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Discover more ways we can help - opens in new window"
                            >
                              More ways we can help
                            </a>
                          </div>
                        </ul>
                      </article>
                    </div>
                  </div>

                  <!-- Screen reader announcements -->
                  <div
                    aria-live="polite"
                    aria-atomic="true"
                    class="sr-only"
                    id="tab-announcements"
                  ></div>
                </div>
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
                    cards.forEach((header) => {
                      header.addEventListener("click", () => {
                        if (window.innerWidth <= 767) {
                          const card = header.parentElement;
                          const links = card.querySelector(".wr-ptql-links");
                          const isCurrentlyActive =
                            card.classList.contains("active");

                          if (isCurrentlyActive) {
                            card.classList.remove("active");
                            links.style.maxHeight = "0px";
                          } else {
                            card.classList.add("active");
                            const scrollHeight = links.scrollHeight;
                            links.style.maxHeight = scrollHeight + "px";

                            setTimeout(() => {
                              if (card.classList.contains("active")) {
                                links.style.maxHeight = "auto";
                              }
                            }, 400);
                          }
                        }
                      });
                    });

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
