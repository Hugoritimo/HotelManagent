import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Guest } from './guest.entity';

@Injectable()
export class GuestsService {
    constructor(
        @InjectRepository(Guest)
        private readonly guestRepository: Repository<Guest>,
    ) { }

    async create(guest: Guest): Promise<Guest> {
        return this.guestRepository.save(guest);
    }

    async findAll(): Promise<Guest[]> {
        return this.guestRepository.find();
    }

    async update(id: number, guest: Guest): Promise<void> {
        await this.guestRepository.update(id, guest);
    }

    async remove(id: number): Promise<void> {
        await this.guestRepository.delete(id);
    }
}
