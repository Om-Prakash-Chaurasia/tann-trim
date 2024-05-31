import {
    faBookmark,
    faSearch,
    faShoppingCart,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
    return (
        <nav className="bg-black text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl">TANN TRIM</div>

                <div className="space-x-6">
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="hover:text-gray-400 cursor-pointer"
                    />
                    <FontAwesomeIcon
                        icon={faUser}
                        className="hover:text-gray-400 cursor-pointer"
                    />
                    <FontAwesomeIcon
                        icon={faBookmark}
                        className="hover:text-gray-400 cursor-pointer"
                    />
                    <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="hover:text-gray-400 cursor-pointer"
                    />
                </div>
            </div>
        </nav>
    );
}
