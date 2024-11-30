const express = require('express');
const router = express.Router();
const Report = require("./Report");
const slugify = require("slugify")



router.get("/admin/Reports",(req,res)=>{
    Report.findAll().then(Reports => {
        res.render("admin/Reports/index", {Reports:Reports})
    })
   
})

router.get("/admin/Reports/new", (req,res)=>{
   //adicionar novo registro

    
})

router.post("/Reports/save", (req,res)=>{
    var title = req.body.title;
    var body = req.body.body;
    var location = req.body.location
    Report.create({
        title:title,
        slug:slugify(title),
        body:body,
        location:location
    }).then(()=>{
        res.redirect("/admin/Reports")
    })
})



module.exports = router;