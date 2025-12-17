# Enigma Box - Landing Page

Benvenuto nel repository di **Enigma Box**, una moderna landing page sviluppata con React e TypeScript progettata per presentare un prodotto regalo esperienziale unico.

## 📝 Descrizione

Enigma Box è un'applicazione web che funge da vetrina per un prodotto concettuale: una scatola regalo "enigmatica" che permette di racchiudere un messaggio personalizzato (video, audio o testo) accessibile dal destinatario tramite la scansione di un QR code.

L'interfaccia utente è curata nei minimi dettagli, seguendo un'estetica minimalista e sofisticata (toni crema/beige), focalizzata sull'eleganza e sull'emozione, con un supporto nativo e fluido per la modalità scura (Dark Mode).

## ✨ Funzionalità Principali

*   **Design Responsivo:** Layout fluido che si adatta perfettamente da desktop a dispositivi mobile, con menu di navigazione ottimizzati.
*   **Gestione Temi (Dark/Light):** Sistema di temi integrato tramite `ThemeContext` che rispetta le preferenze di sistema e salva la scelta dell'utente nel LocalStorage.
*   **Animazioni Custom:** Utilizzo di animazioni CSS (`animate-fade-in-up`) per un ingresso graduale ed elegante dei contenuti.
*   **Componenti Modulari:** Architettura React pulita con componenti riutilizzabili (es. `Button`, `EmotionsGrid`, `HowItWorks`).
*   **Navigazione Dinamica:** Navbar che cambia aspetto durante lo scorrimento della pagina (effetto *glassmorphism*).

## 🛠️ Stack Tecnologico

*   **Core:** React 18
*   **Linguaggio:** TypeScript
*   **Build Tool:** Vite
*   **Stiling:** Tailwind CSS (con configurazione personalizzata per font e colori)
*   **Icone:** Lucide React
*   **Utility:** clsx, tailwind-merge

## 🚀 Installazione e Avvio

1.  **Installa le dipendenze:**
    ```bash
    npm install
    ```

2.  **Avvia il server di sviluppo:**
    ```bash
    npm run dev
    ```

3.  **Compila per la produzione:**
    ```bash
    npm run build
    ```

## 📂 Struttura del Progetto

*   `components/`: Contiene i blocchi costruttivi dell'UI (Navbar, Hero, Footer, Button, ecc.).
*   `context/`: Gestione dello stato globale (ThemeContext).
*   `pages/`: Pagine principali dell'applicazione (Home).
*   `types.ts`: Definizioni dei tipi TypeScript (interfacce per dati e props).
*   `constants.tsx`: Dati statici centralizzati (link di navigazione, testi, configurazioni step).
*   `index.tsx`: Entry point dell'applicazione.

---

**Enigma Box** - *Regala un'emozione.*
