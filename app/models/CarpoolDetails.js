class CarpoolDetails {
  constructor(carpoolId, departureTime, availableSeats, returningRide, nameVisibility, comment) {
    this.carpoolId = carpoolId;
    this.departureTime = departureTime;
    this.availableSeats = availableSeats;
    this.passengerIds = [];
    this.returningRide = returningRide;
    this.nameVisibility = nameVisibility;
    this.comment = comment;
  }
}

export default CarpoolDetails;
