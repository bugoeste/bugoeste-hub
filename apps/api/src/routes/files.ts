import { Router } from 'express';
import path from 'path';
import multer from 'multer';

import { FileModel } from '../models';
import { fileService } from '../services';

export const fileRoutes = Router();

fileRoutes.get('/', async (req, res) => {
  const files = await FileModel.find();

  return res.send({
    files: files.map((file) => ({
      hash: file.hash,
      name: file.name,
    })),
  });
});

fileRoutes.get('/:hash', async (req, res) => {
  const { hash } = req.params;
  const file = await FileModel.findOne({ hash });

  if (!file) {
    return res.status(404).send({
      error: 'files/get/not-found',
      message: `A file with a hash of "${hash}" does not exist.`,
    });
  }

  const filePath = path.join('/home/gabriel/files', file.name);
  res.sendFile(filePath);
});

const upload = multer({ dest: fileService.TEMP_FILES_FOLDER });
fileRoutes.post('/', upload.single('file'), async (req, res) => {
  const uploadedFilePath = req.file.path;
  const uploadedFileName = req.file.originalname;
  const file = await fileService.saveFile(uploadedFilePath, uploadedFileName);

  return res.status(201).send({
    name: file.name,
    hash: file.hash,
  });
});
