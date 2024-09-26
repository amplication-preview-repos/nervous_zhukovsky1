/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Animal } from "./Animal";
import { AnimalCountArgs } from "./AnimalCountArgs";
import { AnimalFindManyArgs } from "./AnimalFindManyArgs";
import { AnimalFindUniqueArgs } from "./AnimalFindUniqueArgs";
import { DeleteAnimalArgs } from "./DeleteAnimalArgs";
import { AnimalService } from "../animal.service";
@graphql.Resolver(() => Animal)
export class AnimalResolverBase {
  constructor(protected readonly service: AnimalService) {}

  async _animalsMeta(
    @graphql.Args() args: AnimalCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Animal])
  async animals(@graphql.Args() args: AnimalFindManyArgs): Promise<Animal[]> {
    return this.service.animals(args);
  }

  @graphql.Query(() => Animal, { nullable: true })
  async animal(
    @graphql.Args() args: AnimalFindUniqueArgs
  ): Promise<Animal | null> {
    const result = await this.service.animal(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Animal)
  async deleteAnimal(
    @graphql.Args() args: DeleteAnimalArgs
  ): Promise<Animal | null> {
    try {
      return await this.service.deleteAnimal(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
