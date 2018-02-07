import { Images } from './images';

export interface Subitem {
  sub_item_id: number;
  entity_text: string;
  entity_html: string;
  ans_no: number;
  images: Images[];
}
