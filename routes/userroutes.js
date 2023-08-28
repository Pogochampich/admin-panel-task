const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.post('/add', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  });
  
  // Удаление пользователя по ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ error: 'Пользователь не найден' });
        }

        await user.destroy();
        res.json({ message: 'Пользователь удален' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Изменение пользователя по ID
router.put('/update/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ error: 'Пользователь не найден' });
        }

        // Обновление полей пользователя на основе данных из req.body
        await user.update(req.body);
        res.json({ message: 'Пользователь обновлен' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;