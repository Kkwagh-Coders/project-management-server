import { ProjectTable } from './project';
import { ProjectMemberTable } from './projectMember';
import { TaskCommentTable } from './taskCommentTable';
import { TaskTable } from './taskTable';
import { UserTable } from './user';

// Define Database
export interface Database {
  user: UserTable;

  // Project
  project: ProjectTable;
  projectMember: ProjectMemberTable;

  // Tasks
  task: TaskTable;
  taskComment: TaskCommentTable;
}
