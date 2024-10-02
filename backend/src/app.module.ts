import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guest } from './entities/guest.entity';
import { GuestsModule } from './guests/guests.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // ou o host do seu container
      port: 5432,
      username: 'seu_usuario',
      password: 'sua_senha',
      database: 'hotel_management',
      autoLoadEntities: true,
      synchronize: true, // NÃO use em produção 
    }),
    TypeOrmModule.forFeature([Guest]),
    GuestsModule,
    AuthModule
  ],
})
export class AppModule { }
