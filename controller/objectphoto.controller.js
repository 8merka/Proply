const db = require('../db');
const fs = require('fs')
const path = require('path')
// import s from "../tm/cons2.png"
class ObjectPhotoController{

    async addObjectPhoto(req, res) {
        try {
            const { photo } = req.body;
                const newPhoto = await db.query('INSERT INTO "Object_photo" (photo) VALUES ($1) RETURNING *', [photo]);
                if (newPhoto && newPhoto.rows && newPhoto.rows.length > 0) {
                    res.json(newPhoto.rows[0]);
                } else {
                    res.status(400).json({error: 'Фото объекта не было добавлено'});
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }




    async uploadIMG(req, res) {//chat
        try {
          const { imageBlob } = req.body;
      
          // Проверка, является ли imageBlob строкой
          if (typeof imageBlob !== 'string') {
            throw new Error('Invalid imageBlob data');
          }
      
          // Преобразование строковых данных в буфер
          const bufferData = Buffer.from(imageBlob, 'base64');
      
          // Ваш код для добавления пути к изображению в базу данных
          const newPhoto = await db.query('INSERT INTO "Object_photo" (photo) VALUES ($1) RETURNING *', [bufferData]);
      
          if (newPhoto && newPhoto.rows && newPhoto.rows.length > 0) {
            // После сохранения в базу данных, возвращаем путь к изображению на странице
            res.json({ path: fileName });
          } else {
            res.status(400).json({ error: 'Фото объекта не было добавлено' });
          }
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'Произошла ошибка сервера' });
        }
      }
      



    async uploadIMGArray(req, res) {
        try {
            const { imageBlobs } = req.body;

            // const imagePath = "../tm/cons2.png"
            // fs.writeFileSync(imagePath, imageBlobs);

            const newPhotos = await db.query('INSERT INTO "Object_photo" (photo) VALUES ($1) RETURNING *', [imageBlobs]);
            if (newPhotos && newPhotos.rows && newPhotos.rows.length > 0) {
                res.json(newPhotos.rows[0]);
            } else {
                res.status(400).json({error: 'Фото объекта не было добавлено'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getObjectPhoto(req, res) {
        try {
            const { id } = req.params;
            const photo = await db.query('SELECT * FROM "Object_photo" WHERE id = $1', [id]);
            if (photo && photo.rows && photo.rows.length > 0) {
                res.json(photo.rows[0]);
            } else {
                res.status(404).json({error: 'Фото объекта не найдено'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async getAllObjectPhoto(req, res) {
        try {
            const photos = await db.query('SELECT * FROM "Object_photo"');
            if (photos && photos.rows) {
                res.json(photos.rows);
            } else {
                res.status(400).json({error: 'Фото объектов не найдены'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async updateObjectPhoto(req, res) {
        try {
            const { id, photo } = req.body;
            if (photo) {
                const updatedPhoto = await db.query('UPDATE "Object_photo" SET photo = $1 WHERE id = $2 RETURNING *', [photo, id]);
                    res.json(updatedPhoto.rows[0]);
                } else {
                    res.status(404).json({error: 'Фото объекта не найдено'});
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }

    async deleteObjectPhoto(req, res) {
        try {
            const { id } = req.params;
            const deletedPhoto = await db.query('DELETE FROM "Object_photo" WHERE id = $1 RETURNING *', [id]);
            if (deletedPhoto && deletedPhoto.rows && deletedPhoto.rows.length > 0) {
                res.json({message: 'Фото объекта успешно удалено'});
            } else {
                res.status(404).json({error: 'Фото объекта не найдено'});
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Произошла ошибка сервера'});
        }
    }
}

module.exports = new ObjectPhotoController();

