const convert = document.querySelector(".convert");
const p = document.querySelector("p");
convert.addEventListener("click", () => {
  let speech = true;

  window.SpeechRecognition = window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

  recognition.addEventListener("result", (e) => {
    const transcript = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript);

    const textbox = document.querySelector("#textarea");
    textbox.innerHTML = transcript;
  });

  recognition.addEventListener("end", () => {
    speech = false;
    p.innerText = "Stopped listening, hope you are done...";
  });

  if (speech) {
    p.innerText = "Listening, please speak...";
    recognition.start();
  }
});
