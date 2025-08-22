import Button from "@/components/Button";
import type { Contact, i18nKeys } from "@/types/profile.interface";
import gitHubLogo from "@/assets/icons/github-light.svg";
import linkedInLogo from "@/assets/icons/linkedin.svg";
import mailLogo from "@/assets/icons/mail.svg";
import { cn } from "@/utils/tailwind";

interface IProps extends Contact {
  i18nKeys?: i18nKeys;
  className?: string;
  buttonClassName?: string;
}

const Socials = ({
  email,
  socials,
  i18nKeys,
  className,
  buttonClassName,
}: IProps) => {
  return (
    <div className={cn("flex items-center justify-center text-xs", className)}>
      {socials.github && socials.githubUsername && (
        <Button
          as="a"
          className={cn("text-sm 3xl:text-base font-normal", buttonClassName)}
          variant="ghost"
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <img src={gitHubLogo} className="w-6 h-6" alt="github logo" />
          <span>{socials.githubUsername}</span>
        </Button>
      )}
      {socials.linkedin && (
        <Button
          as="a"
          className={cn("text-sm 3xl:text-base font-normal", buttonClassName)}
          variant="ghost"
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <img src={linkedInLogo} className="w-6 h-6" alt="linkedIn logo" />
          <span>{i18nKeys?.linkedIn}</span>
        </Button>
      )}
      <Button
        as="a"
        className={cn("text-sm 3xl:text-base font-normal", buttonClassName)}
        variant="ghost"
        href={`mailto:${email}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <img src={mailLogo} className="w-6 h-6" alt="mail logo" />
        <span>{email}</span>
      </Button>
    </div>
  );
};

export default Socials;
