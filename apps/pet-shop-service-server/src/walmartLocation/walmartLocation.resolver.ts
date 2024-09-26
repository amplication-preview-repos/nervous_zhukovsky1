import * as graphql from "@nestjs/graphql";
import { WalmartLocationResolverBase } from "./base/walmartLocation.resolver.base";
import { WalmartLocation } from "./base/WalmartLocation";
import { WalmartLocationService } from "./walmartLocation.service";

@graphql.Resolver(() => WalmartLocation)
export class WalmartLocationResolver extends WalmartLocationResolverBase {
  constructor(protected readonly service: WalmartLocationService) {
    super(service);
  }
}
