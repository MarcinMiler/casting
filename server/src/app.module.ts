import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

import { UserModule } from './modules/user/user.module'
import { CastingModule } from './modules/casting/casting.module'

@Module({
    imports: [
        UserModule,
        CastingModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5431,
            username: 'root',
            password: 'root',
            database: 'casting',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true
        }),
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
