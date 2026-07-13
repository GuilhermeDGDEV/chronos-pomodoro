import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completedate: number | null;
  interruptDate: number | null;
  type: keyof TaskStateModel['config'];
};
