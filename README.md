# The Tool
Projekt The Tool je responzivní webová aplikace s interaktivními prvky, realizovanými pomocí HTML, CSS (SCSS) a JavaScriptu. Hlavní funkcionality zahrnují animace při scrollování stránky a výběr tmavé nebo světlé témy s možností ukládání volby uživatele do místního uložiště.
### Použité technologie
HTML, CSS (SCSS), JavaScript 
### Funkcionální vlastnosti  
  
  **Zpracování načtení DOM**
      
   `document.addEventListener('DOMContentLoaded', function () {
    // Kód se spustí po načtení DOM
});`  
   
   **Přepínání tématu**  
     - Používá se přepínač pro změnu tématu stránky (černobílé nebo barevné).
     - Stav tématu se ukládá do localStorage pro uchování volby uživatele i po obnovení stránky.
     - Při načtení stránky se kontroluje uložené téma a přidává se odpovídající třída k `<body>`.
     
   **Aktivní stav odkazů v navigačním menu**  
     - Určuje se aktuální URL adresa a přiřazuje se třída .active odpovídajícímu odkazu v navigačním menu.Toto zajišťuje vizuální označení aktuální stránky v menu.  
   
   **Animace v sekci hero**  
     - Animace se spouští při načtení stránky pro obrazovky s rozlišením 991px a vyšší.
     - Používají se změny stylů pro plynulé zobrazení sekce.  

   **Animace v sekci .services a .projects při scrollování**  
     - Pro obrazovky s rozlišením 991px a vyšší se spouští animace při scrollování stránky.  
     - Animace v .services se spustí při dosažení sekce a odejde po dokončení.  
     - Animace v .projects postupně zobrazuje každou položku projektu s časovým zpožděním 0,5 sekundy mezi položkami.  
   
   **Zpracování mediálních dotazů**  
   V souboru main.js se zpracovávají podmínky mediálních dotazů pro určení chování skriptu v závislosti na velikosti obrazovky (window.innerWidth).  

   **Použití localStorage**  
     - Pro ukládání uživatelských preferencí (téma) se používá localStorage, což umožňuje uchování výběru uživatele i po obnovení stránky.  

### Pokyny pro nasazení  
1. Klonujte repozitář na své zařízení pomocí příkazu `git clone https://github.com/username/repository.git`  
2. Otevřete soubory v textovém editoru nebo IDE
3. Otevřete soubor index.html ve webovém prohlížeči pro prohlížení a testování aplikace

#### Odkáz na projekt: https://dtsitovich.github.io/tool/
