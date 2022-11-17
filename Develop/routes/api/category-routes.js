const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
try {
  var categoryData = await Category.findAll({
    include: [Product]
  })
  if(!categoryData){
    res.json({"message": "There is no data in categories"})
  }
  res.json(categoryData)
} catch (error) {
  console.log("In the get all categories route")
  console.log(error)
}

  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
try {
  var categoryData = await Category.findByPk(req.params.id,{
    include: [Product]
  })
  res.json(categoryData)
} catch (error) {
  console.log(error)
}



  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    let newCategory = await Category.create(req.body)
    res.json(newCategory)
  } catch (error) {
    res.json(error)
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  try {
   let updateCategory = await Category.update(req.body, {where:{id:req.params.id}})
   res.json(updateCategory)
  } catch (error) {
   res.json(error)
   
  }
   // update a category by its `id` value
 });
 
 router.delete('/:id', async (req, res) => {
   try {
     let deleteCategory = await Category.destroy({where:{id:req.params.id}})
     res.json(deleteCategory)
   } catch (error) {
     res.json(error)
   }
   // delete a category by its `id` value
 });

module.exports = router;
