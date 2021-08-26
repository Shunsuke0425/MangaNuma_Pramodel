import { Book } from "../types/Book";

const dummyPages: string[] = [
  "https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s1048/onepiece01_luffy.png",
  "https://1.bp.blogspot.com/-rzRcgoXDqEg/YAOTCKoCpPI/AAAAAAABdOI/5Bl3_zhOxm07TUGzW8_83cXMOT9yy1VJwCNcBGAsYHQ/s1041/onepiece02_zoro_bandana.png",
  "https://1.bp.blogspot.com/--9Rl2O4BBN0/X-Fct8K5mqI/AAAAAAABdEI/yLOziAqJO34fwn73AolVP0e42A2h-ql1QCNcBGAsYHQ/s992/onepiece06_chopper.png",
  "https://1.bp.blogspot.com/-2ut_UQv3iss/X-Fcs_0oAII/AAAAAAABdD8/jrCZTd_xK-Y6CP1KwOtT_LpEpjp-1nvxgCNcBGAsYHQ/s1055/onepiece03_nami.png",
  "https://1.bp.blogspot.com/-mZpzgXC1Sxk/YAOTCAKwWTI/AAAAAAABdOM/5B4hXli0KLU5N-BySHgjVbhZscKLSE-bQCNcBGAsYHQ/s1025/onepiece04_usopp_sogeking.png",
  "https://1.bp.blogspot.com/-JiNpsjnPn7g/X-FcuWcU37I/AAAAAAABdEQ/P5r3wBMTRegjl7njCk4zWBkdoay44-T2gCNcBGAsYHQ/s1151/onepiece07_robin.png",
  "https://1.bp.blogspot.com/-H8YBA_SpxGs/X-Fcu75hh_I/AAAAAAABdEU/WRKUa03ypYor3TwvhziHAnSEcTN4Noq0gCNcBGAsYHQ/s1148/onepiece08_franky.png",
  "https://1.bp.blogspot.com/-KZ0MJgiPJHo/X__CLeY-zVI/AAAAAAABdNM/HnFYqUe0VQEzCWCqyMggibpk4kBRtFCpQCNcBGAsYHQ/s1102/onepiece09_brook.png",
  "https://1.bp.blogspot.com/-JWY6R_ha5Uo/X-FcyyDEQyI/AAAAAAABdFI/lYwX7qMA_9wtH4-rWP-_eJT0AGHH4xERgCNcBGAsYHQ/s2048/onepiece20_santaisyou.png",
];

const comments: string[] = [
  "ワクテカが止まらない!!",
  "キター！！",
  "ウソップしか勝たん",
  "泣いた",
  "面白い(小並感)",
];

export const dummyBooks: Book[] = [
  {
    title: "ワンピース",
    author: "尾田 栄一郎",
    thumbnailImgSrc:
      "https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s1048/onepiece01_luffy.png",
    freePage: 2,
    pages: dummyPages,
    comments: comments,
  },
  {
    title: "ゾロ",
    author: "尾田 栄一郎",
    thumbnailImgSrc:
      "https://1.bp.blogspot.com/-rzRcgoXDqEg/YAOTCKoCpPI/AAAAAAABdOI/5Bl3_zhOxm07TUGzW8_83cXMOT9yy1VJwCNcBGAsYHQ/s1041/onepiece02_zoro_bandana.png",
    freePage: 2,
    pages: dummyPages,
    comments: comments,
  },
  {
    title: "チョッパー",
    author: "尾田 栄一郎",
    thumbnailImgSrc:
      "https://1.bp.blogspot.com/--9Rl2O4BBN0/X-Fct8K5mqI/AAAAAAABdEI/yLOziAqJO34fwn73AolVP0e42A2h-ql1QCNcBGAsYHQ/s992/onepiece06_chopper.png",
    freePage: 2,
    pages: dummyPages,
    comments: comments,
  },
  {
    title: "サンジ",
    author: "尾田 栄一郎",
    thumbnailImgSrc:
      "https://1.bp.blogspot.com/-HPG_x7XPky8/X-FctLTLkKI/AAAAAAABdEE/xs4T8m0FiBAFptXHGQhQ2c9ZmVWtaeQSgCNcBGAsYHQ/s1028/onepiece05_sanji.png",
    freePage: 2,
    pages: dummyPages,
    comments: comments,
  },
  {
    title: "ナミ",
    author: "尾田 栄一郎",
    thumbnailImgSrc:
      "https://1.bp.blogspot.com/-2ut_UQv3iss/X-Fcs_0oAII/AAAAAAABdD8/jrCZTd_xK-Y6CP1KwOtT_LpEpjp-1nvxgCNcBGAsYHQ/s1055/onepiece03_nami.png",
    freePage: 2,
    pages: dummyPages,
    comments: comments,
  },
  {
    title: "ウソップ",
    author: "尾田 栄一郎",
    thumbnailImgSrc:
      "https://1.bp.blogspot.com/-mZpzgXC1Sxk/YAOTCAKwWTI/AAAAAAABdOM/5B4hXli0KLU5N-BySHgjVbhZscKLSE-bQCNcBGAsYHQ/s1025/onepiece04_usopp_sogeking.png",
    freePage: 2,
    pages: dummyPages,
    comments: comments,
  },
  {
    title: "ロビン",
    author: "尾田 栄一郎",
    thumbnailImgSrc:
      "https://1.bp.blogspot.com/-JiNpsjnPn7g/X-FcuWcU37I/AAAAAAABdEQ/P5r3wBMTRegjl7njCk4zWBkdoay44-T2gCNcBGAsYHQ/s1151/onepiece07_robin.png",
    freePage: 2,
    pages: dummyPages,
    comments: comments,
  },
  {
    title: "フランキー",
    author: "尾田 栄一郎",
    thumbnailImgSrc:
      "https://1.bp.blogspot.com/-H8YBA_SpxGs/X-Fcu75hh_I/AAAAAAABdEU/WRKUa03ypYor3TwvhziHAnSEcTN4Noq0gCNcBGAsYHQ/s1148/onepiece08_franky.png",
    freePage: 2,
    pages: dummyPages,
    comments: comments,
  },
  {
    title: "ブルック",
    author: "尾田 栄一郎",
    thumbnailImgSrc:
      "https://1.bp.blogspot.com/-KZ0MJgiPJHo/X__CLeY-zVI/AAAAAAABdNM/HnFYqUe0VQEzCWCqyMggibpk4kBRtFCpQCNcBGAsYHQ/s1102/onepiece09_brook.png",
    freePage: 2,
    pages: dummyPages,
    comments: comments,
  },
  {
    title: "海軍",
    author: "尾田 栄一郎",
    thumbnailImgSrc:
      "https://1.bp.blogspot.com/-JWY6R_ha5Uo/X-FcyyDEQyI/AAAAAAABdFI/lYwX7qMA_9wtH4-rWP-_eJT0AGHH4xERgCNcBGAsYHQ/s2048/onepiece20_santaisyou.png",
    freePage: 2,
    pages: dummyPages,
    comments: comments,
  },
  {
    title: "ワンピース",
    author: "尾田 栄一郎",
    thumbnailImgSrc:
      "https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s1048/onepiece01_luffy.png",
    freePage: 2,
    pages: dummyPages,
    comments: comments,
  },
  {
    title: "ワンピース",
    author: "尾田 栄一郎",
    thumbnailImgSrc:
      "https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s1048/onepiece01_luffy.png",
    freePage: 2,
    pages: dummyPages,
    comments: comments,
  },
  {
    title: "ワンピース",
    author: "尾田 栄一郎",
    thumbnailImgSrc:
      "https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s1048/onepiece01_luffy.png",
    freePage: 2,
    pages: dummyPages,
    comments: comments,
  },
  {
    title: "ワンピース",
    author: "尾田 栄一郎",
    thumbnailImgSrc:
      "https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s1048/onepiece01_luffy.png",
    freePage: 2,
    pages: dummyPages,
    comments: comments,
  },
  {
    title: "ワンピース",
    author: "尾田 栄一郎",
    thumbnailImgSrc:
      "https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s1048/onepiece01_luffy.png",
    freePage: 2,
    pages: dummyPages,
    comments: comments,
  },
  {
    title: "ワンピース",
    author: "尾田 栄一郎",
    thumbnailImgSrc:
      "https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s1048/onepiece01_luffy.png",
    freePage: 2,
    pages: dummyPages,
    comments: comments,
  },
];
