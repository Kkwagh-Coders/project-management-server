import { Generated, Insertable, Selectable, Updateable } from 'kysely';

export interface TaskCommentTable {
  id: Generated<number>;
  task: number;
  comment: string;
  commentedBy: number;
}

export type TaskComment = Selectable<TaskCommentTable>;
export type NewTaskComment = Insertable<TaskCommentTable>;
export type TaskCommentUpdate = Updateable<TaskCommentTable>;
