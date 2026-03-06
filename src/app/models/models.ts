export interface Options {
  name: string;
  code: string;
}

export interface Category {
  title: string;
  link: string;
  items: Record<string, CategoryItems>;
}

export interface CategoryItems {
  id: string;
  link: string;
  name: string;
  code: string;
  example: string;
  output: string;
  bullets: string[];
}
