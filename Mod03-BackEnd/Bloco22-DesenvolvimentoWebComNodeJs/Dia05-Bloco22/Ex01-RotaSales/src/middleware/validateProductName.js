const validateProductName = (req, res, next) => {
    const { productName } = req.body;

    if (!productName) { 
      return res.status(400).json({ message: 'o campo productName é obrigatério'});
    }

    if(productName.length < 4) {
      return res.status(400).json({ message:'o campo deve ter pelo menos 4 caracteres'});
    }

    next();
}

module.exports = validateProductName;