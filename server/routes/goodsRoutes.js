const {getGoods, createGoods, deleteGoods, updateGoods} = require('../controllers/goodsContollers')
const express = require('express')

const router = express.Router()
router.get('/get-all', getGoods)
router.post('/add-to-goods', createGoods)
router.delete('/delete-goods/:id', deleteGoods)
router.put('/change-goods/:id', updateGoods)


module.exports = router;





