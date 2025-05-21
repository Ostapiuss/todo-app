import { StatusTypes } from './types/ui-types';

export interface ITask {
  title: string;
  text: string;
  time: string;
  status: StatusTypes;
}
