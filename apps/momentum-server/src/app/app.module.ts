import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://zhumgal:Oidochekti1998@momentum.xbsiypu.mongodb.net/'
    ),
    AuthModule,
  ],
  providers: [AppService],
})
export class AppModule {}
