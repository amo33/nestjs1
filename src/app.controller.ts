import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

/*
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
*/
/*
@Controller('animals')
export class AppController{
  constructor(private readonly appService: AppService) {}

  @Get('/:id/:code')
  getAnimal(@Param('id') id: string, @Param('code') code: string, @Query('name') name: string, @Query('age') age: number): any{
    // `${id}: ${name} : ${code} : ${age}`
    const result ={
      'id':`${id}`,
      'code':`${code}`,
      'name': `${name}`,
      'age':  age
    }
    return result
  }
}
*/

@Controller('animals')
export class AppController{
  constructor(private readonly appService: AppService){}
  
  @Get('/:id')
  getAnimal(@Param('id') id:number): any {
    return this.appService.getAnimal(id)
  }
}
