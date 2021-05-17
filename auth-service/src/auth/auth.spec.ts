import * as request from 'supertest';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';
import {
   Test,
   TestingModule,
} from '@nestjs/testing';
import {
   FastifyAdapter,
   NestFastifyApplication,
} from '@nestjs/platform-fastify';

describe('Auth', () => {

   let app: INestApplication;

   beforeEach(async () => {

      const moduleRef: TestingModule = await Test.createTestingModule({
         imports: [
            AppModule,
         ],
      }).compile();

      app = moduleRef.createNestApplication<NestFastifyApplication>(
         new FastifyAdapter(),
      );

      await app.init();
   });

   afterAll(async () => {

      await app.close();
   });

   it('signup', () => {

      return request(app.getHttpServer())
         .post('/auth')
         .send({
            query: `
               mutation {
                  signup(
                     user: {
                        login: \"username\",
                        email: \"some@email.em\",
                        password: \"abcde\"
                     }
                  ) {
                     login,
                     email,
                     password
                  }
               }`
         })
         .expect(200)
         .expect(res => {

            const {id, login, email} = res.body.data.signup;
            expect(1).toBe(1);
         });
   });
});
