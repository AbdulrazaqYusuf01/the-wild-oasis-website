import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

function Reservation() {
  return (
    <div className="grid grid-cols-9 border border-primary-800 min-h-[400px]">
      <div className="col-start-1 col-end-6">
        <DateSelector />
      </div>
      <div className="col-start-6 col-end-10">
        <ReservationForm />
      </div>
    </div>
  );
}

export default Reservation;
