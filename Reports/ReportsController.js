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
    Report.create({
        title:'Descarte na área 1',
        slug:slugify(title),
        body:'Foi identificado um descarte indevido na área 1 no ECOVIGILANCE. Contate as autoridades responsáveis pelo local imediatamente, a sociedade precisa de voce!',
        location:'Área 1'
    }).then(()=>{
        res.redirect('/');
    })
})



module.exports = router;