import { Database } from "bun:sqlite";

const db = new Database("mydb.sqlite", { create: true });

const catsTable = db.run(`CREATE TABLE IF NOT EXISTS cats (name varchar(255))`);

const insertStatement = db.prepare(`INSERT INTO cats (name) VALUES ($name)`);

const insertCats = db.transaction((cats) => {
    for (const cat of cats) {
        insertStatement.run(cat);
    }

    return cats.length;
});

const count = insertCats([
    { $name: "Whiskers" },
    { $name: "Luna" },
    { $name: "Oliver" },
]);

console.log(`Inserted ${count} cats`);

const allCats = db.query(`SELECT * FROM cats`).all();
console.log("\nCats in our database:");
console.log(allCats);

db.close();
