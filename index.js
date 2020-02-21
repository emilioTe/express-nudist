/*
 * express-nudist
 *
 * npm: express-nudist
 * github: https://github.com/thatemilio/express-nudist
 *
 */



module.exports = function(domain) {

  return function(req, res, next) {
  
    if (req.host.match(/^www\./i))
      return res.redirect(req.protocol + '://' + domain + req.url);

    next();
  
  };

};
