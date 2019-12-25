
import { NewsModel } from './news.model';

export interface NewsResponseModel {
  status: number;
  message: string;
  data: NewsModel;
}
