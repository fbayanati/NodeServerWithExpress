exports.getProducts = (req, res, next) => {
    res.status(200).json({
        products: [
            { id: 1001, name: "HP Folio 9470m"}
        ]
    });
};

exports.postProduct = (req, res, next) => {
    const title = req.body.title;
    const content = ewq.body.content;
    
    res.status(201).json( {
        message: "successful",
        post: {
            id: new Date().toISOString(),
            title: title,
            content: content
        }
    });
}
