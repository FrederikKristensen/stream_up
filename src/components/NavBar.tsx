import { IoMdSettings } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';

interface NavBarProps {
  TwitchHandle: () => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const NavBar = ({ TwitchHandle, searchQuery, onSearchChange }: NavBarProps) => {
  return (
    <nav>
      <div className="relative m-1.5 mb-0 p-2 w-full bg-zinc-500 rounded-xl grid grid-cols-3 items-center">
        <div className="flex items-center col-span-1 gap-1">
          <FaSearch color="gray" className="shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="..."
            className="text-white"
          />
        </div>
        <div className="col-span-1">
          <button onClick={TwitchHandle} className="text-white">
            Twitch Login
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
