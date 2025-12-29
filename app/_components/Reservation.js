import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
  const [settings, bookedDate] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  const session = await auth();

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
        {session?.user ? (
          <ReservationForm user={session?.user} cabin={cabin} />
        ) : (
          <LoginMessage />
        )}
      </div>
    </div>
  );
}

export default Reservation;
