import { Link } from "@inertiajs/react";
import HomeLayout from "@/layouts/home-layout";
import DOMPurify from 'dompurify';
import { ppdb, testimoni, gambarhomepage, programs, principle } from "/public/ubahLandingPage.js";

function Home({faqs,user,landingPage, testimoni, programs}) {
    return (
        <>
        {/* Header */}
        <section className="px-20 max-sm:px-5">
            <h1 className="text-9xl max-sm:text-4xl font-black uppercase motion-opacity-in-0 motion-delay-100 motion-translate-y-in-100 motion-blur-in-md motion-duration-[2s] motion-ease-in-out">Mari Bergabung Bersama Kami</h1>
            <p className="text-2xl max-sm:text-lg font-bold opacity-50 w-1/2 max-sm:w-full my-5 motion-opacity-in-0 motion-delay-200 motion-translate-y-in-100 motion-blur-in-md motion-duration-[2s] motion-ease-in-out">Sekolah di Madrasah Aliyah Negeri 2 Kota Probolinggo, Mari menjadi insan yang bermartabat, berilmu, dan bermartabat.</p>
            <div className="flex max-sm:flex-col gap-5 items-center justify-between motion-opacity-in-0 motion-delay-300 motion-translate-y-in-100 motion-blur-in-md motion-duration-[2s] motion-ease-in-out">
                <div className='flex items-center gap-3'>
                    <Link href="/register"><button className="bg-emerald-600 cursor-pointer font-semibold text-white px-7 max-sm:px-5 py-4 max-sm:py-2 rounded-full border hover:px-10 duration-500">Daftar Sekarang</button></Link>
                    <Link href="/login"><button className="bg-white cursor-pointer font-semibold px-10 max-sm:px-12 py-4 max-sm:py-2 rounded-full border hover:px-13 duration-500">Masuk</button></Link>
                </div>
                <div className="max-sm:hidden">
                    <h1 className="text-4xl font-black">{user}+</h1>
                    <p className="text-xl font-semibold text-muted-foreground">Orang yang sudah terdaftar</p>
                </div>
                <div className="max-sm:hidden">
                    <h1 className="text-4xl font-black">{landingPage?.jumlah_siswa_berprestasi}+</h1>
                    <p className="text-xl font-semibold text-muted-foreground">Siswa berprestasi</p>
                </div>
            </div>
        </section>
            {/* Photo Grid */}
            <section className="my-12 px-20 max-sm:px-5">
                {/* Left */}
                <div className=' grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
                    <div className='relative overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border motion-preset-blur-right-md motion-duration-[2s] motion-ease-in-out'>
                        <img src={"/storage/"+landingPage?.foto_background} alt="PPDB" className='object-cover w-full h-full blur-[1px] object-center' />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute inset-0 flex text-white flex-col p-5 uppercase font-bold text-4xl">
                            <h1 className="max-sm:text-2xl">{landingPage?.pengumuman_ppdb}</h1>
                            <p className="max-sm:text-lg">{landingPage?.pengumuman_ppdb_date}</p>
                        </div>
                        <div className="absolute inset-0 flex top-auto bottom-0 text-white flex-col p-5 font-bold text-3xl max-sm:text-sm">
                            <p>{landingPage?.deskripsi_ppdb}</p>
                        </div>
                    </div>
                    {/* Right */}
                    <div className='grid grid-rows-2 gap-2 motion-preset-blur-left-md motion-duration-[2s] motion-ease-in-out'>
                        <div className='w-full overflow-hidden rounded-xl bg-emerald-600 relative'>
                            <div className='grid grid-cols-3 overflow-hidden items-center p-5'>
                                <div className='text-white space-y-3 col-span-2'>
                                    <p className="text-lg max-sm:text-sm">{testimoni?.message}</p>
                                    <p className="text-lg italic max-sm:text-sm">~ {testimoni?.name}</p>
                                </div>
                                <img src={"/storage/"+testimoni?.image} alt="testimoni" className='absolute -bottom-30 right-5 max-sm:-right-10' />
                            </div>
                        </div>
                        {/* Right Bottom */}
                        <div className='flex gap-2'>
                            <img src={"/storage/"+landingPage?.foto_background_1} alt="ppdb" className='w-full object-cover aspect-video rounded-xl' />
                            <img src={"/storage/"+landingPage?.foto_background_2} alt="ppdb" className='w-full object-cover aspect-video rounded-xl' />
                        </div>
                    </div>
                </div>
            </section>
            {/* Program Unggulan */}
            <section className="py-12 px-20 max-sm:px-5 bg-emerald-700 space-y-5">
                <h1 className="text-5xl text-white text-center font-black capitalize intersect:motion-preset-blur-up-lg max-sm:text-3xl">Program Unggulan</h1>
                <p className="text-white text-center w-1/2 max-sm:w-full mx-auto intersect:motion-preset-blur-up-lg max-sm:text-sm">Bergabung di program unggulan MAN 2 Kota Probolinggo, setiap siswa akan mendapatkan pengalaman yang luar biasa.</p>
                <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 justify-center">
                    {programs?.map((program, index) => (
                        <div key={index} className={`bg-emerald-600 rounded-lg p-10 space-y-2 intersect:motion-preset-blur-up-lg intersect:motion-delay-[${index * 100}ms]`}>
                            <img src={"/storage/"+program?.image} className='w-1/4 mx-auto' alt={program?.name} />
                            <h1 className="text-xl font-bold text-white text-center">{program?.name}</h1>
                            <p className="text-white text-center">{program?.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            {/* Sambutan Kepala Madrasah */}
            <section className='grid grid-cols-3 max-sm:grid-cols-1 items-center gap-10 px-20 max-sm:px-5 my-10 '>
                <img src={"/storage/"+landingPage?.foto_kepala_madrasah} alt="principle-photo" className='w-full object-cover object-center rounded-xl intersect:motion-preset-blur-right-md' />
                <div className=' col-span-2 space-y-3'>
                    <h1 className="text-4xl font-black opacity-50 max-sm:text-2xl">Kepala Madrasah</h1>
                    <h2 className="text-2xl font-bold max-sm:text-xl">{landingPage?.nama_kepala_madrasah}</h2>
                    <p className="text-xl max-sm:text-lg">Assalamualaikum Warahmatullahi Wabarakatuh</p>
                    <article className="text-xl max-sm:text-lg" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(landingPage?.pesan_kepala_madrasah) }} />
                    <p className="text-xl max-sm:text-lg">Wassalamualaikum Warahmatullahi Wabarakatuh.</p>
                </div>
            </section>
            {/* Syarat Pendaftaran */}
            <section className="py-12 px-20 max-sm:px-5 space-y-5">
                <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
                    <div className="card outline outline-black">
                        <div className="card-body">
                            <h2 className="card-title">Persyaratan Umum</h2>
                            <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(landingPage?.persyaratan_umum) }}></p>
                        </div>
                    </div>
                    <div className="card outline outline-black">
                        <div className="card-body">
                            <h2 className="card-title">Persyaratan Khusus</h2>
                            <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(landingPage?.persyaratan_khusus) }}></p>
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQ */}
            <section className="py-12 px-20 max-sm:px-5 space-y-5">
                <h1 className="text-6xl font-black capitalize max-sm:text-3xl">Frequently Asked Questions</h1>
                <div className="join join-vertical bg-base-100 w-full">
                    {faqs?.map((item, index) => (
                        <div key={index} className={`collapse collapse-arrow border border-base-300 intersect:motion-preset-blur-up-lg intersect:motion-delay-[${index * 300}ms]`}>
                            <input type="radio" name="my-accordion-2"/>
                            <div className="collapse-title font-semibold max-sm:text-lg">{item?.question}</div>
                            <div className="collapse-content text-sm max-sm:text-xs prose" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item?.answer) }}></div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

Home.layout = (page) => <HomeLayout>{page}</HomeLayout>;
export default Home;