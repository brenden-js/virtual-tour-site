export interface SearchContactResponse {
  total: number;
  paging: Paging;
  results?: (ResultsEntity)[] | null;
}
export interface Paging {
  next: Next;
}
export interface Next {
  after: string;
  link: string;
}
export interface ResultsEntity {
  id: string;
  properties: Properties;
  createdAt: string;
  updatedAt: string;
  archived: boolean;
}
export interface Properties {
  company: string;
  createdate: string;
  email: string;
  firstname: string;
  lastmodifieddate: string;
  lastname: string;
  phone: string;
  website: string;
}
