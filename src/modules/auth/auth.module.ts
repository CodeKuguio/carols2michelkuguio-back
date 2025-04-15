import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      global: true,
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('jwtSecret'), // Pega a chave da variável de ambiente
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AuthModule {}
