import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  /**
   *
   * Como Recibir Parámetros
   *
   */

  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo';
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/'
  }

  @Get('products/:id')
  getProduct(@Param() params: any) {
    return `Producto ${params.id}`;
  }

  @Get('categories/:id/product/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and it's ID: ${id}`;
  }
}
