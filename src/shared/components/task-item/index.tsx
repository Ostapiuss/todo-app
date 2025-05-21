import { ITask } from 'src/interfaces/task-interfaces';

import './style.scss';
import { Status } from '@shared/ui/status';

export const TaskItem = ({ status, text, time, title }: ITask) => {
  return (
    <div className="task-item">
      <div className="task-item__title">{title}</div>
      <div className="task-item__text">{text}</div>
      <div className="task-item__interaction">
        <div className="task-item__time">{time}</div>
        <div className="task-item__status">
          <Status status={status} />
        </div>
      </div>
    </div>
  );
};
