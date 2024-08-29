document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const publicationItems = document.querySelectorAll(".publication-item");
  const seeMoreButton = document.getElementById("seeMoreButton");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      // Remove the active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add the active class to the clicked button
      button.classList.add("active");

      // Filter the publications
      publicationItems.forEach((item) => {
        if (
          category === "all" ||
          item.getAttribute("data-category") === category
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Redirect to a new page when the See More button is clicked
  seeMoreButton.addEventListener("click", function () {
    window.location.href = "fhi360.html"; // Change this URL to your desired target
  });
});

////////////////////////////
const wrapper = document.querySelector(".wrapper1");
let isDown = false;
let startX;
let scrollLeft;

// Enable dragging to scroll on desktop
wrapper.addEventListener("mousedown", (e) => {
  isDown = true;
  wrapper.classList.add("active");
  startX = e.pageX - wrapper.offsetLeft;
  scrollLeft = wrapper.scrollLeft;
});

wrapper.addEventListener("mouseleave", () => {
  isDown = false;
  wrapper.classList.remove("active");
});

wrapper.addEventListener("mouseup", () => {
  isDown = false;
  wrapper.classList.remove("active");
});

wrapper.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - wrapper.offsetLeft;
  const walk = (x - startX) * 2; // Adjust scroll speed
  wrapper.scrollLeft = scrollLeft - walk;
});

// Auto scrolling
let autoScroll = setInterval(() => {
  wrapper.scrollLeft += 1;
}, 30); // Adjust speed by changing interval time

wrapper.addEventListener("mouseenter", () => {
  clearInterval(autoScroll);
});

wrapper.addEventListener("mouseleave", () => {
  autoScroll = setInterval(() => {
    wrapper.scrollLeft += 1;
  }, 30);
});

//////

