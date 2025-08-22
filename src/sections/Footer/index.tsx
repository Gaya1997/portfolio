import type { Contact, i18nKeys } from "@/types/profile.interface";
import Socials from "@/components/Socials";

interface IProps extends Contact {
  i18nKeys?: i18nKeys;
}

const Footer = (props: IProps) => {
  return (
    <footer className="bg-section-bg shadow-[0_0_0_100vmax_var(--color-section-bg)] clip-path-fullbleed flex w-full justify-center pb-5">
      <Socials
        {...props}
        buttonClassName="max-md:[&>span]:hidden opacity-75 hover:opacity-100"
      />
    </footer>
  );
};

export default Footer;
