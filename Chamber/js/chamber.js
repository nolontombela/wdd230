/* Current Date Header */
const currentDateSpan = document.querySelector("#currentDate");

const now = new Date();

currentDateSpan.textContent = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
  }).format(now);
  
  /* hamburger toggle menu */
  function toggleMenu() {
      document.querySelector("#flex-nav").classList.toggle("open");
      document.querySelector("#menuButton").classList.toggle("open");
  }
  const x = document.geElementById("#menuButton");
  x.onclick = toggleMenu;
  
  
  /* last modified */
  let nd = new Date();
  
  document.getElementById("currentYear").textContent = nd.getFullYear();
  document.querySelector("#modDate").textContent = document.lastModified;
  
  /* Weekly Banner */
  if(now.getDay() === 1) {
      document.getElementById("banner").style.display = "block";
  }
  const close = document.querySelector("#close");
  close.addEventListener("click", () => {
      banner.style.display = "none";
  });