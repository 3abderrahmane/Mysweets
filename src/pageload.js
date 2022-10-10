const pageLoad = (() => {
    //container
    const contentContainer = document.querySelector("#content");
  
    const header = document.createElement("header");
    header.innerHTML = `
    <nav>
    <h2>Cookies for the Heros!!</h2>
    <a href="#" class="hamburger">
      <span class="line line1"></span>
      <span class="line line2"></span>
      <span class="line line3"></span>
    </a>
    <ul class="links">
      <li data-tab-target="#home" class="tab red">About Us</li>
      <li data-tab-target="#menu" class="tab">Cookies & Sweets</li>
      <li data-tab-target="#contact" class="tab">Contact Us</li>
    </ul>
  </nav>`;
  
      contentContainer.appendChild(header)
  })();