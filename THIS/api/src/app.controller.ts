import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('lista') // Endpoint para obtener la lista
  getLista(): any[] {
    return this.appService.getLista(); // Devuelve la lista desde el servicio
  }
}
