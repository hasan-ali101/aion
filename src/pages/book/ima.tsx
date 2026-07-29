import HeadWrapper from "@/components/headwrapper";
import { BookingWizard } from "@/components/booking/booking-wizard";
import { bookingServices } from "@/lib/data/booking-services";

const service = bookingServices.find((s) => s.id === "ima")!;

export default function BookInitialMedicalAssessment() {
  return (
    <HeadWrapper
      title="Book Your Initial Medical Assessment | Aion Clinic"
      description="Book your Initial Medical Assessment with Dr Matthew Liveras at Aion Clinic."
      noIndex
    >
      <div className="w-full bg-white">
        <BookingWizard service={service} />
      </div>
    </HeadWrapper>
  );
}
