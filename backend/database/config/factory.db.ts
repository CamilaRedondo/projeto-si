import { Sequelize } from "sequelize-typescript";
import { User } from "../models/User.model";
import { Address } from "../models/Address.model";
import { Term } from "../models/Term.model";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/db.sqlite',
    database: 'db',
    username: 'root',
    password: '',
    models: [ User, Address, Term ],
});

export default sequelize;