import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { Response } from 'express';
import { ErrorMessages } from './error-messages';

interface PostgresError {
  code?: string;
  detail?: string;
  [key: string]: any;
}

@Catch(QueryFailedError)
export class DatabaseExceptionFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let message = ErrorMessages.UNKNOWN_ERROR;
    let status = HttpStatus.INTERNAL_SERVER_ERROR;

    const driverError = exception.driverError as PostgresError;

    switch (driverError.code) {
      case '23505': // unique_violation
        message = ErrorMessages.UNIQUE_VIOLATION;
        status = HttpStatus.CONFLICT;
        break;
      case '23503': // foreign_key_violation
        message = ErrorMessages.FOREIGN_KEY_VIOLATION;
        status = HttpStatus.BAD_REQUEST;
        break;
      case '23502': // not_null_violation
        message = ErrorMessages.NOT_NULL_VIOLATION;
        status = HttpStatus.BAD_REQUEST;
        break;
      default:
        console.error('Erro não tratado:', driverError);
    }

    response.status(status).json({
      statusCode: status,
      message,
      error: driverError.detail || exception.message,
    });
  }
}
