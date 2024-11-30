const express = require('express');
const router = express.Router();
const Report = require("./Report");
const slugify = require("slugify")



router.get("/admin/Reports",(req,res)=>{
    Report.findAll().then(Reports => {
        res.render("admin/Reports/index", {Reports:Reports})
    })
   
})

router.post("/Reports/save", (req,res)=>{
    try {
        const newReport = Report.create({
            title:'Descarte ilegal detectado',
            slug:'Descarte1',
            body:'Foi identificado um descarte indevido na área 1 no ECOVIGILANCE. Contate as autoridades responsáveis pelo local imediatamente, a sociedade precisa de voce!',
            location:'Área 1'
        });

        console.log("Denúncia criada:", newReport);
        res.status(201).send("Denúncia criada com sucesso");
    } catch (error) {
        console.error("Erro ao criar denúncia:", error);
        res.status(500).send("Erro ao criar denúncia");
    }
})



module.exports = router;