// MENU SECTION
const menuSection = () => {
  const menu = document.querySelector(".menu");

  menu.addEventListener("click", (ev) => {
    ev.stopPropagation();
    const clickedLink = ev.target.closest("li > a");
    activateClickedLink(clickedLink);
    activateMenuExpansion(clickedLink);
  });

  // ACTIVATE MENU LINKS WHEN CLICKED USING EVENT DELEGATION TECHNIQUE TO IMPROVE PERFORMANCE
  function activateClickedLink(clickedLink) {
    if (clickedLink) {
      menu.querySelector("li > a.active")?.classList.remove("active");
      clickedLink.classList.add("active");
    }
  }

  // ACTIVATE THE MENU EXPANSION BY CLICKING ON IT IF THE USER'S DEVICE DOES NOT SUPPORT HOVER
  function activateMenuExpansion(clickedLink) {
    const noHover = matchMedia("(hover: none)").matches;

    if (noHover) {
      if (!menu.classList.contains("active") && clickedLink) return;
      menu.classList.toggle("active");

      document.onclick = () => {
        menu.classList.remove("active");
        document.onclick = null;
      };
    } else {
      menu.classList.remove("active");
      document.onclick = null;
    }
  }
};

menuSection();
