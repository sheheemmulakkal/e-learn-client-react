import { Module } from "./module";

type Catgory = {
  category?: string;
  id?: string;
  status?: string;
};
type Language = {
  language?: string;
  id?: string;
  status?: string;
};
type Level = {
  level?: string;
  id?: string;
  status?: string;
};
export interface Course {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  level?: string | Level;
  category?: string | Catgory;
  language?: string | Language;
  approval?: string;
  status?: boolean;
  modules?: { module: string | Module; order: number }[];
}
