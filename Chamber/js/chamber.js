/* Current Date Header */
const currentDateSpan = document.querySelector("currentDate")

currentDateSpan.textContent = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
  }).format(now);
  
  /* hamburger toggle menu */
  function toggleMenu() {
      document.querySelector("#flexi-nav").classList.toggle("open");
      document.querySelector("#menuButton").classList.toggle("open");
  }
  const x = document.querySelector("#menuButton");
  x.onclick = toggleMenu;
  
  
  /* last modified */
  let nd = new Date();
  
  document.getElementById("currentYear").textContent = nd.getFullYear();
  document.querySelector("#modDate").textContent = document.lastModified;
  
  /* Weekly Banner */
  if(now.getDay() === 2) {
      document.getElementById("banner").style.display = "block";
  }
  const close = document.querySelector("#close");
  close.addEventListener("click", () => {
      banner.style.display = "none";
  });