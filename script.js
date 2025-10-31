const lines = ["ISURU SAMPATH", "NETWORK ENGINEER", "WEB DEVELOPER"];

const typingBox = document.getElementById("typingBox");
let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (charIndex < lines[lineIndex].length) {
    typingBox.textContent += lines[lineIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeLine, 100); // typing speed
  } else {
    setTimeout(() => {
      typingBox.textContent = ""; // clear line
      lineIndex++;
      charIndex = 0;

      // 🔁 Loop back to first line if all lines are done
      if (lineIndex >= lines.length) {
        lineIndex = 0;
      }

      typeLine();
    }, 1000); // delay before next line
  }
}
const targets = document.querySelectorAll(".skills .cads");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target); // Trigger once per card
    }
  });
});

targets.forEach((target) => observer.observe(target));
