import { MenuItemType } from "@/libs/types/types";

const MenuItem = ({ items }: { items: MenuItemType[] }) => {
    return (<>
        {
            items && items.map((val, key) =>
                <div key={key} className="relative mx-1">
                    <button className="menu-item">{val.title}</button>
                    <div className="menu-dropdown-container">
                        <ul className="menu-dropdown">
                            {
                                val.options.map((item, index) =>
                                    <li key={index}>
                                        <button onClick={item.onClick}>{item.title}</button>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            )
        }
    </>);
}

export default MenuItem;