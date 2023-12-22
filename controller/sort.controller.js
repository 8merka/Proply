const db = require('../db');
class SortController {
    // Функция для получения объектов с state = 2
    async getObjectsWithState2(req, res) {
        try {
            const objects = await db.query('SELECT * FROM "Reale_estate_object" WHERE state = 2');
            res.json(objects.rows);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    // Функция для получения объектов с state = 3
    async getObjectsWithState3(req, res) {
        try {
            const objects = await db.query('SELECT * FROM "Reale_estate_object" WHERE state = 3');
            res.json(objects.rows);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    // Функция для получения объектов с type_id = 2
    async getObjectsWithType2(req, res) {
        try {
            const objects = await db.query('SELECT * FROM "Reale_estate_object" WHERE type_id = 2');
            res.json(objects.rows);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    // Функция для получения объектов с type_id = 3
    async getObjectsWithType3(req, res) {
        try {
            const objects = await db.query('SELECT * FROM "Reale_estate_object" WHERE type_id = 3');
            res.json(objects.rows);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    // Функция для получения объектов с type_id = 4
    async getObjectsWithType4(req, res) {
        try {
            const objects = await db.query('SELECT * FROM "Reale_estate_object" WHERE type_id = 4');
            res.json(objects.rows);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    // Функция для получения объектов с state = 2 и type_id = 2
    async getObjectsWithState2AndType2(req, res) {
        try {
            const objects = await db.query('SELECT * FROM "Reale_estate_object" WHERE state = 2 AND type_id = 2');
            res.json(objects.rows);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    // Функция для получения объектов с state = 2 и type_id = 3
    async getObjectsWithState2AndType3(req, res) {
        try {
            const objects = await db.query('SELECT * FROM "Reale_estate_object" WHERE state = 2 AND type_id = 3');
            res.json(objects.rows);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    // Функция для получения объектов с state = 2 и type_id = 4
    async getObjectsWithState2AndType4(req, res) {
        try {
            const objects = await db.query('SELECT * FROM "Reale_estate_object" WHERE state = 2 AND type_id = 4');
            res.json(objects.rows);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    // Функция для получения объектов с state = 3 и type_id = 2
    async getObjectsWithState3AndType2(req, res) {
        try {
            const objects = await db.query('SELECT * FROM "Reale_estate_object" WHERE state = 3 AND type_id = 2');
            res.json(objects.rows);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    // Функция для получения объектов с state = 3 и type_id = 3
    async getObjectsWithState3AndType3(req, res) {
        try {
            const objects = await db.query('SELECT * FROM "Reale_estate_object" WHERE state = 3 AND type_id = 3');
            res.json(objects.rows);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    // Функция для получения объектов с state = 3 и type_id = 4
    async getObjectsWithState3AndType4(req, res) {
        try {
            const objects = await db.query('SELECT * FROM "Reale_estate_object" WHERE state = 3 AND type_id = 4');
            res.json(objects.rows);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
}

module.exports = new SortController();