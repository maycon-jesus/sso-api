import { ApplicationsService } from './applications.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationEntity } from './entities/application.entity';

@Module({
  controllers: [],
  providers: [ApplicationsService],
  imports: [TypeOrmModule.forFeature([ApplicationEntity])],
})
export class ApplicationsModule {}
