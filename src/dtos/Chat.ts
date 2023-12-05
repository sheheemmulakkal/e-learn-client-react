export interface Chat {
  courseId?: string;
  id?: string;
  messages?: Message[];
}

export interface Message {
  sender?: string;
  firstname?: string;
  lastname?: string;
  createdAt?: Date;
  message?: string;
}
