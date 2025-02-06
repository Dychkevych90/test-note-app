import { createRxDatabase, addRxPlugin } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import {wrappedValidateAjvStorage} from "rxdb/plugins/validate-ajv";
import {RxDBDevModePlugin} from "rxdb/plugins/dev-mode";

addRxPlugin(RxDBDevModePlugin);

export interface Note {
  id: string;
  title: string;
  body: string;
  userId: string;
}

const noteSchema = {
  title: 'note',
  version: 0,
  type: 'object',
  primaryKey: 'id',
  properties: {
    id: { type: 'string', maxLength: 100 },
    title: { type: 'string' },
    body: { type: 'string' },
    userId: {type: 'string'}
  },
  required: ['id', 'title', 'body'],
};

export async function initDB() {
  const db = await createRxDatabase({
    name: 'newdb',
    storage: wrappedValidateAjvStorage({
      storage: getRxStorageDexie()
    }),
    ignoreDuplicate: true,
  });
  
  await db.addCollections({
    notes: {
      schema: noteSchema,
    },
  });
  
  return db;
}