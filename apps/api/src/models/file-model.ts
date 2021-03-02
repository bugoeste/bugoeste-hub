import { Schema, model, Document } from 'mongoose';

export interface IFile extends Document {
  hash: string;
  name: string;
  description: string;
}

export const FileSchema = new Schema({
  hash: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },
});

export const FileModel = model<IFile>('File', FileSchema);
