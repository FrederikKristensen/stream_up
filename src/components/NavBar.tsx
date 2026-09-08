import { IoMdSettings } from 'react-icons/io';

interface NavBarProps {
  TwitchHandle: () => void;
}

const NavBar = ({ TwitchHandle }: NavBarProps) => {
  return (
    <div className="m-1.5 mb-0.5 p-2 w-full bg-zinc-500 rounded-xl grid grid-cols-2">
      <div className="col-span-1">
        <button onClick={TwitchHandle} className="text-white">
          Twitch Login
        </button>
      </div>
      <div className="col-span-1 col-end-4 relative right-0">
        <IoMdSettings size="1.5em" />
      </div>
    </div>
  );
};

export default NavBar;
