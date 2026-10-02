# Testfälle – Sprint 1

> **Status: Entwurf.** Die Testfälle sind aus den Akzeptanzkriterien in
> [requirements.md](requirements.md) abgeleitet und ein Vorschlag als Diskussionsgrundlage.
> Das Scrum Team prüft und ergänzt sie.

## Vorgehen

1. `index.html` direkt im Browser öffnen (Doppelklick, kein Server).
2. Entwicklertools öffnen (F12) → Tab **Konsole**. Während aller Tests darauf achten,
   dass keine Fehlermeldungen erscheinen.
3. Testfälle der Reihe nach durchführen. Wenn nicht anders angegeben, beginnt jeder
   Testfall mit einer **frisch geladenen Seite** (F5).
4. Ergebnis eintragen: Checkbox abhaken (`- [x]`) = bestanden. Bei nicht bestanden die Checkbox
   leer lassen und direkt darunter kurz notieren, was passiert ist.
5. Ein Item ist erst „Done“, wenn alle seine Testfälle abgehakt sind **und** die
   Regressionstests der bereits fertigen Items weiterhin bestanden sind.

**Getestet von:** Max, Anna **Datum:** 01.10.2026 **Browser + Version:** Chrome 154 / 155

---

## TB-17 Projekt Setup

- [x] **T17-1** (AK 1)  
  **Gegeben:** Projektordner  
  **Wenn:** ich den Inhalt ansehe  
  **Dann:** gibt es eine HTML-Datei, eine Stylesheet-Datei und eine Skript-Datei

- [x] **T17-2** (AK 2)  
  **Gegeben:** HTML-Datei  
  **Wenn:** ich sie im Editor öffne  
  **Dann:** sind Stylesheet und Skript darin eingebunden

- [x] **T17-3** (AK 2)  
  **Gegeben:** Stylesheet ist eingebunden  
  **Wenn:** ich die Seite im Browser öffne  
  **Dann:** ist im Tab „Netzwerk“ der Entwicklertools zu sehen, dass Stylesheet und Skript ohne Fehler (kein 404) geladen werden

- [x] **T17-4** (AK 3)  
  **Gegeben:** Projektordner  
  **Wenn:** ich `index.html` per Doppelklick öffne  
  **Dann:** wird die Seite angezeigt, ohne dass vorher ein Build-Befehl ausgeführt oder ein Server gestartet werden muss

- [x] **T17-5** (AK 4)  
  **Gegeben:** Seite ist geöffnet  
  **Wenn:** ich die Browser-Konsole ansehe  
  **Dann:** erscheint keine Fehlermeldung

- [x] **T17-6** (AK 5)  
  **Gegeben:** Projektordner  
  **Wenn:** ich `git status` und `git log` ausführe  
  **Dann:** sind alle Projektdateien eingecheckt und es gibt keine offenen Änderungen


---

## TB-12 HTML Template

- [x] **T12-1** (AK 1)  
  **Gegeben:** –  
  **Wenn:** ich die Seite öffne  
  **Dann:** ist ein Titel sichtbar, der die Seite als Taskboard erkennbar macht

- [x] **T12-2** (AK 2)  
  **Gegeben:** –  
  **Wenn:** ich die Seite öffne  
  **Dann:** gibt es genau drei Bereiche mit den Überschriften „Offen“, „In Bearbeitung“ und „Erledigt“ (Schreibweise exakt)

- [x] **T12-3** (AK 3)  
  **Gegeben:** –  
  **Wenn:** ich die Seite öffne  
  **Dann:** erscheinen die Bereiche in der Reihenfolge Offen → In Bearbeitung → Erledigt

- [x] **T12-4** (AK 4)  
  **Gegeben:** –  
  **Wenn:** ich die Seite öffne  
  **Dann:** sind ein Eingabefeld und eine Schaltfläche zum Erfassen einer neuen Aufgabe sichtbar

- [x] **T12-5** (AK 5)  
  **Gegeben:** Es sind keine Aufgaben vorhanden  
  **Wenn:** ich die Seite öffne  
  **Dann:** sind alle drei Bereiche sichtbar und leer


---

## TB-13 Task anlegen

- [x] **T13-1** (AK 1)  
  **Gegeben:** Board ist leer  
  **Wenn:** ich „Einkaufen“ eingebe und das Anlegen bestätige  
  **Dann:** erscheint eine Aufgabe mit dem Titel „Einkaufen“ auf dem Board

- [x] **T13-2** (AK 2)  
  **Gegeben:** wie T13-1  
  **Wenn:** nach dem Anlegen  
  **Dann:** steht die Aufgabe im Bereich „Offen“ und in keinem anderen Bereich

- [x] **T13-3** (AK 3)  
  **Gegeben:** wie T13-1  
  **Wenn:** nach dem Anlegen  
  **Dann:** ist das Eingabefeld leer

- [x] **T13-4** (AK 4)  
  **Gegeben:** Eingabefeld ist leer  
  **Wenn:** ich das Anlegen bestätige  
  **Dann:** wird keine Aufgabe angelegt

- [x] **T13-5** (AK 4)  
  **Gegeben:** Eingabefeld enthält nur Leerzeichen  
  **Wenn:** ich das Anlegen bestätige  
  **Dann:** wird keine Aufgabe angelegt

- [x] **T13-6** (AK 5)  
  **Gegeben:** Board ist leer  
  **Wenn:** ich nacheinander „Aufgabe A“, „Aufgabe B“ und „Aufgabe C“ anlege  
  **Dann:** werden alle drei Aufgaben im Bereich „Offen“ angezeigt

- [x] **T13-7** (AK 1)  
  **Gegeben:** Board ist leer  
  **Wenn:** ich „ Lernen “ (mit Leerzeichen am Anfang und Ende) anlege  
  **Dann:** wird eine Aufgabe angelegt *(ob die Leerzeichen entfernt werden, ist offen – siehe unten)*


---

## TB-14 Status ändern

**Vorbereitung für alle Testfälle:** Die Aufgaben „Aufgabe A“ und „Aufgabe B“ sind angelegt
und stehen in „Offen“.

- [x] **T14-1** (AK 1)  
  **Gegeben:** Vorbereitung  
  **Wenn:** ich das Auswahlfeld einer Aufgabe öffne  
  **Dann:** hat jede Aufgabe ein Auswahlfeld mit genau den Optionen „Offen“, „In Bearbeitung“ und „Erledigt“

- [x] **T14-2** (AK 2)  
  **Gegeben:** Vorbereitung  
  **Wenn:** ich die Auswahlfelder ansehe  
  **Dann:** zeigen beide „Offen“ an

- [x] **T14-3** (AK 2, AK 3)  
  **Gegeben:** Vorbereitung  
  **Wenn:** ich bei „Aufgabe A“ „In Bearbeitung“ wähle  
  **Dann:** steht „Aufgabe A“ im Bereich „In Bearbeitung“, nicht mehr in „Offen“, und ihr Auswahlfeld zeigt „In Bearbeitung“

- [x] **T14-4** (AK 3)  
  **Gegeben:** „Aufgabe A“ steht in „In Bearbeitung“  
  **Wenn:** ich „Erledigt“ wähle  
  **Dann:** steht „Aufgabe A“ in „Erledigt“, nicht mehr in „In Bearbeitung“

- [x] **T14-5** (AK 4)  
  **Gegeben:** Vorbereitung  
  **Wenn:** ich bei „Aufgabe A“ direkt „Erledigt“ wähle  
  **Dann:** steht „Aufgabe A“ in „Erledigt“ (Stufe wird übersprungen)

- [x] **T14-6** (AK 4)  
  **Gegeben:** „Aufgabe A“ steht in „Erledigt“  
  **Wenn:** ich „Offen“ wähle  
  **Dann:** steht „Aufgabe A“ wieder in „Offen“

- [x] **T14-7** (AK 4)  
  **Gegeben:** „Aufgabe A“ steht in „Erledigt“  
  **Wenn:** ich „In Bearbeitung“ wähle  
  **Dann:** steht „Aufgabe A“ in „In Bearbeitung“

- [x] **T14-8** (AK 4)  
  **Gegeben:** „Aufgabe A“ steht in „In Bearbeitung“  
  **Wenn:** ich „Offen“ wähle  
  **Dann:** steht „Aufgabe A“ wieder in „Offen“

- [x] **T14-9** (AK 5)  
  **Gegeben:** Vorbereitung  
  **Wenn:** ich bei „Aufgabe A“ den Status ändere  
  **Dann:** bleibt „Aufgabe B“ unverändert in „Offen“ und ihr Auswahlfeld zeigt weiterhin „Offen“

- [x] **T14-10** (AK 5)  
  **Gegeben:** „Aufgabe A“ steht in „Erledigt“  
  **Wenn:** ich eine neue „Aufgabe C“ anlege  
  **Dann:** erscheint „Aufgabe C“ in „Offen“, „Aufgabe A“ bleibt in „Erledigt“


---

## Regressionstests

Nach Fertigstellung eines Items werden die Testfälle aller **bereits fertigen** Items
erneut durchgeführt.

| Nach Fertigstellung von | Erneut testen |
| TB-12 | T17-3, T17-5 |
| TB-13 | alle Testfälle von TB-12, T17-5 |
| TB-14 | alle Testfälle von TB-12 und TB-13, T17-5 |

**Durchgeführt nach TB-14:** T12-1 bis T12-5, T17-3, T17-5 – alle bestanden.
Automatisiert durch Claude (AI) in Chrome 154 (headless) am 02.10.2026, nicht manuell.

**Durchgeführt nach den Änderungen in `c17754c`** (Fokus nach Statuswechsel, Umbruch langer Titel):
alle Testfälle von TB-17, TB-12, TB-13, TB-14 sowie SG-1 – alle bestanden.
Vom Team im Chrome-Browser bestätigt am 02.10.2026.

---

## Sprint-Goal-Test (End-to-End)

Prüft am Ende des Sprints, ob das Increment das Sprint Goal erfüllt.

- [x] **SG-1**  
  **Schritte:** Seite öffnen → „Präsentation vorbereiten“ anlegen → Status „In Bearbeitung“ → Status „Erledigt“  
  **Dann:** Die Aufgabe durchläuft sichtbar alle drei Bereiche und steht am Ende in „Erledigt“. Die Konsole zeigt keine Fehler.


---

## Offene Punkte für das Scrum Team

1. **Browser:** ✔ *Entschieden:* Getestet wird im Chrome-Browser (siehe [DoD](definition-of-done.md#entscheidungen-des-scrum-teams)).
2. **Leerzeichen im Titel (T13-7):** Sollen Leerzeichen am Anfang und Ende entfernt werden? Das ist in den AK nicht festgelegt.
3. **Neuladen der Seite:** Solange offene Frage 4 in `requirements.md` nicht entschieden ist, gibt es keinen Testfall dafür, ob Aufgaben nach F5 erhalten bleiben.
4. **Hinweis bei leerer Eingabe:** Falls entschieden wird, dass ein Hinweis erscheinen soll (offene Frage 5), müssen T13-4 und T13-5 angepasst werden.
5. **Duplikate / Titellänge:** Duplikate sind erlaubt (Entscheidung 2) – dafür gibt es noch keinen AK und keinen Testfall. Falls eine maximale Titellänge festgelegt wird, werden zusätzliche Testfälle für TB-13 gebraucht.
6. **Ablage der Ergebnisse:** Wird diese Datei pro Testdurchlauf ausgefüllt, oder führt das Team ein separates Testprotokoll?
