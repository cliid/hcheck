import constants from './constants';
import NodeRSA from 'node-rsa';

export default function encrypt(str: string): string {
  const key = new NodeRSA({ b: 1024 });
  key.setOptions({ encryptionScheme: 'pkcs1' });
  key.importKey(constants.publicKey, 'pkcs8-public');
  return key.encrypt(str, 'base64');
}
