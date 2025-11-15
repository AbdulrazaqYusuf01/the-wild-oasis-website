import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
  const [settings, bookedDate] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className="grid grid-cols-9 border border-primary-800 min-h-[400px]">
      <div className="col-start-1 col-end-6">
        <DateSelector
          settings={settings}
          bookedDate={bookedDate}
          cabin={cabin}
        />
      </div>
      <div className="col-start-6 col-end-10">
        <ReservationForm cabin={cabin} />
      </div>
    </div>
  );
}

export default Reservation;
