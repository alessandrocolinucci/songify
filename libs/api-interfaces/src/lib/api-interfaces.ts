export interface BaseEntity {
  id: string | null;
}

export interface Song extends BaseEntity {
  title: string;
  author: string;
  url: string;
}
