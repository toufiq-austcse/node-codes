import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
        name:'users'
})
export class User{
@PrimaryGeneratedColumn()
 id:number;

 @Column({
         type:'text'
 })
 name:string;   
 @Column({
        type:'text'
})    
 email:string;
}
