import {
  Search,
  ViewModule,
  FullScreen,
  Notification,
  Settings,
} from "../../constants/icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Admin Panel</span>
      </div>
      <div className="icons">
        <Search size={25} />
        <ViewModule size={25} />
        <FullScreen size={25} />
        <div className="notification">
          <Notification size={25} />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://yt3.ggpht.com/yti/AOXPAcUbcHTBx_o8Fk4Zw6yJ9KGI23Qnjvsxg5Y0y1nrrg=s88-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <span>Nithin</span>
        </div>
        <Settings className={"iconHover"} size={25} />
      </div>
    </div>
  );
};

export default Navbar;
