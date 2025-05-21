import { Outlet } from 'react-router';

import './style.scss';

export default function Main() {
  return (
    <main className="main">
      <Outlet />
    </main>
  );
}
