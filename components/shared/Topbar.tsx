import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/logo.svg";
import Logout from "../../public/assets/logout.svg";
import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";

function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src={Logo} alt="logo" width={30} height={30} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <button className="flex cursor-pointer">
                <Image src={Logout} alt="LogoutBtn" width={24} height={24} />
              </button>
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher
          appearance={{
            elements: {
              organizationSwitcherTrigger: "px-0 text-white py-0.5 ml-2 ",
            },
          }}
        />
      </div>
    </nav>
  );
}

export default Topbar;
