# Aplikasi Cuaca Petaling Jaya 🌦️

Aplikasi cuaca real-time PWA dengan data live dari IQAir untuk Petaling Jaya dan sekitarnya.

## Fitur ✨

- 📱 **Mobile-First PWA** - Installable seperti app native
- 🌐 **Offline Support** - Berfungsi tanpa internet
- 📍 **Geolocation** - Auto-detect lokasi anda (seluruh Malaysia)
- 🌡️ **Real-Time Data** - Data cuaca & IPU sebenar dari Open-Meteo
- 😊 **Mascot Avatar** - Wajah dinamik ikut tahap PM2.5 (Baik/Sederhana/USG/Tidak Sihat)
- 🏃 **Syor Aktiviti** - "Boleh Saya Keluar?" - cadangan aktiviti luar & pengudaraan rumah
- 📈 **Trend PM2.5** - Carta ramalan 24 jam akan datang (Chart.js)
- 🔔 **Amaran Bahaya** - Notifikasi & banner automatik bila PM2.5 > 35 µg/m³
- 🌙 **Dark Mode** - Toggle tema terang/gelap
- 📊 **Responsive** - Selesa di semua saiz skrin mobile

## Deployment ke Vercel 🚀

### Langkah 1: Setup GitHub Repository

```bash
# Clone atau create repo
git init
git add .
git commit -m "Initial commit: Cuaca PJ PWA"
git branch -M main
git remote add origin https://github.com/your-username/cuaca-pj-app.git
git push -u origin main
```

### Langkah 2: Connect ke Vercel

1. Pergi ke [vercel.com](https://vercel.com)
2. Login dengan GitHub account
3. Klik "New Project"
4. Select repository "cuaca-pj-app"
5. Vercel akan auto-detect settings
6. Klik "Deploy"

### Langkah 3: Custom Domain (Optional)

1. Di Vercel dashboard
2. Pergi ke "Settings" → "Domains"
3. Add custom domain atau gunakan default `cuaca-pj.vercel.app`

## File Structure 📁

```
cuaca-pj-app/
├── index.html              # Main PWA page
├── manifest.json           # Web app manifest
├── service-worker.js       # Service worker untuk offline
├── vercel.json            # Vercel configuration
├── package.json           # Project metadata
├── README.md              # Dokumentasi ini
└── icons/
    ├── icon-192x192.png
    ├── icon-512x512.png
    ├── icon-maskable-192x192.png
    ├── icon-maskable-512x512.png
    ├── screenshot-1.png
    └── screenshot-2.png
```

## Cara Menggunakan 📲

### Install di Mobile

1. Buka app di Chrome/Edge mobile
2. Tap "Install" atau "Add to Home Screen"
3. Confirm - app akan install seperti native app

### Install di Desktop

1. Buka di Chrome
2. Tap icon install di address bar (atas kanan)
3. Confirm installation

### Guna App

1. **Tap header** untuk dapatkan lokasi anda
2. App akan fetch data IQAir/WAQI untuk lokasi tersebut
3. Geser untuk refresh atau toggle dark mode

## API Integration 🔌

App menggunakan:
- **Open-Meteo API** - Data cuaca sebenar (suhu, keadaan cuaca, kelembapan, angin, pandangan & ramalan)
- **Open-Meteo Air Quality API** - Data IPU/Pencemaran Udara (US AQI) ikut koordinat sebenar, percuma & tanpa token
- **OpenStreetMap Nominatim** - Reverse geocoding untuk alamat lokasi

## Development Lokal 💻

```bash
# Install dependencies (optional)
npm install

# Run local server
npm run dev

# Buka di browser
# http://localhost:8000
```

## PWA Features 🎯

✅ **Installable** - Add to home screen
✅ **Offline Support** - Works tanpa internet (cached data)
✅ **Responsive** - Mobile-first design
✅ **Manifest** - App configuration
✅ **Service Worker** - Background sync & caching
✅ **Icons** - Multiple sizes & maskable icons
✅ **Dark Mode** - Light & dark theme

## Browser Support 🌐

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 15+ (limited PWA support)
- ✅ Mobile browsers (Chrome, Edge, Firefox)

## Troubleshooting 🔧

### App tak install?
- Pastikan guna HTTPS (Vercel auto-HTTPS)
- Check manifest.json di DevTools
- Clear browser cache

### Data tak load?
- Check internet connection
- API mungkin rate-limited, tunggu beberapa minit
- Verify lokasi permission diberi

### Dark mode tak work?
- Refresh page
- Check localStorage (DevTools → Application)

## Environment Variables 📌

Tak perlu env variables! Tapi kalau nak guna IQAir Premium API:

```env
# Dalam future versions
VITE_IQAIR_API_KEY=your_api_key
```

## License 📜

MIT License - Guna bebas untuk personal & commercial

## Support & Feedback 💬

Issue atau suggestion? Buat GitHub issue atau contact author.

---

**Happy Weather Tracking!** 🌦️☀️🌧️

Updated: September 2026
