document.addEventListener("DOMContentLoaded", () => {
  const bouttButton = document.createElement("button");
  const orgButton = document.createElement("button");
  const almaMaterButton = document.createElement("button");
  const visionButton = document.createElement("button");
  const missionButton = document.createElement("button");

  const bouttSection = document.querySelector(".section-content-boutt");
  const orgSection = document.querySelector(".section-content-org");
  const almaMaterSection = document.querySelector(".section-content-almamatter");
  const visionSection = document.querySelector(".section-content-vision");
  const missionSection = document.querySelector(".section-content-mission");

  const sections = [bouttSection, orgSection, almaMaterSection, visionSection, missionSection];
  const buttons = [bouttButton, orgButton, almaMaterButton, visionButton, missionButton];

  function hideAllSections() {
    sections.forEach((section) => {
      section.style.display = "none";
    });

    buttons.forEach((button) => {
      button.style.backgroundColor = "#FFEB3B"; // Yellow background
      button.style.color = "black"; // Black font color
      button.style.border = "2px solid black"; // Black border
    });
  }

  function styleButton(button) {
    button.style.backgroundColor = "#FFEB3B"; // Yellow background
    button.style.color = "black"; // Black font color
    button.style.border = "2px solid black"; // Black border
    button.style.padding = "10px 20px";
    button.style.margin = "10px";
    button.style.borderRadius = "5px"; // Rounded corners
    button.style.fontSize = "16px"; // Modern button size
    button.style.cursor = "pointer";
    button.style.transition = "background-color 0.3s, color 0.3s, border 0.3s";
  }

  function createButton(button, label, section) {
    button.textContent = label;
    styleButton(button);
    button.addEventListener("click", () => {
      hideAllSections();
      section.style.display = "block";
      button.style.backgroundColor = "#FFF176"; // Lighter yellow background for active button
      button.style.border = "2px solid black"; // Match section border
    });
    document.body.insertBefore(button, document.querySelector("section"));
  }

  // Initialize buttons
  createButton(bouttButton, "View About School History", bouttSection);
  createButton(orgButton, "View Organizational Chart", orgSection);
  createButton(almaMaterButton, "View Bukidnon Alma Mater", almaMaterSection);
  createButton(visionButton, "View DepEd Vision", visionSection);
  createButton(missionButton, "View DepEd Mission", missionSection);

  // Default state: hide all sections
  hideAllSections();
});
