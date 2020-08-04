const getHomePage = function (req, res, next) {
  const templateData = {
    title: '0101 Solutions',
  };
  res.render("index", templateData);
};

const get404 = function (req, res, next) {
  const templateData = {
    title: "404 - I couldn't find that page...",
  };
  res.render("404", templateData);
};

const redirect404 = function (req, res, next) {
  res.redirect("error");
};

module.exports = {
  getHomePage,
  get404,
  redirect404,
};
