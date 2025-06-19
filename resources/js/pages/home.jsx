import { Link } from "@inertiajs/react";
import HomeLayout from "@/layouts/home-layout";

const testimoni = [
    {
        name: 'Aisyah Nuril',
        image:'/testimoni1.png',
        message: 'Sekolah di MAN 2 Kota Probolinggo memberikan pengalaman yang luar biasa, saya sangat menyarankan sekolah ini.',
    },
    {
        name: 'Ahmad Suruji',
        image:'/testimoni2.png',
        message: 'Sekolah di MAN 2 Kota Probolinggo memberikan pengalaman yang luar biasa, saya sangat menyarankan sekolah ini.',
    },
    {
        name: 'Rocky',
        image:'/testimoni3.png',
        message: 'Sekolah di MAN 2 Kota Probolinggo memberikan pengalaman yang luar biasa, saya sangat menyarankan sekolah ini.',
    },
]

const programs = [
    {
        name: 'Peserta Didik Cerdas Istimewa',
        icon:'/logo/pdcibi.png',
        message: 'kurikulum bagi peserta didik yang memenuhi syarat untuk mempersingkat waktu peserta didik dalam proses belajar mengajar menjadi 2 tahun',
    },
    {
        name: 'Tahfidz Al-Quran',
        icon:'/logo/tahfidz.png',
        message: 'didukung dengan beberapa metode dalam menghafal Al-Quran dan guru pendamping agar memperlancar dan mempermudah siswa dalam proses pembelajaran tahfidz',
    },
    {
        name: 'MA Plus Keterampilan',
        icon:'/logo/ma_plus.png',
        message: "program multimedia, robotik, animasi, film, desain grafis, DKV, aplikasi perkantoran, RPL, TKJ, dan operator komputer. ",
    },
    {
        name: 'Program Madrasah Riset',
        icon:'/logo/research.png',
        message: 'budaya akademik berbasis riset dan menghasilkan riset yang bermanfaat untuk pengembangan ilmu pengetahuan dan teknologi.',
    },
    {
        name: 'Kelas Ilmu Bahasa dan Budaya',
        icon:'/logo/ibb.png',
        message: 'bertujuan untuk mengembangkan pemahaman dan keterampilan dalam bidang bahasa Jepang dan Arab.',
    },
    {
        name: 'Kelas Ilmu Keagamaan',
        icon:'/logo/iik.png',
        message: 'bertujuan untuk meningkatkan pemahaman, penghayatan, dan pengamalan peserta didik tentang agama',
    },
]

const principle = {
    name: 'Drs. H. Moh. Alfan Makmur, M.M',
    image: '/principle.png',
    message: "Di Madrasah Aliyah Negeri 2 Kota Probolinggo, kami percaya bahwa pendidikan adalah kunci untuk membuka masa depan yang lebih cerah. Kami bangga telah membantu banyak lulusan kami menembus perguruan tinggi favorit, baik di dalam maupun luar negeri, serta meraih prestasi yang membanggakan di berbagai bidang. <br /> <br /> Dengan pendekatan pendidikan yang menyeluruh—memadukan kecerdasan akademis dan penguatan karakter berbasis nilai-nilai Islam—kami berkomitmen untuk terus mencetak generasi yang siap menghadapi tantangan dunia global. Kami percaya bahwa setiap siswa memiliki potensi luar biasa yang perlu dibimbing dan dikembangkan. <br /> <br /> Semoga perjalanan pendidikan yang akan dihadapi putra-putri Anda di sini menjadi langkah menuju kesuksesan mereka.",
}

const faq = [
    {
        question: 'Is MAN 2 Kota Probolinggo terdaftar di Badan Pusat Data Pendidikan (BPS)?',
        answer: 'MAN 2 Kota Probolinggo terdaftar di Badan Pusat Data Pendidikan (BPS) sebagai Madrasah Aliyah Negeri 2 Kota Probolinggo.',
    },
    {
        question: 'Is MAN 2 Kota Probolinggo terdaftar di Badan Pusat Data Pendidikan (BPS)?',
        answer: 'MAN 2 Kota Probolinggo terdaftar di Badan Pusat Data Pendidikan (BPS) sebagai Madrasah Aliyah Negeri 2 Kota Probolinggo.',
    },
    {
        question: 'Is MAN 2 Kota Probolinggo terdaftar di Badan Pusat Data Pendidikan (BPS)?',
        answer: 'MAN 2 Kota Probolinggo terdaftar di Badan Pusat Data Pendidikan (BPS) sebagai Madrasah Aliyah Negeri 2 Kota Probolinggo.',
    },
    {
        question: 'Is MAN 2 Kota Probolinggo terdaftar di Badan Pusat Data Pendidikan (BPS)?',
        answer: 'MAN 2 Kota Probolinggo terdaftar di Badan Pusat Data Pendidikan (BPS) sebagai Madrasah Aliyah Negeri 2 Kota Probolinggo.',
    },
    {
        question: 'Is MAN 2 Kota Probolinggo terdaftar di Badan Pusat Data Pendidikan (BPS)?',
        answer: 'MAN 2 Kota Probolinggo terdaftar di Badan Pusat Data Pendidikan (BPS) sebagai Madrasah Aliyah Negeri 2 Kota Probolinggo.',
    },
    {
        question: 'Is MAN 2 Kota Probolinggo terdaftar di Badan Pusat Data Pendidikan (BPS)?',
        answer: 'MAN 2 Kota Probolinggo terdaftar di Badan Pusat Data Pendidikan (BPS) sebagai Madrasah Aliyah Negeri 2 Kota Probolinggo.',
    },
]

function Home() {
    return (
        <>
        {/* Header */}
        <section className="px-20">
            <h1 className="text-9xl font-black uppercase">Mari Bergabung Bersama Kami</h1>
            <p className="text-2xl font-bold opacity-50 w-1/2 my-5">Sekolah di Madrasah Aliyah Negeri 2 Kota Probolinggo, Mari menjadi insan yang bermartabat, berilmu, dan bermartabat.</p>
            <div className="flex gap-5 items-center justify-between">
                <div className='flex items-center gap-3'>
                    <Link href="/register"><button className="bg-emerald-600 cursor-pointer font-semibold text-white px-7 py-4 rounded-full border">Daftar Sekarang</button></Link>
                    <Link href="/login"><button className="bg-white cursor-pointer font-semibold px-10 py-4 rounded-full border">Masuk</button></Link>
                </div>
                <div>
                    <h1 className="text-4xl font-black">1000+</h1>
                    <p className="text-xl font-semibold text-muted-foreground">Orang yang sudah terdaftar</p>
                </div>
                <div>
                    <h1 className="text-4xl font-black">234</h1>
                    <p className="text-xl font-semibold text-muted-foreground">Siswa berprestasi</p>
                </div>
            </div>
        </section>
            {/* Photo Grid */}
            <section className="my-12 px-20">
                {/* Left */}
                <div className=' grid grid-cols-2 gap-2'>
                    <div className='relative overflow-hidden aspect-video rounded-xl border border-sidebar-border/70 dark:border-sidebar-border'>
                        <img src="https://man2kotaprobolinggo.sch.id/wp-content/uploads/2024/11/IMG_20241123_201600.jpg" alt="PPDB" className='object-cover w-full h-full blur-[1px] object-center' />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute inset-0 flex text-white flex-col p-5 uppercase font-bold text-4xl">
                            <h1>PPDB Gelombang 2</h1>
                            <p>1 Februari - 15 Februari 2025</p>
                        </div>
                        <div className="absolute inset-0 flex top-auto bottom-0 text-white flex-col p-5 font-bold text-3xl">
                            <p>Penerimaan Peserta Didik Baru (PPDB) MAN 2 Kota Probolinggo Tahun Ajaran 2025/2026</p>
                        </div>
                    </div>
                    {/* Right */}
                    <div className='grid grid-rows-2 gap-2'>
                        <div className='w-full overflow-hidden rounded-xl bg-emerald-600'>
                            <div className='grid grid-cols-3 overflow-hidden items-center p-5'>
                                <div className='text-white space-y-3 col-span-2'>
                                    <p className="text-lg">{testimoni[0].message}</p>
                                    <p className="text-lg italic">~ {testimoni[0].name}</p>
                                </div>
                                <img src={testimoni[0].image} alt="testimoni" className='object-cover h-32 w-full object-top mx-auto' />
                            </div>
                        </div>
                        {/* Right Bottom */}
                        <div className='flex gap-2'>
                            <img src="https://man2kotaprobolinggo.sch.id/wp-content/uploads/2024/10/IMG_8493_11zon-1.jpg" alt="ppdb" className='w-full aspect-video object-cover rounded-xl' />
                            <img src="https://man2kotaprobolinggo.sch.id/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-29-at-08.21.05.jpeg" alt="ppdb" className='w-full aspect-video object-cover object-center rounded-xl' />
                        </div>
                    </div>
                </div>
            </section>
            {/* Program Unggulan */}
            <section className="py-12 px-20 bg-emerald-700 space-y-5">
                <h1 className="text-5xl text-white text-center font-black capitalize">Program Unggulan</h1>
                <p className="text-white text-center w-1/2 mx-auto">Bergabung di program unggulan MAN 2 Kota Probolinggo, setiap siswa akan mendapatkan pengalaman yang luar biasa.</p>
                <div className="grid grid-cols-3 gap-4 justify-center">
                    {programs.map((program, index) => (
                        <div key={index} className='bg-emerald-600 rounded-lg p-10 space-y-2'>
                            <img src={program.icon} className='w-1/4 mx-auto' alt={program.name} />
                            <h1 className="text-xl font-bold text-white text-center">{program.name}</h1>
                            <p className="text-white text-center">{program.message}</p>
                        </div>
                    ))}
                </div>
            </section>
            {/* Sambutan Kepala Madrasah */}
            <section className='grid grid-cols-3 items-center gap-10 px-20 my-10 '>
                <img src={principle.image} alt="principle-photo" className='w-full object-cover object-center rounded-xl' />
                <div className=' col-span-2 space-y-3'>
                    <h1 className="text-4xl font-black opacity-50">Kepala Madrasah</h1>
                    <h2 className="text-2xl font-bold">{principle.name}</h2>
                    <p className="text-xl">Assalamualaikum Warahmatullahi Wabarakatuh</p>
                    <article className="text-xl" dangerouslySetInnerHTML={{ __html: principle.message }} />
                    <p className="text-xl">Wassalamualaikum Warahmatullahi Wabarakatuh.</p>
                </div>
            </section>
            {/* FAQ */}
            <section className="py-12 px-20 space-y-5">
                <h1 className="text-6xl font-black capitalize">Frequently Asked Questions</h1>
                <div className="join join-vertical bg-base-100 w-full">
                    {faq.map((item, index) => (
                        <div key={index} className="collapse collapse-arrow border border-base-300">
                            <input type="radio" name="my-accordion-2"/>
                            <div className="collapse-title font-semibold">{item.question}</div>
                            <div className="collapse-content text-sm">{item.answer}</div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

Home.layout = (page) => <HomeLayout>{page}</HomeLayout>;
export default Home;