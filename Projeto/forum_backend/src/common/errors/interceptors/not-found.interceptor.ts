import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  NotFoundException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotFoundError } from '../types/NotFoundError';

@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof NotFoundError) {
          throw new NotFoundException(error.message);
        } else {
          throw error;
        }
      }),
    );
  }
}
