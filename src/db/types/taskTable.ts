import { Generated, Insertable, Selectable, Updateable } from 'kysely';

export interface TaskTable {
  id: Generated<number>;
  name: string;
  project_id: number;
  status: string;
  assigned_to: number;
  priority: 'high' | 'low' | 'medium';
}

export type Task = Selectable<TaskTable>;
export type NewTask = Insertable<TaskTable>;
export type TaskUpdate = Updateable<TaskTable>;
