import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserService } from '../services/user.service';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Controller('users')
export class UsersController{
        
        constructor(private userService:UserService) {
                
        }

        @Post()
        create(@Body() createUserDto:CreateUserDto){
               return this.userService.createUser(createUserDto);
        }

        @Get(':id')
        getOne(@Param('id') id:number){
        
                return this.userService.getUserById(+id);
        }

        @Get()
        getAll(){
                return this.userService.getUsers();
        }
        
        @Delete(':id')
        delete(@Param('id') id:number){
                return this.userService.deleteUser(+id);
        }

        @Patch(":id")
        update(@Param('id') id:number,@Body() updateBody:UpdateUserDto){
               
                
                return this.userService.updateUser(+id,updateBody);
        }

}