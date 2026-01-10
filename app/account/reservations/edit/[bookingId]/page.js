import UpdateReservationForm from "@/app/_components/UpdateReservationForm";
import { updateReservation } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const reservationId = params.bookingId;
  const { cabinId } = await getBooking(params.bookingId);
  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>

      <UpdateReservationForm
        reservationId={reservationId}
        maxCapacity={maxCapacity}
      />
    </div>
  );
}
