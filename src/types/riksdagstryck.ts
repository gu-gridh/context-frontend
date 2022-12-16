

interface AbstractBase {
  id: number;
  created_at: string;
  updated_at: string;
  published: boolean;
}


interface Paginated<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<T>;
}

interface Count {
  count: number;
}

interface Document extends AbstractBase {
  uuid: string;
  text: string;
  name: string;
  year: number;
  category: number;
  excerpts: string;
}

interface Category extends AbstractBase {
  name: string;
  abbreviation: string;
}

export type { Category, Document, Paginated, Count };
