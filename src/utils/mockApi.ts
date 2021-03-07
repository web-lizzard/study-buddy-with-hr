import { users } from '../data/users';
import { UserInterface } from 'interfaces/users.interface';

export const mockAPI = () => {
  return new Promise<UserInterface[] | []>((resolve, reject) => {
    setTimeout(() => {
      if (users) {
        resolve([...users]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};
