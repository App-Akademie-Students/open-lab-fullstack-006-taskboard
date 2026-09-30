# Sprint 1
- TB-17 Projekt Setup
- TB-12 HTML Template
- TB-13 Task anlegen
- TB-14 Status ändern

**Sprint Goal:** Ein Nutzer kann eine eigene Aufgabe im Browser erfassen und ihren
Bearbeitungsstand von offen über in Bearbeitung bis erledigt verfolgen.

---

## TB-17 Projekt Setup

> Hinweis: TB-17 ist eher ein technisches Enabler-Item als eine fachliche User Story.
> Die Formulierung aus Sicht des Entwicklungsteams ist ein Vorschlag – das Team
> entscheidet, ob es als Story oder als technische Aufgabe geführt wird.

**User Story**
Als Entwicklungsteam möchten wir eine lauffähige Projektgrundlage haben,
damit wir die Funktionen des Taskboards ohne weitere Vorarbeit umsetzen können.

**Akzeptanzkriterien**
- [ ] Das Projekt enthält eine HTML-Datei, eine Stylesheet-Datei und eine Skript-Datei.
- [ ] Stylesheet und Skript sind in der HTML-Datei eingebunden.
- [ ] Die Seite lässt sich direkt im Browser öffnen, ohne Build-Prozess, Framework oder Backend.
- [ ] Beim Öffnen der Seite erscheinen keine Fehlermeldungen in der Browser-Konsole.
- [ ] Der Projektstand ist in der Versionsverwaltung eingecheckt.

---

## TB-12 HTML Template

**User Story**
Als Nutzer möchte ich beim Öffnen des Taskboards die drei Bearbeitungsstände
„Offen“, „In Bearbeitung“ und „Erledigt“ sehen,
damit ich auf einen Blick erkenne, wie meine Aufgaben organisiert sind.

**Akzeptanzkriterien**
- [ ] Die Seite zeigt einen Titel, der sie als Taskboard erkennbar macht.
- [ ] Es gibt genau drei Bereiche (Spalten) mit den Überschriften „Offen“, „In Bearbeitung“ und „Erledigt“.
- [ ] Die Bereiche erscheinen in der Reihenfolge Offen → In Bearbeitung → Erledigt.
- [ ] Es gibt einen sichtbaren Bereich zum Erfassen einer neuen Aufgabe (Eingabefeld und Schaltfläche).
- [ ] Ohne vorhandene Aufgaben sind alle drei Bereiche leer, aber sichtbar.

---

## TB-13 Task anlegen

**User Story**
Als Nutzer möchte ich eine neue Aufgabe mit einem Titel erfassen,
damit ich festhalten kann, was ich erledigen muss.

**Akzeptanzkriterien**
- [ ] Wenn ich einen Titel eingebe und das Anlegen bestätige, erscheint die Aufgabe mit diesem Titel auf dem Board.
- [ ] Eine neu angelegte Aufgabe erscheint im Bereich „Offen“.
- [ ] Nach dem Anlegen ist das Eingabefeld wieder leer.
- [ ] Ist das Eingabefeld leer (oder enthält nur Leerzeichen), wird keine Aufgabe angelegt.
- [ ] Mehrere Aufgaben können nacheinander angelegt werden und werden alle angezeigt.

---

## TB-14 Status ändern

**User Story**
Als Nutzer möchte ich den Status einer Aufgabe ändern,
damit ich den Bearbeitungsfortschritt von offen über in Bearbeitung bis erledigt verfolgen kann.

**Akzeptanzkriterien**
- [ ] Jede Aufgabe besitzt ein Auswahlfeld mit den Optionen „Offen“, „In Bearbeitung“ und „Erledigt“.
- [ ] Das Auswahlfeld zeigt den aktuellen Status der Aufgabe an.
- [ ] Wähle ich einen anderen Status, erscheint die Aufgabe anschließend im entsprechenden Bereich und nicht mehr im vorherigen.
- [ ] Jeder Status kann in jeden anderen geändert werden (auch zurück, z. B. von „Erledigt“ nach „Offen“).
- [ ] Die Statusänderung einer Aufgabe beeinflusst keine anderen Aufgaben.

---

## Offene Fragen für das Scrum Team

1. **Felder einer Aufgabe:** Besteht eine Aufgabe nur aus einem Titel, oder gibt es weitere Angaben (z. B. Beschreibung)? Die Stories oben gehen nur von einem Titel aus.
2. **Maximale Titellänge / Duplikate:** Gibt es eine Begrenzung? Sind gleichnamige Aufgaben erlaubt?
3. **Rückwärts-Statuswechsel:** Soll z. B. „Erledigt“ → „Offen“ erlaubt sein? (AK in TB-14 nimmt „ja“ an.)
4. **Datenverlust beim Neuladen:** `localStorage` ist laut README nachrangig. Ist es für Sprint 1 akzeptabel, dass Aufgaben nach einem Neuladen der Seite verloren gehen?
5. **Rückmeldung bei leerer Eingabe:** Reicht es, dass nichts passiert, oder soll ein Hinweis erscheinen?
6. **Dateistruktur:** Die README nennt `style.css` und `app.js`, im Projekt liegen sie in `css/` und `js/`. Welche Struktur gilt?
