const db = require('../db');

class ConsultantController{
    async createConsultant(req, res) {
        try {
            const { name, phone, email } = req.body;
                const newConsultant = await db.query('INSERT INTO "Consultant" (name, phone, email) VALUES ($1, $2, $3) RETURNING *', [name, phone, email]);
                if (newConsultant && newConsultant.rows && newConsultant.rows.length > 0) {
                    res.json(newConsultant.rows[0]);
                } else {
                    res.status(400).json({error: 'Консультант не был создан'});
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getConsultant(req, res) {
        try {
            const { id } = req.params;
            const consultant = await db.query('SELECT * FROM "Consultant" WHERE id = $1', [id]);
            if (consultant && consultant.rows && consultant.rows.length > 0) {
                res.json(consultant.rows[0]);
            } else {
                res.status(404).json({error: 'Консультант не найден'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getAllConsultant(req, res) {
        try {
            const consultants = await db.query('SELECT * FROM "Consultant"');
            if (consultants && consultants.rows) {
                res.json(consultants.rows);
            } else {
                res.status(400).json({error: 'Консультанты не найдены'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async updateConsultant(req, res) {
        try {
            const { id, name, phone, email } = req.body;
                const updatedConsultant = await db.query('UPDATE "Consultant" SET name = $1, phone = $2, email = $3 WHERE id = $4 RETURNING *', [name, phone, email, id]);
                if (updatedConsultant && updatedConsultant.rows && updatedConsultant.rows.length > 0) {
                    res.json(updatedConsultant.rows[0]);
                } else {
                    res.status(404).json({error: 'Консультант не найден'});
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async deleteConsultant(req, res) {
        try {
            const { id } = req.params;
            const deletedConsultant = await db.query('DELETE FROM "Consultant" WHERE id = $1 RETURNING *', [id]);
            if (deletedConsultant && deletedConsultant.rows && deletedConsultant.rows.length > 0) {
                res.json({message: 'Консультант успешно удален'});
            } else {
                res.status(404).json({error: 'Консультант не найден'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
}

module.exports = new ConsultantController();

    