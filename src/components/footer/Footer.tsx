const Footer = () => {
  const date = new Date();

  return (
    <footer className="h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ">
      <div className="flex justify-between items-center py-8">
        <p className="text-sm text-muted-foreground">
          &copy; {date.getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
