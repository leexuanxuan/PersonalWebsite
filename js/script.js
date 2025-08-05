/* =============== typing animation ================= */
var typed = new Typed(".typing", {
    strings:["","a Red Team Pentester", "an Aspiring Quant", "a CS Student"],
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
    emailjs.init("KfUQ7H9rObvt-rPFa");

    const form = document.getElementById("contact-form");
    const confirmation = document.querySelector(".confirmation");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.sendForm("service_r6r5xxj", "template_bazxd1v", this)
                .then(() => {
                    confirmation.textContent = "Message sent successfully!";
                    confirmation.style.color = "green";
                    form.reset();
                })
                .catch((error) => {
                    confirmation.textContent = "Failed to send message. Please try again.";
                    confirmation.style.color = "red";
                    console.error("EmailJS error:", error);
                });
        });
    }
});

