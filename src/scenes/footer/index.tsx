import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Explore diverse classes, track your progress, and connect with a
            community dedicated to wellness. Your path to a healthier, stronger you
            starts here.

          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Discover new fitness routines</p>
          <p className="my-5">Explore innovative workout plans</p>
          <p>Transform your fitness journey</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Connect with us at the heart of fitness!</p>
          <p>(213) 425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
