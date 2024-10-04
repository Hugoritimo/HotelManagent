/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Guest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    roomNumber: number;

    @Column()
    email: string;

    @Column()
    phone: string;
}
