import { NotFoundPage } from '@pages/not-found-page';
import { Routes, Route } from 'react-router';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
