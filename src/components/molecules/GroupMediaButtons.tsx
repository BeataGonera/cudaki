import ButtonMedia from "../atoms/ButtonMedia";
import IconFb from "../atoms/IconFb";
import IconInsta from "../atoms/IconInsta";
import IconLinkedIn from "../atoms/IconLinkedIn";
import IconX from "../atoms/IconX";

const GroupMediaButtons = () => {
  return (
    <div className="w-[92px] flex gap-[10px]">
      <ButtonMedia
        href={"https://www.facebook.com/FundacjaCudak"}
        icon={<IconFb />}
        ariaLabel="Przejdź do portalu Facebook"
      />
      <ButtonMedia
        href={"https://x.com/FundacjaCudak"}
        icon={<IconX />}
        ariaLabel="Przejdź do portalu X"
      />
    </div>
  );
};

export default GroupMediaButtons;
