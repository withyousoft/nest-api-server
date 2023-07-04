import { Module } from '@nestjs/common';
import EmailService from './email.service';
import { ConfigModule } from '@nestjs/config';
import { EmailConfirmationService } from './email-confirmation.service';
import { JwtService } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [ConfigModule, UserModule],
  controllers: [],
  providers: [EmailService, EmailConfirmationService, JwtService],
  exports: [EmailService, EmailConfirmationService],
})
export class EmailModule {}
