const Footer = () => {
  const date = new Date();

  return (
    <footer className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 fixed bottom-0 left-0">
      <div className="flex justify-between items-center py-2">
        <p className="text-sm text-muted-foreground">
          &copy;Flux {date.getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
