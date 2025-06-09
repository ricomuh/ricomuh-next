export type ResponseData<T> =
  | { data: T; error?: false }
  | { error: true; message: string };
