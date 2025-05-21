import { httpClient } from '@utils/http-client';

export const getMyTasks = async () => {
  return await httpClient.get('/my-tasks');
};
