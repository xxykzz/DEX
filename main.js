Moralis.initialize("SrBK4lNnczX8cL3IVtNj0GIBWIcrZu7vmq11pZMK"); // Application id de moralis
Moralis.serverURL = "https://u5ecggstztu4.usemoralis.com:2053/server"; // Server url de moralis

async function login() {
  try {
    currentUser = Moralis.User.current();
    if (!currentUser) {
      currentUser = await Moralis.Web3.authenticate();
    }
  } catch (err) {
    console.log(err);
  }
}

document.getElementById("login_button").onclick = login;
