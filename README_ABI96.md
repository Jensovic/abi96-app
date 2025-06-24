# ABI 96 Nachtreffen App - 30 Jahre später! 🎓

Eine moderne Cross-Platform-App für unser 30-jähriges Abitreffen, entwickelt mit Ionic React.

## 🎉 Features

### 📅 Nachtreffen
- Details zu unserem Treffen im Juni 2026
- Event-Informationen und Anmeldungen
- Countdown bis zum großen Tag
- RSVP-Funktionalität

### 📸 Fotos
- Bildergalerie aus vergangenen Tagen
- Kategorien: Abitur 1996, Schulzeit, Schulfeste
- "Wie wir heute sind" - aktuelle Fotos
- Upload-Funktion für neue Bilder

### 📖 Stories
- Geschichten aus der Schulzeit
- Lustige, peinliche und schöne Erinnerungen
- Kommentar- und Like-Funktion
- Neue Stories hinzufügen

### 👤 Profil
- Persönliche Daten vervollständigen
- "Damals & Heute" - Was ist aus uns geworden?
- App-Einstellungen
- Privatsphäre-Optionen

## 🛠️ Technologie-Stack

- **Framework**: Ionic React
- **UI Components**: Ionic Components
- **Styling**: CSS Custom Properties
- **Build Tool**: Vite
- **Testing**: Vitest
- **Mobile**: Capacitor

## 🎨 Design

Die App verwendet ein nostalgisches, 90er-Jahre inspiriertes Design mit:
- **Primärfarbe**: Nostalgic Blue (#2E86AB) - erinnert an die 90er
- **Sekundärfarbe**: Reunion Gold (#F18F01) - für besondere Momente
- **Tertiärfarbe**: Memory Purple (#A663CC) - 90er Nostalgie
- **Erfolgsfarbe**: Bright Green (#10DC60)
- **Warnfarbe**: Academic Orange (#FFB347)

## 📱 Entwicklung

### Voraussetzungen
- Node.js (v16+)
- npm oder yarn
- Ionic CLI

### Installation
```bash
cd abi96-app
npm install
```

### Entwicklungsserver starten
```bash
npm run dev
# oder
ionic serve
```

### Tests ausführen
```bash
npm run test.unit
```

### Build für Produktion
```bash
npm run build
```

## 📱 Mobile Deployment

### Android
```bash
# Android-Plattform ist bereits hinzugefügt
ionic capacitor build android
ionic capacitor open android
```

### iOS
```bash
# iOS-Plattform ist bereits hinzugefügt
ionic capacitor build ios
ionic capacitor open ios
```

**Hinweis für iOS-Entwicklung:**
- Xcode ist erforderlich (nur auf macOS verfügbar)
- Apple Developer Account für App Store Deployment
- CocoaPods sollte installiert sein: `sudo gem install cocoapods`

### iOS-spezifische Features
- **App-Name**: "ABI 96 Nachtreffen"
- **Bundle ID**: com.abi96.nachtreffen
- **Kamera-Berechtigung**: Für Foto-Upload
- **Fotobibliothek-Zugriff**: Zum Teilen von Bildern
- **Deutsche Lokalisierung**: Unterstützt
- **Status Bar**: Light Content Style

## 🔧 Weitere Entwicklung

### Geplante Features
- [ ] Event-Kalender Integration
- [ ] Push-Benachrichtigungen für Treffen
- [ ] Offline-Funktionalität
- [ ] Cloud-Synchronisation der Fotos
- [ ] Benutzer-Authentifizierung
- [ ] Erweiterte Foto-Galerie
- [ ] Story-Kommentare und Reaktionen
- [ ] Kontaktdaten-Export
- [ ] Erinnerungen an vergangene Treffen
- [ ] Umfragen für Treffen-Planung

### Verbesserungen
- [ ] Performance-Optimierung
- [ ] Accessibility-Features
- [ ] Dark Mode
- [ ] Mehrsprachigkeit
- [ ] Tablet-Optimierung

## 📄 Lizenz

Dieses Projekt ist für Bildungszwecke erstellt.

## 🤝 Beitragen

Contributions sind willkommen! Bitte erstellen Sie einen Pull Request oder öffnen Sie ein Issue.
