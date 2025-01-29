let userData = [
  { id: 1, name: "John Doe", email: "john@example.com", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 3, name: "Mark Johnson", email: "mark@example.com", avatar: "https://randomuser.me/api/portraits/men/2.jpg" }
];

const userDataContainer = document.querySelector(".user-info");
const loadingIndicator = document.getElementById("loading");

function showUserData(users) {
  if (!userDataContainer) {
      console.error("User container not found!");
      return;
  }

  loadingIndicator.style.display = "block";

  setTimeout(() => {
      loadingIndicator.style.display = "none";
      users.forEach((user) => {
          const userDiv = document.createElement("div");
          userDiv.className = "user-card";

          const userName = document.createElement("h2");
          userName.textContent = user.name;

          const userEmail = document.createElement("p");
          userEmail.textContent = user.email;

          const userAvatar = document.createElement("img");
          userAvatar.src = user.avatar;
          userAvatar.alt = `${user.name}'s Avatar`;

          userDiv.append(userAvatar, userName, userEmail);
          userDataContainer.appendChild(userDiv);
      });
  }, 2000);
}

showUserData(userData);
