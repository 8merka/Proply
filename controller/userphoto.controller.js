const db = require('../db');

class UserPhotoController{

    async addUserPhoto(req, res) {
        try {
            const { user_id, photo } = req.body;

            const newPhoto = await db.query('INSERT INTO "User_photo" (user_id, photo) VALUES ($1, $2) RETURNING *', [user_id, photo]);
            console.log(user_id,photo);
            if (newPhoto && newPhoto.rows && newPhoto.rows.length > 0) {
                res.json(newPhoto.rows[0]);
            } else {
                res.status(400).json({error: 'Фото не было добавлено'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
    async uploadSingleImage(req, res) {
        try {
            const { imageBlob } = req.body;
            const newPhoto = await db.query('INSERT INTO "User_photo" (photo) VALUES ($1) RETURNING *', [imageBlob]);
            if (newPhoto && newPhoto.rows && newPhoto.rows.length > 0) {
                res.json(newPhoto.rows[0]);
            } else {
                res.status(400).json({error: 'Фото пользователя не было добавлено'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
    async getAllUserPhoto(req, res) {
        try {
            const photos = await db.query('SELECT * FROM "User_photo"');
            if (photos && photos.rows) {
                res.json(photos.rows);
            } else {
                res.status(400).json({error: 'Фото не найдены'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getUserPhoto(req, res) {
        try {
            const { id } = req.params;
            const photo = await db.query('SELECT * FROM "User_photo" WHERE id = $1', [id]);
            if (photo && photo.rows && photo.rows.length > 0) {
                res.json(photo.rows[0]);
            } else {
                res.status(404).json({error: 'Фото не найдено'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getUserPhotoByUserID(req, res) {
        try {
            const { user_id } = req.params;
            const photos = await db.query('SELECT * FROM "User_photo" WHERE user_id = $1', [user_id]);
            if (photos && photos.rows) {
                res.json(photos.rows);
            } else {
                res.status(404).json({error: 'Фото не найдены'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async updateUserPhoto(req, res) {
        try {
            const { id, user_id, photo } = req.body;
            const updatedPhoto = await db.query('UPDATE "User_photo" SET user_id = $1, photo = $2 WHERE id = $3 RETURNING *', [user_id, photo, id]);
            if (updatedPhoto && updatedPhoto.rows && updatedPhoto.rows.length > 0) {
                res.json(updatedPhoto.rows[0]);
            } else {
                res.status(404).json({error: 'Фото не найдено'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async deleteUserPhoto(req, res) {
        try {
            const { id } = req.query.id;
            const deletedPhoto = await db.query('DELETE FROM "User_photo" WHERE id = $1 RETURNING *', [id]);
            if (deletedPhoto && deletedPhoto.rows && deletedPhoto.rows.length > 0) {
                res.json({message: 'Фото успешно удалено'});
            } else {
                res.status(404).json({error: 'Фото не найдено'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
    
}

module.exports = new UserPhotoController();
