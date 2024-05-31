import { Database } from "bun:sqlite";

const db = new Database("test.db");
db.exec("DROP TABLE IF EXISTS test");
db.exec("CREATE TABLE test (id INTEGER PRIMARY KEY, name TEXT)");
db.exec("INSERT INTO test (name) VALUES ('foo')");
db.exec("INSERT INTO test (name) VALUES ('bar')");
db.exec("INSERT INTO test (name) VALUES ('baz')");
console.log(db.query("SELECT name FROM test").all());
db.close();
