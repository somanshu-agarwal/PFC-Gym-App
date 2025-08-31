// app.js

// Load exercises from JSON and render them
async function loadExercises() {
  try {
    const response = await fetch("exercises.json");
    if (!response.ok) throw new Error("Failed to load exercises.json");
    const exercises = await response.json();
    renderExercises(exercises);
  } catch (err) {
    console.error("Error loading exercises:", err);
    document.getElementById("exercise-list").innerHTML =
      "<p style='color:red'>Failed to load exercises.</p>";
  }
}

// Render exercises into the page
function renderExercises(exercises) {
  const container = document.getElementById("exercise-list");
  container.innerHTML = "";

  exercises.forEach(ex => {
    const card = document.createElement("div");
    card.className = "exercise-card";
    card.innerHTML = `
      <h3>${ex.name}</h3>
      <p><strong>Category:</strong> ${ex.category}</p>
      <p>${ex.description}</p>
    `;
    container.appendChild(card);
  });
}

// Search filter
function setupSearch() {
  const searchBox = document.getElementById("search");
  searchBox.addEventListener("input", e => {
    const query = e.target.value.toLowerCase();
    const cards = document.querySelectorAll(".exercise-card");
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text
