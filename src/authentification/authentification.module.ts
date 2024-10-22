import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthentificationService } from './authentification.service';
import { UtilisateursModule } from '../utilisateurs/utilisateurs.module'; 
import { JwtStrategy } from './jwt.strategy';
import { AuthentificationController } from './authentification.controller'; 

@Module({
  imports: [
    UtilisateursModule,
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthentificationService, JwtStrategy],
  controllers: [AuthentificationController], 
  exports: [AuthentificationService],
})
export class AuthentificationModule {}
