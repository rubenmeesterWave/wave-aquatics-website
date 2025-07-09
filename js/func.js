document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.dropdown-toggle');
  
    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const dropdown = toggle.nextElementSibling;
  
        // Close other dropdowns and remove open class
        document.querySelectorAll('.dropdown-content').forEach(menu => {
          if (menu !== dropdown) {
            menu.classList.remove('show');
          }
        });
        document.querySelectorAll('.dropdown-toggle').forEach(btn => {
          if (btn !== toggle) {
            btn.classList.remove('open');
          }
        });
  
        // Toggle this dropdown
        dropdown.classList.toggle('show');
        toggle.classList.toggle('open');
      });
    });
  
    // Close dropdowns on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-content').forEach(menu => {
          menu.classList.remove('show');
        });
        document.querySelectorAll('.dropdown-toggle').forEach(btn => {
          btn.classList.remove('open');
        });
      }
    });
  });
  