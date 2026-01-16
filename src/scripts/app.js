const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const serviceList = document.getElementById("service-list");

// Mock data (replace Firebase for now)
const mockServices = [
  { name: "Joe's Plumbing", location: "Kegalle" },
  { name: "ElectroFix", location: "Colombo" },
  { name: "Cleaning Experts", location: "Kandy" },
];

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = mockServices.filter(s =>
    s.name.toLowerCase().includes(query) || s.location.toLowerCase().includes(query)
  );

  serviceList.innerHTML = "";
  if (filtered.length === 0) {
    serviceList.innerHTML = "<li>No results found</li>";
  }

  filtered.forEach(s => {
    const li = document.createElement("li");
    li.textContent = `${s.name} - ${s.location}`;
    serviceList.appendChild(li);
  });
});
