import { cn } from "@/utils/tailwind";
import styles from "./style.module.css";

const VideoBackground = () => {
  return (
    <div
      className={"fixed inset-0 w-full h-full bg-black z-[-1]"}
      style={{
        backgroundImage:
          "linear-gradient(to right bottom, var(--color-video-gradientBg1), var(--color-video-gradientBg2), var(--color-video-gradientBg3), var(--color-video-gradientBg4), var(--color-video-gradientBg5))",
      }}
    >
      <div className={"w-full h-full"}>
        <div className={cn(styles.blob, "absolute top-1/2 left-1/2")} />
        <div className={cn(styles.blob, "absolute bottom-1/2 right-1/2")} />
      </div>
    </div>
  );
};

export default VideoBackground;
