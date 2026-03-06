export interface Options {
  name: string;
  code: string;
}

export interface Category {
  title: string;
  documentation: string;
  items: Record<string, CategoryItems>;
}

export interface CategoryItems {
  id: string;
  documentation: string;
  name: string;
  code: string;
  example: string;
  output: string;
  bullets: string[];
}
