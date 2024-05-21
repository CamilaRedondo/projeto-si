import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "./User.model";

@Table({ timestamps: false })
export class Address extends Model {
    @Column(DataType.STRING)
    line_1!: string;

    @Column(DataType.STRING)
    line_2!: string;

    @Column(DataType.STRING)
    zip_code!: string;

    @Column(DataType.STRING)
    city!: string;

    @Column(DataType.STRING)
    state!: string;

    @ForeignKey(() => User)
    @Column(DataType.NUMBER)
    userId!: number;

    @BelongsTo(() => User)
    user!: User;
}