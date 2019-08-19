/*eslint no-undef: "error"*/
/*eslint-env node*/

exports.getProducts = (req, res) => {
  res.status(200).json({
    products: [{ id: 1001, name: "HP Folio 9470m" }]
  });
};

exports.postProduct = (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  res.status(201).json({
    message: "successful",
    post: {
      id: new Date().toISOString(),
      title: title,
      content: content
    }
  });
};
