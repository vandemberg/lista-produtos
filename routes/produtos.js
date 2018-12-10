const express = require('express');
const router = express.Router();

const repository = require("./../repositories/produtos");

router.get("/produtos", (req, res, next) => {
    
    let page = parseInt(req.query.page);
    let limite = parseInt(req.query.limite);
    let search = req.query.search;
    
    repository.listAll(search, page, limite)
        .then((produtos) => {

            repository.total(search).then((total) => {
                res.json(produtos);
            });
            
        });
        
});

module.exports = router;