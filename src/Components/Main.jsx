import { useState } from "react"
import { FaCaretRight } from "react-icons/fa6"
import Carousel from "./Carousel"

const Main = () => {

  const [baca, setbaca] = useState(false)
  const showText = () => {
    setbaca(!baca)
  } 

  return (
    <>
      <section className="mt-16">
        {/* <div className="grid italic px-8 py-3">
          <div className="py-5">
            <p>Dinasti Nusantara Group go GLOBAL</p>
          </div>
          <div className="font-bold text-[#0A3D62] text-4xl py-5">
            <p>“Perbesar Kapasitas, Punya Hati untuk Melayani &amp; Mengasihi”</p>
          </div>
        </div>
        <div className="flex px-8 w-full justify-between">
          <div className="italic flex flex-col justify-end py-10">
            <p>KPA NICHOLAS NYOTO</p>
            <p>PRASETYO DONONAGORO</p>
            <p className="font-bold pt-3">KOMISARIS UTAMA</p>
          </div>
          <div className="flex justify-end">
            <img src="public/image/people.png" alt="" />
          </div>
        </div> */}
        {/* <Carousel>
          <div>
            <img className="w-full md:h-[650px] " src="public/image/full depan.png" alt="" />
          </div>
        </Carousel> */}
        <div className="w-full">
          <Carousel/>
        </div>
        <div className="py-5 px-8">
          <h1 className="font-bold text-[#0A3D62] text-2xl pt-3">Tentang REZA</h1>
          <p className="pb-5 pt-3">Dinasti Nusantara Investment (Holding) merupakan sebuah perusahaan yang
            bergerak dalam bidang Financial Engineering, Pengelolaan Investasi, dan
            Pengembangan Bisnis Internasional.</p>
          <img className="mx-auto md:h-[600px] w-[800px]" src="public/image/TK.jpg" alt="Tentang Kami" />
        </div>
        <div className="py-5 px-8">
          <h1 className="font-bold text-[#0A3D62] text-2xl pb-3">Visi Kami</h1>
          <p>Menjadi perusahaan terdepan yang memberikan solusi bisnis profesional, berkelanjutan dan bermanfaat di pasar global dengan mengutamakan nilai-nilai luhur Nusantara.</p>
        </div>
        <div className="py-3 px-8">
          <div>
            <h1 className="font-bold text-[#0A3D62] text-2xl">Misi Kami</h1>
          </div>
          <div className="px-5 py-5 mx-5 my-5 shadow-2xl hover:border-2 border-blue-600 ">
            <div className="text-center flex flex-col justify-center items-center">
              <img className="w-[50px] h-[50px] pb-4" src="public/image/misi1.svg" alt="" />
              <p>Mengembangkan dan mengelola portofolio investasi yang menguntungkan dengan pemikiran yang inovatif</p>
            </div>
            <div className="text-center flex flex-col justify-center items-center">
              <img className="h-full w-[50px] pb-4 pt-4" src="public/image/misi2.svg" alt="" />
              <p>Memfasilitasi Kolaborasi strategis antara perusahaan dan mitra internasional</p>
            </div>
            <div className="text-center flex flex-col justify-center items-center">
              <img className="h-full w-[50px] pb-4 pt-4" src="public/image/misi3.svg" alt="" />
              <p>Mendorong pertumbuhan bisnis yang berkelanjutan dengan mengutamakan keberlanjutan dan tanggung jawab sosial.</p>
            </div>
            <div className="text-center flex flex-col justify-center items-center">
              <img className="h-full w-[50px] pb-4 pt-4" src="public/image/misi4.svg" alt="" />
              <p>Menjadi perusahaan yang dipercaya, transparan, dan berintegritas dalam semua aspek operasional</p>
            </div>
          </div>
        </div>
        {/* <div className="py-7 px-8 md:text-center">
          <p className="text-xl pb-3">Nilai - Nilai Perusahaan <b>(MULIA)</b></p>
          <div className="static">
            <div className="py-2">
              <h4 className="text-3xl font-bold pb-2"><span className="text-yellow-500">M</span>andiri</h4>
              <p>Kemandirian dalam mengelola dan mengembangkan investasi tanpa bergantung pada pihak lain.</p>
            </div>
            <div className="py-2">
              <h4 className="text-3xl font-bold pb-2"><span className="text-yellow-500">U</span>let</h4>
              <p>Ketangguhan dalam menghadapi tantangan dan komitmen tinggi untuk mencapai tujuan</p>
            </div>
            <div className="py-2">
              <h4 className="text-3xl font-bold pb-2"><span className="text-yellow-500">L</span>uhur</h4>
              <p>Menjunjung tinggi moralitas dan etika dalam setiap langkah bisnis</p>
            </div>
            <div className="py-2">
              <h4 className="text-3xl font-bold pb-2"><span className="text-yellow-500">I</span>ntegritas</h4>
              <p>Menjaga Prinsip kejujuran dan kepercayaan dalam hubungan bisnis</p>
            </div>
            <div className="py-2">
              <h4 className="text-3xl font-bold pb-2"><span className="text-yellow-500">A</span>ksi</h4>
              <p>Mengutamakan tindakan nyata dan responsif dalam setiap kesempatan</p>
            </div>
          </div>
        </div> */}
        <div className="py-10  px-8 text-left md:w-full">
          <p className="text-xl pb-8">Nilai - Nilai Perusahaan <b>(MULIA)</b></p>
          <div className="md:static">
            <div className="md:py-2 md:gap-8 md:pb-5 md:flex md:col-span-2 md:w-full ">
              <div className="md:float-left md:text-center md:w-[610px] md:border-1 md:border-[#0A3D62] md:pb-3">
                <h4 className="text-3xl font-bold pb-2"><span className="text-yellow-500">M</span>andiri</h4>
                <p>Kemandirian dalam mengelola dan mengembangkan investasi tanpa bergantung pada pihak lain.</p>
              </div>
              <div className="md:float-right md:text-center md:w-[610px] md:border-1 md:border-[#0A3D62]">
                <h4 className="text-3xl font-bold pb-2"><span className="text-yellow-500">U</span>let</h4>
                <p>Ketangguhan dalam menghadapi tantangan dan komitmen tinggi untuk mencapai tujuan</p>
              </div>
            </div>
            <div className="md:justify-center md:pb-3">
              <div className="py-2 md:text-center md:pb-5 md:border-1 [#0A3D62]">
                <h4 className="text-3xl font-bold pb-2"><span className="text-yellow-500">L</span>uhur</h4>
                <p>Menjunjung tinggi moralitas dan etika dalam setiap langkah bisnis</p>
              </div>
            </div>  
            <div className="md:py-2 md:gap-8 md:flex md:col-span-2 md:w-full">
              <div className="md:float-left md:text-center md:w-[610px] md:pb-5 md:border-1 md:border-[#0A3D62]">
                <h4 className="text-3xl font-bold pb-2"><span className="text-yellow-500">I</span>ntegritas</h4>
                <p>Menjaga Prinsip kejujuran dan kepercayaan dalam hubungan bisnis</p>
              </div>
              <div className="items-center md:float-right md:text-center md:w-[610px] md:border-1 md:border-[#0A3D62]">
                <h4 className="text-3xl font-bold pb-2"><span className="text-yellow-500">A</span>ksi</h4>
                <p>Mengutamakan tindakan nyata dan responsif dalam setiap kesempatan</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-2 pb-6">
          <p className="font-bold text-[#0A3D62] text-2xl px-8 ">Layanan Kami</p>
          <div className="grid md:grid-cols-3 gap-3 px-3">
            <div className="flex flex-col justify-start items-center text-center w-full shadow-xl border-2 hover:border-blue-600 p-4 mt-10">
              <div className="flex flex-col items-center">
              <img className="md:w-[150px] md:h-[180px] w-[110px] h-[130px] pb-3" src="public/image/FE.png" alt="Financial Engineering" />
                <h1 className="py-2 font-bold flex items-center">Financial Engineering <FaCaretRight className="pl-2" /></h1>
              </div>
            <p>Mengembangkan solusi finansial inovatif untuk mendukung investasi dan pengelolaan aset</p>
            <p>Membantu klien dalam merancang portofolio investasi yang optional, termasuk dalam sektor teknologi keuangan dan blockchain.</p>
          </div>
            <div className="flex flex-col justify-start items-center text-center w-full shadow-xl border-2 hover:border-blue-600 p-4 mt-10">
              <div className="flex flex-col items-center">
            <img className="md:w-[150px] md:h-[180px] w-[110px] h-[130px] pb-3" src="public/image/PI.png" alt="Pengelolaan Investasi" />
                <h1 className="py-2 font-bold flex items-center">Pengelolaan Investasi <FaCaretRight className="pl-2" /></h1>
                </div>
            <p>Menyediakan layanan manajemen investasi terintegrasi, termasuk strategi divesifikasi yang menguntungkan di berbagai sektor industri</p>
            <p>Fokus pada investasi di sektor energi, pertambangan, dan agrikultur yang berkembang di pasar internasional.</p>
          </div>
            <div className="flex flex-col justify-start items-center text-center w-full shadow-xl border-2  hover:border-blue-600 p-4 mt-10">
              <div className="flex flex-col items-center">
            <img className="md:w-[150px] md:h-[180px] w-[110px] h-[130px] pb-3" src="public/image/PBI.png" alt="Pengembangan Bisnis Internasional" />
              <h1 className="py-2 font-bold flex items-center">Pengembangan Bisnis Internasional <FaCaretRight className="pl-2" /></h1>
              </div>
              {baca === true ?
                <><p>Membangun dan memperluas jaringan bisnis di pasar internasional, termasuk wilayah Asia Tengah,   Rusia, dan Eropa Timur</p>
                  <p>Mengidentifikasi peluang kerja sama di sektor-sektor utama seperti pertambangan, minyak, dan gas, pariwisata, serta teknologi edukasi</p>
                  <p>Memfasilitasi akses ke proyek-proyek pemerintah dan swasta, menciptakan peluang investasi dan kemitraan strategis.</p> <button className="text-blue-500 underline" onClick={() => showText()}>Show Less</button> </> 
                :
                <> <p>Membangun dan memperluas jaringan bisnis di pasar internasional, termasuk wilayah Asia Tengah, Rusia, dan Eropa Timur</p>
                  <p>Mengidentifikasi peluang kerja sama di sektor-sektor utama seperti pertambangan, minyak, dan gas, pariwisata, </p> <button className="text-blue-500 underline" onClick={() => showText()}>Read more</button> </>
              }
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main