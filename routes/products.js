module.exports = app => {
    const Products = app.db.models.Products;

    app.route("/products")
        .get((request, response) => {
            Products.findAll({})
            .then(result => response.json(result))
            .catch(error => {
                response.status(412).json({
                    msg: error.message
                });
            });
        })

        .post((request, response) => {
            Products.create(request.body)
            .then(result => response.json(result))
            .catch(error => {
                response.status(412).json({
                    msg: error.message
                });
            });
        });

    app.route("/tasks/:id")
        .get((request, response) => {
            Products.findOne({
                where: request.params
            })
            .then(result => {
                if (result) {
                    response.json(result);
                } else {
                    response.sendStatus(404);
                }
            })
            .catch(error => {
                response.status(412).json({
                    msg: error.message
                });
            });
        })

        .put((request, response) => {
            Products.update(request.body, {
                where: request.params
            })
            .then(result => response.sendStatus(204))
            .catch(error => {
                response.status(412).json({
                    msg: error.message
                });
            });
        })

        .delete((request, response) => {
            Products.destroy({
                where: request.params
            })
            .then(result => response.sendStatus(204))
            .catch(error => {
                response.status(412).json({
                    msg: error.message
                });
            });
        });

};