export type FormNames<T extends object> = {
  [Key in keyof T]: Key;
};
