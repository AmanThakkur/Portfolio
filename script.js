function showModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "flex";

  // Add event listener to close modal when clicking outside
  window.addEventListener("click", function closeOnOutsideClick(event) {
    if (event.target === modal) {
      closeModal(modalId);
      window.removeEventListener("click", closeOnOutsideClick); // Remove listener after closing
    }
  });
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function showAboutMe() {
  fetch("resume.json")
    .then((response) => response.json())
    .then((data) => {
      const aboutMeContent = document.getElementById("aboutMeContent");
      aboutMeContent.innerHTML = `
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Title:</strong> ${data.title}</p>
          <p><strong>Experience:</strong> ${data.experience}</p>
          <p><strong>Skills:</strong> ${data.skills.join(", ")}</p>
          <p><strong>Bio:</strong> ${data.bio}</p>
        `;
      showModal("aboutMeModal");
    })
    .catch((error) => console.error("Error fetching resume data:", error));
}

function downloadResume() {
  var resumeLink = document.createElement("a");
  resumeLink.href = "Resume.docx"; // Change this to your actual resume file
  resumeLink.download = "Aman_Kumar_Resume.docx";
  document.body.appendChild(resumeLink);
  resumeLink.click();
  document.body.removeChild(resumeLink);
}
