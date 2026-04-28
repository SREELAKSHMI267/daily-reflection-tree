function runTree() {
  const completed = document.getElementById("completed").value;
  const mood = parseInt(document.getElementById("mood").value);
  const distraction = document.getElementById("distraction").value.toLowerCase();

  let result = "";

  // Guardrails
  if (!mood || mood < 1 || mood > 5) {
    result = "Please enter a valid mood (1-5)";
  } else {
    // Deterministic Decision Tree
    if (completed === "yes") {
      if (mood >= 4) {
        result = "Great job! Keep maintaining consistency.";
      } else {
        result = "Good work, but try improving your mood with better breaks.";
      }
    } else {
      if (distraction.includes("phone") || distraction.includes("instagram")) {
        result = "Reduce phone usage tomorrow.";
      } else {
        result = "Plan your tasks better and avoid distractions.";
      }
    }
  }

  document.getElementById("output").innerText = result;
}