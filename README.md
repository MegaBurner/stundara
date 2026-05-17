# Stundara — Webshop (Praxisbeispiel TU Wien 280.A69)

Statischer Webshop für eine fiktive Zeiterfassungs-Software, eingereicht als Praxisbeispiel zur LVA **280.A69 Daten- und Informatikrecht (SS 2026)**.

## Projekt

- **Produkt:** Stundara — Zeiterfassung für Freelancer
- **Geschäftsmodell:** Freemium + Pro-Abo (€ 9 / Monat oder € 90 / Jahr)
- **Unternehmen:** Stundara e. U., Wien (fiktiv)
- **Sprache:** Deutsch (de-AT)
- **Technik:** Statisches HTML5 + CSS Custom Properties, minimales JavaScript

## Aufgaben aus der LVA

| Aufgabe | Thema | Datei(en) |
| --- | --- | --- |
| 0 | Vorbereitung (Produkt, Unternehmen, GM) | `README.md`, `index.html` |
| 1 | Barrierefreiheit (WCAG 2.2 AA) | gesamtes Markup + `accessibility.html` |
| 2 | Urheberrecht (Lizenzen Medien) | `credits.html` + `/licenses/` |
| 3 | Marke (3 Markenformen) | `about.html` |
| 4 | Lizenz + Haftung | `license.html` |
| 5 | Datenschutz | `privacy.html` |
| 6 | Gewerbe / Impressum + Kontakt | `imprint.html`, `contact.html` |

## Lokal ausführen

```bash
# einfacher HTTP-Server (Python 3)
python -m http.server 8080
# dann http://localhost:8080 öffnen
```

## Verzeichnis

```
stundara/
├── index.html           Landing / Startseite
├── about.html           Aufgabe 3 — Marke + About-Us
├── pricing.html         Free vs Pro
├── checkout.html        Mock-Checkout
├── credits.html         Aufgabe 2 — Urheberrechtshinweise
├── license.html         Aufgabe 4 — Lizenz + Haftung
├── privacy.html         Aufgabe 5 — Datenschutzerklärung
├── accessibility.html   Aufgabe 1 — Barrierefreiheitserklärung
├── imprint.html         Aufgabe 6 — Impressum + Offenlegung
├── contact.html         Aufgabe 6 — Kontakt + Formular
├── assets/
│   ├── css/             Stylesheets (Design-System + Komponenten)
│   ├── js/              kleine JS-Module (Mobile-Menu, Cookie-Banner)
│   └── img/             Bilder + SVG-Logo
└── licenses/            Lizenztexte (OFL, ISC)
```

## Quellen & Medien

Alle verwendeten Medien sind in `credits.html` aufgelistet (Autor, Quelle, Lizenz, Änderungen). Drittlizenztexte liegen in `/licenses/`.

## Eigenständigkeit

Diese Arbeit wurde im Rahmen der LVA selbst erstellt. KI-Assistenz wurde zum Strukturieren des Plans und zum Brainstormen einzelner Formulierungen genutzt; die finalen Inhalte und der Code wurden geprüft und an das Projekt angepasst. Die Git-Historie dieses Repos dokumentiert den Bearbeitungsverlauf.

## Status

In Bearbeitung — Abgabefrist 17.05.2026.
