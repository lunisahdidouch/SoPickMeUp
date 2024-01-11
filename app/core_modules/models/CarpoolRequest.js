import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

class CarpoolRequest {
  constructor(driverId, requesteeId, pickupLocation, carpoolId) {
    this.carpoolRequestId = uuidv4();
    this.carpoolId = carpoolId;
    this.requesteeId = requesteeId;
    this.driverId = driverId;
    this.pickupLocation = pickupLocation;
  }
}

export default CarpoolRequest;
