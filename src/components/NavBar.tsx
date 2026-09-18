import { IoMdSettings } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';

interface NavBarProps {
  TwitchHandle: () => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  theme: string;
  setTheme: (value: string) => void;
}

const NavBar = ({ TwitchHandle, searchQuery, onSearchChange, setTheme }: NavBarProps) => {
  return (
    <nav>
      <div className="relative m-1.5 mb-0 p-2 bg-navbar-bg rounded-xl grid grid-cols-3 items-center">
        <div className="flex items-center col-span-1 gap-2">
          <FaSearch color="white" className="shrink-0 size-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search..."
            className="text-white w-20 text-lg bg-transparent outline-none"
          />
        </div>
        <div className="col-span-1">
          <button onClick={TwitchHandle} className="text-white">
            Twitch Login
          </button>
        </div>
        <div className="col-span-1 flex gap-2">
          <button className="px-2 py-1" onClick={() => setTheme('dark')}>
            Dark
          </button>
          <button className="px-2 py-1" onClick={() => setTheme('light')}>
            Light
          </button>
        </div>
        <div className="col-span-1 col-end-4 absolute right-2">
          <IoMdSettings size="1.5em" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
