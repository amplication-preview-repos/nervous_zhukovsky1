import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AnimalService } from "./animal.service";
import { AnimalControllerBase } from "./base/animal.controller.base";

@swagger.ApiTags("animals")
@common.Controller("animals")
export class AnimalController extends AnimalControllerBase {
  constructor(protected readonly service: AnimalService) {
    super(service);
  }
}
