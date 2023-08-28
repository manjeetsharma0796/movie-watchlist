const parseCookies = () => {
  return Object.fromEntries(
    document.cookie.split("; ").map((rawCookie) => rawCookie.split("="))
  );
};

const checkUsernameAndRender = () => {
  if (document.cookie) {
    const loginElement = document.querySelector("#login");
    
    loginElement.innerText = "Logout";
    loginElement.href = "/logout";
    
    const cookies = parseCookies();
    
    const userSection = document.querySelector("#profile");
    const userElement = document.createElement("p");
    userElement.innerText = `Welcome ${cookies.username}`;
    userElement.id = "login";
    userSection.prepend(userElement);
  }
};

window.onload = () => {
  checkUsernameAndRender();
};
