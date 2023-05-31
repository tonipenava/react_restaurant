import './BookingPage.css';
const BookingPage = () => {
  return (
    <div className="booking_container">
      <div className="booking_left">
        <h1 className="booking_title">Book Your Table</h1>
      </div>
      <div className="booking_right">
        <form className="booking_form">
          <input type="text" name="name" id="name" placeholder="Name" />

          <input type="email" name="email" id="email" placeholder="Email" />

          <input type="text" name="phone" id="phone" placeholder="Phone" />

          <input type="date" name="date" id="date" placeholder="Enter date" />

          <input type="time" name="time" id="time" placeholder="Time" />

          <input
            type="number"
            name="persons"
            id="persons"
            placeholder="Number of persons"
          />

          <button type="submit" className="booking_btn">
            Book me table
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
