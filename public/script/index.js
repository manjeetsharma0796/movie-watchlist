const parseCookies = () => {
  return Object.fromEntries(
    document.cookie.split("; ").map((rawCookie) => rawCookie.split("="))
  );
};
const checkForUsername = (loginElement) => {
  if (document.cookie) {
    const cookies = parseCookies();

    const userElement = document.createElement("p");
    userElement.innerText = `Welcome ${cookies.username}`;
    userElement.id = "login";
    loginElement.replaceWith(userElement);
  }
};

window.onload = () => {
  const loginElement = document.querySelector("#login");
  checkForUsername(loginElement);
};
