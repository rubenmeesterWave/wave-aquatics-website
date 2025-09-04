/* ========== Nav Dropdown ========== */


document.addEventListener('DOMContentLoaded', () => {
  
  
  /* ========== FAQ Sidebar Active Link ========== */
  const sidebarLinks = document.querySelectorAll('.faq-sidebar a');

  sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
      sidebarLinks.forEach(l => l.classList.remove('active')); 
      this.classList.add('active'); 
    });
  });
});


/* ========== Accordion Dropdown ========== */

 const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    if (content.classList.contains("open")) {
      content.style.maxHeight = null;
      content.classList.remove("open");
      header.classList.remove("active");
    } else {
      content.classList.add("open");
      header.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px"; 
    }
  });
});


/* ========== ScheduleList Preview========== */


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


 


   let currentLocation = "Redmond"; 

function showSchedule(day, button = null) {
  const buttons = document.querySelectorAll('.day-selector button');
  buttons.forEach(btn => btn.classList.remove('active'));

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

  const activeDay = document.querySelector('.day-selector button.active');
  if (activeDay) {
    showSchedule(activeDay.dataset.day, activeDay);
  } else {
    showSchedule('Monday'); 
  }
}

document.querySelectorAll('.day-selector button').forEach(btn => {
  btn.addEventListener('click', () => {
    showSchedule(btn.dataset.day, btn);
  });
});

document.querySelectorAll('.location-selector button').forEach(btn => {
  btn.addEventListener('click', () => {
    setLocation(btn.dataset.location, btn);
  });
});

const mondayButton = document.querySelector('.day-selector button[data-day="Monday"]');
if (mondayButton) {
  showSchedule('Monday', mondayButton);
}

const defaultLocationBtn = document.querySelector('.location-selector button[data-location="Redmond"]');
if (defaultLocationBtn) defaultLocationBtn.classList.add('active');

document.querySelector('.day-selector button[data-day="Monday"]').classList.add('active');

document.querySelectorAll('.location-selector button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.location-selector button').forEach(b => b.classList.add('active'));
    setLocation(btn.dataset.location, btn);
  });
});

