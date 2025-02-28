// ==== Елементи HTML
const formElm = document.querySelector(".form");
const toggleModeBtn = document.getElementById("toggleTheme");
const bodyElm = document.body;
const modal = document.getElementById("modal");
const inputCityElm = document.getElementById("cityInput");
const searchCityText = document.getElementById("searchCityText");
const modalContainerToDay = document.getElementById("modalContainerToDay");
const modalContainerSevenDay = document.getElementById("modalContainerSevenDay");

// масив з кольорами по коду погоди для BG модального вікна по ключу теми
const colorPackForModal = {
  light: {
    1000: "#FFD700", // Сонячно - золотисто-жовтий
    1003: "#A0A0A0", // Місцями хмарно - світло-сірий
    1006: "#B0B0B0", // Хмарно - світло-сірий
    1009: "#D3D3D3", // Похмуро - дуже світло-сірий
    1030: "#B0C4DE", // Туман - світлий блакитний
    1063: "#ADD8E6", // Можливий періодичний дощ - світло-блакитний
    1066: "#E6E6FA", // Можливий періодичний сніг - лавандовий
    1069: "#D3D3D3", // Мокрий сніг - світло-сірий
    1072: "#F0F8FF", // Переохолоджений дощ - небесно-блакитний
    1087: "#FFD700", // Гроза - золотистий із відтінком помаранчевого
    1114: "#F0F8FF", // Снігові заряди - небесно-блакитний
    1117: "#E0FFFF", // Завірюха - світло-блакитний
    1135: "#B0C4DE", // Туман - світлий блакитний
    1147: "#D3D3D3", // Замерзаючий туман - світло-сірий
    1150: "#F0F8FF", // Легкий мряка - небесно-блакитний
    1153: "#DCDCDC", // Мряка - сірий
    1168: "#F5F5F5", // Переохолоджений мряка - дуже світлий сірий
    1171: "#E0E0E0", // Сильний переохолоджений мряка - світло-сірий
    1180: "#ADD8E6", // Легкий дощ, місцями - світло-блакитний
    1183: "#B0E0E6", // Помірний дощ - світло-блакитний
    1186: "#A9A9A9", // Сильний місцями дощ - темно-сірий
    1189: "#B0B0B0", // Сильний дощ - світло-сірий
    1192: "#DCDCDC", // Дуже сильний місцями дощ - сірий
    1195: "#E0E0E0", // Зливи - дуже світлий сірий
    1198: "#F0F8FF", // Легкий переохолоджений дощ - небесно-блакитний
    1201: "#B0E0E6", // Сильний переохолоджений дощ - світло-блакитний
    1204: "#D3D3D3", // Легкий мокрий сніг - світло-сірий
    1207: "#F0F8FF", // Сильний мокрий сніг - небесно-блакитний
    1210: "#E6E6FA", // Легкий сніг - лавандовий
    1213: "#D8BFD8", // Помірний сніг - рожево-блакитний
    1216: "#D3D3D3", // Сильний місцями сніг - світло-сірий
    1219: "#F5F5F5", // Сильний сніг - дуже світлий сірий
    1222: "#E0FFFF", // Дуже сильний місцями сніг - дуже світлий блакитний
    1225: "#F0F8FF", // Сильний снігопад - небесно-блакитний
    1237: "#ADD8E6", // Крижаний дощ - світло-блакитний
    1240: "#B0E0E6", // Легкий короткочасний дощ - світло-блакитний
    1243: "#A9A9A9", // Помірний короткочасний дощ - темно-сірий
    1246: "#B0B0B0", // Сильний короткочасний дощ - світло-сірий
    1249: "#D3D3D3", // Легкий короткочасний мокрий сніг - світло-сірий
    1252: "#F0F8FF", // Сильний короткочасний мокрий сніг - небесно-блакитний
    1255: "#DCDCDC", // Легкий короткочасний сніг - сірий
    1258: "#E0E0E0", // Сильний короткочасний сніг - світло-сірий
    1261: "#ADD8E6", // Легкий короткочасний крижаний дощ - світло-блакитний
    1264: "#B0E0E6", // Сильний короткочасний крижаний дощ - світло-блакитний
    1273: "#A9A9A9", // Місцями грози - темно-сірий
    1276: "#FFD700", // Гроза з сильним дощем - золотистий
    1279: "#E6E6FA", // Гроза з легким снігом - лавандовий
    1282: "#D3D3D3", // Гроза з сильним снігом - світло-сірий
  },
  dark: {
    1000: "#2E2B5F", // Сонячно - темно-синій з фіолетовим відтінком
    1003: "#252A33", // Місцями хмарно - темно-сірий із синім відтінком
    1006: "#1F1F2E", // Хмарно - графітовий сірий
    1009: "#181A23", // Похмуро - майже чорний із синюватим тоном
    1030: "#3B3F4A", // Туман - глибокий сірий із легким голубим відтінком
    1063: "#1C1E26", // Можливий періодичний дощ - темно-синьо-сірий
    1066: "#2A2D3E", // Можливий періодичний сніг - холодний темно-синій
    1069: "#2F3340", // Мокрий сніг - темний сіро-синій
    1072: "#3D3F4E", // Переохолоджений дощ - сіро-синій із легким фіолетовим відтінком
    1087: "#13151A", // Гроза - глибокий чорний із синюватим відтінком
    1114: "#2D313C", // Снігові заряди - темний синьо-сірий
    1117: "#1E222D", // Завірюха - дуже темний синьо-сірий
    1135: "#3C404D", // Туман - сіро-блакитний тьмяний
    1147: "#414553", // Замерзаючий туман - глибокий синьо-сірий
    1150: "#2D303B", // Легкий мряка - темний сірий з блакитним відтінком
    1153: "#2A2D38", // Мряка - темно-сірий
    1168: "#363B47", // Переохолоджений мряка - глибокий синьо-сірий
    1171: "#1A1D26", // Сильний переохолоджений мряка - майже чорний
    1180: "#2C2F3B", // Легкий дощ, місцями - темний сіро-синій
    1183: "#252832", // Помірний дощ - графітовий
    1186: "#20222B", // Сильний місцями дощ - глибокий темно-синій
    1189: "#191B23", // Сильний дощ - майже чорний
    1192: "#14161D", // Дуже сильний місцями дощ - темний чорний-синій
    1195: "#0F1016", // Зливи - чорний із легким синім відтінком
    1198: "#3A3E4C", // Легкий переохолоджений дощ - холодний сіро-синій
    1201: "#2E323E", // Сильний переохолоджений дощ - глибокий сірий
    1204: "#313541", // Легкий мокрий сніг - темно-синьо-сірий
    1207: "#252832", // Сильний мокрий сніг - графітово-синій
    1210: "#2A2E39", // Легкий сніг - темний синьо-сірий
    1213: "#262A35", // Помірний сніг - глибокий сірий із синім
    1216: "#20222D", // Сильний місцями сніг - темно-синій
    1219: "#1B1D27", // Сильний сніг - майже чорний із синім
    1222: "#161820", // Дуже сильний місцями сніг - чорний-синій
    1225: "#111218", // Сильний снігопад - чорний
    1237: "#3D4151", // Крижаний дощ - глибокий сіро-синій
    1240: "#2C2F3B", // Легкий короткочасний дощ - темний сіро-синій
    1243: "#252832", // Помірний короткочасний дощ - графітовий
    1246: "#191B23", // Сильний короткочасний дощ - майже чорний
    1249: "#313541", // Легкий короткочасний мокрий сніг - темно-синьо-сірий
    1252: "#252832", // Сильний короткочасний мокрий сніг - графітово-синій
    1255: "#2A2E39", // Легкий короткочасний сніг - темний синьо-сірий
    1258: "#20222D", // Сильний короткочасний сніг - темно-синій
    1261: "#3D4151", // Легкий короткочасний крижаний дощ - глибокий сіро-синій
    1264: "#2C2F3B", // Сильний короткочасний крижаний дощ - темний сіро-синій
    1273: "#1C1E26", // Місцями грози - темно-синьо-сірий
    1276: "#13151A", // Гроза з сильним дощем - глибокий чорний із синюватим відтінком
    1279: "#2A2D3E", // Гроза з легким снігом - холодний темно-синій
    1282: "#1E222D", // Гроза з сильним снігом - дуже темний синьо-сірий
  },
};

// сабміт форми
formElm.addEventListener("submit", (e) => {
  e.preventDefault();
  getCityFromInput();
});

//  отримати крану з форми
function getCityFromInput() {
  const city = inputCityElm.value.trim().toLowerCase();
  inputCityElm.value = "";
  if (city) {
    geyWeather(city);
  } else {
    alert("Enter the city name!!!");
  }
}

// отримання погоди по країні
async function geyWeather(city) {
  const apiKey = "37a0badc5d984ae59fa171235252402";
  const urlWeather = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`;
  const resposseWeather = await fetch(urlWeather);
  const weatherData = await resposseWeather.json();
  // console.log("sevenDayData", sevenDayData);

  if (weatherData.error) {
    alert("Error! There is no such city.");
  } else {
    const { location, forecast, current } = weatherData;
    updateModal(location, forecast, current);
  }
}

// оновлення даних у модальному вікні
function updateModal(location, forecast, current) {
  searchCityText.innerHTML = getlocation(location);
  updateBGgModal(current);
  updateContainerToDay(current);
  updateContainerSevenDay(forecast.forecastday);
  openModal();
}

// оновоенння беграунда модального вікна в залежності від погоди
function updateBGgModal(current) {
  const modeStyle = localStorage.getItem('mode') ? localStorage.getItem('mode') : 'dark';
  const codeCondition = current.condition.code;
  const hexColor = colorPackForModal[modeStyle][codeCondition];
  const modalElm = modal.querySelector('.modal-body');
  modalElm.style.backgroundColor = hexColor;
}

// отримання локації
function getlocation(location) {
  const { country, name } = location;
  const locationText = `${name}, ${country}`;
  return locationText;
}

// оновеня даних теперешнього дня
function updateContainerToDay(current) {
  modalContainerToDay.innerHTML = "";
  modalContainerToDay.innerHTML = `
  <div class="modal-basicInfo">
  <p>${current.temp_c}℃</p>
  <img src="https:${current.condition.icon}" alt="${current.condition.text}">
  <p>${current.condition.text}</p>
  </div>
  <div class="modal-additlInfo">
  <p><i class="fa-solid fa-wind"></i> ${current.gust_mph} m/s</p>
  <p><i class="fa-solid fa-droplet"></i> ${current.humidity}%</p>
  <p><i class="fa-solid fa-gauge-simple-high"></i> ${current.pressure_mb} mm Hg</p>
  </div>
  `;

}
// оновеня даних семи днів
function updateContainerSevenDay(forecastday) {
  modalContainerSevenDay.innerHTML = "";
  forecastday.forEach((dayData) => {
    const div = document.createElement("div");
    div.classList.add("modal-card");
    div.innerHTML = `
      <p>${getWeekday(dayData.date)}</p>
      <img src="https:${dayData.day.condition.icon}" alt="${dayData.day.condition.text}">
      <p>${dayData.day.avgtemp_c}℃</p>
    `;
    modalContainerSevenDay.appendChild(div);
  });
}
// Отримання дня тижня на основі дати
function getWeekday(dateString) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date(dateString);
  return days[date.getDay()];
}

// відкриння модального вікна
function openModal() {
  modal.classList.remove("modal-close");
}

// закритння модального вікна
function closeModal() {
  modal.classList.add("modal-close");
}

// заккритння моаьного вікна на кнопку або поза модального вікна
modal.addEventListener("click", (e) => {
  if (e.target == modal || e.target.classList == "modal-close-btn")
    closeModal();
});

// зміна теми сторніки
function toggleMode() {
  bodyElm.classList.toggle("light-mode");
  if (bodyElm.classList.contains("light-mode")) {
    toggleModeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem("mode", "light");
  } else {
    toggleModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem("mode", "dark");
  }
}

toggleModeBtn.addEventListener("click", toggleMode);

// оновлення сторінки
window.onload = function () {
  const modeStyle = localStorage.getItem("mode");
  if (modeStyle) {
    if (modeStyle == "light") {
      bodyElm.classList.add("light-mode");
      toggleModeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else if (modeStyle == "dark") {
      bodyElm.classList.remove("light-mode");
      toggleModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
  }
};
