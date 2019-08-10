import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

import { UserModule } from './modules/user/user.module'
import { CompanyModule } from './modules/company/company.module'
import { CastingModule } from './modules/casting/casting.module'

@Module({
    imports: [
        UserModule,
        CompanyModule,
        CastingModule,
        TypeOrmModule.forRoot(
            process.env.NODE_ENV === 'dev'
                ? {
                      type: 'postgres',
                      host: 'db',
                      port: 5432,
                      username: 'root',
                      password: 'root',
                      database: 'casting',
                      entities: [__dirname + '/**/*.entity{.ts,.js}'],
                      synchronize: true
                  }
                : {
                      type: 'postgres',
                      host: process.env.DB_HOST,
                      url: process.env.DATABASE_URL,
                      port: 5432,
                      username: process.env.DB_USER,
                      password: process.env.DB_PASSWORD,
                      database: process.env.DB_DATABASE_NAME,
                      entities: [__dirname + '/**/*.entity{.ts,.js}'],
                      synchronize: true,
                      extra: {
                          ssl: true
                      }
                  }
        ),
        GraphQLModule.forRoot({
            context: ({ req }) => ({ req }),
            typePaths: ['./**/*.graphql'],
            installSubscriptionHandlers: true,
            definitions: {
                path: join(process.cwd(), 'src/graphql.schema.ts'),
                outputAs: 'interface'
            },
            path: '/'
        })
    ]
})
export class AppModule {}
