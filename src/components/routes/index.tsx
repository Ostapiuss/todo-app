import { Layout } from '@components/layout';
import { Dashboard } from '@pages/dashboard';
import { NotFoundPage } from '@pages/not-found-page';
import MyTasksPage from '@pages/task-page';
import { Routes, Route } from 'react-router';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="tasks" element={<MyTasksPage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
