# Guide PO — Setup Sanity (Étape 0 v2)

> Document **temporaire**. À supprimer une fois l'Étape 0 v2 validée.
> Il liste, dans l'ordre, **tout ce que tu (le PO) dois faire à la main** pendant cette session.
> Claude Code s'occupe de tout le code. Toi, tu fais uniquement les actions ci-dessous, quand
> Claude Code te le demande.

**Rappel de sécurité — vrai pour toute la session :**
- Ne **colle jamais** un token (Sanity, Vercel, GitHub…) dans le chat.
- Les tokens vivent **uniquement** dans ton gestionnaire de mots de passe et dans `.env.local`
  (fichier local, jamais envoyé sur GitHub).

---

## Vue d'ensemble — l'ordre des choses

| # | Quand | Qui | Action |
|---|---|---|---|
| 1 | Avant de démarrer | PO | Sortir le token Sanity du fichier `.env.example` (le mettre au coffre) |
| 2 | Avant de démarrer | PO | Générer un « secret de revalidation » |
| 3 | BLOC A | Claude Code | Installer les paquets Sanity (aucune action PO) |
| 4 | BLOC B | Claude Code | Créer le Sanity Studio sur `/studio` (aucune action PO) |
| 5 | BLOC C | PO | Compléter 1 valeur dans `.env.local` |
| 6 | BLOC C | PO | Ajouter 4 variables d'environnement sur Vercel |
| 7 | BLOC D | PO | Configurer le CORS sur sanity.io |
| 8 | BLOC D | PO | Vérifier `/studio` et `/debug-sanity` dans le navigateur |
| 9 | Après | PO | (plus tard) Repasser le projet Sanity en plan gratuit |

---

## Étape 1 — Sortir le token Sanity du fichier `.env.example` ✅ FAIT

Le token `sk…` a été mis au coffre par le PO, et Claude Code a réécrit `.env.example`
proprement (plus aucune valeur secrète — vérifié).

**Recommandation (non obligatoire, à ton rythme) :** ce token write a traîné en clair. L'idéal
serait, plus tard, de le **révoquer** sur `sanity.io/manage` → onglet **API → Tokens** → poubelle,
puis d'en recréer deux si besoin : un **Viewer** (lecture seule) et un **Editor** (écriture).

> Rappel : les tokens `GITHUB_TOKEN` / `VERCEL_TOKEN` doivent rester **hors du dossier `connect-web/`**
> (ils vivent dans `Connect Agency/.env`, non versionné). Ne jamais les remettre dans `.env.example`.

---

## Étape 2 — Générer le « secret de revalidation »

**Contexte :** c'est une longue chaîne aléatoire qui servira (à l'Étape 3) à sécuriser le webhook
Sanity → site. On la génère maintenant pour ne pas y revenir.

**Ce que tu fais — choisis UNE méthode :**

- **Si tu as Git Bash / un terminal Mac ou Linux :**
  ```
  openssl rand -hex 32
  ```
- **Sinon, avec Node (tu l'as déjà) :**
  ```
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```

Tu obtiens une ligne de 64 caractères hexadécimaux. **Copie-la dans ton gestionnaire de mots de
passe** (entrée « Sanity — Connect Web — SANITY_REVALIDATE_SECRET »).
**Ne la colle pas dans le chat.**

---

## Étape 3 & 4 — (Claude Code travaille, rien à faire)

Claude Code installe les paquets, crée le Studio et les fichiers de connexion.
Il te préviendra quand il aura besoin de toi.

---

## Étape 5 — Compléter `.env.local` ✅ FAIT

Claude Code a créé `connect-web/.env.local` (jamais versionné) avec les 4 variables et y a
reporté le secret de revalidation que le PO avait généré. `SANITY_API_READ_TOKEN` reste vide
(rempli à l'Étape 3).

> **Règle importante pour la suite :** toute valeur réelle / secrète va **uniquement** dans
> `.env.local`. Ne jamais l'écrire dans `.env.example` (fichier public, versionné).

> ⚠️ Le secret de revalidation a transité par `.env.example` : c'est un aléa sans gravité (il ne
> sert qu'au webhook `/api/revalidate` qui n'existe pas encore). On pourra le régénérer
> proprement à l'Étape 3.

---

## Étape 6 — Ajouter les variables d'environnement sur Vercel

**Contexte :** le site est hébergé sur Vercel. Pour que la connexion Sanity marche aussi en ligne
(pas seulement sur ton ordi), il faut y recopier les mêmes variables.

**Ce que tu fais :**
1. Va sur **vercel.com** → connecte-toi → ouvre le projet **connectweb-refonte** (ou le nom exact
   de ton projet Connect Web).
2. Onglet **Settings** (en haut) → menu de gauche **Environment Variables**.
3. Ajoute **une par une** les 4 variables suivantes. Pour chacune :
   - **Key** = le nom exact (colonne de gauche ci-dessous)
   - **Value** = la valeur
   - **Environments** : coche **les 3** cases → **Production**, **Preview**, **Development**
   - clique **Save**

   | Key | Value |
   |---|---|
   | `NEXT_PUBLIC_SANITY_PROJECT_ID` | `qt5dnwqm` |
   | `NEXT_PUBLIC_SANITY_DATASET` | `production` |
   | `SANITY_REVALIDATE_SECRET` | ta chaîne de 64 caractères (Étape 2) |
   | `SANITY_API_READ_TOKEN` | *(laisse vide pour l'instant — tu peux même ne pas créer la variable maintenant, ou la créer avec une valeur vide)* |

4. Quand les 3 premières sont enregistrées, dis à Claude Code : **« variables Vercel ajoutées »**.

**Comment vérifier :** la page **Environment Variables** liste bien `NEXT_PUBLIC_SANITY_PROJECT_ID`,
`NEXT_PUBLIC_SANITY_DATASET`, `SANITY_REVALIDATE_SECRET`, chacune marquée « Production, Preview,
Development ».

> ⚠️ Les nouvelles variables ne s'appliquent qu'**au prochain déploiement**. On ne redéploie pas
> maintenant (le PO validera d'abord en local). C'est normal.

---

## Étape 7 — Configurer le CORS sur sanity.io

**Contexte :** par défaut, Sanity refuse les requêtes venant d'un site web non déclaré. Il faut
autoriser les adresses de ton site.

**Ce que tu fais :**
1. Va sur **sanity.io/manage** → connecte-toi → ouvre le projet **Connect Web** (ID `qt5dnwqm`).
2. Onglet **API** (menu du haut) → section **CORS origins**.
3. Clique **Add CORS origin** et ajoute **une par une** ces adresses (bouton Add à chaque fois) :
   - `http://localhost:3000`
   - `https://connectweb-refonte.vercel.app`
   - `https://connect-web.tech`
   - *(optionnel)* `https://*.vercel.app` — pratique pour les previews de branches
4. Pour chacune : **ne coche PAS** « Allow credentials » (on n'en a pas besoin pour l'instant).
5. Dis à Claude Code : **« CORS configuré »**.

**Comment vérifier :** la liste **CORS origins** affiche au moins les 3 adresses.

---

## Étape 8 — Vérifier dans le navigateur

Claude Code te dira quand lancer le serveur local. La commande sera :
```
cd connect-web
npm run dev
```
Puis, dans ton navigateur :

1. **http://localhost:3000/studio**
   - Une page de connexion Sanity apparaît → connecte-toi avec ton compte Sanity.
   - Tu vois ensuite l'interface du Studio (menus à gauche), avec un message du genre
     **« No schema types found »** ou **« Empty schema »**. **C'est normal** — les schémas de
     contenu (Blog, Ressources) seront créés à l'Étape 2.

2. **http://localhost:3000/debug-sanity**
   - Une page blanche avec du texte brut (du JSON). Tu dois voir :
     - `projectId: "qt5dnwqm"`
     - `dataset: "production"`
     - un `result` qui est une liste (vide `[]` si tu n'as jamais rien uploadé, sinon quelques
       images).
   - **Ouvre la console du navigateur** (F12 → onglet Console) : il ne doit y avoir **aucune
     erreur rouge mentionnant « CORS »**.

3. Dis à Claude Code ce que tu vois (ou colle le texte / une capture texte s'il y a un souci).

> Cette page `/debug-sanity` est **temporaire** : Claude Code la supprimera à la fin de l'Étape 0.

---

## Étape 9 — (Plus tard) Repasser Sanity en plan gratuit

Ton projet Sanity est probablement en **Growth Trial** (essai de 30 jours). Avant la fin de
l'essai, va sur **sanity.io/manage** → projet Connect Web → **Plan / Billing** → repasse en
**Free**. Le plan Free suffit largement pour ce site (blog + ressources).
Ce n'est pas urgent — juste à ne pas oublier.

---

## Récap des URLs utiles

| Quoi | URL |
|---|---|
| Sanity Studio (local) | http://localhost:3000/studio |
| Sanity Studio (en ligne, après déploiement) | https://connect-web.tech/studio |
| Page de test connexion (temporaire) | http://localhost:3000/debug-sanity |
| Dashboard projet Sanity | https://sanity.io/manage (projet `qt5dnwqm`) |
| Dashboard Vercel | https://vercel.com → projet connectweb-refonte |
