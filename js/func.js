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


/* ========== ScheduleList Preview========== */
//  "Monday": [ 
    
  //   { name: "  Deep End Lap Swim", time: "6:30am – 7:45am, 9:30am – 11:00am, 8:45pm – 9:45pm" }, 
  //   { name: "Shallow End Lap Swim", time: "5:15am – 6:15am, 2:00pm – 3:00pm" }, 
  //   { name: "Family Swim", time: "2:00pm – 3:45pm" }, 
  //   { name: "Senior Swim", time: "1:00pm – 2:00pm" }, 
  //   { name: "Deep Water Aerobics", time: "9:00am – 10:00am" }, 
  //   { name: "Shallow Water Aerobics", time: "7:20am – 8:20am" }, 
  //   { name: "LW Masters", time: "5:15am – 6:30am, 11:45am – 1:00pm" }, 
  //   { name: "Youth Swim Lessons", time: "5:25pm – 8:30pm" }, 
  //   { name: "Summer Swim Lessons", time: "9:00am – 12:00pm" }, 
  //   { name: "Adult Swim Lessons", time: "8:30pm – 9:30pm" }, 
  // ], 

const scheduleData = {
  "Monday": {
    "Redmond": [
      { name: "  Deep End Lap Swim", time: "6:30am – 7:45am, 9:30am – 11:00am, 8:45pm – 9:45pm" }, 
    { name: "Shallow End Lap Swim", time: "5:15am – 6:15am, 2:00pm – 3:00pm" }, 
    { name: "Family Swim", time: "2:00pm – 3:45pm" }, 
    { name: "Senior Swim", time: "1:00pm – 2:00pm" }, 
    { name: "Deep Water Aerobics", time: "9:00am – 10:00am" }, 
    { name: "Shallow Water Aerobics", time: "7:20am – 8:20am" }, 
    { name: "LW Masters", time: "5:15am – 6:30am, 11:45am – 1:00pm" }, 
    { name: "Youth Swim Lessons", time: "5:25pm – 8:30pm" }, 
    { name: "Summer Swim Lessons", time: "9:00am – 12:00pm" }, 
    { name: "Adult Swim Lessons", time: "8:30pm – 9:30pm" }, 
    ],
    "Juanita": [
       { name: "  Deep End Lap Swim", time: "6:30am – 7:45am, 9:30am – 11:00am, 8:45pm – 9:45pm" }, 
    { name: "Shallow End Lap Swim", time: "5:15am – 6:15am, 2:00pm – 3:00pm" }, 
    { name: "Family Swim", time: "2:00pm – 3:45pm" }, 
    { name: "Senior Swim", time: "1:00pm – 2:00pm" }, 
    { name: "Deep Water Aerobics", time: "9:00am – 10:00am" }, 
    { name: "Shallow Water Aerobics", time: "7:20am – 8:20am" }, 
    { name: "LW Masters", time: "5:15am – 6:30am, 11:45am – 1:00pm" }, 
    { name: "Youth Swim Lessons", time: "5:25pm – 8:30pm" }, 
    { name: "Summer Swim Lessons", time: "9:00am – 12:00pm" }, 
    { name: "Adult Swim Lessons", time: "8:30pm – 9:30pm" }, 
    ]
  },
  "Tuesday": {
    "Redmond": [
       { name: "  Deep End Lap Swim", time: "6:30am – 7:45am, 9:30am – 11:00am, 8:45pm – 9:45pm" }, 
    { name: "Shallow End Lap Swim", time: "5:15am – 6:15am, 2:00pm – 3:00pm" }, 
    { name: "Family Swim", time: "2:00pm – 3:45pm" }, 
    { name: "Senior Swim", time: "1:00pm – 2:00pm" }, 
    { name: "Deep Water Aerobics", time: "9:00am – 10:00am" }, 
    { name: "Shallow Water Aerobics", time: "7:20am – 8:20am" }, 
    { name: "LW Masters", time: "5:15am – 6:30am, 11:45am – 1:00pm" }, 
    { name: "Youth Swim Lessons", time: "5:25pm – 8:30pm" }, 
    { name: "Summer Swim Lessons", time: "9:00am – 12:00pm" }, 
    { name: "Adult Swim Lessons", time: "8:30pm – 9:30pm" }, 
    ],
    "Juanita": [
      { name: "  Deep End Lap Swim", time: "6:30am – 7:45am, 9:30am – 11:00am, 8:45pm – 9:45pm" }, 
    { name: "Shallow End Lap Swim", time: "5:15am – 6:15am, 2:00pm – 3:00pm" }, 
    { name: "Family Swim", time: "2:00pm – 3:45pm" }, 
    { name: "Senior Swim", time: "1:00pm – 2:00pm" }, 
    { name: "Deep Water Aerobics", time: "9:00am – 10:00am" }, 
    { name: "Shallow Water Aerobics", time: "7:20am – 8:20am" }, 
    { name: "LW Masters", time: "5:15am – 6:30am, 11:45am – 1:00pm" }, 
    { name: "Youth Swim Lessons", time: "5:25pm – 8:30pm" }, 
    { name: "Summer Swim Lessons", time: "9:00am – 12:00pm" }, 
    { name: "Adult Swim Lessons", time: "8:30pm – 9:30pm" }, 
    ]
  },
  "Wednesday": {
    "Redmond": [
       { name: "  Deep End Lap Swim", time: "6:30am – 7:45am, 9:30am – 11:00am, 8:45pm – 9:45pm" }, 
    { name: "Shallow End Lap Swim", time: "5:15am – 6:15am, 2:00pm – 3:00pm" }, 
    { name: "Family Swim", time: "2:00pm – 3:45pm" }, 
    { name: "Senior Swim", time: "1:00pm – 2:00pm" }, 
    { name: "Deep Water Aerobics", time: "9:00am – 10:00am" }, 
    { name: "Shallow Water Aerobics", time: "7:20am – 8:20am" }, 
    { name: "LW Masters", time: "5:15am – 6:30am, 11:45am – 1:00pm" }, 
    { name: "Youth Swim Lessons", time: "5:25pm – 8:30pm" }, 
    { name: "Summer Swim Lessons", time: "9:00am – 12:00pm" }, 
    { name: "Adult Swim Lessons", time: "8:30pm – 9:30pm" }, 
    ],
    "Juanita": [
       { name: "  Deep End Lap Swim", time: "6:30am – 7:45am, 9:30am – 11:00am, 8:45pm – 9:45pm" }, 
    { name: "Shallow End Lap Swim", time: "5:15am – 6:15am, 2:00pm – 3:00pm" }, 
    { name: "Family Swim", time: "2:00pm – 3:45pm" }, 
    { name: "Senior Swim", time: "1:00pm – 2:00pm" }, 
    { name: "Deep Water Aerobics", time: "9:00am – 10:00am" }, 
    { name: "Shallow Water Aerobics", time: "7:20am – 8:20am" }, 
    { name: "LW Masters", time: "5:15am – 6:30am, 11:45am – 1:00pm" }, 
    { name: "Youth Swim Lessons", time: "5:25pm – 8:30pm" }, 
    { name: "Summer Swim Lessons", time: "9:00am – 12:00pm" }, 
    { name: "Adult Swim Lessons", time: "8:30pm – 9:30pm" }, 
    ]
  },
  "Thursday": {
    "Redmond": [
       { name: "  Deep End Lap Swim", time: "6:30am – 7:45am, 9:30am – 11:00am, 8:45pm – 9:45pm" }, 
    { name: "Shallow End Lap Swim", time: "5:15am – 6:15am, 2:00pm – 3:00pm" }, 
    { name: "Family Swim", time: "2:00pm – 3:45pm" }, 
    { name: "Senior Swim", time: "1:00pm – 2:00pm" }, 
    { name: "Deep Water Aerobics", time: "9:00am – 10:00am" }, 
    { name: "Shallow Water Aerobics", time: "7:20am – 8:20am" }, 
    { name: "LW Masters", time: "5:15am – 6:30am, 11:45am – 1:00pm" }, 
    { name: "Youth Swim Lessons", time: "5:25pm – 8:30pm" }, 
    { name: "Summer Swim Lessons", time: "9:00am – 12:00pm" }, 
    { name: "Adult Swim Lessons", time: "8:30pm – 9:30pm" }, 
    ],
    "Juanita": [
       { name: "  Deep End Lap Swim", time: "6:30am – 7:45am, 9:30am – 11:00am, 8:45pm – 9:45pm" }, 
    { name: "Shallow End Lap Swim", time: "5:15am – 6:15am, 2:00pm – 3:00pm" }, 
    { name: "Family Swim", time: "2:00pm – 3:45pm" }, 
    { name: "Senior Swim", time: "1:00pm – 2:00pm" }, 
    { name: "Deep Water Aerobics", time: "9:00am – 10:00am" }, 
    { name: "Shallow Water Aerobics", time: "7:20am – 8:20am" }, 
    { name: "LW Masters", time: "5:15am – 6:30am, 11:45am – 1:00pm" }, 
    { name: "Youth Swim Lessons", time: "5:25pm – 8:30pm" }, 
    { name: "Summer Swim Lessons", time: "9:00am – 12:00pm" }, 
    { name: "Adult Swim Lessons", time: "8:30pm – 9:30pm" }, 
    ]
  },
  "Friday": {
    "Redmond": [
      { name: "  Deep End Lap Swim", time: "6:30am – 7:45am, 9:30am – 11:00am, 8:45pm – 9:45pm" }, 
    { name: "Shallow End Lap Swim", time: "5:15am – 6:15am, 2:00pm – 3:00pm" }, 
    { name: "Family Swim", time: "2:00pm – 3:45pm" }, 
    { name: "Senior Swim", time: "1:00pm – 2:00pm" }, 
    { name: "Deep Water Aerobics", time: "9:00am – 10:00am" }, 
    { name: "Shallow Water Aerobics", time: "7:20am – 8:20am" }, 
    { name: "LW Masters", time: "5:15am – 6:30am, 11:45am – 1:00pm" }, 
    { name: "Youth Swim Lessons", time: "5:25pm – 8:30pm" }, 
    { name: "Summer Swim Lessons", time: "9:00am – 12:00pm" }, 
    { name: "Adult Swim Lessons", time: "8:30pm – 9:30pm" }, 
    ],
    "Juanita": [
      { name: "  Deep End Lap Swim", time: "6:30am – 7:45am, 9:30am – 11:00am, 8:45pm – 9:45pm" }, 
    { name: "Shallow End Lap Swim", time: "5:15am – 6:15am, 2:00pm – 3:00pm" }, 
    { name: "Family Swim", time: "2:00pm – 3:45pm" }, 
    { name: "Senior Swim", time: "1:00pm – 2:00pm" }, 
    { name: "Deep Water Aerobics", time: "9:00am – 10:00am" }, 
    { name: "Shallow Water Aerobics", time: "7:20am – 8:20am" }, 
    { name: "LW Masters", time: "5:15am – 6:30am, 11:45am – 1:00pm" }, 
    { name: "Youth Swim Lessons", time: "5:25pm – 8:30pm" }, 
    { name: "Summer Swim Lessons", time: "9:00am – 12:00pm" }, 
    { name: "Adult Swim Lessons", time: "8:30pm – 9:30pm" }, 
    ]
  },
  "Saturday": {
    "Redmond": [
          { name: "Youth Swim Lessons", time: "5:25pm – 8:30pm" }, 
      { name: "Deep End Lap Swim", time: "7:00am – 9:00am, 12:00pm – 2:00pm" },
      { name: "Family Swim", time: "12:00pm – 2:00pm" }
    ],
    "Juanita": [
     { name: "Youth Swim Lessons", time: "5:25pm – 8:30pm" }, 
      { name: "Deep End Lap Swim", time: "7:00am – 9:00am, 12:00pm – 2:00pm" },
      { name: "Family Swim", time: "12:00pm – 2:00pm" }
    ]
  },
  "Sunday": {
    "Redmond": [
      { name: "Youth Swim Lessons", time: "5:25pm – 8:30pm" }, 
      { name: "Deep End Lap Swim", time: "7:00am – 9:00am, 12:00pm – 2:00pm" },
      { name: "Family Swim", time: "12:00pm – 2:00pm" }
    ],
    "Juanita": [
       { name: "Youth Swim Lessons", time: "5:25pm – 8:30pm" }, 
      { name: "Deep End Lap Swim", time: "7:00am – 9:00am, 12:00pm – 2:00pm" },
      { name: "Family Swim", time: "12:00pm – 2:00pm" }
    ]
  }
};


 


   let currentLocation = "Redmond"; // default location

function showSchedule(day, button = null) {
  const buttons = document.querySelectorAll('.day-selector button');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Highlight clicked day button
  if (button) button.classList.add('active');

  const list = document.getElementById("schedule-list");
  list.innerHTML = "";

  const programs = scheduleData[day][currentLocation] || [];

  programs.forEach(program => {
    list.innerHTML += `
      <div class="program">
        <div class="program-title">${program.name}</div>
        <div class="program-time">${program.time || "No sessions today"}</div>
      </div>
    `;
  });
}

function setLocation(location, button = null) {
  currentLocation = location;

  const locationButtons = document.querySelectorAll('.location-selector button');
  locationButtons.forEach(btn => btn.classList.remove('active'));

  if (button) button.classList.add('active');

  // Refresh schedule for currently active day
  const activeDay = document.querySelector('.day-selector button.active');
  if (activeDay) {
    showSchedule(activeDay.dataset.day, activeDay);
  } else {
    showSchedule('Monday'); // default fallback
  }
}

// Attach click events to day buttons
document.querySelectorAll('.day-selector button').forEach(btn => {
  btn.addEventListener('click', () => {
    showSchedule(btn.dataset.day, btn);
  });
});

// Attach click events to location buttons
document.querySelectorAll('.location-selector button').forEach(btn => {
  btn.addEventListener('click', () => {
    setLocation(btn.dataset.location, btn);
  });
});

// Show Monday by default and set active button
const mondayButton = document.querySelector('.day-selector button[data-day="Monday"]');
if (mondayButton) {
  showSchedule('Monday', mondayButton);
}

// Set default location active button
const defaultLocationBtn = document.querySelector('.location-selector button[data-location="Redmond"]');
if (defaultLocationBtn) defaultLocationBtn.classList.add('active');

// Add active class to Monday button by default
document.querySelector('.day-selector button[data-day="Monday"]').classList.add('active');

document.querySelectorAll('.location-selector button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.location-selector button').forEach(b => b.classList.add('active'));
    setLocation(btn.dataset.location, btn);
  });
});



