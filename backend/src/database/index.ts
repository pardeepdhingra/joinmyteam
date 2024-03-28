// src/database/index.ts

import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./data/db.sqlite");

export default db;
