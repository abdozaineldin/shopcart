import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import FavoriteButton from "./FavoriteButton";
import MobileMenu from "./MobileMenu";
import { auth } from "@clerk/nextjs/server";
import { ClerkLoaded, Show, UserButton } from "@clerk/nextjs";
import Carticon from "./Carticon";
import Signin from "./Signin";

const Header = async () => {
  const { userId } = await auth();
  console.log("Server Sees userID : ", userId);

  return (
    <header className="sticky top-0 z-50 py-5 bg-white/70 backdrop-blur-md">
      <Container className="flex items-center justify-between text-lightColor">
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <Carticon />
          <FavoriteButton />

          <ClerkLoaded>{userId ? <UserButton /> : <Signin />}</ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
