import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from 'kysely';

export interface ProjectTable {
  id: Generated<number>;
  name: string;
  head_id: number;
  budget: number;
  start_date: ColumnType<Date, string | undefined, never>;
  end_date: ColumnType<Date, string | undefined, never>;
}

export type Project = Selectable<ProjectTable>;
export type NewProject = Insertable<ProjectTable>;
export type ProjectUpdate = Updateable<ProjectTable>;
