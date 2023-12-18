class CarpoolDetails {
  constructor(carpoolId, departureTime, availableSeats, returningRide, nameVisibility, driverName, comment) {
    this.carpoolId = carpoolId;
    this.driverName = driverName;
    this.departureTime = departureTime;
    this.availableSeats = availableSeats;
    this.passengerIds = [];
    this.returningRide = returningRide;
    this.nameVisibility = nameVisibility;
    this.comment = comment;
  }
}

export default CarpoolDetails;
