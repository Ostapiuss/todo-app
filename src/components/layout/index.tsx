import Main from '@components/main';
import { SideBar } from '@components/sidebar';

import './style.scss';

export function Layout() {
  return (
    <div className="todo-app-layout">
      <SideBar />
      <Main />
    </div>
  );
}
