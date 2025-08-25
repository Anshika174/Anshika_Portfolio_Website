document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // Reveal sections on scroll
  // ===============================
  const revealers = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target); // animate only once
      }
    });
  }, { threshold: 0.15 });

  revealers.forEach(el => observer.observe(el));

  // ===============================
  // Contact Form - Send to Backend
  // ===============================
  const form = document.getElementById("contactForm");
  const responseMsg = document.getElementById("responseMsg");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        message: form.message.value.trim()
      };

      try {
        const res = await fetch("http://localhost:5000/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (res.ok) {
          responseMsg.textContent = "Message sent successfully! 💌";
          responseMsg.style.color = "green";
          form.reset();
        } else {
          responseMsg.textContent = data.error || "Something went wrong.";
          responseMsg.style.color = "red";
        }
      } catch (err) {
        console.error("Error:", err);
        responseMsg.textContent = "Server error. Please try again later.";
        responseMsg.style.color = "red";
      }
    });
  }

});

