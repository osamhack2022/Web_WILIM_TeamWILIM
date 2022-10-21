import path from 'path';
import multer from 'multer';
import fs from 'fs';

try {
	fs.readdirSync('uploads');
} catch(err) {
	console.error('No existing uploads folder, creating uploads folder...');
    fs.mkdirSync('uploads');
}

export const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
        fileFilter: function (req, file, done) {
            if (file.mimetype.includes("image")) {
                done(null, true);
            } else {
                done(null, false);
            }
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 }
});