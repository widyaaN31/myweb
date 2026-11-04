# Website Profil Widya (PT HAUNG INTERNATIONAL)

Website statis (HTML + CSS + JS), tanpa build, tanpa database. Semua data fiktif.

## Struktur
```
Deploy/
├── index.html
├── 404.html
├── robots.txt
├── .nojekyll
├── css/style.css
├── js/main.js
└── assets/ (foto.webp, favicon.svg)
```

## Cara deploy
**GitHub Pages**: buat repo, unggah isi folder Deploy (bukan folder-nya) ke branch `main`, lalu Settings > Pages > Deploy from branch > `main` / root.

**Hostinger / IDwebhost / cPanel**: buka File Manager > `public_html`, unggah (atau upload ZIP lalu Extract) semua isi folder Deploy sehingga `index.html` berada langsung di `public_html`.

**Netlify / Cloudflare Pages / Vercel**: drag & drop folder Deploy.

## Yang perlu diganti sebelum publik
Nama, email, nomor telepon, statistik, riwayat karier, dan testimoni adalah data fiktif. Edit di `index.html`.
