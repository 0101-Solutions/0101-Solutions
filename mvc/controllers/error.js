exports.get404 = function (req, res) {
    res.render('404', {
        title: "404 - I couldn't find that page...",
    });
  };
  
exports.redirect404 = function (req, res) {
    res.redirect('/404');
  };