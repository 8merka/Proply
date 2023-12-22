const db = require('../db');
class ObjectTypeController{
    
    async createType(req, res) {
        try {
            const { type } = req.body;
                const newType = await db.query('INSERT INTO "Object_type" (type) VALUES ($1) RETURNING *', [type]);
                if (newType && newType.rows && newType.rows.length > 0) {
                    res.json(newType.rows[0]);
                } else {
                    res.status(400).json({error: 'Тип объекта не был создан'});
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getAllType(req, res) {
        try {
            const types = await db.query('SELECT * FROM "Object_type"');
            if (types && types.rows) {
                res.json(types.rows);
            } else {
                res.status(400).json({error: 'Типы объектов не найдены'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getType(req, res) {
        try {
            const { id } = req.params;
            const type = await db.query('SELECT * FROM "Object_type" WHERE id = $1', [id]);
            if (type && type.rows && type.rows.length > 0) {
                res.json(type.rows[0]);
            } else {
                res.status(404).json({error: 'Тип объекта не найден'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async updateType(req, res) {
        try {
            const { id, type } = req.body;
                const updatedType = await db.query('UPDATE "Object_type" SET type = $1 WHERE id = $2 RETURNING *', [type, id]);
                if (updatedType && updatedType.rows && updatedType.rows.length > 0) {
                    res.json(updatedType.rows[0]);
                } else {
                    res.status(404).json({error: 'Тип объекта не найден'});
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async deleteType(req, res) {
        try {
            const { id } = req.params;
            const deletedType = await db.query('DELETE FROM "Object_type" WHERE id = $1 RETURNING *', [id]);
            if (deletedType && deletedType.rows && deletedType.rows.length > 0) {
                res.json({message: 'Тип объекта успешно удален'});
            } else {
                res.status(404).json({error: 'Тип объекта не найден'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
}

module.exports = new ObjectTypeController();
