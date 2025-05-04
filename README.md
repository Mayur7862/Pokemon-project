# 🧪 Pokedex Full-Stack App

A full-stack Pokémon application built using **Next.js (App Router)**, **TypeScript**, **tRPC**, **Prisma + SQL**, **Material UI**, and **React Query**.  
This is a 3-part assignment that demonstrates database integration, tRPC API handling, and UI rendering with filters.

---

## ⚙️ Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI Library:** Material UI
- **ORM:** Prisma
- **Database:** SQL (Planetscale-ready)
- **API Layer:** tRPC
- **Data Fetching:** React Query

---

## 🚀 Features

### ✅ Part 1 – Single Pokémon Query

- SQL database seeded with mock Pokémon data.
- Query a Pokémon by name using a tRPC route:  
  `getPokemon("Bulbasaur")`
- Display the result using a reusable `<PokemonRow />` component.

### ✅ Part 2 – Multiple Pokémon Query

- Accept an array of Pokémon names like `["Bulbasaur", "Charmander"]`.
- Fetch and render all data using `<PokedexTable />`.

### ✅ Part 3 – Filter by Type

- Component `<PokemonTypeSelection />` allows selecting a Pokémon type.
- `<FilterablePokedexTable />` renders the filtered result based on the selected type.
- Data fetched dynamically via type-based tRPC route.

---

## 🧑‍💻 Getting Started

```bash
git clone https://github.com/Mayur7862/pokedex-assignment.git
cd pokedex-assignment
npm install
npx prisma generate
npx prisma migrate dev
npm run dev

🧪 Example Usage

const pokemon = getPokemon("Bulbasaur");

const pokemonArray = getPokemon(["Bulbasaur", "Charmander"]);

const fireTypePokemon = getPokemonByType("fire");

📂 Folder Structure

src/
├── app/                      # Next.js App Router structure
├── components/
│   ├── PokemonRow.tsx
│   ├── PokedexTable.tsx
│   └── FilterablePokedexTable.tsx
├── server/
│   ├── db/                   # Prisma schema and config
│   └── routers/              # All tRPC routers
├── lib/
└── types/

📌 To-Do

 Deployment – Not deployed yet (Planned: Vercel + Planetscale)

 Error Handling – Some edge cases may cause silent failures