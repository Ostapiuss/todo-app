import { Typography } from '@mui/material';

import './style.scss';
import { TaskItem } from '@shared/components/task-item';
import { ITask } from '@interfaces/task-interfaces';
import { useEffect, useState } from 'react';
import { getMyTasks } from '@api/my-tasks-api';

export default function MyTasksPage() {
  const [myTasks, setMyTasks] = useState<ITask[] | []>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await getMyTasks();

      if (data) {
        setMyTasks(data);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="my-tasks-page">
      <Typography>My Tasks</Typography>

      <div className="my-tasks-page__tasks-list">
        {myTasks.map((props, index) => (
          <TaskItem key={index} {...props} />
        ))}
      </div>
    </div>
  );
}
