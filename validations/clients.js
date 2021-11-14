const required = (req, res, next) => {
  if (!req.body.name || req.body.name !== String) {
    return res.status(400).send('You must complete the Name');
  }
  if (!req.body.phone || req.body.phone !== Number) {
    return res.status(400).send('You must complete the phone number, make sure you digits numbers');
  }
  if (!req.body.location.country
      || !req.body.location.state
      || !req.body.location.city
      || !req.body.location.address) {
    return res.status(400).send('You must complete all the location');
  }
  return next();
};

module.exports = {
  required,
};
