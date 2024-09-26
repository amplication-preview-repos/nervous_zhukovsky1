import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnimalServiceBase } from "./base/animal.service.base";

@Injectable()
export class AnimalService extends AnimalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
