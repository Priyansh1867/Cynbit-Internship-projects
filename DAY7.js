const users = [
  { name: "Ananya Sharma", branch: "CSE", email: "ananya@example.com", year: 2 },
  { name: "Rohan Mehta", branch: "ECE", email: "rohan@example.com", year: 3 },
  { name: "Priya Verma", branch: "IT", email: "priya@example.com", year: 1 },
  { name: "Kunal Joshi", branch: "CSE", email: "kunal@example.com", year: 4 },
  { name: "Megha Patel", branch: "ME", email: "megha@example.com", year: 2 },
  { name: "Soham Das", branch: "EE", email: "soham@example.com", year: 3 }
];

const userList = document.getElementById("userList");
const searchInput = document.getElementById("searchInput");
const sortButton = document.getElementById("sortButton");

function displayUsers(userArray) {
  userList.innerHTML = "";
  userArray.forEach(user => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `<strong>${user.name}</strong><br>${user.branch}`;
    userList.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(keyword) ||
    user.branch.toLowerCase().includes(keyword)
  );
  displayUsers(filteredUsers);
});

sortButton.addEventListener("click", () => {
  const sortedUsers = [...users].sort((a, b) => a.year - b.year);
  displayUsers(sortedUsers);
});

// Initial display
displayUsers(users);
