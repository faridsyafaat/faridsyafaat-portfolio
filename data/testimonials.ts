export interface Testimonial {
  id: number
  logo: string
  company: string
  review: string
  author: string
  position: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    logo: "/images/jazuli.png",
    company: "Jazuli",
    review:
      "Penggunaan aplikasi SIGAP (Sistem Informasi Gerakan Anak Positif) dapat memberikan dampak nyata dalam proses pembentukan karakter siswa di sekolah. Melalui SIGAP, pemantauan penerapan 7 Kebiasaan Anak Indonesia Hebat menjadi jauh lebih terstruktur, terukur, dan berkesinambungan",
    author: "Jazuli, S.Pd",
    position: "Wakasek Kurikulum, SMPN 1 Sobang",
  },
  {
    id: 2,
    logo: "/images/rumli.png",
    company: "Rumli",
    review:
      "Aplikasi SIGAP dapat mempermudah proses evaluasi pembentukkan karakter siswa. Guru dan wali kelas juga dapat memantau grafik capaian bulanan, memberikan bimbingan serta dapat melakukan validasi laporan harian dengan cepat dan tepat.",
    author: "Rumli Lugis, S.Si ",
    position: "Wakasek Kesiswaan, SMPN 1 Sobang",
  },
  {
    id: 3,
    logo: "/images/fahri.png",
    company: "Fahri",
    review:
      "Aplikasi SIGAP sangat bermanfaat untuk pembentukan karakter dan kebiasaan positif siswa. Dengan adanya pengawasan dari guru dan orangtua, diharapkan bisa menciptakan situasi sekolah yang terarah dan mendukung perkembangan siswa.",
    author: "Fahrizal Khalifatullah, S.Pd",
    position: "Guru BK, SMPN 1 Sobang",
  },
]
