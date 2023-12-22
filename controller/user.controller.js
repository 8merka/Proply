const db = require('../db');

class UserController{

    async createUser(req, res) {
        const {name, login, password, city, phone, email, role = 1} = req.body;
        try {
            const existingUserLogin = await db.query(
                'SELECT * FROM "ProplyUser" WHERE login = $1',
                [login]
            );
    
            const existingUserEmail = await db.query(
                'SELECT * FROM "ProplyUser" WHERE email = $1',
                [email]
            );
    
            if (existingUserLogin && existingUserLogin.rows && existingUserLogin.rows.length > 0) {
                res.status(400).json({error: 'Пользователь с таким логином уже существует'});
            } else if (existingUserEmail && existingUserEmail.rows && existingUserEmail.rows.length > 0) {
                res.status(400).json({error: 'Пользователь с такой почтой уже существует'});
            } else {
                const newPerson = await db.query(
                    'INSERT INTO "ProplyUser" (name, login, password, city, phone, email, role) values($1, $2, $3, $4, $5, $6, $7) RETURNING *',
                    [name, login, password, city, phone, email, role]
                );
    
                if (newPerson && newPerson.rows && newPerson.rows.length > 0) {
                    res.json({message: 'Регистрация прошла успешно'});
                } else {
                    res.status(400).json({error: 'Пользователь не был создан'});
                }
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
    
    
    

    async getOneUser(req, res) {
        try {
            const {id} = req.params;
    
            const user = await db.query('SELECT * FROM "ProplyUser" WHERE id = $1', [id]);
           if (user && user.rows && user.rows.length > 0) {
                res.json(user.rows[0]);
           } else {
                res.status(404).json({error: 'Пользователь не найден'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
    async getAllUser(req, res) {
        try {
            const users = await db.query('SELECT * FROM "ProplyUser"');
    
            if (users && users.rows && users.rows.length > 0) {
                res.json(users.rows);
            } else {
                res.status(404).json({error: 'Пользователи не найдены'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
    async getUserByEmail(req, res) {
        const { email } = req.body;
        try {
            const user = await db.query(
                'SELECT * FROM "ProplyUser" WHERE email = $1',
                [email]
            );
    
            if (user && user.rows && user.rows.length > 0) {
                res.json(user.rows[0]);
            } else {
                res.status(404).json({ error: 'Пользователь с таким email не найден' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Произошла ошибка сервера' });
        }
    }    
    async loginUser(req, res) {
        const { login, password } = req.body;
        try {
            const user = await db.query(
                'SELECT * FROM "ProplyUser" WHERE login = $1 AND password = $2',
                [login, password]
            );
    
            if (user && user.rows && user.rows.length > 0) {

                res.json(user.rows[0]);
            } else {

                res.status(401).json({ error: 'Неверный логин или пароль' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Произошла ошибка сервера' });
        }
    }
    
    
    async updateUser(req, res) {
        try {
            const {id} = req.params;
            const {name, login, password, city, phone, email, role} = req.body;
    
            const updatedUser = await db.query(
                'UPDATE "ProplyUser" SET name = $1, login = $2, password = $3, city = $4, phone = $5, email = $6, role = $7 WHERE id = $8 RETURNING *',
                [name, login, password, city, phone, email, role, id]
            );
    
            if (updatedUser && updatedUser.rows && updatedUser.rows.length > 0) {
                res.json(updatedUser.rows);
            } else {
                res.status(404).json({error: 'Пользователь не найден'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
    
    async deleteUser(req, res) {
        try {
            const {id} = req.params;
    
            const deletedUser = await db.query('DELETE FROM "ProplyUser" WHERE id = $1 RETURNING *', [id]);
    
            if (deletedUser && deletedUser.rows && deletedUser.rows.length > 0) {
                res.json({message: 'Пользователь успешно удален'});
            } else {
                res.status(404).json({error: 'Пользователь не найден'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
    
}

module.exports = new UserController();