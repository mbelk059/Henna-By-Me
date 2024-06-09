// https://github.com/michalsnik/aos

AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
  

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value.trim();
    const artist = document.getElementById("artist").value.trim();
    const date = document.getElementById("date").value.trim();
    const time = document.getElementById("time").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!firstName || !lastName || !email || !phone || !service || !artist || !date || !time || !message) {
      alert("Please fill out all fields.");
      return;
    }

    document.getElementById("confirmationMessage").style.display = "block";

    document.getElementById("contactForm").reset();
  });
