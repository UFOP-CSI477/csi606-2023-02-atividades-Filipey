import {
  CallHandler,
  ConflictException,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConflictError } from '../types/ConflictError';

@Injectable()
export class ConflictInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof ConflictError) {
          throw new ConflictException(error.message);
        } else {
          throw error;
        }
      }),
    );
  }
}
