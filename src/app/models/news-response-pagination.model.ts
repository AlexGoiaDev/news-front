import { NewsPaginationModel } from './news-pagination.model';
export interface NewsResponsePaginationModel {
  status: number;
  message: string;
  data: NewsPaginationModel;
}
