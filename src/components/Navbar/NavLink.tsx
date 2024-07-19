import Link from "next/link";

interface INavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: INavLinkProps) => {
  return (
    <div>
      <Link href={href} className="font-medium text-sm">
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
