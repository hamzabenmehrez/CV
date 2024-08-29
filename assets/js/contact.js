(function () {
  // Initialize EmailJS with your Public Key
  emailjs.init("9iwUtUZo4wsIw2wto");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // Use your EmailJS service ID and template ID
      emailjs.sendForm("service_gfq8tfd", "template_6x5x4wl", this).then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    });
};
