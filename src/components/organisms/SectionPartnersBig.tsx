import { getPartners } from "@/utils/methods";
import CardPartner from "../molecules/CardPartner";
import { Partner } from "@/utils/types";

const SectionPartnersBig = async () => {
  const partners = await getPartners();
  return (
    <section className="w-full flex flex-col gap-[32px] px-2 lg:px-24 2xl:px-128">
      <h1 className="text-h1-sm lg:text-h1">Przyjaciele Cudaka</h1>
      <div className="flex flex-col gap-[64px] lg:gap-[32px]">
        {partners
          ? partners.map((partner: Partner, index: number) => (
              <CardPartner partner={partner} key={index} />
            ))
          : null}
      </div>
    </section>
  );
};

export default SectionPartnersBig;
