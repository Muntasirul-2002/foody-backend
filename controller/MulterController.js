import multer from 'multer';
import path from 'path';
import fs from 'fs'

const uploadDir = path.join(__dirname, "../uploads")

if(!fs.existsSync(uploadDir)){
  fs.mkdirSync(uploadDir,{recursive:true})
}

// Set up storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});
// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 2000000 }, // 2MB
}).single("image");


export { upload };
