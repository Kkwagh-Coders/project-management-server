import { Generated, Insertable, Selectable, Updateable } from 'kysely';

export interface ProjectMemberTable {
  id: Generated<number>;
  project: number;
  user: number;
  role: 'admin' | 'member';
}

export type ProjectMember = Selectable<ProjectMemberTable>;
export type NewProjectMemberTable = Insertable<ProjectMemberTable>;
export type ProjectMemberTableUpdate = Updateable<ProjectMemberTable>;
