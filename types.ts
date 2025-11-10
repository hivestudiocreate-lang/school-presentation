
export enum SlideType {
  TITLE = 'TITLE',
  CONTENT = 'CONTENT',
  END = 'END',
}

export interface SlideData {
  type: SlideType;
  title: string;
  presenters?: string[];
  operators?: string;
  description?: string;
  example?: string;
  code?: string;
  imageUrl?: string;
}
   