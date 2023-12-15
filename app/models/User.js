import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import randomValue from '../utils/randomValue';


class User {
  constructor(userName) {
    this.userId = randomValue(4);
    this.userName = userName;
  }
}

export default User;
