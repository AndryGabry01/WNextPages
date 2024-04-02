
# NextJS Markdown GitHub Pages
Questo progetto è finalizzato alla creazione di pagine ospitabili su Github Pages.

In altre parole è un template per Github Pages completamente personalizzabile nei colori e con un layout semplice.

Le varie sezioni sono generate a partire da dei file Markdown.
## Caratteristiche
- Genera automaticamente le pagine HTML in base ai file MD presenti nella cartella `./Sezioni`,
- Si adatta automaticamente  alle dimensioni del dispositivo (responsive design),
- Dovrebbe funzionare bene sia in modalita Light  che Dark Mode,
- Per il rendering dei file Markdown, viene utilizzata la libreria [markdown-it](https://github.com/markdown-it/markdown-it) - [Link Alternativo in caso di 404](https://github.com/AndryGabry01/markdown-it)
- Mediante i plugin di [markdown-it](https://github.com/markdown-it/markdown-it) è possibile implementare alcune funzionalità extra. ([Ad esempio abbiamo attivato di default l'elaborazione del linguaggio matematico LaTex](https://www.npmjs.com/package/markdown-it-texmath) -  [Link Alternativo in caso di 404](https://github.com/AndryGabry01/markdown-it-texmath)).
## Come Aggiungo una sezione?
Per aggiungere una sezione, modifica il file *CommunitySiteConfig.json*<br>
Modificando e aggiungendo il seguente codice,
```json
        {
            "sectionName": "Nome della Sezione",
            "btnLabel":"Label che comparira nel pulsante del menu",
            "fileName": "FIle Markdown di riferimento",
            "iconName": "Nome icona",
            "customPath": null
        }
```
 per ogni sezione che si vuole aggiungere, all'array `SECTION`
```json
 "SECTION": [
        {
            "sectionName": "home",
            "btnLabel":"Home",
            "fileName": "home",
            "iconName": "IoHome",
            "customPath": "/"
        },
        /*AGGIUNGI QUI*/
    ],
```
Dopo di che Crea il relativo file Markdown, all'interno della cartella `./Sezioni/`.
> se impostiamo `customPath: null`, il pulsante relativo alla sezione punterà, a `/fileName`.

>se impostiamo `customPath: https://google.com`non è necessario creare il file markdown, poiche il sito punterà ad una pagina esterna (nel caso di esempio alla pagina di google.com).
mi raccomando ricorda che per puntare ad una pagina esterna al sito, bisogna inserire prima del dominio "http/https", come nell'esempio (**https**://google.com).


## Personalizzazione del Sito
Il sito è personalizzabile attraverso l'utilizzo delle variabili presenti nel file `./CommunitySiteConfig.json` attraverso il file css "global.css".
All'interno del primo file è possibile modificare:
- il nome della community di riferimento (es: LINTINF), 
- I metadati del sito (Es: descrizione),
- La lista dei link presenti nel footer (Consigliati massimo 4 link),
- Il link base del sito (che se ospitato su Github pages equivarra a ciò che c'è scritto dopo il primo "/") (es: andrygabry.github.io/*lintinf*),
All'interno di esso sarà inoltre possibile attivare la modalità di manutenzione.

All'interno del secondo file sarà possibile modificare:
- Le variabili css di base,
- Lo stile delle pagine ed il layout di base
### CSS MODULE
> Per una configurazione più avanzata del layout di pagina, è possibile modificare i file contenuti all'interno di `./app/_cssModule/`. Attenzione che non sono file css normali, ma bensi file module.css. Noterai infatti che ognuno di essi si riferisce ad un singolo modulo della pagina. (Es: c'è quello relativo al footer, quello relativo al layout di base, quello relativo alla navbar).
Di seguito la lista dei File module.css, con il relativo ambito di applicazione:
- `footer.module.css`: Questo file  definisce lo stile del Footer e viene caricato all'interno del componente Footer.jsx
- `layout.module.css`: Questo file  definisce lo stile generale della pagina, contiene ad esempio lo stile del main, e viene caricato all'interno del componente GenericPage.jsx
- `manutenzione.module.css`: Questo file definisce  lo stile della pagina di manutenzione, viene caricato all'interno del componente Manutenzione.jsx
- `markdown.module.css`: Questo file definisce  lo stile generale del componente che contiene il rendering dei file Markdown relativi alle sezioni, e viene caricato all'interno del componente MarkdownAdapater.jsx
- `navasidebar.module.css`: Questo  file definisce lo stile dell'area laterale sinistra e viene caricato nel componente NavAsideBar.jsx
- `notFound.module.css`: Questo file definisce lo stile del componente GenericError.jsx
### Componenti
Volendo è possibile adattare come si vuole la pagina, per buona norma consigliamo di inserire i componenti all'interno della cartella `./app/_components`.
I componenti di base sono:
- `Footer.jsx`: continene il footer
- `GenericError.jsx`: che disegna la pagina di un generico errore, ad esempio il 404
- `GenericPage.jsx` che disegna la generica pagina contenente la aside e il markdown renderizzato
- `Manutenzione.jsx`: che disegna l'overlay mostrato nel caso in cui venga attivata la modalità di manutenzione
- `NavAsideBar.jsx`: che disegna la navbar conentente il footer e  le sezioni disponibili
- `GenericIcon.jsx` che permette di mostrare le icone in base al nome.

Per quanto riguarda `GenericIcon.jsx`, dobbiamo fare un discorso a parte.
Esso è un componente che permette di mostrare o un logo tramite react-icon o una semplice immagine. 
Per aggiungere icone possiamo seguire le seguenti modalita:
- React-Icons: Bisognera importare l'icona e aggiungerla allo switch case.
- Icona da  Immagine: bisogna inserire il file nella cartella `./public/` o in un cloud tipo imgur, dopo di che bisogna indicare l'url al componente.
> Per esempi del suo utilizzo guarda come vengono richiamati all'interno del codice. 

### Loghi
Per modificare i loghi base mostrati nel sito, ad esempio quello nella NavBar o Nella pagina di manutenzione è sufficente sostituire la relativa immagine, in formato svg, all'interno della cartella `./public/`.

Per utilizzare immagini in formati diversi dal svg, bisogna recarsi nel file `./next.config.mjs` e decommentare nel seguente modo le seguenti righe di codice:
```js
images:{
       unoptimized: true
    }
```
[Documentazione relativa alle immagini in NextJS](https://nextjs.org/docs/pages/api-reference/components/image)
### Plugin di Markdown-IT
Modificando il file `./app/_lib/markdown.ts` è possibile gestire il modo in cui viene  elaborato il linguaggio markdown.

Ad esempio aggiungendo [plugin](https://www.npmjs.com/search?q=keywords:markdown-it-plugin)  o [altri pacchetti](https://www.npmjs.com/search?q=keywords:markdown-it).

Consigliamo quindi di leggere la [documentazione di markdown-it](https://markdown-it.github.io/markdown-it/)
## Funzionamento del Sito su Github Pages
1. Una volta caricato il progetto in un repository, bisogna recarsi nelle **impostazioni della repository $\rightarrow$ pages**, andare nel paragrafo **Build and deplyment** e impostare **source** su `Github Actions`.
![Punto 1](URL_immagine)
![Punto 2](URL_immagine)
![Punto 3](URL_immagine)

2. In automatico github, dovrebbe rilevare l'action situata all'interno della cartella `.github/workflows/nexjs.yml`.
3. Adesso effettua le tue personalizzazioni e aggiungi le tue sezioni,
4. Una volta che avrai effettuato il primo commit, l'action eseguira il build dell'app Nextjs in modalita export, quindi esportando il sito come sito statico all'interno della cartella `./app/out`.
5. Una volta che l'action avrà finito il suo lavoro, sarà possibile trovare il sito all'indirizzo [https://tuonome.github.io/nome_della_repository](https://tuonome.github.io/nome_della_repository)

## Altre Informazioni Utili
### Contributi
Se desideri contribuire alla creazione di questa guida, puoi farlo aprendo una pull request sul repository GitHub di questo progetto
Siamo aperti ai contributi! 
Se hai bisogno di aiuto, riscontri qualche problema oppure individui qualche bug puoi aprire una issue.
### Da cosa è nato questo progettino?
Questo progettino nasce come base per il sito **non ufficiale** del corso di laurea triennale in Ingegneria delle Tecnologie Informatiche (LINTINF) dell'Università di Parma (UNIPR).

In quanto rappresentanti ci tenevamo a creare un interfaccia che permettesse agli studenti del corso di capire come interagire col progetto Organizzazione LINTINF.

Quindi un posto dove trovare gli appunti condivisi da altri studenti del medesimo corso, trovare risposte rapide a dubbi comuni e tanto altro.

Abbiamo voluto appositamente fare in modo che le senzioni fossero semplici da realizzare e mantenere, senza che fossero necessarie conoscenze avanzate relative a ReactJs, NextJs ed altro. 

In tal modo speriamo che questo progetto venga portato avanti dai futuri rappresentanti del corso.

Speriamo di aver realizzato un prodotto fatto e finito, che non richieda molte altre migliorie, se avete suggermimenti, come già detto nella sezione precedente, non esitate a comunicarceli.

### Citazioni e Riconoscimenti
Il progetto fa uso di:
- Nextjs
- ReactJS
- Typescript
- Javascript
- React-Icons
- Markdown-it ed i relativi plugin (ad esempio markdown-it-textmath)
### Riutilizzo di questo progetto
Il riuso di questo progetto è relativo alla licenza che trovate all'interno del file LICENSE.md.

In generale la tendenza è quella di permettere il riutilizzo di questo per attivita simili, purchè si rispettino i limiti imposti dalla relativa licenza.

Ciò significa che puoi riutilizzare questo progetto, per  attività come :
- Un sito di corso tipo quello della LINTINF,
- Attività non a scopo di lucro,
- Attività didattiche.
- 
Possibilmente citando sempre la fonte, come abiamo fatto noi nella relativa sezione Citazioni e Riconoscimenti.


## Todo
- [x] Scrivere il file README
- [x] Inserire il file LICENSE
- [ ] Rendere Generico il repository, in modo che sia solo un esempio e poi adattarlo alla lintinf, quando verra caricato sull'organizzazione
- [ ] Aggiungere la configurazione dei metadati tramite il file JSON Community....json 
- [ ] Aggiornare Workflow Nextjs a v5 [link alla risoluzione dei bug](https://github.com/actions/starter-workflows/pull/2354)