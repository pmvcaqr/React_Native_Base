import * as RealmDB from "realm";
import User from './models/user';
import Account from './models/account';

const key = new Int8Array(64);  // pupulate with a secure key

const realmInstance = new RealmDB({
  schema: [User, Account],
  encryptionKey: key
});

export default realmInstance;
