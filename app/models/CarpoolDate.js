class CarpoolDate {
    constructor() {
      this.carpoolsByDate = {};
    }
  
    addCarpool(carpoolId, date) {
      if (!this.carpoolsByDate[date]) {
        this.carpoolsByDate[date] = [];
      }
      this.carpoolsByDate[date].push(carpoolId);
    }
  }
  
  export default CarpoolDate;
  