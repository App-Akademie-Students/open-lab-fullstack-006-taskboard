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
4. Ergebnis eintragen: ✅ bestanden / ❌ nicht bestanden (bei ❌ kurz notieren, was passiert ist).
5. Ein Item ist erst „Done“, wenn alle seine Testfälle ✅ sind **und** die
   Regressionstests der bereits fertigen Items weiterhin ✅ sind.

**Getestet von:** __________ **Datum:** __________ **Browser + Version:** __________

---

## TB-17 Projekt Setup

| Nr. | Gegeben | Wenn | Dann (erwartet) | AK | Ergebnis |
|---|---|---|---|---|---|
| T17-1 | Projektordner | ich den Inhalt ansehe | gibt es eine HTML-Datei, eine Stylesheet-Datei und eine Skript-Datei | AK 1 | ☐ |
| T17-2 | HTML-Datei | ich sie im Editor öffne | sind Stylesheet und Skript darin eingebunden | AK 2 | ☐ |
| T17-3 | Stylesheet ist eingebunden | ich die Seite im Browser öffne | ist im Tab „Netzwerk“ der Entwicklertools zu sehen, dass Stylesheet und Skript ohne Fehler (kein 404) geladen werden | AK 2 | ☐ |
| T17-4 | Projektordner | ich `index.html` per Doppelklick öffne | wird die Seite angezeigt, ohne dass vorher ein Build-Befehl ausgeführt oder ein Server gestartet werden muss | AK 3 | ☐ |
| T17-5 | Seite ist geöffnet | ich die Browser-Konsole ansehe | erscheint keine Fehlermeldung | AK 4 | ☐ |
| T17-6 | Projektordner | ich `git status` und `git log` ausführe | sind alle Projektdateien eingecheckt und es gibt keine offenen Änderungen | AK 5 | ☐ |

---

## TB-12 HTML Template

| Nr. | Gegeben | Wenn | Dann (erwartet) | AK | Ergebnis |
|---|---|---|---|---|---|
| T12-1 | – | ich die Seite öffne | ist ein Titel sichtbar, der die Seite als Taskboard erkennbar macht | AK 1 | ☐ |
| T12-2 | – | ich die Seite öffne | gibt es genau drei Bereiche mit den Überschriften „Offen“, „In Bearbeitung“ und „Erledigt“ (Schreibweise exakt) | AK 2 | ☐ |
| T12-3 | – | ich die Seite öffne | erscheinen die Bereiche in der Reihenfolge Offen → In Bearbeitung → Erledigt | AK 3 | ☐ |
| T12-4 | – | ich die Seite öffne | sind ein Eingabefeld und eine Schaltfläche zum Erfassen einer neuen Aufgabe sichtbar | AK 4 | ☐ |
| T12-5 | Es sind keine Aufgaben vorhanden | ich die Seite öffne | sind alle drei Bereiche sichtbar und leer | AK 5 | ☐ |

---

## TB-13 Task anlegen

| Nr. | Gegeben | Wenn | Dann (erwartet) | AK | Ergebnis |
|---|---|---|---|---|---|
| T13-1 | Board ist leer | ich „Einkaufen“ eingebe und das Anlegen bestätige | erscheint eine Aufgabe mit dem Titel „Einkaufen“ auf dem Board | AK 1 | ☐ |
| T13-2 | wie T13-1 | nach dem Anlegen | steht die Aufgabe im Bereich „Offen“ und in keinem anderen Bereich | AK 2 | ☐ |
| T13-3 | wie T13-1 | nach dem Anlegen | ist das Eingabefeld leer | AK 3 | ☐ |
| T13-4 | Eingabefeld ist leer | ich das Anlegen bestätige | wird keine Aufgabe angelegt | AK 4 | ☐ |
| T13-5 | Eingabefeld enthält nur Leerzeichen | ich das Anlegen bestätige | wird keine Aufgabe angelegt | AK 4 | ☐ |
| T13-6 | Board ist leer | ich nacheinander „Aufgabe A“, „Aufgabe B“ und „Aufgabe C“ anlege | werden alle drei Aufgaben im Bereich „Offen“ angezeigt | AK 5 | ☐ |
| T13-7 | Board ist leer | ich „ Lernen “ (mit Leerzeichen am Anfang und Ende) anlege | wird eine Aufgabe angelegt *(ob die Leerzeichen entfernt werden, ist offen – siehe unten)* | AK 1 | ☐ |

---

## TB-14 Status ändern

**Vorbereitung für alle Testfälle:** Die Aufgaben „Aufgabe A“ und „Aufgabe B“ sind angelegt
und stehen in „Offen“.

| Nr. | Gegeben | Wenn | Dann (erwartet) | AK | Ergebnis |
|---|---|---|---|---|---|
| T14-1 | Vorbereitung | ich das Auswahlfeld einer Aufgabe öffne | hat jede Aufgabe ein Auswahlfeld mit genau den Optionen „Offen“, „In Bearbeitung“ und „Erledigt“ | AK 1 | ☐ |
| T14-2 | Vorbereitung | ich die Auswahlfelder ansehe | zeigen beide „Offen“ an | AK 2 | ☐ |
| T14-3 | Vorbereitung | ich bei „Aufgabe A“ „In Bearbeitung“ wähle | steht „Aufgabe A“ im Bereich „In Bearbeitung“, nicht mehr in „Offen“, und ihr Auswahlfeld zeigt „In Bearbeitung“ | AK 2, AK 3 | ☐ |
| T14-4 | „Aufgabe A“ steht in „In Bearbeitung“ | ich „Erledigt“ wähle | steht „Aufgabe A“ in „Erledigt“, nicht mehr in „In Bearbeitung“ | AK 3 | ☐ |
| T14-5 | Vorbereitung | ich bei „Aufgabe A“ direkt „Erledigt“ wähle | steht „Aufgabe A“ in „Erledigt“ (Stufe wird übersprungen) | AK 4 | ☐ |
| T14-6 | „Aufgabe A“ steht in „Erledigt“ | ich „Offen“ wähle | steht „Aufgabe A“ wieder in „Offen“ | AK 4 | ☐ |
| T14-7 | „Aufgabe A“ steht in „Erledigt“ | ich „In Bearbeitung“ wähle | steht „Aufgabe A“ in „In Bearbeitung“ | AK 4 | ☐ |
| T14-8 | „Aufgabe A“ steht in „In Bearbeitung“ | ich „Offen“ wähle | steht „Aufgabe A“ wieder in „Offen“ | AK 4 | ☐ |
| T14-9 | Vorbereitung | ich bei „Aufgabe A“ den Status ändere | bleibt „Aufgabe B“ unverändert in „Offen“ und ihr Auswahlfeld zeigt weiterhin „Offen“ | AK 5 | ☐ |
| T14-10 | „Aufgabe A“ steht in „Erledigt“ | ich eine neue „Aufgabe C“ anlege | erscheint „Aufgabe C“ in „Offen“, „Aufgabe A“ bleibt in „Erledigt“ | AK 5 | ☐ |

---

## Regressionstests

Nach Fertigstellung eines Items werden die Testfälle aller **bereits fertigen** Items
erneut durchgeführt.

| Nach Fertigstellung von | Erneut testen |
|---|---|
| TB-12 | T17-3, T17-5 |
| TB-13 | alle Testfälle von TB-12, T17-5 |
| TB-14 | alle Testfälle von TB-12 und TB-13, T17-5 |

---

## Sprint-Goal-Test (End-to-End)

Prüft am Ende des Sprints, ob das Increment das Sprint Goal erfüllt.

| Nr. | Schritte | Dann (erwartet) | Ergebnis |
|---|---|---|---|
| SG-1 | Seite öffnen → „Präsentation vorbereiten“ anlegen → Status „In Bearbeitung“ → Status „Erledigt“ | Die Aufgabe durchläuft sichtbar alle drei Bereiche und steht am Ende in „Erledigt“. Die Konsole zeigt keine Fehler. | ☐ |

---

## Offene Punkte für das Scrum Team

1. **Browser:** In welchem Browser (bzw. welchen Browsern) wird getestet? (offen in der DoD)
2. **Leerzeichen im Titel (T13-7):** Sollen Leerzeichen am Anfang und Ende entfernt werden? Das ist in den AK nicht festgelegt.
3. **Neuladen der Seite:** Solange offene Frage 4 in `requirements.md` nicht entschieden ist, gibt es keinen Testfall dafür, ob Aufgaben nach F5 erhalten bleiben.
4. **Hinweis bei leerer Eingabe:** Falls entschieden wird, dass ein Hinweis erscheinen soll (offene Frage 5), müssen T13-4 und T13-5 angepasst werden.
5. **Duplikate / Titellänge:** Falls hierzu Regeln festgelegt werden (offene Frage 2), werden zusätzliche Testfälle für TB-13 gebraucht.
6. **Ablage der Ergebnisse:** Wird diese Datei pro Testdurchlauf ausgefüllt, oder führt das Team ein separates Testprotokoll?
