/* eslint-disable react/prop-types */
import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  return (
    <ul>
      {list && list.length > 0
        ? list.map((item, idx) => <MenuItem key={idx} item={item} />)
        : null}
    </ul>
  );
};

export default MenuList;
