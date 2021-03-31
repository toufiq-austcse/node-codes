import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    let code = context.switchToHttp().getResponse().statusCode;
    return next.handle().pipe(
      map((res) => {
        return {
          code,
          data: res,
        };
      }),
    );
  }
}

/**

 data:[{

 }]
  
 */
