// (Page Master)

// // Scroll Video
let boxAll = document.querySelector("main.visuals .container .box-all");
let count = 100;

// Scroll Video Left
function scrollVideoLeft() {
  boxAll.style.transform = `translateX(${count}px)`;
  count += 100;
  console.log("Good");
}

// Scroll Video Right
function scrollVideoRight() {
  boxAll.style.transform = `translateX(${count}px)`;
  count -= 100;
  console.log("Good");
}

// Json Video
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
      parent.appendChild(ima);

      const paragraph = document.createElement("p");
      const paragraphTitle = document.createTextNode(
        responseTextMyJson.bocks[i].bock.title
      );
      paragraph.appendChild(paragraphTitle);
      parentText.appendChild(paragraph);

      const scrLink = document.createElement("a");
      scrLink.className = "download";
      const scrLinkText = document.createTextNode(responseTextMyJson.download);
      scrLink.appendChild(scrLinkText);
      scrLink.href = `${responseTextMyJson.bocks[i].bock.src_link}`;
      parentText.appendChild(scrLink);

      parent.appendChild(parentText);
      bocks.appendChild(parent);
    }
  }
};

// Videos Master
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
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC13KPGZ_OhiRRwXwTZuWG9g&maxResults=300&order=date&key=AIzaSyB0AHvujKcQQIn8d3TXWUWEVqTHlKh3rjU"
).then((result) => {
  let boxAll = document.querySelector("main.visuals .container .box-all");
  for (let i = 0; i <= 4; i++) {
    let boxAllTest = document.createElement("div");
    boxAllTest.className = "box";

    // Paragraph
    let p = document.createElement("p");
    let text = document.createTextNode(result[i].snippet.title);
    p.appendChild(text);
    boxAllTest.appendChild(p);

    boxAllTest.innerHTML = `<iframe
    src="https://www.youtube.com/embed/${result[i].id.videoId}?rel=0"
    title="${result[i].snippet.title}"
    </iframe>`;

    boxAll.appendChild(boxAllTest);
  }
});

// ----------------------------------------------------------------

// All Website (Global)

// Components Header
document.querySelector("header").innerHTML = `
  <div class="container">
    <div class="head">
      <div class="logo">
        <a href="index.html">
          <h3>هيثم طلعت</h3>
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="index.html" class="active">
              الرئيسية
            </a>
          </li>
          <li>
            <a href="#visuals">المرئيات</a>
          </li>
          <li>
            <a href="#bock">الكتب</a>
          </li>
          <li>
            <a href="#">المقالات</a>
          </li>
          <li>
            <a href="html/indexEng.html">English</a>
          </li>
        </ul>
      </nav>
    </div>

    <div onclick="displayBlockOnIconLeft()" class="navHeader">
      <i class="fa-solid fa-align-left"></i>
    </div>

    <div
      onclick="displayBlockOnIconRight()"
      class="navHeader right"
      style="display: none"
    >
      <i class="fa-solid fa-align-right"></i>
    </div>
  </div>
  <div class="navigation">
    <nav>
      <ul>
        <li>
          <a onclick="activeFunction()" href="index.html" class="active">
            الرئيسية
          </a>
        </li>
        <li>
          <a onclick="activeFunction()" href="#visuals">
            المرئيات
          </a>
        </li>
        <li>
          <a onclick="activeFunction()" href="#bock">
            الكتب
          </a>
        </li>
        <li>
          <a onclick="activeFunction()" href="#">
            المقالات
          </a>
        </li>
        <li>
          <a onclick="activeFunction()" href="html/whit.html">
            من نحن
          </a>
        </li>
      </ul>
    </nav>
  </div>
`;

document.querySelector("footer").innerHTML = `<div class="container">
        <div class="parent">
          <p>
            ليست للموقع أي حقوق لمن أراد الأسهام في النشر و (الدال علي الخير
            كفاعله)
          </p>
          <div class="social-icon">
            <div class="box">
              <a
                href="https://web.facebook.com/drhaithamofficial"
                target="_blank"
                ><i class="fab fa-facebook-f"></i
              ></a>
            </div>
            <div class="box">
              <a href="https://twitter.com/ibn_badys" target="_blank"
                ><i class="fab fa-twitter"></i
              ></a>
            </div>
            <div class="box">
              <a
                href="https://www.youtube.com/channel/UCLj8UFOcdFrvlh24Lw7jrgA/about"
                target="_blank"
                ><i class="fab fa-youtube"></i
              ></a>
            </div>
          </div>
        </div>
</div>`;

// Scroll Website
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

// Class Active
let active = document.querySelectorAll("header .navigation nav ul li a");
function activeFunction() {
  active.forEach((a) => {
    a.addEventListener("click", (e) => {
      active.forEach((a) => {
        a.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
      displayBlockOnIconRight();
    });
  });
}

// Navigation
let navigation = document.querySelector(".navigation");
let navHeader = document.querySelector(".navHeader");
let iconRight = document.querySelector(".right");

function displayBlockOnIconLeft() {
  navigation.style.display = "block";
  navHeader.style.display = "none";
  iconRight.style.display = "block";
}
function displayBlockOnIconRight() {
  navigation.style.display = "none";
  iconRight.style.display = "none";
  navHeader.style.display = "block";
}

// Videos (Pages Rating & Video-all & ....)
// Navigation Search
let select = document.querySelector(".selectParent .select");
let iconOne = document.getElementById("iconOne");
let iconTwo = document.getElementById("iconTwo");

function displayFilters() {
  select.style.cssText = "display: block; transform: translate(0, 0)";
  iconOne.style.display = "none";
  iconTwo.style.display = "block";
}

function noneFilters() {
  select.style.cssText = "display: none; transform: translate(0, 100px)";
  iconOne.style.display = "block";
  iconTwo.style.display = "none";
}

// Background Images
// let headerImages = document.querySelector("header.images");

// let images = document.createElement("img");
// images.src = "../images/لقطة الشاشة 2022-09-09 072402.png";

// images.style.maxWidth = "100%";

// headerImages.append(images);
