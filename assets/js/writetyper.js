// function toggleDescription(element) {
//     const description = element.parentNode.querySelector('.description');
//     const typewriterText = document.getElementById("typewriter");

//     // Toggle the display of the description
//     if (description.style.display === "block") {
//         description.style.display = "none";
//         element.textContent = "See More";
//     } else {
//         description.style.display = "block";
//         element.textContent = "Show Less";
        
//         // Start the typewriter effect
//         startTypewriter(typewriterText, "Lead the overall FAST agenda for monitoring, evaluation, learning, research, and analysis, including reviewing and updating draft Activity Monitoring, Evaluation, and Learning Plan (AMELP)...");
//     }
// }

// function startTypewriter(element, text) {
//     let index = 0;
    
//     function typeEffect() {
//         if (index < text.length) {
//             element.textContent += text.charAt(index);
//             index++;
//             setTimeout(typeEffect, 50); // Adjust typing speed here
//         }
//     }

//     // Clear any existing text before starting the typing effect
//     element.textContent = '';
//     typeEffect();
// }
