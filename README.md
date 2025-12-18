
# Enigma Box - Landing Page

Benvenuto nel repository di **Enigma Box**, una moderna landing page sviluppata con React e TypeScript progettata per presentare un prodotto regalo esperienziale unico.

## 📝 Descrizione
Enigma Box è un'applicazione web che funge da vetrina per un prodotto concettuale: una scatola regalo "enigmatica" che permette di racchiudere un messaggio personalizzato (video, audio o testo) accessibile tramite QR code.

L'interfaccia utente segue un'estetica minimalista e sofisticata (toni crema/beige), focalizzata sull'eleganza, con un supporto nativo per la modalità scura (Dark Mode).

## 🚀 Distribuzione su GitHub Pages (IMPORTANTE)
Per garantire che il sito funzioni correttamente su GitHub Pages (che solitamente ospita i siti in sottocartelle come `/nome-repo/`), è fondamentale configurare il file `.github/workflows/deploy.yml`.

Assicurati che nel file di deploy sia presente la variabile d'ambiente corretta per il build:
```yaml
env:
  BASE_URL: /IL_NOME_DEL_TUO_REPO/
```
Questo valore verrà iniettato in `vite.config.ts` e gestirà automaticamente tutti i percorsi degli asset e della navigazione.

## 🛠️ Stack Tecnologico
- **Core:** React 18
- **Framework:** Vike (per SSR/SSG opzionale)
- **Routing:** React Router (Hybrid: HashRouter per ambienti AI/Anteprima, PathRouter per Production)
- **Stiling:** Tailwind CSS
- **Icone:** Lucide React

## 📂 Funzionamento Ibrido
L'applicazione rileva automaticamente l'ambiente:
- Se il `BASE_URL` è la root (`/`), attiva i link basati su **Hash** (`#/faq`). Questo permette al sito di funzionare perfettamente dentro gli iframe di Google AI Studio o Visual Studio AI senza causare errori 404 sul dominio ospitante.
- Se viene specificato un `BASE_URL`, utilizza i path reali per una SEO ottimale.

---
**Enigma Box** - *Racchiudi un'emozione.*
