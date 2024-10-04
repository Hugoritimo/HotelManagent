/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { GuestsService } from './guests.service';
import { Guest } from '../entities/guest.entity';

@Controller('guests')
export class GuestsController {
    constructor(private readonly guestsService: GuestsService) { }

    @Get()
    findAll(): Promise<Guest[]> {
        return this.guestsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Guest> {
        return this.guestsService.findOne(id);
    }

    @Post()
    create(@Body() guest: Guest): Promise<Guest> {
        return this.guestsService.create(guest);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() guest: Guest): Promise<void> {
        return this.guestsService.update(id, guest);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.guestsService.remove(id);
    }
}
