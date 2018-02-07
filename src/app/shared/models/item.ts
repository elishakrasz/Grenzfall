
import { Subitem } from './subitem';

export interface Item {
  item_no: number;
  local_db_id: number;
  external_db_id: number;
  sub_items: Subitem [];
  image_file_type: string;
  image_data: any;
}
