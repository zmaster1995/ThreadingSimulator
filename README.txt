DODAVANJE:
Klikom na dugme + u gornjem levom uglu pokrecemo opciju za dodavanje novih simulacija. Zatim klik na novo dugme + na sredini ekrana dodaje novi thread. Prevlacenjem komandi sa liste na dnu prozora kreiramo niz komandi koji jedan thread izvrsava. Snimanje simulacije vrsi se preko dugmeta "save" u gornjem desnom uglu. Svaka simulacija i thread moraju imati svoje ime, takodje i svaka komanda ukoliko sadrzi mora imati popunjena sva polja kako bi uspesno snimili simulaciju.

IZMENA:
Dugme za izmenu nalazi se pored dugmeta za dodavanje, omogucava izmenu vec postojevih simulacija

PODESAVANJA: 
Kada aplikacija nije u Edit modu moguce je pokrenuti simulaciju, dugme "Run" u gornjem desnom uglu otvara prozor za podesavanje pre izvrsenja simulacije. Moguce je postaviti pocetne vrednosti semafora i variabli, izabrati koliko instanci jednog thread-a pokrecem i ukoliko zelimo mozemo zadati u kom redosledu zelimo da thread-ovi dobijaju procesorsko vreme cekiranjem Dispatcher checkbox-a a zatim i zadavanjem redosleda izvrsavanja.

SIMULACIJA:
Nakon podesavanja simulacije klik na dugme "Run" pokrece simulaciju, a zatim na osnovu logova rekonstruise izvrsavanje u novom prozoru. U donjem levom uglu vidimo logove, u desnom trenutna stanja variabli i semafora. U centru prozora nalaze se komande koje threadovi izvrsavaju. Komanda koju thread treba da izvrsi prikazana je u boji dok su ostale crno bele. Simulaciju je moguce pokrenuti preko dugmeta "Auto run", ili rucno na "Next" i "Previous"