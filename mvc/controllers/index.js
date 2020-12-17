const getHomePage = function (req, res, next) {
  const templateData = {
    title: '0101 Solutions Consulting',
  };
  res.render("index", templateData);
};

module.exports = {
  getHomePage
};
