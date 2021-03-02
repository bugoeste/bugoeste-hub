import fs from 'fs';
import path from 'path';
import { getFileHash } from '../functions';
import { FileModel } from '../models';

const TEMP_FILES_FOLDER = '/home/gabriel/teste/temp_files';
const FILES_FOLDER = '/home/gabriel/teste/files';

async function saveFile(filePath: string, fileName: string) {
  const fileHash = await getFileHash(filePath);
  const existingFile = await FileModel.findOne({ hash: fileHash });

  // if hashes don't match persist file, otherwise discard it
  if (!existingFile) {
    fs.renameSync(filePath, path.join(FILES_FOLDER, fileName));
  } else {
    fs.unlinkSync(filePath);
  }

  // new file has the same name as existing file
  if (existingFile && existingFile.name === fileName) {
    return existingFile;
  }

  // different name, create new entry
  return FileModel.create({ hash: fileHash, name: fileName });
}

async function getFilePath(hashOrId: string) {
  const file = await FileModel.findOne({
    $or: [{ _id: hashOrId }, { hash: hashOrId }],
  });

  if (!file) {
    return undefined;
  }

  return path.join(FILES_FOLDER, file.hash);
}

export const fileService = {
  TEMP_FILES_FOLDER,
  FILES_FOLDER,
  saveFile,
} as const;
