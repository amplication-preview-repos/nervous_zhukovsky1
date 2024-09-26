import { Module } from "@nestjs/common";
import { WalmartLocationModuleBase } from "./base/walmartLocation.module.base";
import { WalmartLocationService } from "./walmartLocation.service";
import { WalmartLocationController } from "./walmartLocation.controller";
import { WalmartLocationResolver } from "./walmartLocation.resolver";

@Module({
  imports: [WalmartLocationModuleBase],
  controllers: [WalmartLocationController],
  providers: [WalmartLocationService, WalmartLocationResolver],
  exports: [WalmartLocationService],
})
export class WalmartLocationModule {}
