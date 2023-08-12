import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PizzaModule } from './pizza/pizza.module';
import { ActionModule } from './action/action.module';
import { ElementModule } from './element/element.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      `mongodb+srv://costamgdzieskiedys:${process.env.MONGODBPASSWORD}@cluster0.nhw9d3x.mongodb.net/`,
    ),
    PizzaModule,
    ActionModule,
    ElementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
