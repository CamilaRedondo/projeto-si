import { Column, DataType, HasOne, Model, Table } from "sequelize-typescript";
import { Address } from "./Address.model";
import { Term } from "./Term.model";

@Table({ timestamps: true })
export class User extends Model {
    @Column(DataType.STRING)
    name!: string;

    @Column(DataType.STRING)
    document!: string;

    @Column(DataType.STRING)
    password!: string;

    @HasOne(() => Address)
    address!: Address;

    @HasOne(() => Term)
    term!: Term;
}