const express = require('express');
const router = express.Router();
// Créer une instance de scategorie.
const scategorie = require('../models/scategorie');
// afficher la liste des scategories.
router.get('/', async (req, res)=> {
     try{
        const cat=await scategorie.find()
        return res.status (200).json(cat)

    
     }
     catch(error){
        res.status(404).json({message:error.message});

     }

});
router.post("/",async(req,res)=>{
   const newscategorie = new scategorie(req.body)
   try{
      await newscategorie.save()
      res.status(200).json (newscategorie)
   }
   catch(error){
      res.status(400).json({message: error.message})
   }
}) // el ligne 6 tetsama fonction flécher bel anglais les ARROW FUCNTION

// chercher une catégorie by id
router.get('/:scategorieId',async(req, res)=>{
   try {
   const cat = await scategorie.findById(req.params.scategorieId);
   res.status(200).json(cat);
   } 
   catch (error) {
   res.status(404).json({ message: error.message });
   }
   });
   // Supprimer une catégorie
router.delete('/:scategorieId', async (req, res)=> {
   try {
      await scategorie.findByIdAndDelete(req.params.scategorieId);
      res.json({ message: "scategorie deleted successfully." });
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
});
// modifier une catégorie
router.put('/:scategorieId', async (req, res)=> {
   try {
   const cat1 = await scategorie.findByIdAndUpdate(
   req.params.scategorieId,
   { $set: req.body },
   { new: true }
   );
   res.status(200).json(cat1);
   } catch (error) {
   res.status(404).json({ message: error.message });
   }
   });
   
   
module.exports = router;