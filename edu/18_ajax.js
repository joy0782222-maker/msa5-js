const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // 기존이벤트 취소

  // // 유지보수 힘듦
  // fatch : ("https://picsum.photos/v2/list?page=2&limit=100")
  // .then()

  const baseURL = "https://picsum.photos";
  const path = "/v2/list";

  //  이벤트 객체에서 이벤트가 발생한 요소에 접근해 필요값 획득
  const page = e.target.page.value;
  const limit = e.target.limit.value;

  const url = `${baseURL}${path}?page=${page}&limit=${limit}`;

  try {
    const response = await axios.get(url);
    // console.log(response);

    // 카드 넣을 컨테이너 요소
    const cardContainer = document.querySelector(".card-container");
    cardContainer.textContent = "";

    response.data.forEach((item) => {
      // 2_card img 요소 생성
      const cardImg = document.createElement("div");
      cardImg.classList.add("card-img");
      cardImg.style.backgroundImage = `url('${item.download_url}')`;

      // 3_card text 요소 생성
      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.textContent = `${item.id}:${item.author}`;

      // 1_card요소 생성
      const card = document.createElement("div");
      card.classList.add("card");
      card.appendChild(cardImg);
      card.appendChild(cardText);

      // 4_card container 생성한 요소 담기
      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error(error);
  }
});
