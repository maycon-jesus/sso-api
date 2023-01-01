import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationEntity } from './entities/application.entity';

@Module({
  controllers: [],
  imports: [TypeOrmModule.forFeature([ApplicationEntity])],
})
export class ApplicationsModule {}
