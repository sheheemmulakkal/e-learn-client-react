export interface Chat {
  courseId?: string;
  id?: string;
}

export interface Message {
  sender?: string;
  firstname?: string;
  lastname?: string;
  createdAt?: Date;
  message?: string;
}
