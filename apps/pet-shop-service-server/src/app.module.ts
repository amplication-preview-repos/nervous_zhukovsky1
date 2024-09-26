import { Module } from "@nestjs/common";
import { CustomerModule } from "./customer/customer.module";
import { AnimalModule } from "./animal/animal.module";
import { ProductModule } from "./product/product.module";
import { ShipmentModule } from "./shipment/shipment.module";
import { TransactionModule } from "./transaction/transaction.module";
import { WalmartLocationModule } from "./walmartLocation/walmartLocation.module";
import { ManufacturerModule } from "./manufacturer/manufacturer.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    CustomerModule,
    AnimalModule,
    ProductModule,
    ShipmentModule,
    TransactionModule,
    WalmartLocationModule,
    ManufacturerModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
