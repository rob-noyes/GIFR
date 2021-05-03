function init() {
  const btn = document.querySelector("button");
  const input = document.querySelector("input");
  const img = document.querySelector("img");
  const h2 = document.querySelector("h2");

  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=5Z6Ps6yTi1vpqaUQM1vOe99tWcLd00nU&s=cats`,
    { mode: "cors" }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      img.src = response.data.images.original.url;
    });

  btn.addEventListener("click", async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=5Z6Ps6yTi1vpqaUQM1vOe99tWcLd00nU&s=${input.value}`,
        { mode: "cors" }
      );
      const catData = await response.json();
      img.src = catData.data.images.original.url;
      h2.innerHTML = "";
    } catch (error) {
      h2.innerHTML = "Invalid Search";
    }
  });
}

init();
