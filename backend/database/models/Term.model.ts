import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "./User.model";

@Table({ timestamps: true })
export class Term extends Model {
    @Column(DataType.STRING)
    version!: string;

    @Column(DataType.STRING)
    options!: string;

    @Column(DataType.STRING)
    term!: string;

    @ForeignKey(() => User)
    @Column(DataType.NUMBER)
    userId!: number;

    @BelongsTo(() => User)
    user!: User;
}