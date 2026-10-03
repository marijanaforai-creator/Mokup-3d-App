# Klijentski poslovni sajt — osnova

Ovaj folder je prvi prototip sistema koji omogućava klijentu da uređuje poslovni sajt bez menjanja HTML koda.

## Ciljna arhitektura
- domen klijenta: npr. fitnes.studio
- javni sajt: prezentacija brenda, lokacija, proizvoda i akcija
- /admin: klijentski panel
- autentifikacija: Supabase Auth
- baza: Supabase Postgres
- slike: Supabase Storage
- deployment: GitHub Pages ili drugi hosting
- Marijana Drive: opciona automatizacija marketinga

## Važno
Trenutni prototip koristi localStorage samo za demonstraciju korisničkog toka. Nije namenjen produkciji niti čuva podatke centralno.

Sledeća produkciona faza:
1. Supabase projekat
2. login za svakog klijenta
3. tenant/client_id izolacija podataka
4. tabele business, locations, products, promotions, media
5. Storage bucket za slike
6. custom domain
7. role-based access (klijent / Marijana admin)
8. backup i audit log

Sistem se zatim može klonirati za svaki novi prodati domen.
