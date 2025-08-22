/* ========== Nav Dropdown ========== */


document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.dropdown-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault(); // prevent link jump
      const dropdown = toggle.nextElementSibling;

      // Close other dropdowns
      document.querySelectorAll('.dropdown-content').forEach(menu => {
        if (menu !== dropdown) {
          menu.style.display = 'none';
          menu.previousElementSibling.classList.remove('open');
        }
      });

      // Toggle this dropdown
      if (dropdown.style.display === 'flex') {
        dropdown.style.display = 'none';
        toggle.classList.remove('open');
      } else {
        dropdown.style.display = 'flex';
        toggle.classList.add('open');
      }
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-content').forEach(menu => {
        menu.style.display = 'none';
      });
      document.querySelectorAll('.dropdown-toggle').forEach(btn => {
        btn.classList.remove('open');
      });
    }
  });
});


/* ========== Accordion Dropdown ========== */

 const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    if (content.classList.contains("open")) {
      // Close this section
      content.style.maxHeight = null;
      content.classList.remove("open");
      header.classList.remove("active");
    } else {
      // Open this section
      content.classList.add("open");
      header.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px"; // dynamic height
    }
  });
});
