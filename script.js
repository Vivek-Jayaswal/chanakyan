let userData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 3,
    name: "Mark Johnson",
    email: "mark@example.com",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const userDataContainer = document.querySelector(".user-info");
console.log(userDataContainer);


function showUserData(userData) {
  userData.forEach((element) => {
    const userDiv = document.createElement("div");
    userDiv.className = "user-card"
    const userName = document.createElement("h1");
    userName.textContent = element.name;
    const userEmail = document.createElement("p");
    userEmail.textContent = element.email;
    const userAvtar = document.createElement("img");
    userAvtar.src = element.avatar;
    userDiv.append(userAvtar,userName,userEmail);
    userDataContainer.appendChild(userDiv)
  });

}

showUserData(userData);
