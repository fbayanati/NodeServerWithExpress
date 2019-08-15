exports.getProducts = (req, res, next) => {
    res.status(200).json({
        products: [
            { id: 1001, name: "HP Folio 9470m"}
        ]
    });
};
