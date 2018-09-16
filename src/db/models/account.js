import * as RealmDB from "realm";

export default class User extends RealmDB.Object {}

User.schema = {
  name: "Child",
  primaryKey: "id",
  properties: {
    id: "string",
    name: "string"
  }
};
