const express = require('express');
const router = express.Router();
const Article=require("../models/article")

//chercher un article par s/cat
router.get("/",async(req,res)=> {
    try {
        const art = await Article.find().populate("scategorieID")
        res.status (200).json(art)
    } catch (error) {
        res.status (404).json ({message:error.message})
        
    }
    
});
// chercher un article
router.get('/:articleId',async(req, res)=>{
    try {
    const art = await Article.findById(req.params.articleId);
    res.status(200).json(art);
} catch (error) {
    res.status(404).json({ message: error.message });
    }
    });
//afficher la liste des articles
router.post("/",async(req,res)=>{
    const nouvarticle= new Article(req.body)
    try {
        await nouvarticle.save();
        //const article = await Article.findByID (response._id)
        res.status (200).json(nouvarticle);
    } catch (error) {
        res.status(404).json({ message: error.message });
        
    }
});
// modifier un article
router.put('/:articleId', async (req, res)=> {
    try {
    const art = await Article.findByIdAndUpdate(
    req.params.articleId,
    { $set: req.body },
    { new: true }
    );
   
    
    res.status(200).json(articles);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    })

    // Supprimer un article
router.delete('/:articleId', async (req, res)=> {
    const id = req.params.articleId;
    try {
    await Article.findByIdAndDelete(id);
    res.status(200).json({ message: "article deleted successfully." });
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });
    module.exports = router;
    


