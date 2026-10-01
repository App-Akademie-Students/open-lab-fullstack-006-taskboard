# Sprint 1
- TB-17 Projekt Setup (technische Aufgabe / Enabler)
- TB-12 HTML Template
- TB-13 Task anlegen
- TB-14 Status ändern

**Sprint Goal:** Ein Nutzer kann eine eigene Aufgabe im Browser erfassen und ihren
Bearbeitungsstand von offen über in Bearbeitung bis erledigt verfolgen.

---

## Übergreifende Anforderungen

Regeln, die für mehrere Backlog Items gelten. Die Items verweisen auf die jeweils relevanten IDs.

<a id="r1"></a>
**R1 – Drei Bearbeitungsstände** *(fachlich)*
Es gibt genau drei Status: „Offen“, „In Bearbeitung“ und „Erledigt“ – in dieser Reihenfolge.
Betrifft: TB-12, TB-13, TB-14

<a id="r2"></a>
**R2 – Eine Aufgabe hat genau einen Status** *(fachlich)*
Jede Aufgabe befindet sich zu jedem Zeitpunkt in genau einem Status und wird nur im zugehörigen Bereich angezeigt.
Betrifft: TB-13, TB-14

<a id="r3"></a>
**R3 – Aufgabe besteht aus einem Titel** *(fachlich, Annahme – siehe [Entscheidung 1](#offene-fachliche-und-technische-entscheidungen))*
Eine Aufgabe wird über ihren Titel erfasst und angezeigt.
Betrifft: TB-13, TB-14

<a id="r4"></a>
**R4 – Technischer Rahmen** *(technisch)*
Die Anwendung läuft direkt im Browser, ohne Build-Prozess, Framework oder Backend.
Betrifft: TB-17, TB-12, TB-13, TB-14

---

## TB-17 Projekt Setup

**Typ:** Technische Aufgabe / Enabler (keine User Story)

**Ziel**
Eine lauffähige Projektgrundlage schaffen, damit die Funktionen des Taskboards
ohne weitere Vorarbeit umgesetzt werden können.

**Relevante Anforderungen:** [R4](#r4)

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

**Relevante Anforderungen:** [R1](#r1), [R4](#r4)

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

**Relevante Anforderungen:** [R1](#r1), [R2](#r2), [R3](#r3), [R4](#r4)

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

**Relevante Anforderungen:** [R1](#r1), [R2](#r2), [R3](#r3), [R4](#r4)

**Akzeptanzkriterien**
- [ ] Jede Aufgabe besitzt ein Auswahlfeld mit den Optionen „Offen“, „In Bearbeitung“ und „Erledigt“.
- [ ] Das Auswahlfeld zeigt den aktuellen Status der Aufgabe an.
- [ ] Wähle ich einen anderen Status, erscheint die Aufgabe anschließend im entsprechenden Bereich und nicht mehr im vorherigen.
- [ ] Jeder Status kann in jeden anderen geändert werden (auch zurück, z. B. von „Erledigt“ nach „Offen“).
- [ ] Die Statusänderung einer Aufgabe beeinflusst keine anderen Aufgaben.

---

## Offene fachliche und technische Entscheidungen

1. **Felder einer Aufgabe:** Besteht eine Aufgabe nur aus einem Titel, oder gibt es weitere Angaben (z. B. Beschreibung)? Die Stories oben gehen nur von einem Titel aus.
2. **Maximale Titellänge / Duplikate:** Gibt es eine Begrenzung? Sind gleichnamige Aufgaben erlaubt?
3. **Rückwärts-Statuswechsel:** Soll z. B. „Erledigt“ → „Offen“ erlaubt sein? (AK in TB-14 nimmt „ja“ an.)
4. **Datenverlust beim Neuladen:** `localStorage` ist laut README nachrangig. Ist es für Sprint 1 akzeptabel, dass Aufgaben nach einem Neuladen der Seite verloren gehen?
5. **Rückmeldung bei leerer Eingabe:** Reicht es, dass nichts passiert, oder soll ein Hinweis erscheinen?
6. **Dateistruktur:** Die README nennt `style.css` und `app.js`, im Projekt liegen sie in `css/` und `js/`. Welche Struktur gilt?
