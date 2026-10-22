const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector(".site-nav");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  siteNavigation.classList.toggle("is-open", !isExpanded);
});

siteNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    siteNavigation.classList.remove("is-open");
  }
});

const approachTabs = [...document.querySelectorAll('[role="tab"]')];

function selectApproachTab(tab, moveFocus = false) {
  for (const approachTab of approachTabs) {
    const selected = approachTab === tab;
    approachTab.setAttribute("aria-selected", String(selected));
    approachTab.tabIndex = selected ? 0 : -1;
    document.getElementById(approachTab.getAttribute("aria-controls")).hidden = !selected;
  }

  if (moveFocus) {
    tab.focus();
  }
}

for (const [index, tab] of approachTabs.entries()) {
  tab.addEventListener("click", () => selectApproachTab(tab));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
      return;
    }

    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + approachTabs.length) % approachTabs.length;
    selectApproachTab(approachTabs[nextIndex], true);
  });
}

document.querySelector("#year").textContent = new Date().getFullYear();
