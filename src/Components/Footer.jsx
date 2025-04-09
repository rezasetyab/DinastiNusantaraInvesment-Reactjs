const Footer = () => {
return (
    <>
        <div className="bg-[#0A3D62] text-white p-5">
            <div className="mt-3 flex justify-between pb-3">
                <div>
                    <img className="w-[150px] h-[60px]" src="../src/image/footer.png" alt="" />
                </div>
                <div >
                    <a className="underline hover:text-blue-500" href="#">Layanan Kami</a><br />
                    <a className="underline hover:text-blue-500" href="#">Layanan Kami</a>
                </div>
            </div>
            <div>
                <p className="flex items-center text-center">
                    <img src="../src/image/footer1.svg" alt="" className="p-2"/>(12) 134567890
                </p>
                <p className="flex items-center text-center">
                    <img src="../src/image/footer2.svg" alt="" className="p-2"/>investment@gmail.com
                </p>
                <p className="flex items-center text-center">
                    <img src="../src/image/footer3.svg" alt="" className="p-2"/>Jl. Jendral Sudirman, No. 12, Gg. Merpati III Salatiga, Jawa Tengah, Indonesia, 5055
                </p>
            </div>
            <div className="text-right pt-3">
                <p> &#9400; 2024 | PT. Dinasti Nusantara Investment</p>
            </div>
        </div>
    </>
)
}

export default Footer