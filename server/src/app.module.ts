import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserModule } from './modules/user/user.module'

@Module({
    imports: [
        UserModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5431,
            username: 'root',
            password: 'root',
            database: 'casting',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true
        })
    ]
})
export class AppModule {}
