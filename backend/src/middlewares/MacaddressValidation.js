const MacaddressValidation = (req, res, next) => {
  const { macaddress } = req.body;

  if (!macaddress) return res.status(400).json({ error: "Macaddress é obrigatório" });

  next();
}

module.exports = MacaddressValidation;