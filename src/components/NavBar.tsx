import { FaSearch } from 'react-icons/fa';

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
        <div className="col-span-1 flex gap-2">
          <button className="px-2 py-1" onClick={() => setTheme('dark')}>
            Dark
          </button>
          <button className="px-2 py-1" onClick={() => setTheme('light')}>
            Light
          </button>
        </div>
        <div className="col-span-1 col-end-4 absolute right-1.5">
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
