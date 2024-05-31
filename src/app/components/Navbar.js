export default function Navbar() {
    return (
        <nav className="bg-black text-white py-4">
            <div className="container mx-auto flex justify-center items-center ">
                <div className="space-x-8">
                    <a href="#" className="hover:text-gray-400">
                        Bags
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        Travel
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        Accessories
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        Gifting
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        Jewellery
                    </a>
                </div>
            </div>
        </nav>
    );
}
