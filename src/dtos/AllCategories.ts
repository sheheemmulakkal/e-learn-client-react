export interface AllCategories {
  categories: { category: string; id: string; status: boolean }[];
  languages: { language: string; id: string; status: boolean }[];
  levels: { level: string; id: string; status: boolean }[];
}

export interface Category {
  id?: string;
  category: string;
  status: boolean;
}
