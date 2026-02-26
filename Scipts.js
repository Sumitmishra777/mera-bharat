const searchInput = document.getElementById("searchInput");
const optionsList = document.getElementById("optionsList");

function showList() {
  optionsList.style.display = "block";
}

function hideList() {
  setTimeout(() => {
    optionsList.style.display = "none";
  }, 200); // small delay so click can register
}

function searchFunction() {
  const input = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll("#optionsList li");

  optionsList.style.display = "block";

  listItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    if (text.includes(input) && input.length > 0) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
