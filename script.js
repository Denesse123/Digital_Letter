
const openBtn = document.getElementById("openBtn");
const letter = document.getElementById("letter");
const envelope = document.getElementById("envelope");
const forgiveBtn = document.getElementById("forgiveBtn");
const finalMessage = document.getElementById("finalMessage");

openBtn.addEventListener("click", () => {
  letter.classList.remove("hidden");
  openBtn.classList.add("hidden");
  envelope.textContent = "💗";

  letter.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
});

forgiveBtn.addEventListener("click", () => {
  finalMessage.classList.remove("hidden");
  forgiveBtn.classList.add("hidden");

  finalMessage.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
});
