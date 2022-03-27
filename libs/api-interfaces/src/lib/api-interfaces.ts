export interface BaseEntity {
  id: number | null;
}

export interface Song extends BaseEntity {
  title: string;
  author: string;
  url: string;
}
