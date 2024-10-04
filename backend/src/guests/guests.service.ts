/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Guest } from '../entities/guest.entity';

@Injectable()
export class GuestsService {
    constructor(
        @InjectRepository(Guest)
        private guestRepository: Repository<Guest>,
    ) { }

    findAll(): Promise<Guest[]> {
        return this.guestRepository.find();
    }

    findOne(id: number): Promise<Guest> {
        return this.guestRepository.findOne({ where: { id } });
    }

    create(guest: Guest): Promise<Guest> {
        return this.guestRepository.save(guest);
    }

    async update(id: number, guest: Guest): Promise<void> {
        await this.guestRepository.update(id, guest);
    }

    async remove(id: number): Promise<void> {
        await this.guestRepository.delete(id);
    }
}
