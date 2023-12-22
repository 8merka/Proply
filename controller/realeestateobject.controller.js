const db = require('../db');
const fs = require('fs');

class RealeEstateObjectController{

    async createRealeEstateObject(req, res) {
        try {
            const { seller_id, type_id, addres, price, bathrooms_number, car_space, bedrooms_number, description, state, consultant_id, photo_id } = req.body;
                const newObject = await db.query('INSERT INTO "Reale_estate_object" (seller_id, type_id, addres, price, bathrooms_number, car_space, bedrooms_number, description, state, consultant_id, photo_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *', [seller_id, type_id, addres, price, bathrooms_number, car_space, bedrooms_number, description, state, consultant_id, photo_id]);
                if (newObject && newObject.rows && newObject.rows.length > 0) {
                    res.json(newObject.rows[0]);
                } else {
                    res.status(400).json({error: 'Объект недвижимости не был создан'});
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getRealeEstateObject(req, res) {
        try {
            const { id } = req.params;
            const object = await db.query('SELECT * FROM "Reale_estate_object" WHERE id = $1', [id]);
            if (object && object.rows && object.rows.length > 0) {
                res.json(object.rows[0]);
            } else {
                res.status(404).json({error: 'Объект недвижимости не найден'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
    async getRealeEstateObjectBySellerID(req, res) {
        try {
            const { seller_id } = req.params;
            const objects = await db.query('SELECT * FROM "Reale_estate_object" WHERE seller_id = $1', [seller_id]);
            if (objects && objects.rows && objects.rows.length > 0) {
                res.json(objects.rows);
            } else {
                res.status(404).json({error: 'Объекты недвижимости не найдены'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
    
    async getAllRealeEstateObject(req, res) {
        try {
            const objects = await db.query('SELECT * FROM "Reale_estate_object"');
            if (objects && objects.rows) {
                res.json(objects.rows);
            } else {
                res.status(400).json({error: 'Объекты недвижимости не найдены'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async updateRealeEstateObject(req, res) {
        try {
            const { id, seller_id, type_id, addres, price, bathrooms_number, car_space, bedrooms_number, description, state, consultant_id, photo_id } = req.body;
                const updatedObject = await db.query('UPDATE "Reale_estate_object" SET seller_id = $1, type_id = $2, addres = $3, price = $4, bathrooms_number = $5, car_space = $6, bedrooms_number = $7, description = $8, state = $9, consultant_id = $10, photo_id = $11 WHERE id = $12 RETURNING *', [seller_id, type_id, addres, price, bathrooms_number, car_space, bedrooms_number, description, state, consultant_id, photo_id, id]);
                if (updatedObject && updatedObject.rows && updatedObject.rows.length > 0) {
                    res.json(updatedObject.rows[0]);
                } else {
                    res.status(404).json({error: 'Объект недвижимости не найден'});
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async deleteRealeEstateObject(req, res) {
        try {
            const { id } = req.params;
            const deletedObject = await db.query('DELETE FROM "Reale_estate_object" WHERE id = $1 RETURNING *', [id]);
            if (deletedObject && deletedObject.rows && deletedObject.rows.length > 0) {
                res.json({message: 'Объект недвижимости успешно удален'});
            } else {
                res.status(404).json({error: 'Объект недвижимости не найден'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
}

module.exports = new RealeEstateObjectController();
