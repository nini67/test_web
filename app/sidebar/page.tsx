import MenuButton from "./components/menubutton";

export default function SideBar() {
    return ( 
        <main className="w-96 bg-gray-900 p-4">
            <section className="w-72 bg-gray-500 p-4 h-full">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <div className="bg-blue-300 px-3 flex items-center justify-center rounded-lg">
                            <img src={"/award.svg"} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Acme Inc</h2>
                            <p>Interprise</p>
                        </div>
                    </div>
                    <div>
                        <img src={"/dots-vertikal"} />
                    </div>
                    </div>

                <div className="mt-8">
                    <p className="font-bold bg-grey-300">Platforms</p>
                    <div className="mt-2">
                        
                    </div>
                </div>
            </section>
            <section className="flex-1 flex bg-gray-700">
                
            </section>
        </main>
    )
}