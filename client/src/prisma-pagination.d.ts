import { PaginateFunction } from 'prisma-pagination';

declare global {
  namespace Express {
    export interface Request {
      paginate: PaginateFunction;
    }
  }
}
