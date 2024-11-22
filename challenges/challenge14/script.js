const form = document.getElementById("contact-form");

const param = {
  sendername: document.querySelector("#sendername").value,
  to: document.querySelector("#email").value,
  subject: document.querySelector("#subject").value,
  message: document.querySelector("#message").value,
};

emailjs.init("-rtIe-3NVfZbRF6md");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  emailjs.send("service_f69gqkx", "template_qk53lq4", param).then(
    () => {
      alert("Message sent successfully!");
    },
    (error) => {
      alert("Failed to send message. Please try again.");
      console.error("Error:", error);
    }
  );
});
