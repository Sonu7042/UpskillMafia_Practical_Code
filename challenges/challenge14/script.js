const form = document.getElementById("contact-form");

const sendername = document.getElementById("sendername");
const senderEmail = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  (function () {
    emailjs.init("-rtIe-3NVfZbRF6md");
  })();

  const param = {
    sender: sendername.value,
    to: senderEmail.value,
    subject: subject.value,
    message: message.value,
  };

  emailjs.send("service_6vg4u8l", "template_qk53lq4", param).then(
    () => {
      alert("Message sent successfully!");
    },
    (error) => {
      alert("Failed to send message. Please try again.");
      console.error("Error:", error);
    }
  );

  sendername.value = "";
  senderEmail.value = "";
  subject.value = "";
  message.value = "";
});
