import { Module } from '@nestjs/common';
import{ TypeOrmModule } from '@nestjs/typeorm'

@Module({
        imports:[TypeOrmModule.forRootAsync({
               useFactory:()=>({
                       type:'mysql',
                       host:'localhost',
                       port:3306,
                       username:'root',
                       database:'test',
                       entities:['dist/**/*.entity{.ts,.js}'],
                       synchronize:true,
                       logging:true
               }) 
        })]
})
export class DatabaseModule {}
