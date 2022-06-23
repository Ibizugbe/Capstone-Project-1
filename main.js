const comments = [
  {
    userName: "Keg Jonah",
    userImage: "./Assets/other-images/IMG-20220504-WA0018.jpg",
    comments:
      "Best food delivery app i have used in nigeria. Absolutly recommended and ill use it over and over agai!",
  },
  {
    userName: "John Kingsley",
    userImage: "./Assets/other-images/IMG-20220504-WA0018.jpg",
    comments:
      "Absolutely my favorite restaurant, everything came in ease and the food tastes really great.",
  },
  {
    userName: "James Hartley",
    userImage: "./Assets/other-images/IMG-20220504-WA0018.jpg",
    comments:
      "I use chopLife frequently and I can say they never dissapoint. The delivery process is very smooth and transparent",
  },
  {
    userName: "Esosa Constance",
    userImage: "./Assets/other-images/IMG-20220504-WA0018.jpg",
    comments:
      "I always use chopLife for my family dinner, My family always asl for it. They are the best!",
  },
  {
    userName: "Austin Carnigie",
    userImage: "./Assets/other-images/IMG-20220504-WA0018.jpg",
    comments:
      "I always use chopLife for my family dinner, My family always asl for it. They are the best!",
  },
  {
    userName: "Joshua Justin",
    userImage: "./Assets/other-images/IMG-20220504-WA0018.jpg",
    comments:
      "Absolutely my favorite restaurant, everything came in ease and the food tastes really great.",
  },
];

comments.forEach((element) => {
  const reviewContainer = document.querySelector(".reviews-container");
  const reviewCard = document.createElement("div");
  reviewCard.innerHTML = `
    <img
      src='${element.userImage}'
      class='reviewer-img'
      alt='user-image'
    />
    <div class='user-comment'>
      <p class='name'>${element.userName}</p>
      <p class='comment'>${element.comments}</p>
    </div>`;

  reviewContainer.appendChild(reviewCard);
  reviewCard.classList.add("review-card");
});
