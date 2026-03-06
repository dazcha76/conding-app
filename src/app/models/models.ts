export interface Category {
  title: string;
  documentation: string;
  items: CategoryItems[];
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
