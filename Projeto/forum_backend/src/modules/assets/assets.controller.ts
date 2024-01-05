import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('assets')
export class AssetsController {
  @Get('/image')
  async getImage(@Query('path') path: string, @Res() res: Response) {
    const file = createReadStream(join(process.cwd(), path));
    res.set({
      'Content-Type': 'image/*',
    });

    file.pipe(res);
  }
}
