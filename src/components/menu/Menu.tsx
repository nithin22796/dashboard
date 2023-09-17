import { Link } from "react-router-dom";
import { Menu as MenuData } from "../../data/Menu";
const Menu = () => {
  return (
    <div className="menu">
      {MenuData?.map(({ id, title, listItems }: any) => (
        <div className="item" key={id}>
          <span className="title">{title}</span>
          {listItems?.map(({ id, title, url, icon: Icon }: any) => (
            <Link to={url} key={id} className="listItem">
              {Icon && <Icon size={20} />}
              <span className="listItemTitle">{title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
