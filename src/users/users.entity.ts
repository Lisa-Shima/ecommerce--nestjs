import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @Column({default: 'customer'}) // Role can be customer or admin
    role: string;
}