import * as RealmDB from "realm";

export default class User extends RealmDB.Object {}
User.schema = {
  name: "User",
  primaryKey: "id",
  properties: {
    id: "string",
    firstname: { type: "string", optional: true },
    lastname: { type: "string", optional: true },
    birthdate: { type: "int", optional: true },
    email: { type: "string", optional: true },
    phone: { type: "string", optional: true }
  }
};