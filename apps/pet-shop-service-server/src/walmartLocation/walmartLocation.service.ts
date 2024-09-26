import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WalmartLocationServiceBase } from "./base/walmartLocation.service.base";

@Injectable()
export class WalmartLocationService extends WalmartLocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
