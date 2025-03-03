import { Stock } from 'src/stocks/stocks.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

@Entity()
export class Branch{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string

    @Column()
    location: string

    @OneToMany(() => Stock, (stock) => stock.branch, { onDelete: 'CASCADE' })
    stocks: Stock[]
}