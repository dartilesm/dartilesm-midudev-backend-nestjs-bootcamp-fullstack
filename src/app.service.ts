import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sayHello(): any {
    return '<h1>Hello World</h1>';
  }
}
