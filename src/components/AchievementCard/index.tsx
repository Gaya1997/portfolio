import { type AchievementItem } from "@/types/profile.interface";
import trophyIcn from "@/assets/icons/trophy-icn.svg";

const AchievementCard = ({ title, description, date }: AchievementItem) => {
  return (
    <div className="flex flex-col p-4 rounded-xl bg-transparent border border-white/[0.2] w-full max-w-md 3xl:max-w-lg">
      <div className="mx-auto mb-2 p-2 rounded-full flex items-center justify-center bg-white w-fit">
        <img className="w-10 h-auto" src={trophyIcn} alt="trophy icon" />
      </div>
      <h3 className="text-lg mx-auto font-semibold text-white">{title}</h3>
      <span className="text-xs ms-auto text-neutral-300">{date}</span>
      <p className="text-sm text-neutral-300">{description}</p>
    </div>
  );
};

export default AchievementCard;
