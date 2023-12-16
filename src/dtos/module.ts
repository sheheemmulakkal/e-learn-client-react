export interface Module {
  id?: string;
  name?: string;
  module?: string;
  description?: string;
  duration?: string;
  status?: boolean;
  createdAt?: Date;
  chapters?: IChapter[];
}

export interface IChapter {
  chapter: string;
  seconds: number;
  duration: string;
}
