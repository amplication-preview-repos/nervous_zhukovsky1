import * as graphql from "@nestjs/graphql";
import { AnimalResolverBase } from "./base/animal.resolver.base";
import { Animal } from "./base/Animal";
import { AnimalService } from "./animal.service";

@graphql.Resolver(() => Animal)
export class AnimalResolver extends AnimalResolverBase {
  constructor(protected readonly service: AnimalService) {
    super(service);
  }
}
