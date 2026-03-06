export interface Options {
  name: string;
  code: string;
}

export interface Topic {
  title: string;
  link: string;
  items: Record<string, TopicItems>;
}

export interface TopicItems {
  id: string;
  link: string;
  name: string;
  code: string;
  example: string;
  output: string;
  bullets: string[];
}
