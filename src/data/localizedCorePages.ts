import type { Lang } from '../i18n';

export type LocalizedCorePage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  related: { title: string; desc: string; href: string }[];
};

const de: LocalizedCorePage[] = [
  {
    slug: 'home', title: 'Mistfall Hunter Wiki Deutsch: Guides, Klassen & Release',
    description: 'Deutsches Mistfall Hunter Wiki mit Release-Infos, Einsteiger-Guide, Klassen, Builds, Performance-Hilfe und klar gekennzeichneten Quellen.',
    eyebrow: 'Deutsches Wiki', h1: 'Mistfall Hunter Wiki auf Deutsch',
    lead: 'Ein kompakter, inoffizieller Guide für den PvPvE-Extraction-ARPG: bestätigte Release-Informationen, verständliche Grundlagen und praktische Entscheidungen vor dem ersten Run.',
    sections: [
      { heading: 'Was ist Mistfall Hunter?', paragraphs: ['Mistfall Hunter verbindet Third-Person-Action, Dark Fantasy und Extraction. Du betrittst als Gyldhunter den gefährlichen Gyldenmist, kämpfst gegen korrumpierte Gegner und rivalisierende Spieler, sammelst Beute und musst rechtzeitig extrahieren. Ein Tod kann die Beute des aktuellen Runs kosten.', 'Die Guides trennen bestätigte Angaben aus offiziellen Store-Seiten von Beta-Beobachtungen. Exakte Balancewerte, Fundorte und die spätere Meta werden erst nach überprüfbaren Live-Daten als Fakten behandelt.'] },
      { heading: 'Der beste Einstieg', paragraphs: ['Beginne mit Release und Plattformen, lerne danach den Extraction-Loop und vergleiche die Klassen. Builds sind vor dem Launch Richtungen statt endgültige Best-in-Slot-Listen.'], bullets: ['Release: 29. Juli 2026 laut Steam und Xbox', 'Bestätigte Plattformen: PC und Xbox Series X|S', 'Solo oder Dreiergruppe', 'Englische Sprachausgabe; deutsche Oberfläche und Untertitel'] },
    ], related: [],
  },
  {
    slug: 'release-date', title: 'Mistfall Hunter Release: Datum, Plattformen & Sprachen',
    description: 'Mistfall Hunter erscheint laut Steam und Xbox am 29. Juli 2026. Alle bestätigten Plattformen, Game-Pass- und Sprachinformationen auf Deutsch.',
    eyebrow: 'Release', h1: 'Mistfall Hunter: Release-Datum und Plattformen',
    lead: 'Die offiziellen Steam- und Xbox-Einträge nennen den 29. Juli 2026. Bestätigt sind PC und Xbox Series X|S; die konkrete Freischaltzeit kann regional abweichen.',
    sections: [
      { heading: 'Was ist offiziell bestätigt?', paragraphs: ['Steam führt Mistfall Hunter für Windows, während der Xbox Store PC und Xbox Series X|S sowie Xbox Play Anywhere nennt. Der Xbox-Eintrag bestätigt außerdem die Verfügbarkeit über Game Pass für PC und Xbox. Für Online-Multiplayer auf Konsole ist eine passende Game-Pass-Stufe erforderlich.', 'Eine PlayStation-Version wird hier nicht als bestätigt bezeichnet, solange keine zitierbare PlayStation-Store-Seite oder Publisher-Ankündigung vorliegt.'] },
      { heading: 'Sprachen', paragraphs: ['Steam nennt zehn unterstützte Sprachen. Englisch bietet Oberfläche, vollständige Sprachausgabe und Untertitel. Deutsch sowie Chinesisch, Spanisch, Russisch, Japanisch, Koreanisch, Französisch und brasilianisches Portugiesisch unterstützen Oberfläche und Untertitel.'], bullets: ['Release-Datum: 29. Juli 2026', 'Lokale Uhrzeit im jeweiligen Store prüfen', 'Deutsche Texte und Untertitel angekündigt', 'Keine deutsche Vollvertonung angegeben'] },
    ], related: [],
  },
  {
    slug: 'beginner-guide', title: 'Mistfall Hunter Anfänger-Guide: Looten, Kämpfen, Extrahieren',
    description: 'Mistfall Hunter Anfänger-Guide auf Deutsch: erster Run, Extraction, Soul of Return, Ausrüstung, Kampfentscheidungen und typische Fehler.',
    eyebrow: 'Einsteiger', h1: 'Mistfall Hunter Anfänger-Guide',
    lead: 'Dein erstes Ziel ist nicht der höchste Schaden, sondern eine erfolgreiche Extraktion. Nimm überschaubare Gewinne mit, lerne Ausgänge und riskiere gute Beute nicht für einen unnötigen Kampf.',
    sections: [
      { heading: 'Der Ablauf eines Runs', paragraphs: ['Wähle eine Klasse und eine günstige Startausrüstung. Sammle zuerst sichere Ressourcen, beobachte Geräusche und Fluchtwege und entscheide nach jedem Fund neu, ob sich ein weiteres Risiko lohnt. PvE, andere Teams und die Extraktion konkurrieren ständig um Zeit und Aufmerksamkeit.', 'Preview-Material beschreibt den Returner Woodling und den Soul of Return als wichtigen Teil der Rückkehr. Behandle konkrete Spawnpunkte bis zur Live-Verifizierung jedoch nicht als feste Route.'] },
      { heading: 'Fünf Regeln für Anfänger', paragraphs: ['Überleben schafft mehr Fortschritt als ein spektakulärer Tod. Ein defensiver Plan hilft dir, Kamera, Ausdauer und Timing zu lernen.'], bullets: ['Ausdauer für Ausweichen und Rückzug reservieren', 'Vor dem Looten Umgebung und Geräusche prüfen', 'Nicht jeden Gegner verfolgen', 'Früh einen Extraktionsplan festlegen', 'Wertvolle Beute rechtzeitig sichern'] },
    ], related: [],
  },
  {
    slug: 'classes', title: 'Mistfall Hunter Klassen: Rollen & Wahl für Anfänger',
    description: 'Alle Mistfall Hunter Klassen auf Deutsch erklärt: Mercenary, Sorcerer, Blackarrow, Shadowstrix, Seer und Withered Knight nach Rolle und Lernkurve.',
    eyebrow: 'Klassen', h1: 'Mistfall Hunter Klassen im Überblick',
    lead: 'Wähle zuerst eine Rolle, nicht den vermeintlich stärksten Tier-List-Platz. Überleben, Reichweite, Kontrolle und Teamnutzen sind im Extraction-Modus ebenso wichtig wie Schaden.',
    sections: [
      { heading: 'Die sechs angekündigten Klassen', paragraphs: ['Mercenary steht für robuste Nahkampf-Grundlagen, Sorcerer für Magie und Flächenkontrolle, Blackarrow für Distanzdruck, Shadowstrix für Mobilität und Hinterhalte, Seer für Unterstützung und Withered Knight für widerstandsfähigen Nahkampf. Details können sich durch Launch-Balance ändern.'] , bullets: ['Mercenary: verzeihender Frontkämpfer', 'Sorcerer: Magie und Kontrolle', 'Blackarrow: Reichweite und Präzision', 'Shadowstrix: Mobilität und Picks', 'Seer: Support im Team', 'Withered Knight: Druck und Widerstand'] },
      { heading: 'Welche Klasse passt zu dir?', paragraphs: ['Anfänger profitieren meist von klaren defensiven Werkzeugen. Solo-Spieler brauchen Möglichkeiten, einen Kampf abzubrechen; Gruppen können stärker spezialisieren. Probiere zuerst Bewegungsgefühl, Reichweite und Fehlerverzeihung, bevor du dich an einer vorläufigen Meta orientierst.'] },
    ], related: [],
  },
  {
    slug: 'builds', title: 'Mistfall Hunter Builds: Klassen, Rollen & Affixe',
    description: 'Mistfall Hunter Builds auf Deutsch: sinnvolle Build-Richtungen für Solo, PvP, Bosse und Gruppen sowie der richtige Umgang mit Affixen.',
    eyebrow: 'Builds', h1: 'Mistfall Hunter Builds und Affixe',
    lead: 'Vor dem Launch sind Builds belastbare Spielrichtungen, aber keine endgültigen Zahlenlisten. Lege ein Ziel fest und kombiniere Klasse, Pfad, Ausrüstung und Affixe konsequent dafür.',
    sections: [
      { heading: 'Einen Build planen', paragraphs: ['Beginne mit einer Aufgabe: sicher solo extrahieren, Druck im PvP erzeugen, Bosse konstant beschädigen oder das Team unterstützen. Danach priorisierst du Überleben, Mobilität, Reichweite, Kontrolle oder Burst. Ein Build ohne klares Ziel sammelt starke Einzelteile, löst aber kein konkretes Problem.'] },
      { heading: 'Affixe richtig bewerten', paragraphs: ['Beta-beobachtete Namen helfen bei der Planung, doch genaue Effekte und Werte müssen im Live-Spiel erneut geprüft werden. Behalte Affixe, die dieselbe Aufgabe unterstützen, und opfere nicht deine sichere Extraktion für einen theoretischen Schadensgewinn.'], bullets: ['Ziel und Rolle zuerst festlegen', 'Defensive Mindestanforderung sichern', 'Synergien statt einzelner hoher Werte suchen', 'PvE- und PvP-Bedarf getrennt beurteilen'] },
    ], related: [],
  },
  {
    slug: 'guides', title: 'Mistfall Hunter Guides Deutsch: Einstieg, Klassen & Builds',
    description: 'Alle deutschen Mistfall Hunter Guides: Release, Einsteigerhilfe, Klassen, Builds, Performance und verlässliche Quellen in einer klaren Reihenfolge.',
    eyebrow: 'Guide-Hub', h1: 'Mistfall Hunter Guides auf Deutsch',
    lead: 'Diese Übersicht ordnet die wichtigsten Fragen nach dem Moment, in dem du die Antwort brauchst: vor dem Kauf, vor dem ersten Run und nach technischen Problemen.',
    sections: [
      { heading: 'Vor dem ersten Run', paragraphs: ['Prüfe zunächst Plattform, Release-Datum und Sprache. Lerne danach den Extraction-Loop und wähle eine Klasse, deren Fehlerverzeihung zu deiner Erfahrung passt. Erst dann lohnt sich die detaillierte Build-Planung.'] },
      { heading: 'Die richtige Seite für dein Problem', paragraphs: ['Der Anfänger-Guide erklärt Risiko und Extraktion. Die Klassenseite hilft bei der Wahl des Mains. Builds ordnen Ausrüstung und Affixe nach Zielen. Die Performance-Seite trennt lokale PC-Probleme von Server- oder Patch-Problemen.'], bullets: ['Release und Plattformen', 'Erster Run und Extraction', 'Klassenwahl', 'Build-Richtung', 'FPS, Ruckler und Abstürze'] },
    ], related: [],
  },
  {
    slug: 'performance', title: 'Mistfall Hunter Performance: FPS, Ruckler & Abstürze',
    description: 'Mistfall Hunter Performance-Guide auf Deutsch: FPS verbessern, Ruckler und Abstürze eingrenzen sowie lokale und serverseitige Ursachen unterscheiden.',
    eyebrow: 'Technik', h1: 'Mistfall Hunter Performance-Probleme lösen',
    lead: 'Ändere nicht zehn Einstellungen gleichzeitig. Prüfe zuerst Treiber, Hintergrundlast und Reproduzierbarkeit, teste dann einzelne Grafikoptionen und dokumentiere die Wirkung.',
    sections: [
      { heading: 'Schnelle Diagnose', paragraphs: ['Starte nach einem Neustart ohne unnötige Overlays, prüfe freien Speicherplatz und aktualisiere den Grafikkartentreiber. Beobachte, ob das Problem überall, nur in bestimmten Zonen oder nur während hoher Serverlast auftritt. So vermeidest du, ein Netzwerkproblem mit Grafikänderungen zu behandeln.'], bullets: ['Spieldateien prüfen', 'Overlays testweise deaktivieren', 'FPS-Limit setzen', 'Schatten und Effekte einzeln reduzieren', 'Fehlerzeitpunkt und Hardware notieren'] },
      { heading: 'Wann du auf einen Patch warten solltest', paragraphs: ['Wenn viele Spieler denselben Absturz oder Loginfehler gleichzeitig melden, ist eine lokale Neuinstallation selten die erste Lösung. Sichere Fehlermeldung, Uhrzeit und Schritte zur Reproduktion und vergleiche sie mit offiziellen Hinweisen.'] },
    ], related: [],
  },
  {
    slug: 'about', title: 'Über das Mistfall Hunter Wiki: Quellen & Redaktion',
    description: 'Über dieses inoffizielle Mistfall Hunter Wiki: Quellen, redaktionelle Qualitätsregeln, Aktualisierungen und Trennung von Fakten und Beta-Beobachtungen.',
    eyebrow: 'Über uns', h1: 'Über dieses Mistfall Hunter Wiki',
    lead: 'Diese unabhängige Fan-Seite hilft Spielern mit schnellen, überprüfbaren Antworten. Sie ist weder offiziell noch mit Bellring Games oder Skystone Games verbunden.',
    sections: [
      { heading: 'Quellen und Korrekturen', paragraphs: ['Für Release, Plattformen und Sprachen haben offizielle Steam- und Xbox-Einträge Vorrang. Preview-Berichte werden als Beobachtung gekennzeichnet. Konkrete Live-Werte, Kartenpunkte und Drop-Raten werden erst nach nachvollziehbarer Prüfung als bestätigt veröffentlicht.'] },
      { heading: 'Qualitätsregel', paragraphs: ['Eine Seite soll eine konkrete Spielerfrage beantworten. Spekulation, Platzhalter und automatisch vervielfachte Texte gehören nicht in den Index. Fehler können korrigiert werden, wenn offizielle Angaben oder überprüfbare Live-Daten eine frühere Aussage ersetzen.'] },
    ], related: [],
  },
  {
    slug: 'weapons', title: 'Mistfall Hunter Waffen & Kampfsystem',
    description: 'Mistfall Hunter Waffen- und Kampfguide auf Deutsch: Nahkampf, Fernkampf, Magie, Ausdauer, Blocken, Paraden und die Wahl der richtigen Waffenrolle.',
    eyebrow: 'Kampf-Datenbank', h1: 'Mistfall Hunter Waffen & Kampf',
    lead: 'Kampf bedeutet Rollenklarheit: Weißt du, ob dein Kit tauschen, kiten, Burst fahren, unterstützen oder zurücksetzen will, bevor der andere Hunter es für dich entscheidet.',
    sections: [
      { heading: 'Waffenrollen', paragraphs: ['Die bekannten Klassen-Kits zeigen klare Waffenidentitäten: Mercenary setzt auf Schwert, Schild, Hammer und Konterfenster; Blackarrow spielt Fernkampfdruck mit dem Bogen; Shadowstrix nutzt Dolche und Stealth-Burst; Sorcerer kämpft auf Zauberreichweite; Seer unterstützt mit Heilung und Kontrolle; Withered Knight setzt auf schwere Nahkampf-Aggression.'] },
      { heading: 'Ausdauer, Blocken und Parieren', paragraphs: ['Behandle Ausdauer als deine zweite Lebensleiste. Blocken und Parieren lohnen sich nur, wenn genug Ausdauer für den Rückzug bleibt. Rote oder unblockbare Angriffe solltest du ausweichen statt blocken.'] },
      { heading: 'Wie du einen Waffenplan wählst', paragraphs: ['Einsteiger sollten verzeihende Werkzeuge wählen, die Fehler überstehen. Solo-Spieler brauchen Fluchtmöglichkeiten oder Reichweite. Gruppen können stärker spezialisieren, weil Teamkollegen Schwächen abdecken.'], bullets: ['Einsteiger: defensiver Nahkampf mit einfachen Konterfenstern', 'Solo: Stealth, Reichweite oder Fluchtwerkzeuge', 'Gruppe: Support, Kontrolle oder hoher Burst', 'Boss-Fokus: nachhaltiger sicherer Schaden und Erholung'] },
    ], related: [],
  },
  {
    slug: 'bosses', title: 'Mistfall Hunter Bosse & PvE-Guide',
    description: 'Mistfall Hunter Boss- und PvE-Guide auf Deutsch zu Mist Lords, Corroded-Gegnern, Boss-Vorbereitung, Beute-Routing und Team-Rollen.',
    eyebrow: 'PvE-Datenbank', h1: 'Mistfall Hunter Bosse & PvE',
    lead: 'Bosse sind keine reinen Beute-Piñatas. In einem Extraction-Spiel verrät jeder lange PvE-Kampf auch deine Position und lädt andere Hunter zum Third-Party ein.',
    sections: [
      { heading: 'Mist Lords', paragraphs: ['Mist Lords sind die hochwertigen PvE-Anker einer Zone. Erwarte bessere Belohnungen, schwerere Mechaniken und höheren PvP-Druck in ihrer Nähe. Kämpfe nur mit Fluchtplan, genug Vorräten und einem guten Grund, deine mitgebrachte Ausrüstung zu riskieren.'] },
      { heading: 'Die Corroded', paragraphs: ['Die Corroded sind die umherziehenden, vom Mist verzerrten Gegner, die Zeit, Leben und Ressourcen kosten. Sie sind auch Geräuschfallen: zu langes Kämpfen kann gegnerische Spieler anlocken, bevor der Boss überhaupt beginnt.'] },
      { heading: 'Regeln für Boss-Routen', paragraphs: ['Eine gute Boss-Route beginnt mit Aufklärung, nicht mit Schaden. Prüfe nahe Extraktionsmöglichkeiten, achte auf PvP-Geräusche, räume nur das Nötige und entscheide vorab, ob du den Boss beendest oder gehst, wenn ein anderes Team auftaucht.'], bullets: ['Kenne deine nächste Extraktionsroute', 'Spare Ausdauer und Heilung für die Flucht', 'Verliere dich nicht in Beute, wenn andere Spieler in der Nähe sind', 'Sichere früh kleinere Gewinne, solange du lernst'] },
    ], related: [],
  },
  {
    slug: 'loot', title: 'Mistfall Hunter Beute, Ausrüstung & Affixe',
    description: 'Mistfall Hunter Beute-Guide auf Deutsch: Ausrüstung, Affixe, Ressourcen, Banking-Prioritäten und Extraktionswert richtig einschätzen.',
    eyebrow: 'Beute-Datenbank', h1: 'Mistfall Hunter Beute, Ausrüstung & Affixe',
    lead: 'Beute zählt nur, wenn sie mit dir aus dem Mist kommt. Die beste Inventar-Entscheidung ist oft die, die gesichert wird, nicht die mit dem größten theoretischen Wert.',
    sections: [
      { heading: 'Wie du den Wert von Beute einschätzt', paragraphs: ['Jeder Gegenstand hat zwei Werte: Stärke im Einsatz und Wert bei Extraktion. Einsteiger sollten verlässliche Upgrades, build-relevante Affixe und Fortschrittsressourcen priorisieren statt riskanter Gier-Häufchen.'] },
      { heading: 'Affixe machen aus Ausrüstung Builds', paragraphs: ['Affixe sind die Modifikatoren, die eine Klasse in Richtung Burst, Überleben, Cooldown-Erholung, Kontrolle oder Support schieben. Die Live-Werte müssen noch bestätigt werden, daher verfolgt die Build-Seite Richtungen statt endgültiger Bestenlisten.'] },
      { heading: 'Was du zuerst sichern solltest', paragraphs: ['Bevor sich die Meta setzt, gelten praktische Regeln: behalte Ausrüstung, die deine aktuelle Klasse verbessert, extrahiere seltene Ressourcen früh und trage kein Extragewicht, wenn es dich den Kampf oder den Ausgang kostet.'], bullets: ['Klassen-Upgrades', 'Seltene Ressourcen', 'Build-definierende Affixe', 'Quest- oder Freischalt-Items, sobald bestätigt', 'Reserve-Kits für spätere risikoarme Runs'] },
    ], related: [],
  },
  {
    slug: 'soul-of-return', title: 'Mistfall Hunter Soul of Return: So funktioniert die Extraktion',
    description: 'Mistfall Hunter Soul of Return Guide auf Deutsch: Returner Woodlings, Extraktionsschlüssel, Ausgänge, Timing und wie du einen ganzen Run nicht verlierst.',
    eyebrow: 'Extraction-Guide', h1: 'Soul of Return: lebend rauskommen',
    lead: 'Der Soul of Return ist das runbestimmende Ziel: ohne einen Weg raus ist deine beste Beute nur Köder für jemand anderen.',
    sections: [
      { heading: 'Was der Soul of Return bewirkt', paragraphs: ['Im bekannten Extraction-Loop jagst du einen Returner Woodling, um den Soul of Return zu erhalten \u2014 das Schlüsselitem, das einen Weg nach Hause öffnet oder ermöglicht. Ihn früh zu holen, macht aus verzweifelter Suche kontrollierte Entscheidungen.'] },
      { heading: 'Wann du ihn sichern solltest', paragraphs: ['Einsteiger sollten die Extraktion früher sichern, als sie denken. Sobald du brauchbare Beute, eine Route raus und den Soul of Return hast, stellt sich nur noch die Frage, ob ein weiterer Kampf die ganze Tasche wert ist.'] },
      { heading: 'Häufige Extraktionsfehler', paragraphs: ['Die meisten schlechten Tode passieren, wenn Spieler zu lange bleiben, nahe Ausgänge vergessen, einem weiteren Kampf hinterherjagen oder die Ausdauer vor der letzten Flucht aufbrauchen. Extraktion ist eine Fähigkeit, keine Formsache.'], bullets: ['Warte nicht, bis die Tasche voll ist, um ans Gehen zu denken', 'Finde Ausgänge, bevor du einen Boss beginnst', 'Vermeide laute Kämpfe nahe der Extraktion, wenn möglich', 'Spare Ausdauer für den letzten Rückzug'] },
    ], related: [],
  },
  {
    slug: 'server-status', title: 'Mistfall Hunter Serverstatus, Wartung & Verbindungsprobleme',
    description: 'Serverstatus-Tracker für Mistfall Hunter: Wartungsarbeiten zum Launch, Verbindungsfehler, Warteschlangen, Trennungen und wo du Updates findest.',
    eyebrow: 'Server-Tracker', h1: 'Serverstatus und Verbindungsprobleme',
    lead: 'Die Launch-Woche eines Extraction-Spiels kann chaotisch sein. Diese Seite gibt dir einen klaren Ort, um zu prüfen, was bekannt ist, bevor du dein Build oder deine Einstellungen verdächtigst.',
    sections: [
      { heading: 'Vor dem Launch', paragraphs: ['Offizielle Serverstatus-Kanäle sind vor dem Launch möglicherweise noch nicht vollständig aktiv. Diese Seite wird aktualisiert, sobald Bellring oder die Plattform-Stores Wartungsinformationen veröffentlichen.'] },
      { heading: 'Wie du das Problem eingrenzt', paragraphs: ['Prüfe zuerst offizielle Kanäle und den Dienststatus der jeweiligen Plattform, bevor du lokal etwas änderst.'], bullets: ['Offizielle Kanäle zuerst prüfen', 'Plattform-Dienststatus bestätigen (Steam, Xbox, PlayStation, Game Pass)', 'Nicht wiederholt riskant neu verbinden', 'Fehlermeldungen notieren', 'Server-Probleme von PC-Performance-Problemen trennen'] },
      { heading: 'Warteschlange, Absturz oder lokales Netzwerk?', paragraphs: ['Eine Login-Warteschlange deutet meist auf Serverlast hin \u2013 prüfe offizielle Updates. Ein Installationsproblem im Store liegt oft am Plattformdienst \u2013 prüfe den Steam-, Xbox- oder PSN-Status. Abstürze während eines Runs deuten eher auf Client-Stabilität hin \u2013 siehe die Performance-Seite. Trennungen nur in einem bestimmten Netzwerk liegen meist an Router oder Firewall.'] },
    ], related: [],
  },
  {
    slug: 'known-issues-tracker', title: 'Mistfall Hunter Bekannte Probleme: Abstürze, Ruckler, Server & Bugs',
    description: 'Mistfall Hunter Tracker für bekannte Probleme: Abstürze, Ruckler, Login-Probleme, Serverwarteschlangen, Bug-Reports und praktische Fehlersuche.',
    eyebrow: 'Problem-Tracker', h1: 'Mistfall Hunter bekannte Probleme',
    lead: 'Bevor du an deinem PC herumschraubst, lohnt sich ein Blick hierher \u2014 viele Probleme in der Launch-Woche liegen am Server, nicht an deiner Einstellung.',
    sections: [
      { heading: 'Serverstatus vor dem eigenen PC prüfen', paragraphs: ['Bestätige auf der Serverstatus-Seite, ob bereits eine Störung oder ein Wartungsfenster bekannt ist, bevor du lokale Einstellungen änderst.'] },
      { heading: 'Symptom einem bekannten Problem zuordnen', paragraphs: ['Abstürze, Ruckler, Login-Fehler und Warteschlangen-Probleme haben meist unterschiedliche Ursachen; diese Seite gruppiert sie, damit du den richtigen Fix statt Raten anwendest.'] },
      { heading: 'Plattform und Build beim Melden angeben', paragraphs: ['Jeder Eintrag sollte Plattform, Patch-Version und Reproduktionsschritte nennen, da ein Fix auf einer Plattform nicht automatisch für eine andere gilt.'], bullets: ['Plattform und Patch-Version notieren', 'Reproduktionsschritte dokumentieren', 'Fixes nicht ungeprüft auf andere Plattformen übertragen'] },
    ], related: [],
  },
  {
    slug: 'error-code-guide', title: 'Mistfall Hunter Fehlercode-Guide: Login, Verbindung & Installation',
    description: 'Mistfall Hunter Fehlercode-Guide für Login-Fehler, Verbindungsprobleme, Installationsprobleme, Plattformdienst-Checks und Launch-Fehlersuche.',
    eyebrow: 'Fehlercode-Guide', h1: 'Mistfall Hunter Fehlercode-Guide',
    lead: 'Nicht jeder Fehler hat dieselbe Ursache. Grenze zuerst nach Plattform, Serverstatus und lokaler Einrichtung ein, bevor du etwas änderst.',
    sections: [
      { heading: 'Genauen Fehlertext oder -code lesen', paragraphs: ['Mach einen Screenshot oder notiere die genaue Meldung \u2014 Login-, Verbindungs- und Installationsfehler sehen oft ähnlich aus, haben aber unterschiedliche Lösungen.'] },
      { heading: 'Plattformweite Ausfälle ausschließen', paragraphs: ['Prüfe zuerst den Dienststatus von Steam, Xbox Live oder PSN, bevor du lokal suchst; ein plattformweiter Ausfall lässt sich nicht durch Neuinstallation beheben.'] },
      { heading: 'Die üblichen lokalen Lösungen versuchen', paragraphs: ['Wenn der Plattformstatus in Ordnung ist, hilft oft ein Neustart des Clients, das Überprüfen der Spieldateien oder ein ausstehendes Treiber-Update.'], bullets: ['Client neu starten', 'Spieldateien überprüfen', 'Auf ausstehende Plattform- oder Treiber-Updates prüfen'] },
    ], related: [],
  },
  {
    slug: 'queue-times-guide', title: 'Mistfall Hunter Wartezeiten-Guide: Matchmaking, Server & Region',
    description: 'Mistfall Hunter Wartezeiten-Guide zu Matchmaking-Wartezeiten, Serverlast, Region-Checks, Gruppengröße und Verhalten bei Launch-Spitzen.',
    eyebrow: 'Warteschlangen-Guide', h1: 'Mistfall Hunter Wartezeiten-Guide',
    lead: 'Lange Warteschlangen in der ersten Woche sind meist kein Zeichen für ein kaputtes Spiel, sondern für hohe Serverlast.',
    sections: [
      { heading: 'Ist es eine bekannte Launch-Spitze?', paragraphs: ['Lange Warteschlangen in den ersten Tagen nach dem Launch sind üblich und lösen sich meist auf, sobald die Serverkapazität skaliert; prüfe den Serverstatus, bevor du von einem Fehler ausgehst.'] },
      { heading: 'Eine ruhigere Region oder Zeit versuchen', paragraphs: ['Wenn deine Region es erlaubt, sind Warteschlangen außerhalb der regionalen Abend-Stoßzeiten meist kürzer.'] },
      { heading: 'Nicht wiederholt während eines Ausfalls neu starten', paragraphs: ['Wiederholtes Neustarten verkürzt die Warteschlange nicht und kann sogar deinen Platz darin kosten. Bei bekannten Server-Problemen lohnt sich Geduld mehr als Neustarts.'] },
    ], related: [],
  },
  {
    slug: 'patch-notes-tracker', title: 'Mistfall Hunter Patch-Notes-Tracker: Balance, Performance & Server-Updates',
    description: 'Mistfall Hunter Patch-Notes-Tracker für Balance-Änderungen, Performance-Fixes, Server-Updates, Klassen-Tuning und geprüfte Update-Zusammenfassungen.',
    eyebrow: 'Patch-Tracker', h1: 'Mistfall Hunter Patch-Notes-Tracker',
    lead: 'Diese Seite bündelt Patch-Informationen an einem Ort, damit du nicht mehrere Quellen durchsuchen musst, um zu wissen, was sich zuletzt geändert hat.',
    sections: [
      { heading: 'Zuerst den neuesten Patch prüfen', paragraphs: ['Schau zuerst nach den aktuellsten Day-One- oder Hotfix-Notizen, bevor du ein Build oder eine Einstellung für das Problem verantwortlich machst.'] },
      { heading: 'Balance-Änderungen von Bugfixes trennen', paragraphs: ['Balance-Änderungen betreffen die Strategie (Klassen-Tuning, Affix-Werte); Bugfixes betreffen die Stabilität. Beide werden getrennt verfolgt, damit ein Build-Guide nicht wegen eines reinen Stabilitäts-Patches veraltet wirkt.'] },
      { heading: 'Quelle und Datum für jeden Eintrag', paragraphs: ['Jeder Patch-Hinweis verlinkt die offizielle Quelle und nennt das genaue Patch-Datum, damit erkennbar bleibt, was aktuell ist und was überholt wurde.'], bullets: ['Offizielle Quelle je Eintrag verlinkt', 'Genaues Patch-Datum angegeben', 'Aktuelles klar von Überholtem getrennt'] },
    ], related: [],
  },
  {
    slug: 'pvp-guide', title: 'Mistfall Hunter PvP-Guide: Kämpfe, Third-Partys & Extraktions-Duelle',
    description: 'Mistfall Hunter PvP-Guide auf Deutsch: Kämpfe wählen, Third-Partys vermeiden, auf Geräusche achten, Ausdauer nutzen, Klassen-Matchups und Extraktions-Duelle überleben.',
    eyebrow: 'PvP-Guide', h1: 'Mistfall Hunter PvP-Guide',
    lead: 'PvP in einem Extraction-Spiel dreht sich weniger um faire Duelle als um Timing, Geräusche, Ausdauer und das Erkennen, wann ein anderer Hunter in deine Falle läuft.',
    sections: [
      { heading: 'Nimm nicht automatisch einen fairen Kampf an', paragraphs: ['Ein fairer Kampf ist teuer: er kostet Leben, Cooldowns, Ausdauer, Geräuschkontrolle und Zeit. Der beste PvP-Erfolg kommt aus einem Vorteil: Position, Initiative, Reichweite, Zahl oder Fluchtweg.'] },
      { heading: 'Third-Partys sind der eigentliche Boss', paragraphs: ['Lange Kämpfe ziehen andere Spieler an. Wenn du einen Bosskampf oder anhaltendes PvP hörst, entscheide, ob du eingreifen, auf den Sieger warten oder gehen solltest, bevor die ganze Zone außer Kontrolle gerät.'] },
      { heading: 'PvP-Grundlagen', paragraphs: ['Behalte Fluchtwege und Ausdauer im Blick, statt jeden Kampf bis zum Ende auszureizen.'], bullets: ['Reserviere Ausdauer für ein zweites Ausweichen', 'Loote nach einem Kill nicht sofort mit gesenktem Kopf', 'Höre vor dem Looten genau hin', 'Behalte Fluchtwege bei der Extraktion im Blick', 'Setze den Kampf bei ungünstigem Tausch zurück'] },
    ], related: [],
  },
];

const ja: LocalizedCorePage[] = [
  {
    slug: 'home', title: 'Mistfall Hunter 攻略Wiki：発売日・クラス・ビルド',
    description: 'Mistfall Hunterの日本語攻略Wiki。発売日、対応機種、初心者向けの脱出ルール、クラス、ビルド、動作トラブルを整理しています。',
    eyebrow: '日本語攻略Wiki', h1: 'Mistfall Hunter 日本語攻略Wiki',
    lead: 'ダークファンタジーとPvPvE脱出要素を組み合わせたアクションRPGについて、公式情報とベータ版の観察を分けながら、プレイヤーが必要とする答えを簡潔にまとめます。',
    sections: [
      { heading: 'Mistfall Hunterとは', paragraphs: ['プレイヤーはGyldhunterとなり、危険なGyldenmistへ入り、腐敗した敵や他プレイヤーと戦いながら戦利品を集めます。重要なのは倒した数ではなく、価値ある装備を持って無事に脱出することです。死亡すると、そのランで得た戦利品を失う可能性があります。', '当サイトでは、発売日や対応機種はSteamとXboxの公式ストアを優先します。クラス調整、マップ地点、ドロップ率などは、正式版で確認できるまで確定情報として扱いません。'] },
      { heading: '最初に確認すること', paragraphs: ['まず発売情報を確認し、次に初心者ガイドで脱出の基本を学び、自分に合うクラスを選びます。ビルドは正式版の数値が揃うまで、完成形ではなく方向性として利用してください。'], bullets: ['公式ストア上の発売日：2026年7月29日', '確認済み機種：PC、Xbox Series X|S', 'ソロまたは3人チーム', '日本語インターフェースと字幕に対応予定'] },
    ], related: [],
  },
  {
    slug: 'release-date', title: 'Mistfall Hunter 発売日・対応機種・日本語対応',
    description: 'Mistfall Hunterの発売日は2026年7月29日。PC・Xbox対応、Game Pass、日本語字幕、価格など公式ストアで確認できる情報を整理。',
    eyebrow: '発売情報', h1: 'Mistfall Hunterの発売日と対応機種',
    lead: 'SteamとXboxの公式ストアは、発売日を2026年7月29日と表示しています。地域ごとの解禁時刻は異なる可能性があるため、利用するストアで最終確認してください。',
    sections: [
      { heading: '確認されているプラットフォーム', paragraphs: ['Steam版はWindows PC向けです。XboxストアではPCとXbox Series X|S、Xbox Play Anywhere、PCおよびXbox向けGame Pass対応が案内されています。コンソールでオンラインマルチプレイを利用する場合は、対応するGame Passプランが別途必要です。', 'PlayStation版については、PlayStation Storeの製品ページまたはパブリッシャーの発表を確認できるまで、当サイトでは発売確定として扱いません。'] },
      { heading: '日本語と対応言語', paragraphs: ['Steamでは10言語が掲載され、日本語はインターフェースと字幕に対応しています。フル音声が表示されているのは英語です。日本語フルボイスの表記は現在ありません。'], bullets: ['発売日：2026年7月29日', 'PC、Xbox Series X|S', '日本語UI・字幕対応', '日本語フル音声は未掲載'] },
    ], related: [],
  },
  {
    slug: 'beginner-guide', title: 'Mistfall Hunter 初心者攻略：最初の脱出と戦利品',
    description: 'Mistfall Hunter初心者向け攻略。最初のラン、戦闘、スタミナ、戦利品、Soul of Return、脱出判断と失敗しやすい点を解説。',
    eyebrow: '初心者攻略', h1: 'Mistfall Hunter 初心者ガイド',
    lead: '最初の目標は最大ダメージではなく、一度でも安全に脱出することです。小さな利益を確保し、出口と危険な音を覚え、不要な戦闘を避ける判断を身につけましょう。',
    sections: [
      { heading: '1ランの基本的な流れ', paragraphs: ['扱いやすいクラスと失っても困らない装備で出撃します。安全な範囲から資源を集め、敵の音、他チームの位置、退路を確認します。戦利品を拾うたびに、続行する価値と失うリスクを比べてください。', 'プレビュー情報では、Returner WoodlingとSoul of Returnが帰還に関わる重要要素として紹介されています。ただし、正式版で確認するまで固定出現地点のように扱わないことが安全です。'] },
      { heading: '初心者が守る5つのルール', paragraphs: ['生還は経験と資産を残します。派手なキルより、次のランにつながる判断を優先してください。'], bullets: ['回避と撤退用のスタミナを残す', '戦利品を拾う前に周囲を確認する', '逃げる敵を深追いしない', '早めに脱出ルートを決める', '価値の高い装備は欲張らず持ち帰る'] },
    ], related: [],
  },
  {
    slug: 'classes', title: 'Mistfall Hunter クラス一覧：初心者・ソロ向けの選び方',
    description: 'Mistfall Hunterの6クラスを日本語で解説。Mercenary、Sorcerer、Blackarrow、Shadowstrix、Seer、Withered Knightの役割と選び方。',
    eyebrow: 'クラス', h1: 'Mistfall Hunter クラス一覧と選び方',
    lead: '単純な火力順位ではなく、耐久力、射程、離脱能力、操作難度、チームへの貢献で選びましょう。脱出ゲームでは、生きて戦利品を持ち帰る能力も強さの一部です。',
    sections: [
      { heading: '発表されている6クラス', paragraphs: ['Mercenaryは基本を学びやすい近接役、Sorcererは魔法と範囲制御、Blackarrowは遠距離からの圧力、Shadowstrixは機動力と奇襲、Seerはチーム支援、Withered Knightは耐久力のある近接戦を担当します。正式版のバランス調整により評価は変わる可能性があります。'], bullets: ['Mercenary：防御的な前衛', 'Sorcerer：魔法と範囲制御', 'Blackarrow：遠距離と精密攻撃', 'Shadowstrix：機動力と奇襲', 'Seer：支援とチーム補助', 'Withered Knight：耐久と近接圧力'] },
      { heading: '初心者とソロの選び方', paragraphs: ['初心者はミスを立て直せる防御手段を優先してください。ソロでは戦闘を中断する移動力や射程も重要です。チームなら役割を分担できるため、支援や制御へ特化しやすくなります。'] },
    ], related: [],
  },
  {
    slug: 'builds', title: 'Mistfall Hunter ビルド攻略：クラス・役割・特性',
    description: 'Mistfall Hunterのビルドを日本語で解説。ソロ、PvP、ボス、チーム支援の目的から装備とAffixの優先順位を決める方法。',
    eyebrow: 'ビルド', h1: 'Mistfall Hunter ビルドとAffix',
    lead: '正式版の詳細数値が揃う前は、ビルドを確定ランキングではなく、目的に合った方向性として考えます。クラス、役割、装備、Affixを一つの目標へ合わせることが重要です。',
    sections: [
      { heading: '目的からビルドを作る', paragraphs: ['安全なソロ脱出、PvPでの圧力、ボスへの安定火力、味方支援など、最初に目的を一つ決めます。そのうえで耐久、機動力、射程、制御、瞬間火力の優先順位を設定します。目的が曖昧なビルドは、強そうな装備を集めても具体的な弱点を解決できません。'] },
      { heading: 'Affixを評価する方法', paragraphs: ['ベータ版で確認された名称は計画の参考になりますが、効果と数値は正式版で再確認が必要です。同じ目的を支える効果を組み合わせ、わずかな理論火力のために脱出成功率を大きく下げないようにします。'], bullets: ['役割と目標を先に決める', '最低限の防御を確保する', '単独数値より相乗効果を見る', 'PvEとPvPを分けて評価する'] },
    ], related: [],
  },
  {
    slug: 'guides', title: 'Mistfall Hunter 日本語攻略ガイド一覧',
    description: 'Mistfall Hunterの日本語攻略一覧。発売情報、初心者、脱出、クラス、ビルド、動作トラブルを必要な順番で確認できます。',
    eyebrow: '攻略ハブ', h1: 'Mistfall Hunter 日本語攻略一覧',
    lead: '購入前、最初の出撃前、技術的な問題が起きたときに必要なページを、プレイヤーの状況に合わせて整理しています。',
    sections: [
      { heading: '最初の出撃まで', paragraphs: ['発売日、対応機種、日本語対応を確認したら、初心者ガイドで脱出の基本を学びます。次に操作難度と役割からクラスを選び、最後にビルドの方向性を決めると、未確認の細かな数値に振り回されません。'] },
      { heading: '問題別の読み方', paragraphs: ['初心者ガイドはリスクと脱出判断、クラスページはメイン選び、ビルドページは装備の優先順位を扱います。動作が重い場合は、PerformanceページでPC側とサーバー側の原因を切り分けます。'], bullets: ['発売日と対応機種', '最初のランと脱出', 'クラス選択', 'ビルド方針', 'FPS低下・カクつき・クラッシュ'] },
    ], related: [],
  },
  {
    slug: 'performance', title: 'Mistfall Hunter 動作改善：FPS・カクつき・クラッシュ',
    description: 'Mistfall HunterのFPS低下、カクつき、クラッシュを切り分ける日本語ガイド。PC設定、ドライバー、サーバー障害の確認手順。',
    eyebrow: '動作トラブル', h1: 'Mistfall Hunterの動作を改善する方法',
    lead: '設定を一度に全部変えず、再現条件を確認してから一項目ずつテストします。PC側、ゲーム側、ネットワーク側のどこに原因があるかを切り分けることが近道です。',
    sections: [
      { heading: '最初に行う確認', paragraphs: ['PCを再起動し、不要なオーバーレイを止め、空き容量とGPUドライバーを確認します。問題がすべての場所で起きるのか、特定マップだけなのか、混雑時間だけなのかを記録してください。ネットワーク障害を画質設定だけで直そうとする無駄を減らせます。'], bullets: ['ゲームファイルを検証する', 'オーバーレイを一時停止する', 'FPS上限を設定する', '影とエフェクトを個別に下げる', '発生時刻とPC構成を記録する'] },
      { heading: 'パッチや公式対応を待つべき場合', paragraphs: ['同じクラッシュやログイン失敗が多数のプレイヤーに同時発生している場合、再インストールを最初の手段にする必要はありません。エラー表示、発生時刻、再現手順を保存し、公式の障害情報と照合してください。'] },
    ], related: [],
  },
  {
    slug: 'about', title: 'Mistfall Hunter 攻略Wikiについて：情報源と編集方針',
    description: '非公式Mistfall Hunter攻略Wikiの情報源、更新方針、公式情報とベータ観察の区別、誤情報を避ける品質ルールを説明します。',
    eyebrow: 'サイト情報', h1: 'Mistfall Hunter 攻略Wikiについて',
    lead: 'プレイヤーの疑問に、短く確認可能な答えを提供する独立ファンサイトです。Bellring GamesおよびSkystone Gamesの公式サイトではありません。',
    sections: [
      { heading: '情報源と訂正', paragraphs: ['発売日、対応機種、言語はSteamとXboxの公式ストアを優先します。メディアの試遊内容は観察情報として明記します。正式版の数値、マップ地点、ドロップ率は、再現可能な確認ができるまで確定情報として掲載しません。'] },
      { heading: 'インデックス品質ルール', paragraphs: ['各ページは一つの具体的な質問へ答える必要があります。推測、準備中の文章、自動生成しただけの重複ページは検索対象にしません。公式発表や検証可能なデータによって内容が変わった場合は、更新日と根拠を確認して訂正します。'] },
    ], related: [],
  },
  {
    slug: 'weapons', title: 'Mistfall Hunter 武器・戦闘ガイド',
    description: 'Mistfall Hunterの武器と戦闘を日本語で解説。近接、遠距離、魔法、スタミナ、ブロック、パリィ、回避不可攻撃、武器選びの考え方。',
    eyebrow: '戦闘データベース', h1: 'Mistfall Hunter 武器と戦闘',
    lead: '戦闘で重要なのは役割の明確さです。自分のキットが打ち合い、キャイティング、瞬間火力、支援、リセットのどれを狙うのかを、相手より先に理解しましょう。',
    sections: [
      { heading: '武器ごとの役割', paragraphs: ['既知のクラス構成には明確な武器の個性があります。Mercenaryは剣、盾、ハンマーと確定反撃を軸にし、Blackarrowは弓による遠距離圧力、Shadowstrixは短剣とステルス奇襲、Sorcererは魔法の射程で戦い、Seerは回復と制御で支援し、Withered Knightは重量近接での圧力を担います。'] },
      { heading: 'スタミナ・ブロック・パリィ', paragraphs: ['スタミナは第二の体力ゲージだと考えてください。ブロックとパリィは、離脱に十分なスタミナを残せる時だけ強力です。回避不可・赤色表示の攻撃はブロックせず回避しましょう。'] },
      { heading: '武器プランの選び方', paragraphs: ['初心者はミスを許容できる扱いやすい武器を選ぶべきです。ソロプレイヤーには離脱手段か射程が必要です。チームなら仲間が弱点を補えるため、より尖った特化が可能です。'], bullets: ['初心者：防御的な近接と単純な確定反撃', 'ソロ：ステルス、射程、離脱手段', 'チーム：支援、制御、高瞬間火力', 'ボス対策：持続的で安全なダメージと回復'] },
    ], related: [],
  },
  {
    slug: 'bosses', title: 'Mistfall Hunter ボス・PvE攻略',
    description: 'Mistfall HunterのボスとPvEを日本語で解説。Mist Lord、Corroded、ボス前準備、報酬の持ち帰り方、チームの役割分担。',
    eyebrow: 'PvEデータベース', h1: 'Mistfall Hunter ボスとPvE',
    lead: 'ボスは単なる戦利品袋ではありません。脱出ゲームでは、長いPvE戦闘は自分の位置を周囲に知らせてしまい、他の猎人に横取りされる隙を生みます。',
    sections: [
      { heading: 'Mist Lord', paragraphs: ['Mist Lordは各ゾーンの高価値なPvE対象です。より良い報酬、より難しいメカニクス、周辺でのPvPリスク増加を想定してください。脱出計画と十分な物資、持ち込んだ装備をリスクにする理由がある時だけ挑みましょう。'] },
      { heading: 'Corroded', paragraphs: ['Corrodedは霧に歪められた徘徊型の敵で、時間・体力・資源を消耗させます。また音のトラップでもあり、戦闘が長引くとボス戦が始まる前に他プレイヤーを引き寄せてしまいます。'] },
      { heading: 'ボス攻略のルーティング', paragraphs: ['良いボス攻略はダメージではなく偵察から始まります。近くの脱出手段を確認し、PvPの気配に注意し、必要な分だけ処理し、他チームが来た場合に続行するか離脱するかを事前に決めておきましょう。'], bullets: ['最寄りの脱出ルートを把握する', '離脱用にスタミナと回復を残す', '周囲にプレイヤーがいる時は戦利品に固執しない', '学習中は小さな成果を早めに確保する'] },
    ], related: [],
  },
  {
    slug: 'loot', title: 'Mistfall Hunter 戦利品・装備・Affix',
    description: 'Mistfall Hunterの戦利品を日本語で解説。装備、Affix、資源、持ち帰り優先度、脱出価値の考え方。',
    eyebrow: '戦利品データベース', h1: 'Mistfall Hunter 戦利品・装備・Affix',
    lead: '戦利品は霧の外に持ち帰って初めて意味を持ちます。最良のインベントリ判断は、理論値が最大のものではなく、確実に持ち帰れるものであることが多いです。',
    sections: [
      { heading: '戦利品の価値の考え方', paragraphs: ['すべてのアイテムには2つの価値があります。使用時の強さと、脱出できた時の価値です。初心者は、リスクの高い欲張った拾い方より、確実なアップグレード、ビルドに関わるAffix、成長に必要な資源を優先すべきです。'] },
      { heading: 'Affixが装備をビルドに変える', paragraphs: ['Affixはクラスを瞬間火力、生存、クールダウン回復、制御、支援のいずれかに寄せる補正です。実際の数値はまだ確認が必要なため、ビルドページは最終的な最強装備リストではなく方向性を追っています。'] },
      { heading: '最初に持ち帰るべきもの', paragraphs: ['メタが定まる前は実践的なルールを使いましょう。今のクラスを強化する装備を残し、希少資源は早めに持ち帰り、戦闘や脱出を犠牲にしてまで余分な荷物を持たないことです。'], bullets: ['クラスのアップグレード', '希少資源', 'ビルドを決定づけるAffix', '確認され次第、クエストや解放アイテム', '今後のローリスクラン用の予備装備'] },
    ], related: [],
  },
  {
    slug: 'soul-of-return', title: 'Mistfall Hunter Soul of Return：脱出の仕組み',
    description: 'Mistfall HunterのSoul of Returnを日本語で解説。Returner Woodling、脱出の鍵、出口、タイミング、ラン全体を失わない方法。',
    eyebrow: '脱出ガイド', h1: 'Soul of Return：生きて脱出する方法',
    lead: 'Soul of Returnはランを左右する目的地です。帰る手段がなければ、どれだけ良い戦利品も他人へのおとりに過ぎません。',
    sections: [
      { heading: 'Soul of Returnの役割', paragraphs: ['既知の脱出ループでは、Returner Woodlingを狩ってSoul of Returnを入手します。これは帰還ルートを開く、あるいは可能にする鍵となるアイテムです。早めに入手することで、ランが必死の探索から制御された判断へと変わります。'] },
      { heading: 'いつ確保すべきか', paragraphs: ['初心者は思っているより早く脱出手段を確保すべきです。十分な戦利品、出口ルート、Soul of Returnが揃った時点で、あとは「もう一戦がバッグ全体を賭ける価値があるか」という判断だけになります。'] },
      { heading: 'よくある脱出の失敗', paragraphs: ['多くの無駄死には、長居しすぎる、近くの出口を忘れる、もう一戦を追いかける、最後の離脱前にスタミナを使い切る、といった状況で起こります。脱出は形式ではなく技術です。'], bullets: ['バッグが満杯になってから離脱を考えない', 'ボスに挑む前に出口を見つけておく', '可能な限り脱出地点付近での騒がしい戦闘を避ける', '最後の離脱用にスタミナを残す'] },
    ], related: [],
  },
  {
    slug: 'server-status', title: 'Mistfall Hunter サーバー状況・メンテナンス・接続問題',
    description: 'Mistfall Hunterのサーバー状況を追跡。発売時のメンテナンス、接続エラー、待機列問題、切断、地域の問題と最新情報の確認場所。',
    eyebrow: 'サーバー追跡', h1: 'サーバー状況と接続問題',
    lead: '脱出ゲームの発売週は混乱しがちです。このページは、自分のビルドや設定を疑う前に、何が分かっているかを確認できる場所です。',
    sections: [
      { heading: '発売前の状況', paragraphs: ['発売前は公式のサーバー状況チャンネルがまだ完全には稼働していない可能性があります。Bellringやプラットフォームストアがメンテナンス情報を公開次第、このページを更新します。'] },
      { heading: '問題を切り分ける方法', paragraphs: ['ローカルで何かを変更する前に、まず公式チャンネルと各プラットフォームのサービス状況を確認してください。'], bullets: ['まず公式チャンネルを確認する', 'プラットフォームのサービス状況を確認する（Steam、Xbox、PlayStation、Game Pass）', '何度もリスクを取って再接続しない', 'エラーメッセージを記録する', 'サーバーの問題とPCのパフォーマンス問題を区別する'] },
      { heading: '待機列・クラッシュ・ローカルネットワークのどれか', paragraphs: ['ログイン待機列は主にサーバー負荷を示します——公式の最新情報を確認してください。ストアでのインストール問題は多くの場合プラットフォームサービスが原因です——Steam、Xbox、PSNの状況を確認してください。ラン中のクラッシュはクライアントの安定性の問題である可能性が高いです——パフォーマンスページを参照してください。特定のネットワークでのみ切断される場合は、ルーターやファイアウォールが原因であることがほとんどです。'] },
    ], related: [],
  },
  {
    slug: 'known-issues-tracker', title: 'Mistfall Hunter 既知の不具合：クラッシュ・カクつき・サーバー・バグ',
    description: 'Mistfall Hunterの既知の不具合を追跡。クラッシュ、カクつき、ログイン問題、サーバー待機列、バグ報告と実践的な切り分け方法。',
    eyebrow: '不具合追跡', h1: 'Mistfall Hunter 既知の不具合',
    lead: 'PC側をあれこれ触る前に確認してください——発売週の問題の多くは設定ではなくサーバー側が原因です。',
    sections: [
      { heading: '自分のPCより先にサーバー状況を確認', paragraphs: ['ローカル設定を変更する前に、サーバー状況ページで障害やメンテナンスがすでに報告されていないか確認してください。'] },
      { heading: '症状を既知の問題に照合', paragraphs: ['クラッシュ、カクつき、ログイン失敗、待機列の問題はそれぞれ原因が異なることが多いため、このページでは分類して、当てずっぽうではなく正しい対処法を確認できるようにしています。'] },
      { heading: '報告時にプラットフォームとビルドを記載', paragraphs: ['各項目にはプラットフォームとパッチバージョンを記録すべきです。あるプラットフォームでの修正が別のプラットフォームに当てはまるとは限りません。'], bullets: ['プラットフォームとパッチバージョンを記録', '再現手順を明記', '修正内容を他プラットフォームに安易に適用しない'] },
    ], related: [],
  },
  {
    slug: 'error-code-guide', title: 'Mistfall Hunter エラーコードガイド：ログイン・接続・インストール',
    description: 'Mistfall Hunterのエラーコードガイド。ログインエラー、接続問題、インストール問題、プラットフォームサービス確認、発売週のトラブル対処法。',
    eyebrow: 'エラーコード', h1: 'Mistfall Hunter エラーコードガイド',
    lead: 'すべてのエラーが同じ原因とは限りません。何かを変更する前に、まずプラットフォーム、サーバー状況、ローカル環境の順に切り分けましょう。',
    sections: [
      { heading: '正確なエラー文言・コードを確認', paragraphs: ['スクリーンショットを撮るか正確なメッセージを書き留めてください——ログイン、接続、インストールのエラーは似て見えても対処法が異なります。'] },
      { heading: 'プラットフォーム全体の障害を除外', paragraphs: ['ローカルで対処する前に、まずSteam、Xbox Live、PSNのサービス状況を確認してください。プラットフォーム全体の障害は再インストールでは解決しません。'] },
      { heading: '標準的なローカル対処を試す', paragraphs: ['プラットフォーム状況に問題がなければ、クライアントの再起動やゲームファイルの検証、保留中のドライバー更新の確認を試してください。'], bullets: ['クライアントを再起動する', 'ゲームファイルを検証する', '保留中のプラットフォームやドライバーの更新を確認する'] },
    ], related: [],
  },
  {
    slug: 'queue-times-guide', title: 'Mistfall Hunter 待機時間ガイド：マッチメイキング・サーバー・地域',
    description: 'Mistfall Hunterの待機時間ガイド。マッチメイキングの待ち時間、サーバー負荷、地域確認、パーティ人数、発売直後の混雑時の対処法。',
    eyebrow: '待機列ガイド', h1: 'Mistfall Hunter 待機時間ガイド',
    lead: '発売週の長い待機列は、ゲームが壊れているサインではなく、サーバー負荷が高いサインであることがほとんどです。',
    sections: [
      { heading: '既知の発売週の混雑かどうか確認', paragraphs: ['発売直後の数日間に待機列が長くなるのはよくあることで、サーバー容量が拡張されるにつれ通常は解消します。何か壊れていると決めつける前にサーバー状況を確認してください。'] },
      { heading: '混雑の少ない地域・時間帯を試す', paragraphs: ['地域設定が許す場合、地域のピーク時間帯を避けると待機列は短くなる傾向があります。'] },
      { heading: '障害中に何度も再起動しない', paragraphs: ['繰り返しの再起動は待機列を短縮せず、むしろ順番待ちの位置を失う可能性があります。既知のサーバー問題の場合は再起動より待つ方が得策です。'] },
    ], related: [],
  },
  {
    slug: 'patch-notes-tracker', title: 'Mistfall Hunter パッチノート追跡：バランス・パフォーマンス・サーバー更新',
    description: 'Mistfall Hunterのパッチノートを追跡。バランス調整、パフォーマンス修正、サーバー更新、クラス調整、検証済みの更新まとめ。',
    eyebrow: 'パッチ追跡', h1: 'Mistfall Hunter パッチノート追跡',
    lead: 'このページはパッチ情報を一箇所にまとめ、最新の変更点を確認するために複数の情報源を探し回らなくて済むようにします。',
    sections: [
      { heading: '最新パッチをまず確認', paragraphs: ['ビルドや設定が原因だと決めつける前に、まず最新のDay 1パッチやホットフィックスの内容を確認してください。'] },
      { heading: 'バランス調整とバグ修正を区別', paragraphs: ['バランス調整は戦略（クラス調整、Affix数値）に影響し、バグ修正は安定性に影響します。安定性だけのパッチでビルド攻略が古くなったと誤解しないよう、別々に記録します。'] },
      { heading: '各項目に情報源と日付を記載', paragraphs: ['各パッチ情報には公式情報源をリンクし、正確なパッチ日を明記します。これにより、どれが最新でどれが上書きされたかが分かります。'], bullets: ['各パッチ情報に公式情報源をリンク', '正確なパッチ日を明記', '最新情報と古い情報を明確に区別'] },
    ], related: [],
  },
  {
    slug: 'pvp-guide', title: 'Mistfall Hunter PvPガイド：交戦・横取り・脱出地点デュエル',
    description: 'Mistfall HunterのPvPガイド。戦闘の選び方、横取り回避、音を聞く、スタミナ管理、クラス相性、脱出地点での生き残り方。',
    eyebrow: 'PvPガイド', h1: 'Mistfall Hunter PvPガイド',
    lead: '脱出ゲームにおけるPvPは公平な一騎打ちではなく、タイミング、音、スタミナ、そして相手が罠にはまろうとしているかどうかの判断です。',
    sections: [
      { heading: '公平な戦いを前提にしない', paragraphs: ['公平な戦いはコストが高いです。体力、クールダウン、スタミナ、音の管理、時間を消費します。最良のPvPは有利な状況——position、先手、射程、人数、退路——から生まれます。'] },
      { heading: '横取りこそ本当のボス', paragraphs: ['長引く戦闘は他プレイヤーを引き寄せます。ボス戦や長引くPvPの音が聞こえたら、参戦するか、勝者を待つか、ゾーン全体が制御不能になる前に離脱するかを判断してください。'] },
      { heading: 'PvPの基本', paragraphs: ['一戦ごとに退路とスタミナを意識し、最後まで無理に戦い続けないようにしましょう。'], bullets: ['2回目の回避のためにスタミナを残す', 'キル後すぐにうつむいて漁らない', '漁る前によく音を聞く', '脱出地点の入口を把握しておく', '不利な打ち合いになったら仕切り直す'] },
    ], related: [],
  },
];

export const localizedCorePages: Record<'de' | 'ja', LocalizedCorePage[]> = { de, ja };

export function getLocalizedCorePage(lang: 'de' | 'ja', slug: string) {
  return localizedCorePages[lang].find((page) => page.slug === slug);
}

export function localizedCorePath(lang: Lang, slug: string) {
  const suffix = slug === 'home' ? '/' : `/${slug}/`;
  return lang === 'en' ? suffix : `/${lang}${suffix}`;
}
