function scrollToTop() {
  let button = document.createElement("div");
  button.id = "button";
  let icon = document.createElement("i");
  icon.className = "fa-solid fa-angles-up";
  button.appendChild(icon);
  document.body.appendChild(button);
  window.onscroll = function () {
    if (window.scrollY >= 1000) {
      button.style.cssText =
        "display: block; background-color: var(--mane-color); color: white; border-radius: 5px; padding: 8px; position: fixed; bottom: 20px; right: 20px; border: none; cursor: pointer; box-shadow: inset -2px -2px 10px #0000006b, inset 2px 2px 10px #0000006b; animation-name: shadow; animation-duration: 3s; animation-timing-function: linear; animation-iteration-count: infinite";
    } else {
      button.style.cssText =
        "display: none; background-color: var(--mane-color); color: white; border-radius: 5px; padding: 8px; position: fixed; bottom: 20px; right: 20px; border: none; cursor: pointer; box-shadow: inset -2px -2px 10px #0000006b, inset 2px 2px 10px #0000006b; animation-name: shadow; animation-duration: 3s; animation-timing-function: linear; animation-iteration-count: infinite";
    }
  };
  button.onclick = function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
}

scrollToTop();

// Class Active
let active = document.querySelectorAll("header .navigation nav ul li a");
active.forEach((a) => {
  a.addEventListener("click", (e) => {
    active.forEach((a) => {
      a.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    navigation.style.display = "none";
    iconRight.style.display = "none";
    navHeader.style.display = "block";
  });
});

// Navigation
let navigation = document.querySelector(".navigation");
let navHeader = document.querySelector(".navHeader");
let iconRight = document.getElementById("right");
navHeader.onclick = function () {
  navigation.style.display = "block";
  navHeader.style.display = "none";
  iconRight.style.display = "block";
};
iconRight.onclick = function () {
  navigation.style.display = "none";
  iconRight.style.display = "none";
  navHeader.style.display = "block";
};

// Navigation Search
let select = document.querySelector(".selectParent .select");
let iconOne = document.getElementById("iconOne");
let iconTwo = document.getElementById("iconTwo");
iconOne.addEventListener("click", () => {
  select.style.cssText = "display: block; transform: translate(0, 0)";
  iconOne.style.display = "none";
  iconTwo.style.display = "block";
});

iconTwo.addEventListener("click", () => {
  select.style.cssText = "display: none; transform: translate(0, 100px)";
  iconOne.style.display = "block";
  iconTwo.style.display = "none";
});
