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
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCLj8UFOcdFrvlh24Lw7jrgA&maxResults=50&order=searchSortUnspecified&key=AIzaSyDDsLuqe_Gc10hV6RJ3_QBFhjW5blGZhW8"
).then((result) => {
  Object.keys(result).forEach((ele) => {
    let boxAll = document.querySelector(".videos");
    let box = document.createElement("div");
    box.className = "box";
    let createP = document.createElement("p");
    let repoNameAll = document.createTextNode(result[ele].snippet.title);
    createP.appendChild(repoNameAll);
    box.appendChild(createP);
    boxAll.appendChild(box);
    box.innerHTML += `<iframe
                    width="100%"
                    height="170"
                    src="https://www.youtube.com/embed/${result[ele].id.videoId}?rel=0"
                    title="${result[ele].snippet.title}" frameborder="0"allow="accelerometer;
                    autoplay; clipboard-write; encrypted-media;
                    gyroscope; picture-in-picture"allowfullscreen>
                </iframe>`;
  });
});
