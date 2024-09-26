import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WalmartLocationService } from "./walmartLocation.service";
import { WalmartLocationControllerBase } from "./base/walmartLocation.controller.base";

@swagger.ApiTags("walmartLocations")
@common.Controller("walmartLocations")
export class WalmartLocationController extends WalmartLocationControllerBase {
  constructor(protected readonly service: WalmartLocationService) {
    super(service);
  }
}
