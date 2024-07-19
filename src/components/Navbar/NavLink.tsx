import Link from "next/link";
import { motion } from "framer-motion";

interface INavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: INavLinkProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link href={href} className="font-medium text-sm">
        {children}
      </Link>
    </motion.div>
  );
};

export default NavLink;
