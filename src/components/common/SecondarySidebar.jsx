import { NavLink } from "react-router-dom";

const SecondarySidebar = ({ name }) => {
  return (
    <div className="w-1/6 bg-dusky-purple ml-[-70px] flex flex-col gap-2 py-8 px-4">
      {name.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          end // This should hopefully enure proper root match
          className={({ isActive }) =>
            isActive
              ? "px-8 py-2 text-dusky-purple rounded-lg bg-native font-semibold"
              : "px-8 py-2 font-thin hover:font-medium hover:bg-gray-200 rounded-lg"
          }
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default SecondarySidebar;
