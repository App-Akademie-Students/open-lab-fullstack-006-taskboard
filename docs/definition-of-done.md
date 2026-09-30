# Definition of Done (DoD) – Mini-Taskboard

> **Status: Entwurf.** Diese DoD ist ein Vorschlag als Diskussionsgrundlage.
> Das Scrum Team legt die DoD gemeinsam fest und passt sie bei Bedarf in der
> Retrospektive an.

Die DoD gilt für **jedes** Product Backlog Item (z. B. TB-12, TB-13, TB-14, TB-17).
Ein Item ist erst dann „Done“ und Teil des Increments, wenn **alle** Punkte erfüllt sind.

Abgrenzung:
- **Akzeptanzkriterien** beschreiben, *was* ein einzelnes Item fachlich leisten muss.
- **Definition of Done** beschreibt die *Qualität*, die für alle Items gleichermaßen gilt.

---

## 1. Fachlich

- [ ] Alle Akzeptanzkriterien des Items sind erfüllt und abgehakt.
- [ ] Das Item trägt zum Sprint Goal bei und bleibt im definierten Scope
      (keine Funktionen aus „Nicht Teil dieses Sprints“ eingebaut).
- [ ] Bereits fertige Funktionen funktionieren weiterhin (z. B. Anlegen funktioniert noch nach Umsetzung von „Status ändern“).

## 2. Technisch

- [ ] Umsetzung nur mit HTML, CSS und JavaScript – ohne Framework, Build-Prozess oder Backend.
- [ ] Die Seite lässt sich durch direktes Öffnen der HTML-Datei im Browser starten.
- [ ] Beim Öffnen und bei der Nutzung erscheinen keine Fehler in der Browser-Konsole.
- [ ] Der Code ist lesbar: sprechende Namen, einheitliche Einrückung, kein auskommentierter oder ungenutzter Code.

## 3. Test

- [ ] Die Akzeptanzkriterien wurden manuell im Browser durchgespielt.
- [ ] Getestet in mindestens einem aktuellen Browser (vom Team festzulegen, siehe offene Punkte).
- [ ] Mindestens eine zweite Person aus dem Team hat die Funktion ausprobiert.

## 4. Zusammenarbeit & Versionsverwaltung

- [ ] Die Änderungen sind in Git eingecheckt, mit einer aussagekräftigen Commit-Nachricht, die die Item-ID enthält (z. B. `TB-13: Task anlegen`).
- [ ] Der Code wurde von mindestens einer weiteren Person angeschaut (Review oder Pair Programming).
- [ ] Das Item ist auf dem Sprint Backlog / Taskboard als „Done“ markiert.

## 5. Dokumentation

- [ ] `README.md` bzw. `docs/requirements.md` sind aktuell, falls sich durch das Item etwas geändert hat.
- [ ] Neue offene Fragen, die bei der Umsetzung aufgetaucht sind, sind notiert und an den Product Owner weitergegeben.

---

## Offene Punkte für das Scrum Team

1. **Browser:** In welchem Browser (bzw. welchen Browsern) wird getestet?
2. **Review:** Reicht ein kurzer gemeinsamer Blick auf den Code, oder ist ein formales Review (z. B. Pull Request) gewünscht?
3. **Branching:** Wird direkt auf dem Hauptbranch gearbeitet oder mit einem Branch pro Item?
4. **Umfang für Sprint 1:** Sind alle Punkte für ein Lernprojekt angemessen, oder sollen einzelne gestrichen werden, um das Team nicht zu überlasten?
