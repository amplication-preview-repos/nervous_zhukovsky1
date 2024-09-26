import { Module } from "@nestjs/common";
import { AnimalModuleBase } from "./base/animal.module.base";
import { AnimalService } from "./animal.service";
import { AnimalController } from "./animal.controller";
import { AnimalResolver } from "./animal.resolver";

@Module({
  imports: [AnimalModuleBase],
  controllers: [AnimalController],
  providers: [AnimalService, AnimalResolver],
  exports: [AnimalService],
})
export class AnimalModule {}
