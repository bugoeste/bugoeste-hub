import crypto from 'crypto';
import fs from 'fs';

export async function getFileHash(filePath: string) {
  const stream = fs.createReadStream(filePath);
  const hash = crypto.createHash('sha1');
  hash.setEncoding('hex');

  return new Promise<string>((resolve) => {
    stream.on('end', () => {
      hash.end();
      resolve(hash.read());
    });

    stream.pipe(hash);
  });
}
