function showDescription(id) {
  const desc = document.getElementById(id);
  if (desc.style.display === "block") {
    desc.style.display = "none";
  } else {
    // Hide all others
    const allDescriptions = document.querySelectorAll(".description");
    allDescriptions.forEach((d) => (d.style.display = "none"));

    desc.style.display = "block";
  }
}
