import { User } from '../entites/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService{
       constructor(private repository:UserRepository){

       }

        createUser(dto:CreateUserDto):Promise<User>{
                return this.repository.save(dto);
        }
        getUserById(id:number):Promise<User>{
             return this.repository.findOne({id:id});
        }

        getUsers():Promise<User[]>{
               return this.repository.find();
        }

        deleteUser(id:number){
               return this.repository.delete({id:id});
        }
        updateUser(id:number,updatedDto:UpdateUserDto):Promise<any>{
                console.log(updatedDto);
                
               return this.repository.update({id:id},updatedDto);
        }

}