import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import randomValue from '../../core_modules/utils/randomValue';


class User {
  constructor(name) {
    this.userId = randomValue(1, 5);
    this.name = name;
  }
}

export default User;
