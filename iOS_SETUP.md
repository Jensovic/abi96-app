# iOS Setup für ABI 96 Nachtreffen App

## 📱 Voraussetzungen

### Systemanforderungen
- **macOS** (iOS-Entwicklung ist nur auf Mac möglich)
- **Xcode** (neueste Version aus dem App Store)
- **CocoaPods** für Dependency Management
- **Apple Developer Account** (für App Store Deployment)

### Installation der Entwicklungstools

1. **Xcode installieren**
   ```bash
   # Aus dem Mac App Store oder
   xcode-select --install
   ```

2. **CocoaPods installieren**
   ```bash
   sudo gem install cocoapods
   ```

3. **iOS Simulator einrichten**
   - Xcode öffnen
   - Preferences → Components → iOS Simulators herunterladen

## 🚀 iOS-Entwicklung

### App im iOS Simulator starten
```bash
# 1. Build erstellen
npm run build

# 2. iOS synchronisieren
ionic capacitor sync ios

# 3. Xcode öffnen
ionic capacitor open ios
```

### In Xcode
1. **Projekt konfigurieren**
   - Bundle Identifier: `com.abi96.nachtreffen`
   - Display Name: `ABI 96 Nachtreffen`
   - Version: 1.0.0

2. **Simulator auswählen**
   - iPhone 15 Pro (empfohlen)
   - iPad Pro (für Tablet-Test)

3. **App starten**
   - ▶️ Play Button drücken
   - App wird im Simulator gestartet

## 📋 iOS-spezifische Features

### Berechtigungen
- **Kamera**: Für Foto-Upload beim Nachtreffen
- **Fotobibliothek**: Zum Teilen von Erinnerungsfotos
- **Benachrichtigungen**: Für Event-Updates (geplant)

### Design-Anpassungen
- **Status Bar**: Light Content (weiße Icons)
- **Background Color**: Nostalgic Blue (#2E86AB)
- **Launch Screen**: ABI 96 Branding
- **App Icon**: Wird noch erstellt

### Lokalisierung
- **Deutsch**: Hauptsprache
- **Englisch**: Fallback

## 🔧 Troubleshooting

### Häufige Probleme

1. **"Command not found: ionic"**
   ```bash
   npm install -g @ionic/cli
   ```

2. **CocoaPods Fehler**
   ```bash
   cd ios/App
   pod install --repo-update
   ```

3. **Xcode Build Fehler**
   - Clean Build Folder: Cmd+Shift+K
   - Derived Data löschen
   - Simulator Reset

### Performance-Optimierung
- **WKWebView**: Automatisch von Capacitor verwendet
- **Native Navigation**: Für bessere Performance
- **Lazy Loading**: Für große Bildergalerien

## 📦 App Store Deployment

### Vorbereitung
1. **Apple Developer Account** ($99/Jahr)
2. **App Store Connect** Eintrag erstellen
3. **Provisioning Profiles** einrichten
4. **App Icons** in allen Größen (120x120, 180x180, etc.)
5. **Screenshots** für App Store

### Build für App Store
```bash
# Production Build
npm run build

# iOS Archive erstellen
ionic capacitor build ios --prod

# In Xcode: Product → Archive
# Dann: Distribute App → App Store Connect
```

## 🎯 Nächste Schritte

- [ ] App Icon Design erstellen
- [ ] Launch Screen anpassen
- [ ] Push Notifications einrichten
- [ ] TestFlight Beta Testing
- [ ] App Store Submission

## 📞 Support

Bei Problemen mit der iOS-Entwicklung:
- [Ionic iOS Documentation](https://ionicframework.com/docs/developing/ios)
- [Capacitor iOS Guide](https://capacitorjs.com/docs/ios)
- [Apple Developer Documentation](https://developer.apple.com/documentation/)
