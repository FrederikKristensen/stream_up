import { FaSearch, FaMoon } from 'react-icons/fa';
import { RiSunFill } from 'react-icons/ri';

interface NavBarProps {
  TwitchHandle: () => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  theme: string;
  setTheme: (value: string) => void;
  currentUser: { profile_image_url: string } | undefined;
}

const NavBar = ({
  TwitchHandle,
  searchQuery,
  onSearchChange,
  setTheme,
  theme,
  currentUser,
}: NavBarProps) => {
  return (
    <nav>
      <div className="relative m-1.5 mb-0 p-2 bg-navbar-bg rounded-xl grid grid-cols-3 items-center">
        <div className="flex items-center col-span-1 gap-2 ml-1">
          <FaSearch color="white" className="shrink-0 size-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search..."
            className="text-white w-20 text-lg bg-transparent outline-none"
          />
        </div>
        <div className="col-span-2 flex justify-end gap-2">
          <button
            className="p-2 bg-card-bg flex items-center justify-center rounded-full"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <FaMoon className="text-sm text-white" />
            ) : (
              <RiSunFill className="text-sm text-black" />
            )}
          </button>
          {currentUser ? (
            <img
              src={currentUser?.profile_image_url}
              alt="Logged in Users profile picture"
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <button onClick={TwitchHandle} className="text-white">
              Connect Twitch
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
