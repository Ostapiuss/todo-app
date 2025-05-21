import { StatusTypes } from 'src/interfaces/types/ui-types';

import { joinClassNames } from '@utils/joinClassNames';

import './style.scss';

type Props = {
  status: StatusTypes;
};

export function Status({ status }: Props) {
  return <div className={`status ${joinClassNames(status)}`}>{status}</div>;
}
