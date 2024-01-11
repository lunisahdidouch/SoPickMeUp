import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

class Carpool {
  constructor(userId, starterLocation, endLocation) {
    this.carpoolId = uuidv4();
    this.userId = userId;
    this.starterLocation = starterLocation;
    this.endLocation = endLocation;
  }
}

export default Carpool;
