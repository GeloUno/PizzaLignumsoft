import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    console.log('pizza server :>> ');
    return { message: 'it is work pizza server!' };
  }
}
