import { PaginationModel } from './pagination.model';
import { NewsModel } from './news.model';

export interface NewsPaginationModel extends PaginationModel {
  docs: NewsModel[];
}
