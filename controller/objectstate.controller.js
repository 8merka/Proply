const db = require('../db');
class ObjectStateController{
    async createState(req, res) {
        try {
            const { state_name } = req.body;
            const newState = await db.query('INSERT INTO "Object_state" (state_name) VALUES ($1) RETURNING *', [state_name]);
                if (newState && newState.rows && newState.rows.length > 0) {
                    res.json(newState.rows[0]);
                } else {
                    res.status(400).json({error: 'Состояние объекта не было создано'});
                }
            
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getState(req, res) {
        try {
            const { id } = req.params;
            const state = await db.query('SELECT * FROM "Object_state" WHERE id = $1', [id]);
            if (state && state.rows && state.rows.length > 0) {
                res.json(state.rows[0]);
            } else {
                res.status(404).json({error: 'Состояние объекта не найдено'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getAllState(req, res) {
        try {
            const states = await db.query('SELECT * FROM "Object_state"');
            if (states && states.rows) {
                res.json(states.rows);
            } else {
                res.status(400).json({error: 'Состояния объектов не найдены'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async updateState(req, res) {
        try {
            const { id, state_name } = req.body;
                const updatedState = await db.query('UPDATE "Object_state" SET state_name = $1 WHERE id = $2 RETURNING *', [state_name, id]);
                if (updatedState && updatedState.rows && updatedState.rows.length > 0) {
                    res.json(updatedState.rows[0]);
                } else {
                    res.status(404).json({error: 'Состояние объекта не найдено'});
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async deleteState(req, res) {
        try {
            const { id } = req.params;
            const deletedState = await db.query('DELETE FROM "Object_state" WHERE id = $1 RETURNING *', [id]);
            if (deletedState && deletedState.rows && deletedState.rows.length > 0) {
                res.json({message: 'Состояние объекта успешно удалено'});
            } else {
                res.status(404).json({error: 'Состояние объекта не найдено'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
}

module.exports = new ObjectStateController();
