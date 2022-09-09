let myJson = new XMLHttpRequest();
myJson.open("GET", "http://myjson.dit.upm.es/api/bins/fqga");
myJson.send();

let bocks = document.querySelector("article.articles .container .bocks");

myJson.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let responseTextMyJson = JSON.parse(this.responseText);
    for (let i = 0; i < responseTextMyJson.bocks.length; i++) {
      const parent = document.createElement("div");
      const parentText = document.createElement("div");
      parentText.className = "text";
      parent.className = "bock";

      const ima = document.createElement("div");
      const imgUrl = document.createElement("img");
      ima.className = "images";
      imgUrl.src = `${responseTextMyJson.bocks[i].bock.url}`;

      ima.appendChild(imgUrl);

      const paragraph = document.createElement("p");
      const paragraphTitle = document.createTextNode(
        responseTextMyJson.bocks[i].bock.title
      );
      paragraph.appendChild(paragraphTitle);

      const scrLink = document.createElement("a");
      const scrLinkText = document.createTextNode(responseTextMyJson.download);
      scrLink.appendChild(scrLinkText);
      scrLink.className = "download";
      scrLink.href = `${responseTextMyJson.bocks[i].bock.src_link}`;

      parentText.appendChild(paragraph);
      parentText.appendChild(scrLink);
      parent.appendChild(ima);
      parent.appendChild(parentText);
      bocks.appendChild(parent);
    }
  }
};

// -----------------------------------------

// let images = document.createElement("img");
// images.src = "../images/لقطة الشاشة 2022-09-09 072402.png";
// let header = document.querySelector("header.images");
// images.style.maxWidth = "100%";
// header.append(images);

// // Videos Rating تقييم 4
async function getVideo(apiLink) {
  try {
    let result = await fetch(apiLink);
    let jsDataFour = await result.json();
    return jsDataFour.items;
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Good");
  }
}

getVideo(
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCLj8UFOcdFrvlh24Lw7jrgA&maxResults=4&order=date&key=AIzaSyDDsLuqe_Gc10hV6RJ3_QBFhjW5blGZhW8"
).then((result) => {
  let boxAll = document.querySelector("main.visuals .container .box-all");
  for (let i = 0; i <= 4; i++) {
    let boxAllTest = document.createElement("div");
    boxAllTest.className = "box";
    let p = document.createElement("p");
    let text = document.createTextNode(result[i].snippet.title);
    p.appendChild(text);

    boxAllTest.appendChild(p);
    boxAllTest.innerHTML += `<iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/${result[i].id.videoId}?rel=0"
    title="${result[i].snippet.title}" frameborder="0"allow="accelerometer;
    autoplay; clipboard-write; encrypted-media;
    gyroscope; picture-in-picture"allowfullscreen>
    </iframe>`;
    boxAll.appendChild(boxAllTest);
  }
});

// ---------------------------------------------------------------------------

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
