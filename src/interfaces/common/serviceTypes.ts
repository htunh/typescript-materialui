export interface FetchApiProps {
  api: any;
  URL: string;
  body?: object;
}

export interface ResponseApiProps {
  total: number;
  data: Array<any>;
}
