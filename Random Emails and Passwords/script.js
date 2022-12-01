let text = document.querySelector(".chara");
let code = document.querySelector(".password");
let button = document.querySelector(".btn");

// console.log(password);

button.onclick = function () {
  let character = "232refdhf638dkfmcnvg32528so";
  let gmails = [
    "gmail",
    "hotmail",
    "outlook",
    "psrt",
    "hello",
    "bussines",
    "wety"
  ];
  let theEnd = ["fr", "com", "frt", "rr", "we", "bsl", "xs"];
  let password = "sek8jimdu263535437snxq4126";
  let serialSchara = "";
  let serialpass = "";
  gmail = gmails[Math.floor(Math.random() * gmails.length)];
  let finaly = theEnd[Math.floor(Math.random() * theEnd.length)];
  for (i = 0; i < 6; i++) {
    serialSchara += character[Math.floor(Math.random() * character.length)];
  }
  text.value = `${serialSchara}@${gmail}.${finaly}`;

  for (i = 0; i < 8; i++) {
    serialpass += password[Math.floor(Math.random() * password.length)];
  }
  code.value = serialpass;
};
