/* =============== typing animation ================= */
var typed = new Typed(".typing", {
    strings:["","an Aspiring Quant", "a Penetration Tester", "a CS Student"],
    typeSpeed:100,
    BackSpeed:100,
    loop:true
});
/* =============== navbar ================== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav .nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
/* =============== contact (email) ==================== */
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("KfUQ7H9rObvt-rPFa");  // Your public key

    const form = document.getElementById("contact-form");
    const confirmation = document.querySelector(".confirmation");

    if (form && confirmation) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.sendForm("service_r6r5xxj", "template_bazxd1v", form)
                .then(function (response) {
                    confirmation.textContent = "Message sent!";
                    confirmation.style.color = "green"; 
                    form.reset(); 
                }, function (error) {
                    confirmation.textContent = "Failed to send message. Please try again.";
                    confirmation.style.color = "red";
                    console.error("EmailJS Error:", error);
                });
        });
    }
});

