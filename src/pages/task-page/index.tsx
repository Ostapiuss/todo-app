import { Typography } from '@mui/material';

import './style.scss';
import { TaskItem } from '@shared/components/task-item';
import { ITask } from 'src/interfaces/task-interfaces';

const mockList: Array<ITask> = [
  {
    status: 'to-do',
    text: 'About design sprint',
    title: 'How to pitch a Design Sprint',
    time: '09:00 PM',
  },
];

export default function MyTasksPage() {
  return (
    <div className="my-tasks-page">
      <Typography>My Tasks</Typography>

      <div className="my-tasks-page__tasks-list">
        {mockList.map((props, index) => (
          <TaskItem key={index} {...props} />
        ))}
      </div>
    </div>
  );
}
