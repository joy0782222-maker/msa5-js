const next = document.querySelector(".next");
const clean = document.querySelector(".clean");
let page = 1;
next.addEventListener("click", async (e) => {
  const baseURL = "https://picsum.photos";
  const path = "/v2/list";

  let limit = 3;
  const url = `${baseURL}${path}?page=${page}&limit=${limit}`;

  try {
    const response = await axios.get(url);
    console.log(response);

    response.data.forEach((item, idx) => {
      // <div class="card">
      //   <div class="card-img" style="backgraound-image='url('https://picsum.photos/id/2/5000/3333')'"}></div>
      //   <div class="card-text">2: Alejandro Escamilla</div>
      // </div>
      const cardImg = document.createElement("div");
      cardImg.classList.add("card-img");
      cardImg.style.backgroundImage = `url("${item.download_url}")`;

      const cardText = document.createElement("div");
      cardText.classList.add("card-text");
      cardText.textContent = `${item.id}: ${item.author}`;

      const card = document.createElement("div");
      card.classList.add("card");
      card.appendChild(cardImg);
      card.appendChild(cardText);

      const cardContainer = document.querySelector(".card-con");
      cardContainer.appendChild(card);
    });

    page++;
  } catch (error) {
    console.error(error);
  }
});

clean.addEventListener("click", () => {
  const cardContainer = document.querySelector(".card-con");
  cardContainer.innerHTML = "";
  page = 1;
});
