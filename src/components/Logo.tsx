import { siteConfig } from "@/config/site";

const Logo = ({ className = "" }: { className?: string }) =>
  siteConfig.logo ? (
    <img src={siteConfig.logo} alt={siteConfig.name} className={`h-8 w-auto ${className}`} />
  ) : (
    <span className={`font-display tracking-wider uppercase ${className}`}>{siteConfig.name}</span>
  );

export default Logo;
