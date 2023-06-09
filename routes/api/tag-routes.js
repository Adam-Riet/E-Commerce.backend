const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Product.findAll({
      include: [{ model: Tag }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const userTag = await Tag.findByPk(req.params.id, {
        include: [{ model: Product }],
    });

    if (!userTag) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(userTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((tag) => {
    res.status(200).json(tag);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});


router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const categoryUpdate = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryUpdate[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json({ message: 'Category updated successfully!'});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
  });
    if (!tagData){
      res.status(404).json({ message:  'No tag with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  } 
});

module.exports = router;