import ButtonMedia from "../atoms/ButtonMedia";
import IconFb from "../atoms/IconFb";
import IconInsta from "../atoms/IconInsta";
import IconLinkedIn from "../atoms/IconLinkedIn";

const GroupMediaButtons = () => {
  return (
    <div className="w-[92px] flex gap-[10px]">
      <ButtonMedia
        href={""}
        icon={<IconFb />}
        ariaLabel="Przejdź do portalu Facebook"
      />
      <ButtonMedia
        href={""}
        icon={<IconInsta />}
        ariaLabel="Przejdź do portalu Instagram"
      />
      <ButtonMedia
        href={""}
        icon={<IconLinkedIn />}
        ariaLabel="Przejdź do portalu LinkedIn"
      />
    </div>
  );
};

export default GroupMediaButtons;
