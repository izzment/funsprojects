import {NavLink} from "react-router-dom";
import {useState} from "react";

const SecondarySidebar = ({name}) => {

    const [selected, setSelected] = useState(false)
    function isSelected(e) {
        setSelected(true)
    }

    return (
        <div className='w-1/6 bg-dusky-purple ml-[-70px] flex flex-col gap-2 py-8 px-4'>

                {name.map((item) =>
                        <NavLink to={item.href} className={({isActive}) =>
                        isActive
                        ? 'px-8 py-2 text-dusky-purple rounded-lg bg-native font-semibold'
                        : 'px-8 py-2 font-thin hover:font-medium'
                        }
                        >
                            {item.title}
                </NavLink>
                )}
        </div>
    )
}

export default SecondarySidebar