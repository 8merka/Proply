const db = require('../db');


class RoleController{
    async createRole(req, res) {
        const { role_name } = req.body;
        try {
            const newRole = await db.query('INSERT INTO "Role" (role_name) VALUES ($1) RETURNING *', [role_name]);
            if (newRole && newRole.rows && newRole.rows.length > 0) {
                res.json(newRole.rows[0]);
            } else {
                res.status(400).json({error: 'Роль не была создана'});
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Произошла ошибка при создании роли'});
        }
    }
    
    async getRole(req, res) {
        const { id } = req.params;
        try {
            const role = await db.query('SELECT * FROM "Role" WHERE id = $1', [id]);
            if (role && role.rows && role.rows.length > 0) {
                res.json(role.rows[0]);
            } else {
                res.status(400).json({error: 'Роль не найдена'});
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Произошла ошибка при получении роли'});
        }
    }
    
    async getAllRole(req, res) {
        try {
            const roles = await db.query('SELECT * FROM "Role"');
            if (roles && roles.rows) {
                res.json(roles.rows);
            } else {
                res.status(400).json({error: 'Роли не найдены'});
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Произошла ошибка при получении всех ролей'});
        }
    }
    
    async updateRole(req, res) {
        const { id, role_name } = req.body;
        try {
            const updatedRole = await db.query('UPDATE "Role" SET role_name = $1 WHERE id = $2 RETURNING *', [role_name, id]);
            if (updatedRole && updatedRole.rows && updatedRole.rows.length > 0) {
                res.json(updatedRole.rows[0]);
            } else {
                res.status(400).json({error: 'Роль не была обновлена'});
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Произошла ошибка при обновлении роли'});
        }
    }
    
    async deleteRole(req, res) {
        const { id } = req.params;
        try {
            const deletedRole = await db.query('DELETE FROM "Role" WHERE id = $1 RETURNING *', [id]);
            if (deletedRole && deletedRole.rows && deletedRole.rows.length > 0) {
                res.json(deletedRole.rows[0]);
            } else {
                res.status(400).json({error: 'Роль не была удалена'});
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Произошла ошибка при удалении роли'});
        }
    }
    
   
}

module.exports = new RoleController();
