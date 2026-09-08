import { IoMdSettings } from 'react-icons/io';

interface NavBarProps {
  TwitchHandle: () => void;
}

const NavBar = ({ TwitchHandle }: NavBarProps) => {
  return (
    <div className="m-1.5 mb-0.5 p-1 w-full bg-zinc-500 rounded-xl">
      <button onClick={TwitchHandle} className="text-white">
        Twitch Login
      </button>
      <IoMdSettings size="1.5em" />
    </div>
  );
};

export default NavBar;
