import type { Lang } from '../i18n';
import { officialLanguageCorePages, type FirstEditionLang } from './officialLanguageCorePages';

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
      { heading: 'Der beste Einstieg', paragraphs: ['Beginne mit Release, Preis und Plattformen, lerne danach den Extraction-Loop und vergleiche die Klassen. Frühe Builds sind Richtungen statt endgültige Best-in-Slot-Listen.'], bullets: ['Globaler Launch: 29. Juli 2026, 18:00 PT / 30. Juli, 01:00 UTC', 'Plattformen: PC, Xbox Series X|S und PlayStation 5', 'Standard: 24,99 US-Dollar; Deluxe: 39,99 US-Dollar', 'Cross-Platform-Matchmaking offiziell bestätigt', 'Deutsche Oberfläche und Untertitel'] },
    ], related: [],
  },
  {
    slug: 'release-date', title: 'Mistfall Hunter Release: Datum, Plattformen & Sprachen',
    description: 'Mistfall Hunter erscheint laut Steam und Xbox am 29. Juli 2026. Alle bestätigten Plattformen, Game-Pass- und Sprachinformationen auf Deutsch.',
    eyebrow: 'Release', h1: 'Mistfall Hunter: Release-Datum und Plattformen',
    lead: 'Der offizielle globale Launch ist am 29. Juli 2026 um 18:00 PT, entsprechend 30. Juli um 01:00 UTC. PC, Xbox Series X|S und PlayStation 5 starten gleichzeitig.',
    sections: [
      { heading: 'Was ist offiziell bestätigt?', paragraphs: ['Steam führt Windows PC, der Xbox Store Xbox Series X|S und Xbox Play Anywhere. Bellring Games hat außerdem PlayStation 5 für den gleichzeitigen Launch bestätigt. Cross-Platform-Matchmaking ist laut offizieller Launch-FAQ verfügbar.', 'Die Standard Edition kostet offiziell 24,99 US-Dollar, Deluxe 39,99 US-Dollar. Standard-Besitzer können später für 15 US-Dollar upgraden. Regionale Preise und Steuern werden im jeweiligen Store angezeigt.'] },
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
  {
    slug: 'review', title: 'Mistfall Hunter Test: Eindrücke vom Launch-Tag',
    description: 'Mistfall Hunter ist am 29. Juli 2026 gestartet. Bestätigt: der Mace-Seer-Nerf, kein Duo-Matchmaking, kein Preload, PS5-Pro-Support.',
    eyebrow: 'Launch-Tag', h1: 'Mistfall Hunter Test: Eindrücke vom Launch-Tag',
    lead: 'Mistfall Hunter ist jetzt live. Ein bewertetes Urteil gibt es noch nicht \u2014 dafür braucht es echte Spielzeit über den ersten Tag hinaus \u2014, aber der Launch-Build wirkt bereits spürbar anders als die Beta.',
    sections: [
      { heading: 'Die größte Änderung zum Launch: der Mace-Seer-Nerf', paragraphs: ['Seers Mace-Shapeshift war die dominante Solo-Wahl in der Beta und erhielt die stärkste Abschwächung aller Klassenänderungen zum Launch. Wer in der Beta auf Mace Seer gesetzt hat, sollte am Launch-Tag mit einer spürbar schwächeren Version rechnen \\u2014 Beta-Build-Guides für Seer gelten bis zur Nachtestung als veraltet.'] },
      { heading: 'Was Beta- und Demo-Spieler sagten', paragraphs: ['Berichte zu Demo und Beta beschreiben bewusstes, Souls-artiges Kampftempo gepaart mit typischer Extraction-Spannung: Kämpfe zählen, weil ein verlorener Lauf alles kostet, was man mitgebracht hat.'], bullets: ['Kampf wirkt bewusst, nicht hektisch', 'Extraktionsrisiko ist der zentrale Reiz, nicht nur der Kampf', 'Sechs Klassen mit je zwei Waffenhaltungen boten echte Build-Vielfalt im Test', 'Beta-Feedback floss direkt in Launch-Anpassungen ein, etwa bei Crow Storm und Mace Shapeshift'] },
      { heading: 'Was der Launch-Tag konkret bedeutet', paragraphs: ['Es gibt kein Preload \\u2014 der Download startet erst mit Serveröffnung, geplant sind rund 45 GB. Matchmaking unterstützt Solo oder Dreier-Trupps, aber Duo-Matchmaking (zwei Spieler) ist zum Launch nicht verfügbar. PS5-Spieler erhalten PS5-Pro-Support, genaue grafische Details hat Bellring noch nicht genannt. Season 1 (Soul Hunt) inklusive kostenlosem Battle Pass ist ab Tag eins enthalten; laut Bellring dauern Seasons etwa drei bis vier Monate mit Fortschritts-Reset zwischen den Seasons.'] },
      { heading: 'Das Versprechen gegen Pay-to-Win', paragraphs: ['Bellrings eigene Store-Texte auf Steam und Xbox betonen, dass es keine Pay-to-Win-Mechaniken und keine käuflichen Statuswerte gibt. Was über Kosmetik hinausgeht, ist noch nicht final geklärt \\u2014 siehe die Pay-to-Win-Seite für Details.'] },
      { heading: 'Was noch echte Spielzeit braucht', paragraphs: ['Ein echtes Urteil braucht Serverstabilität, echte Matchmaking-Population über das erste Wochenende hinaus und ob die Extraktionswirtschaft nach den Balance-Änderungen trägt.'], bullets: ['Live-Klassenbalance nach dem Mace-Seer-Nerf und weiteren Änderungen', 'Serverstabilität und Wartezeiten in den ersten Tagen', 'Langfristige Extraktionswirtschaft über Season-Resets hinweg', 'Wie sich das neu gestaltete Ranglistensystem im großen Maßstab schlägt'] },
    ], related: [],
  },
  {
    slug: 'pay-to-win', title: 'Ist Mistfall Hunter Pay-to-Win? Was Bellring bestätigt hat',
    description: 'Bellring Games erklärt, dass Mistfall Hunter keine Pay-to-Win-Mechaniken und keine käuflichen Statuswerte hat. Was zum Launch bestätigt ist.',
    eyebrow: 'Monetarisierung', h1: 'Ist Mistfall Hunter Pay-to-Win?',
    lead: 'Bellrings eigenes Marketing ist an diesem Punkt ungewöhnlich direkt: kein Pay-to-Win, keine käuflichen Statuswerte. Das Spiel ist jetzt live \u2014 das ist aktuell bestätigt.',
    sections: [
      { heading: 'Was Bellring gesagt hat', paragraphs: ['Sowohl die offizielle Steam-Seite als auch das Marketing der offenen Beta wiederholen dieselbe Aussage: keine Pay-to-Win-Mechaniken, keine käuflichen Statuswerte \u2014 der Sieg soll von Können und Vorbereitung abhängen, nicht vom Geldbeutel.'] },
      { heading: 'Was zum Launch bestätigt ist', paragraphs: ['Der Preis ist jetzt bestätigt: Standard Edition 24,99 $, Deluxe Edition 39,99 $ (oder Upgrade für 15 $), mit 10 % Launch-Rabatt bis 12. August 2026. Season 1 (Soul Hunt) kommt mit einem komplett kostenlosen Battle Pass \u2014 kein bezahlter Season Pass zum Launch. Kosmetik bleibt, passend zu den Avatar-Rahmen, Posen und Emotes aus der Beta, das bisher bestätigte Shop-Muster.'], bullets: ['Standard 24,99 $ / Deluxe 39,99 $, bestätigt', 'Season-1-Battle-Pass ist kostenlos, nicht bezahlt', 'Rein kosmetische Belohnungen sind das bestätigte Shop-Muster', 'Genaue Preise für Komfort-Items über Kosmetik hinaus noch nicht im Detail bekannt'] },
    ], related: [],
  },
  {
    slug: 'codes', title: 'Mistfall Hunter Codes: Tracker für aktive Gutscheincodes',
    description: 'Mistfall Hunter Codes-Tracker. Zum Launch gibt es keine aktiven Gutscheincodes; diese Seite wird sofort aktualisiert, sobald Bellring Games welche ankündigt.',
    eyebrow: 'Code-Tracker', h1: 'Mistfall Hunter Codes',
    lead: 'Derzeit gibt es keine aktiven Mistfall-Hunter-Gutscheincodes. Diese Seite soll eine ehrliche, aktuelle Antwort geben statt wiederholter Fake-Codes.',
    sections: [
      { heading: 'Gibt es gerade aktive Codes?', paragraphs: ['Nein. Bellring Games hat bisher kein Gutscheincode-System für Mistfall Hunter veröffentlicht. Jeder anderswo gelistete Code, der Belohnungen verspricht, sollte als unbestätigt gelten, bis eine offizielle Quelle ihn bestätigt.'] },
      { heading: 'Was bekamen Beta-Teilnehmer stattdessen?', paragraphs: ['Statt Gutscheincodes gab es eine direkte Kontoverknüpfung: Kosmetik aus Sonder-Events der offenen Beta im Juni 2026 kann auf dasselbe Konto zum Launch übertragen werden \u2014 automatisch, ohne Code-Eingabe.'] },
      { heading: 'Wird es nach dem Launch Codes geben?', paragraphs: ['Offiziell weder bestätigt noch dementiert. Falls Mistfall Hunter dem üblichen Muster folgt, wird diese Seite mit genauem Code, Belohnung und Ablaufdatum aktualisiert.'] },
      { heading: 'Wie man Code-Betrug vermeidet', paragraphs: ['Sei skeptisch bei Seiten oder Videos, die vor dem Launch "kostenlose Gyldenblood-Codes" versprechen \u2014 dafür gibt es aktuell keinen offiziellen Mechanismus. Vertraue nur Codes von Bellrings eigenen Kanälen oder seriösen Stores.'] },
    ], related: [],
  },
  {
    slug: 'crossplay-status', title: 'Ist Mistfall Hunter Crossplay? Ja \u2014 PC, Xbox & PS5',
    description: 'Volles Cross-Play über PC, PS5 und Xbox Series X|S ist bestätigt und live. Mitspieler auf unterschiedlichen Plattformen können jetzt gemeinsam spielen.',
    eyebrow: 'Crossplay-Status', h1: 'Ist Mistfall Hunter Crossplay?',
    lead: 'Ja \u2014 volles Cross-Play über PC, PS5 und Xbox Series X|S ist bestätigt und live. Trupps auf unterschiedlichen Plattformen können jetzt zusammenspielen.',
    sections: [
      { heading: 'Was bestätigt ist', paragraphs: ['Cross-Play über PC, PlayStation 5 und Xbox Series X|S ist bestätigt \u2014 Mitspieler unterschiedlicher Plattformen können gemeinsam in denselben Zonen jagen.'] },
      { heading: 'Was noch offen ist', paragraphs: ['Cross-Progression \u2014 also ein gemeinsames Konto mit geteilten Freischaltungen über Plattformen hinweg \u2014 ist ein separates Feature und bisher nicht in gleicher Form bestätigt.'] },
    ], related: [],
  },
  {
    slug: 'price-status', title: 'Mistfall Hunter Preis: Standard, Deluxe & Game-Pass-Status',
    description: 'Standard Edition kostet 24,99 $, Deluxe 39,99 $ mit einem Upgrade für 15 $, plus 10 % Launch-Rabatt. Ab Tag eins im Xbox Game Pass, nicht in PS Plus enthalten.',
    eyebrow: 'Preis & Zugang', h1: 'Mistfall Hunter Preis & Zugang',
    lead: 'Standard Edition kostet 24,99 $, Deluxe 39,99 $ mit einem Upgrade für 15 $, dazu ein Launch-Rabatt von 10 %. Ab Tag eins im Xbox Game Pass, nicht in PS Plus.',
    sections: [
      { heading: 'Bestätigter Preis', paragraphs: ['Standard Edition: 24,99 $. Deluxe Edition: 39,99 $, mit einem separaten Upgrade-Pfad für 15 $ von Standard auf Deluxe.'] },
      { heading: 'Game Pass und PS Plus', paragraphs: ['Ab Tag eins im Xbox Game Pass für Xbox und PC enthalten. Nicht Teil von PS Plus \u2014 PS5-Spieler müssen das Spiel separat kaufen.'] },
    ], related: [],
  },
  {
    slug: 'gameplay-overview', title: 'Mistfall Hunter Gameplay: Kernschleife, Kampf & Extraktion erklärt',
    description: 'Mistfall Hunter Gameplay auf Deutsch erklärt: dunkles Fantasy-PvPvE-Extraction-Spiel \u2014 betreten, kämpfen, looten, extrahieren und rechtzeitig gehen.',
    eyebrow: 'Gameplay', h1: 'Mistfall Hunter Gameplay erklärt',
    lead: 'Mistfall Hunter lässt sich am besten als dunkles Fantasy-PvPvE-Extraction-Spiel beschreiben: betreten, kämpfen, looten, Extraktion sichern und gehen, bevor Gier alles kostet.',
    sections: [
      { heading: 'Die Kernschleife', paragraphs: ['Jeder Lauf läuft auf dieselben Kernentscheidungen hinaus: was bekämpft wird, was gelootet wird, wann ein Kampf sicher ist, und ob man weiter drängt oder rechtzeitig zum Soul of Return zurückkehrt, bevor es ein anderer Hunter tut.'] },
      { heading: 'PvPvE-Struktur', paragraphs: ['Monster und rivalisierende Hunter teilen sich dieselbe Karte, sodass ein PvE-Kampf jederzeit in einen PvP-Kampf umschlagen kann. Sechs Klassen mit jeweils mehreren Waffenhaltungen sorgen für unterschiedliche Spielweisen statt eines einzigen festen Kits.'] },
    ], related: [],
  },
  {
    slug: 'mercenary-beginner-build', title: "Mistfall Hunter Mercenary Anfänger-Build: Schild, Hammer & sichere Trades",
    description: "Für neue Spieler, die eine verzeihende Nahkampfklasse wollen: defensives Lernen und einfache Konterfenster stehen im Vordergrund.",
    eyebrow: 'Build-Guide', h1: "Mercenary Anfänger-Build",
    lead: "Für neue Spieler, die eine verzeihende Nahkampfklasse wollen: defensives Lernen und einfache Konterfenster stehen im Vordergrund.",
    sections: [
      { heading: "Verteidigung zuerst", paragraphs: ["Baue auf Blocken und einfache Konterfenster statt auf riskante Offensive — so lernst du Mercenary, ohne ständig zu sterben."] },
      { heading: "Worauf du achten musst", paragraphs: ["Zu viel Blocken kostet Ausdauer, und ein Ausdauer-Kollaps mitten im Kampf ist gefährlich. Verfolge Gegner nicht in unbekannte PvP-Bereiche."] },
    ], related: [],
  },
  {
    slug: 'mercenary-solo-build', title: "Mistfall Hunter Mercenary Solo-Build: Defensive Routen & Extraktionssicherheit",
    description: "Für Solospieler, die Widerstandsfähigkeit statt Stealth bevorzugen: sichere Trades, Routendisziplin und frühe Extraktion.",
    eyebrow: 'Build-Guide', h1: "Mercenary Solo-Build",
    lead: "Für Solospieler, die Widerstandsfähigkeit statt Stealth bevorzugen: sichere Trades, Routendisziplin und frühe Extraktion.",
    sections: [
      { heading: "Sichere Trades und Routendisziplin", paragraphs: ["Gehe Kämpfe nur ein, wenn du sie kontrollierst, und extrahiere lieber früh als spät."] },
      { heading: "Worauf du achten musst", paragraphs: ["Langsame Rotationen können dazu führen, dass du nach langen Kämpfen umzingelt wirst."] },
    ], related: [],
  },
  {
    slug: 'mercenary-pvp-build', title: "Mistfall Hunter Mercenary PvP-Build: Schilddruck, Paraden & Punish-Timing",
    description: "Für PvP-Spieler, die eine stabile Frontline wollen: Blocken, perfektes Guard-Timing und kontrollierter Druck.",
    eyebrow: 'Build-Guide', h1: "Mercenary PvP-Build",
    lead: "Für PvP-Spieler, die eine stabile Frontline wollen: Blocken, perfektes Guard-Timing und kontrollierter Druck.",
    sections: [
      { heading: "Blocken und kontrollierter Druck", paragraphs: ["Nutze perfektes Guard-Timing, um Fenster für Konter zu schaffen, statt wahllos anzugreifen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Jeder Trade zu einem langen Kampf zu machen zieht Third-Partys an."] },
    ], related: [],
  },
  {
    slug: 'mercenary-boss-build', title: "Mistfall Hunter Mercenary Boss-Build: Sicheres Melee, Blocken & Beute-Extraktion",
    description: "Für Spieler, die Mercenary gegen Bosse einsetzen: sichere Nahkampf-Fenster, Routenplanung und Beute-Extraktion.",
    eyebrow: 'Build-Guide', h1: "Mercenary Boss-Build",
    lead: "Für Spieler, die Mercenary gegen Bosse einsetzen: sichere Nahkampf-Fenster, Routenplanung und Beute-Extraktion.",
    sections: [
      { heading: "Mechaniken überleben", paragraphs: ["Behalte deine Ausdauer im Blick und verlasse den Kampf mit der Belohnung, statt nur auf Schaden zu fokussieren."] },
      { heading: "Worauf du achten musst", paragraphs: ["Zu sehr auf Bossschaden zu fixieren, während sich andere Hunter nähern, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'mercenary-affix-priority', title: "Mistfall Hunter Mercenary Affix-Priorität: Verteidigung, Ausdauer & Melee-Wert",
    description: "Für Spieler, die Mercenary-Ausrüstung vergleichen: defensive Werte, Ausdauerkomfort und verlässlicher Nahkampfschaden.",
    eyebrow: 'Build-Guide', h1: "Mercenary Affix-Priorität",
    lead: "Für Spieler, die Mercenary-Ausrüstung vergleichen: defensive Werte, Ausdauerkomfort und verlässlicher Nahkampfschaden.",
    sections: [
      { heading: "Konsistente Verteidigung zuerst", paragraphs: ["Behalte Werte, die defensives Melee stabil machen, bevor du auf reinen Schaden setzt."] },
      { heading: "Worauf du achten musst", paragraphs: ["Schadenswerte überzubewerten, bevor das Überleben stabil ist, ist ein häufiger Fehler."] },
    ], related: [],
  },
  {
    slug: 'sorcerer-beginner-build', title: "Mistfall Hunter Sorcerer Anfänger-Build: Magie-Sicherheit & frühes PvE-Clearing",
    description: "Für neue Spieler, die eine Magie-Schadensklasse wollen: PvE schnell klären, ohne ein leichtes PvP-Ziel zu werden.",
    eyebrow: 'Build-Guide', h1: "Sorcerer Anfänger-Build",
    lead: "Für neue Spieler, die eine Magie-Schadensklasse wollen: PvE schnell klären, ohne ein leichtes PvP-Ziel zu werden.",
    sections: [
      { heading: "PvE klären, ohne Ziel zu werden", paragraphs: ["Räume PvE-Gegner zügig weg, aber bleib in Bewegung, um nicht zum leichten Ziel zu werden."] },
      { heading: "Worauf du achten musst", paragraphs: ["Zerbrechlichkeit, zu langes Kanalisieren und schlechte Rückzugsplanung sind die größten Risiken."] },
    ], related: [],
  },
  {
    slug: 'sorcerer-solo-build', title: "Mistfall Hunter Sorcerer Solo-Build: Burst-Fenster, Kiting & Extraktion",
    description: "Für Solospieler, die magischen Druck bevorzugen: Burst-Fenster, Kiting-Routen und rechtzeitige Extraktion.",
    eyebrow: 'Build-Guide', h1: "Sorcerer Solo-Build",
    lead: "Für Solospieler, die magischen Druck bevorzugen: Burst-Fenster, Kiting-Routen und rechtzeitige Extraktion.",
    sections: [
      { heading: "Burst und Reset vor der Verfolgung", paragraphs: ["Setze Burst-Schaden ein und ziehe dich zurück, bevor aus dem Kampf eine Verfolgungsjagd wird."] },
      { heading: "Worauf du achten musst", paragraphs: ["Nach lauten, zauberlastigen Kämpfen wirst du leicht überrannt."] },
    ], related: [],
  },
  {
    slug: 'sorcerer-pvp-build', title: "Mistfall Hunter Sorcerer PvP-Build: Zauberdruck, Positionierung & Reset-Timing",
    description: "Für Spieler, die Magie in PvP-Routen einsetzen: Druck aus der Distanz, ohne Fluchtfenster zu verschwenden.",
    eyebrow: 'Build-Guide', h1: "Sorcerer PvP-Build",
    lead: "Für Spieler, die Magie in PvP-Routen einsetzen: Druck aus der Distanz, ohne Fluchtfenster zu verschwenden.",
    sections: [
      { heading: "Druck aus der Distanz", paragraphs: ["Übe Druck von Reichweite aus, ohne wichtige Fluchtfenster zu verschwenden."] },
      { heading: "Worauf du achten musst", paragraphs: ["Zaubern in exponierten Lanes kann dich den Reset kosten."] },
    ], related: [],
  },
  {
    slug: 'sorcerer-boss-build', title: "Mistfall Hunter Sorcerer Boss-Build: Magie-DPS, Adds & Fluchtplanung",
    description: "Für Spieler, die Sorcerer für PvE und Bosse einsetzen: laute Bosskämpfe verkürzen und dabei eine Rückzugsoption behalten.",
    eyebrow: 'Build-Guide', h1: "Sorcerer Boss-Build",
    lead: "Für Spieler, die Sorcerer für PvE und Bosse einsetzen: laute Bosskämpfe verkürzen und dabei eine Rückzugsoption behalten.",
    sections: [
      { heading: "Kämpfe verkürzen, Rückzug behalten", paragraphs: ["Verkürze laute Bosskämpfe, ohne alle Cooldowns zu verbrauchen, bevor andere Spieler eintreffen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Alle Cooldowns zu verbrauchen, bevor Spieler ankommen, ist ein häufiger Fehler."] },
    ], related: [],
  },
  {
    slug: 'sorcerer-affix-priority', title: "Mistfall Hunter Sorcerer Affix-Priorität: Zauberschaden, Cooldowns & Überleben",
    description: "Für Spieler, die Sorcerer-Ausrüstung vergleichen: Zauberschaden, Cooldown-Komfort und genug Sicherheit zum Extrahieren.",
    eyebrow: 'Build-Guide', h1: "Sorcerer Affix-Priorität",
    lead: "Für Spieler, die Sorcerer-Ausrüstung vergleichen: Zauberschaden, Cooldown-Komfort und genug Sicherheit zum Extrahieren.",
    sections: [
      { heading: "Schaden und Sicherheit ausbalancieren", paragraphs: ["Balanciere Schaden-Uptime mit genug Sicherheit, um tatsächlich extrahieren zu können."] },
      { heading: "Worauf du achten musst", paragraphs: ["Reine Glaskanonen-Werte versagen oft in echten Routen."] },
    ], related: [],
  },
  {
    slug: 'blackarrow-solo-build', title: "Mistfall Hunter Blackarrow Solo-Build: Scouting, Bogendruck & sichere Ausgänge",
    description: "Für Solospieler, die Reichweite und Informationskontrolle wollen: Bedrohungen früh erkennen und rechtzeitig verlassen.",
    eyebrow: 'Build-Guide', h1: "Blackarrow Solo-Build",
    lead: "Für Solospieler, die Reichweite und Informationskontrolle wollen: Bedrohungen früh erkennen und rechtzeitig verlassen.",
    sections: [
      { heading: "Bedrohungen früh erkennen", paragraphs: ["Erkenne Gefahren früh und verlasse die Situation, bevor der Abstand zusammenbricht."] },
      { heading: "Worauf du achten musst", paragraphs: ["In engen Räumen verliert Reichweite ihren Wert und wird zur Falle."] },
    ], related: [],
  },
  {
    slug: 'blackarrow-pvp-build', title: "Mistfall Hunter Blackarrow PvP-Build: Bogendruck, Winkel & Third-Party-Kontrolle",
    description: "Für PvP-Spieler, die Fernkampfdruck bevorzugen: Sichtlinien in sicheren Schaden und Informationen verwandeln.",
    eyebrow: 'Build-Guide', h1: "Blackarrow PvP-Build",
    lead: "Für PvP-Spieler, die Fernkampfdruck bevorzugen: Sichtlinien in sicheren Schaden und Informationen verwandeln.",
    sections: [
      { heading: "Sichtlinien nutzen", paragraphs: ["Verwandle Kartensichtlinien in sicheren Schaden und Informationsvorteil."] },
      { heading: "Worauf du achten musst", paragraphs: ["Tunnelblick beim Zielen kostet dir die Fluchtroute."] },
    ], related: [],
  },
  {
    slug: 'blackarrow-boss-build', title: "Mistfall Hunter Blackarrow Boss-Build: Fernkampf-DPS, Adds & Extraktionsrouten",
    description: "Für Spieler, die Blackarrow für PvE-Ziele einsetzen: Schaden aus sichereren Lanes ohne Aufmerksamkeitsverlust.",
    eyebrow: 'Build-Guide', h1: "Blackarrow Boss-Build",
    lead: "Für Spieler, die Blackarrow für PvE-Ziele einsetzen: Schaden aus sichereren Lanes ohne Aufmerksamkeitsverlust.",
    sections: [
      { heading: "Aus sicheren Lanes Schaden austeilen", paragraphs: ["Teile Schaden aus sichereren Positionen aus, ohne die Umgebung aus den Augen zu verlieren."] },
      { heading: "Worauf du achten musst", paragraphs: ["Zu lange stillzustehen macht dich anfällig für Flankenangriffe."] },
    ], related: [],
  },
  {
    slug: 'blackarrow-affix-priority', title: "Mistfall Hunter Blackarrow Affix-Priorität: Reichweite, Krit-Fenster & Mobilität",
    description: "Für Spieler, die Blackarrow-Ausrüstung vergleichen: Werte, die Abstand und verlässlichen Druck schützen.",
    eyebrow: 'Build-Guide', h1: "Blackarrow Affix-Priorität",
    lead: "Für Spieler, die Blackarrow-Ausrüstung vergleichen: Werte, die Abstand und verlässlichen Druck schützen.",
    sections: [
      { heading: "Abstand schützen", paragraphs: ["Behalte Werte, die Abstand und verlässlichen Druck schützen, statt nur auf reinen Schaden zu setzen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Reinen Schaden überzubewerten, während die Routensicherheit schwach ist, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'blackarrow-controller-settings', title: "Mistfall Hunter Blackarrow Controller-Einstellungen: Zielen, Kamera & Bogenkomfort",
    description: "Für Controller-Spieler mit der Fernkampfklasse: Kamera und Zielen vor teuren PvP-Routen einstellen.",
    eyebrow: 'Build-Guide', h1: "Blackarrow Controller-Einstellungen",
    lead: "Für Controller-Spieler mit der Fernkampfklasse: Kamera und Zielen vor teuren PvP-Routen einstellen.",
    sections: [
      { heading: "Vor dem Kampf einstellen", paragraphs: ["Stelle Kamera- und Zielgeschwindigkeit ein, bevor du in riskante PvP-Routen gehst."] },
      { heading: "Worauf du achten musst", paragraphs: ["Allgemeine Controller-Einstellungen sind oft nicht auf Fernkampf abgestimmt und kosten dich Treffer."] },
    ], related: [],
  },
  {
    slug: 'shadowstrix-pvp-build', title: "Mistfall Hunter Shadowstrix PvP-Build: Stealth-Picks, Burst & Reset-Routen",
    description: "Für Spieler, die Stealth-PvP-Druck wollen: unfaire Kämpfe wählen und zurücksetzen, bevor die Karte reagiert.",
    eyebrow: 'Build-Guide', h1: "Shadowstrix PvP-Build",
    lead: "Für Spieler, die Stealth-PvP-Druck wollen: unfaire Kämpfe wählen und zurücksetzen, bevor die Karte reagiert.",
    sections: [
      { heading: "Unfaire Kämpfe wählen", paragraphs: ["Wähle Kämpfe, die du gewinnen kannst, und setze zurück, bevor andere Spieler reagieren."] },
      { heading: "Worauf du achten musst", paragraphs: ["Stealth in ein faires Duell ohne Fluchtplan zu verwandeln, ist der häufigste Fehler."] },
    ], related: [],
  },
  {
    slug: 'shadowstrix-boss-build', title: "Mistfall Hunter Shadowstrix Boss-Build: Burst-Fenster & Beutesicherheit",
    description: "Für Shadowstrix-Spieler, die auch PvE-Wert wollen: Burst gezielt einsetzen, ohne in langen PvE-Kämpfen festzustecken.",
    eyebrow: 'Build-Guide', h1: "Shadowstrix Boss-Build",
    lead: "Für Shadowstrix-Spieler, die auch PvE-Wert wollen: Burst gezielt einsetzen, ohne in langen PvE-Kämpfen festzustecken.",
    sections: [
      { heading: "Burst gezielt einsetzen", paragraphs: ["Setze Burst gezielt ein, statt in langen PvE-Kämpfen festzuhängen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Schwache Dauerkämpfe und schlechte Boss-Routen-Entscheidungen sind das Hauptrisiko."] },
    ], related: [],
  },
  {
    slug: 'shadowstrix-affix-priority', title: "Mistfall Hunter Shadowstrix Affix-Priorität: Burst, Mobilität & Überleben",
    description: "Für Spieler, die Shadowstrix-Ausrüstung vergleichen: Werte, die saubere Picks und sichere Resets verbessern.",
    eyebrow: 'Build-Guide', h1: "Shadowstrix Affix-Priorität",
    lead: "Für Spieler, die Shadowstrix-Ausrüstung vergleichen: Werte, die saubere Picks und sichere Resets verbessern.",
    sections: [
      { heading: "Saubere Picks bevorzugen", paragraphs: ["Bevorzuge Werte, die saubere Kills und sichere Resets ermöglichen, statt reinen Schaden."] },
      { heading: "Worauf du achten musst", paragraphs: ["Schadenswerte zu jagen, die nicht beim Entkommen helfen, ist ein häufiger Fehler."] },
    ], related: [],
  },
  {
    slug: 'shadowstrix-beginner-build', title: "Mistfall Hunter Shadowstrix Anfänger-Build: Stealth ohne Gier",
    description: "Für neue Spieler, die von der Stealth-Klasse angezogen werden: Stealth für Informationen nutzen, nicht für riskante Kämpfe.",
    eyebrow: 'Build-Guide', h1: "Shadowstrix Anfänger-Build",
    lead: "Für neue Spieler, die von der Stealth-Klasse angezogen werden: Stealth für Informationen nutzen, nicht für riskante Kämpfe.",
    sections: [
      { heading: "Stealth für Informationen nutzen", paragraphs: ["Nutze Stealth, um Informationen zu sammeln, statt jeden Kampf zu suchen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Jeden Kampf zu eröffnen und nach verbrauchten Cooldowns zu sterben, ist der häufigste Anfängerfehler."] },
    ], related: [],
  },
  {
    slug: 'shadowstrix-map-routes', title: "Mistfall Hunter Shadowstrix Kartenrouten: Flanken, Hinterhalt-Lanes & Ausgänge",
    description: "Für Stealth-Spieler, die Kartenbewegung planen: Routen wählen, die Überraschung und Rückzugsoptionen bewahren.",
    eyebrow: 'Build-Guide', h1: "Shadowstrix Kartenrouten",
    lead: "Für Stealth-Spieler, die Kartenbewegung planen: Routen wählen, die Überraschung und Rückzugsoptionen bewahren.",
    sections: [
      { heading: "Überraschung bewahren", paragraphs: ["Wähle Routen, die deine Überraschung und Rückzugsoptionen bewahren."] },
      { heading: "Worauf du achten musst", paragraphs: ["Zu weit von Extraktions- oder Reset-Lanes entfernt einen Hinterhalt zu legen, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'seer-beginner-build', title: "Mistfall Hunter Seer Anfänger-Build: Heilen, Kontrolle & Team-Grundlagen",
    description: "Für neue Support-Spieler: zuerst am Leben bleiben, damit das Squad von den Support-Tools profitieren kann.",
    eyebrow: 'Build-Guide', h1: "Seer Anfänger-Build",
    lead: "Für neue Support-Spieler: zuerst am Leben bleiben, damit das Squad von den Support-Tools profitieren kann.",
    sections: [
      { heading: "Zuerst überleben", paragraphs: ["Bleib am Leben, damit dein Squad von deinen Support-Tools profitieren kann — ein toter Support hilft niemandem."] },
      { heading: "Worauf du achten musst", paragraphs: ["Zu weit vorne zu stehen kostet dich sofort deine Support-Rolle."] },
    ], related: [],
  },
  {
    slug: 'seer-solo-build', title: "Mistfall Hunter Seer Solo-Build: Überleben, Kontrolle & risikoarme Routen",
    description: "Für Spieler, die Seer außerhalb von Squads testen: Support-Tools nicht in aggressive Solo-Duelle zwingen.",
    eyebrow: 'Build-Guide', h1: "Seer Solo-Build",
    lead: "Für Spieler, die Seer außerhalb von Squads testen: Support-Tools nicht in aggressive Solo-Duelle zwingen.",
    sections: [
      { heading: "Support-Tools nicht erzwingen", paragraphs: ["Setze Support-Tools nicht in aggressive Solo-Duelle ein, für die sie nicht gedacht sind."] },
      { heading: "Worauf du achten musst", paragraphs: ["Geringer Kill-Druck und langsamer Routenfortschritt sind normal für diese Klasse solo."] },
    ], related: [],
  },
  {
    slug: 'seer-pvp-build', title: "Mistfall Hunter Seer PvP-Build: Kontrolle, Heilfenster & Squad-Kämpfe",
    description: "Für Support-Spieler in PvP-Gruppen: Erholung und Kontrolle in gewinnende Resets verwandeln.",
    eyebrow: 'Build-Guide', h1: "Seer PvP-Build",
    lead: "Für Support-Spieler in PvP-Gruppen: Erholung und Kontrolle in gewinnende Resets verwandeln.",
    sections: [
      { heading: "Erholung in Siege verwandeln", paragraphs: ["Nutze Heilung und Kontrolle gezielt, um Kämpfe zu deinen Gunsten zurückzusetzen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Zu früh in Panik zu heilen oder isoliert zu werden, sind die Hauptrisiken."] },
    ], related: [],
  },
  {
    slug: 'seer-boss-build', title: "Mistfall Hunter Seer Boss-Build: Support-Sicherheit, Heilung & Beute-Extraktion",
    description: "Für Squads, die Seer in PvE-Ziele mitnehmen: das Team durch Boss- und Post-Boss-PvP-Druck stabil halten.",
    eyebrow: 'Build-Guide', h1: "Seer Boss-Build",
    lead: "Für Squads, die Seer in PvE-Ziele mitnehmen: das Team durch Boss- und Post-Boss-PvP-Druck stabil halten.",
    sections: [
      { heading: "Team stabil halten", paragraphs: ["Halte das Team durch den Bosskampf und den PvP-Druck danach stabil."] },
      { heading: "Worauf du achten musst", paragraphs: ["Support-Cooldowns zu verbrauchen, bevor die Third-Party eintrifft, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'seer-affix-priority', title: "Mistfall Hunter Seer Affix-Priorität: Heilung, Cooldowns & Überleben",
    description: "Für Spieler, die entscheiden, welche Seer-Ausrüstung sie behalten: Support-Konsistenz vor Schadensgier.",
    eyebrow: 'Build-Guide', h1: "Seer Affix-Priorität",
    lead: "Für Spieler, die entscheiden, welche Seer-Ausrüstung sie behalten: Support-Konsistenz vor Schadensgier.",
    sections: [
      { heading: "Support-Konsistenz zuerst", paragraphs: ["Priorisiere Werte, die deinen Support zuverlässig machen, statt nach Schaden zu greifen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Zu fragil zu bauen, um Fokusfeuer zu überleben, ist ein häufiger Fehler."] },
    ], related: [],
  },
  {
    slug: 'withered-knight-beginner-build', title: "Mistfall Hunter Withered Knight Anfänger-Build: Druck ohne Übercommitment",
    description: "Für neue Spieler, die aggressiven Nahkampf wollen: Druck mit einer klaren Stopp-Regel statt endloser Verfolgung.",
    eyebrow: 'Build-Guide', h1: "Withered Knight Anfänger-Build",
    lead: "Für neue Spieler, die aggressiven Nahkampf wollen: Druck mit einer klaren Stopp-Regel statt endloser Verfolgung.",
    sections: [
      { heading: "Druck mit Stopp-Regel", paragraphs: ["Übe Druck aus, aber setze dir eine klare Regel, wann du aufhörst zu verfolgen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Sich in Fallen, Squads oder Monster zu verrennen, ist das Hauptrisiko."] },
    ], related: [],
  },
  {
    slug: 'withered-knight-solo-build', title: "Mistfall Hunter Withered Knight Solo-Build: Druck, Sustain & Fluchtregeln",
    description: "Für Solospieler, die aggressiven Nahkampfdruck wollen: Trades gewinnen, ohne die Fluchtroute aufzugeben.",
    eyebrow: 'Build-Guide', h1: "Withered Knight Solo-Build",
    lead: "Für Solospieler, die aggressiven Nahkampfdruck wollen: Trades gewinnen, ohne die Fluchtroute aufzugeben.",
    sections: [
      { heading: "Trades gewinnen, Fluchtroute behalten", paragraphs: ["Gewinne Trades, ohne dabei deine Fluchtroute aufzugeben."] },
      { heading: "Worauf du achten musst", paragraphs: ["Gekitet oder in Third-Party-Routen gelockt zu werden, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'withered-knight-boss-build', title: "Mistfall Hunter Withered Knight Boss-Build: Melee-Druck & Beute-Sicherheit",
    description: "Für Spieler, die Withered Knight für PvE-Ziele einsetzen: Druck ausüben und genug Budget zum Verlassen behalten.",
    eyebrow: 'Build-Guide', h1: "Withered Knight Boss-Build",
    lead: "Für Spieler, die Withered Knight für PvE-Ziele einsetzen: Druck ausüben und genug Budget zum Verlassen behalten.",
    sections: [
      { heading: "Druck mit Budget", paragraphs: ["Übe Druck aus, aber behalte genug Ressourcen, um den Kampf sicher zu verlassen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Alle Cooldowns zu verbrauchen, bevor der Extraktionsdruck beginnt, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'withered-knight-affix-priority', title: "Mistfall Hunter Withered Knight Affix-Priorität: Druck, Sustain & Ausdauer",
    description: "Für Spieler, die Withered-Knight-Ausrüstung vergleichen: Werte, die kontrollierte Aggression unterstützen.",
    eyebrow: 'Build-Guide', h1: "Withered Knight Affix-Priorität",
    lead: "Für Spieler, die Withered-Knight-Ausrüstung vergleichen: Werte, die kontrollierte Aggression unterstützen.",
    sections: [
      { heading: "Kontrollierte Aggression", paragraphs: ["Behalte Werte, die kontrollierte Aggression statt wahlloses Draufhalten unterstützen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Schaden ohne genug Erholung zu bauen, gefährdet dich bei Extraktionskämpfen."] },
    ], related: [],
  },
  {
    slug: 'withered-knight-matchups', title: "Mistfall Hunter Withered Knight Matchups: Fernkampf, Stealth & Support-Kämpfe",
    description: "Für PvP-Spieler, die Nahkampf-Matchups lernen: wissen, wann man verfolgt, tauscht oder zurücksetzt.",
    eyebrow: 'Build-Guide', h1: "Withered Knight Matchups",
    lead: "Für PvP-Spieler, die Nahkampf-Matchups lernen: wissen, wann man verfolgt, tauscht oder zurücksetzt.",
    sections: [
      { heading: "Verfolgen, Tauschen oder Zurücksetzen", paragraphs: ["Lerne, wann du verfolgen, einen Trade eingehen oder zurücksetzen solltest."] },
      { heading: "Worauf du achten musst", paragraphs: ["Von Blackarrow-Sichtlinien oder Shadowstrix-Resets geködert zu werden, ist ein häufiges Risiko."] },
    ], related: [],
  },
  {
    slug: 'hallowgrove-solo-route', title: "Mistfall Hunter Hallowgrove Solo-Route: Leises Loot, Ausgänge & Reset-Punkte",
    description: "Für Solospieler, die Hallowgrove lernen: kurze, leise Routen, die zur Extraktion zurückführen.",
    eyebrow: 'Guide', h1: "Hallowgrove Solo-Route",
    lead: "Für Solospieler, die Hallowgrove lernen: kurze, leise Routen, die zur Extraktion zurückführen.",
    sections: [
      { heading: "Kurze, leise Routen", paragraphs: ["Bevorzuge kurze, leise Routen, die dich zur Extraktion zurückbringen, statt die Karte zu weit zu erkunden."] },
      { heading: "Worauf du achten musst", paragraphs: ["Zu lange nach dem ersten brauchbaren Fund zu bleiben, ist das Hauptrisiko."] },
    ], related: [],
  },
  {
    slug: 'hallowgrove-loot-route', title: "Mistfall Hunter Hallowgrove Loot-Route: Sichere Ressourcen & Banking-Regeln",
    description: "Für Spieler, die frühe Hallowgrove-Ressourcen farmen: wiederholbare Routen mit klaren Stopp-Regeln.",
    eyebrow: 'Guide', h1: "Hallowgrove Loot-Route",
    lead: "Für Spieler, die frühe Hallowgrove-Ressourcen farmen: wiederholbare Routen mit klaren Stopp-Regeln.",
    sections: [
      { heading: "Wiederholbare Routen mit Stopp-Regel", paragraphs: ["Nutze wiederholbare Ressourcenrouten mit einer klaren Regel, wann du aufhörst."] },
      { heading: "Worauf du achten musst", paragraphs: ["Einen guten Loot-Lauf in ein Boss- oder PvP-Risiko zu verwandeln, ist der häufigste Fehler."] },
    ], related: [],
  },
  {
    slug: 'hallowgrove-boss-route', title: "Mistfall Hunter Hallowgrove Boss-Route: PvE-Vorbereitung, PvP-Risiko & Extraktion",
    description: "Für Spieler, die Hallowgrove-Bossziele planen: Bosskämpfe nur mit Rückzugs- und Beuteplan angehen.",
    eyebrow: 'Guide', h1: "Hallowgrove Boss-Route",
    lead: "Für Spieler, die Hallowgrove-Bossziele planen: Bosskämpfe nur mit Rückzugs- und Beuteplan angehen.",
    sections: [
      { heading: "Nur mit Plan angehen", paragraphs: ["Gehe Bosskämpfe nur mit einem klaren Rückzugs- und Beuteplan an."] },
      { heading: "Worauf du achten musst", paragraphs: ["Einen lauten Kampf ohne Fluchtweg zu beginnen, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'hallowgrove-chaos-route', title: "Mistfall Hunter Hallowgrove Chaos-Route: Varianten-Risiko & sicheres Scouting",
    description: "Für Spieler, die Hallowgrove-Chaos-Varianten betreten: Varianten zuerst als Informationsläufe behandeln.",
    eyebrow: 'Guide', h1: "Hallowgrove Chaos-Route",
    lead: "Für Spieler, die Hallowgrove-Chaos-Varianten betreten: Varianten zuerst als Informationsläufe behandeln.",
    sections: [
      { heading: "Erst erkunden, dann farmen", paragraphs: ["Behandle Varianten zuerst als Informationsläufe, bevor du sie als Farmroute nutzt."] },
      { heading: "Worauf du achten musst", paragraphs: ["Basiskarten-Routen blind unter veränderten Bedingungen zu nutzen, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'hallowgrove-extraction-points', title: "Mistfall Hunter Hallowgrove Extraktionspunkte: Ausgangsplanung & Hinterhaltsicherheit",
    description: "Für Spieler, die Hallowgrove-Ausgänge suchen: Ausgänge vor den Zielen planen.",
    eyebrow: 'Guide', h1: "Hallowgrove Extraktionspunkte",
    lead: "Für Spieler, die Hallowgrove-Ausgänge suchen: Ausgänge vor den Zielen planen.",
    sections: [
      { heading: "Ausgänge zuerst planen", paragraphs: ["Plane deine Ausgänge, bevor du dich auf ein Ziel festlegst."] },
      { heading: "Worauf du achten musst", paragraphs: ["Verletzt, laut und ohne Ausdauer bei der Extraktion anzukommen, ist gefährlich."] },
    ], related: [],
  },
  {
    slug: 'brandrgarde-solo-route', title: "Mistfall Hunter Brandrgarde Solo-Route: Sicherere Pfade durch Hochrisikogebiete",
    description: "Für Solospieler in Brandrgarde: die Gefährdung auf einer risikoreicheren Kartenroute reduzieren.",
    eyebrow: 'Guide', h1: "Brandrgarde Solo-Route",
    lead: "Für Solospieler in Brandrgarde: die Gefährdung auf einer risikoreicheren Kartenroute reduzieren.",
    sections: [
      { heading: "Gefährdung reduzieren", paragraphs: ["Reduziere deine Gefährdung, indem du sicherere Pfade statt zentraler Kämpfe wählst."] },
      { heading: "Worauf du achten musst", paragraphs: ["Zentrale Kämpfe ohne Unterstützung oder Reset-Tools anzunehmen, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'brandrgarde-loot-route', title: "Mistfall Hunter Brandrgarde Loot-Route: Hochwertige Stopps & Ausgangsregeln",
    description: "Für Spieler, die Brandrgarde-Belohnungen farmen: hochwertige Stopps nutzen, ohne zu lange zu bleiben.",
    eyebrow: 'Guide', h1: "Brandrgarde Loot-Route",
    lead: "Für Spieler, die Brandrgarde-Belohnungen farmen: hochwertige Stopps nutzen, ohne zu lange zu bleiben.",
    sections: [
      { heading: "Hochwertige Stopps nutzen", paragraphs: ["Nutze hochwertige Stopps, ohne die Karte zu lange zu beanspruchen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Gier nach seltenen Ressourcen oder bossnaher Beute ist riskant."] },
    ], related: [],
  },
  {
    slug: 'brandrgarde-boss-route', title: "Mistfall Hunter Brandrgarde Boss-Route: Mist-Lord-Vorbereitung & PvP-Druck",
    description: "Für Spieler, die Brandrgarde-Bossläufe planen: Boss-Belohnungen und PvP-Druck als ein Routenproblem behandeln.",
    eyebrow: 'Guide', h1: "Brandrgarde Boss-Route",
    lead: "Für Spieler, die Brandrgarde-Bossläufe planen: Boss-Belohnungen und PvP-Druck als ein Routenproblem behandeln.",
    sections: [
      { heading: "Belohnung und PvP zusammen denken", paragraphs: ["Behandle Boss-Belohnungen und PvP-Druck als ein gemeinsames Routenproblem, nicht getrennt."] },
      { heading: "Worauf du achten musst", paragraphs: ["Den Boss zu gewinnen, aber den Extraktionskampf zu verlieren, ist ein häufiges Risiko."] },
    ], related: [],
  },
  {
    slug: 'brandrgarde-chaos-route', title: "Mistfall Hunter Brandrgarde Chaos-Route: Varianten-Scouting & Belohnungsrisiko",
    description: "Für Spieler, die Brandrgarde-Chaos-Varianten testen: Varianten erkunden, bevor du sie als Farm behandelst.",
    eyebrow: 'Guide', h1: "Brandrgarde Chaos-Route",
    lead: "Für Spieler, die Brandrgarde-Chaos-Varianten testen: Varianten erkunden, bevor du sie als Farm behandelst.",
    sections: [
      { heading: "Erst erkunden", paragraphs: ["Erkunde Varianten zuerst, bevor du sie als wiederholbare Farmroute behandelst."] },
      { heading: "Worauf du achten musst", paragraphs: ["Anzunehmen, dass jede gefährliche Variante die Belohnung wert ist, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'brandrgarde-extraction-points', title: "Mistfall Hunter Brandrgarde Extraktionspunkte: Ausgangsrouten & Endkämpfe",
    description: "Für Spieler, die Brandrgarde-Ausgänge suchen: Ausgänge als Kampfzonen verstehen, nicht nur als Markierungen.",
    eyebrow: 'Guide', h1: "Brandrgarde Extraktionspunkte",
    lead: "Für Spieler, die Brandrgarde-Ausgänge suchen: Ausgänge als Kampfzonen verstehen, nicht nur als Markierungen.",
    sections: [
      { heading: "Ausgänge als Kampfzonen sehen", paragraphs: ["Verstehe Ausgänge als eigene Kampfzonen, nicht nur als Punkte auf der Karte."] },
      { heading: "Worauf du achten musst", paragraphs: ["Bei der Extraktion anzukommen, nachdem alle Cooldowns und Heilungen verbraucht sind, ist gefährlich."] },
    ], related: [],
  },
  {
    slug: 'gyldenmist-timer-guide', title: "Mistfall Hunter Gyldenmist-Timer-Guide: Korruption, Lauflänge & Extraktion",
    description: "Für Spieler, die den Kampfdruck verstehen wollen: den Timer als Stopp-Regel statt als Panikauslöser nutzen.",
    eyebrow: 'Guide', h1: "Gyldenmist-Timer-Guide",
    lead: "Für Spieler, die den Kampfdruck verstehen wollen: den Timer als Stopp-Regel statt als Panikauslöser nutzen.",
    sections: [
      { heading: "Timer als Stopp-Regel", paragraphs: ["Nutze den Timer als klare Stopp-Regel, nicht als Grund zur Panik."] },
      { heading: "Worauf du achten musst", paragraphs: ["Zu warten, bis der Korruptionsdruck sichere Entscheidungen unmöglich macht, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'shrine-extraction-guide', title: "Mistfall Hunter Schrein-Extraktions-Guide: Aktivieren, Glockenkreatur jagen & Gehen",
    description: "Für Spieler, die wissen wollen, wie Extraktion funktioniert: den Fluchtprozess in sichere Entscheidungen aufteilen.",
    eyebrow: 'Guide', h1: "Schrein-Extraktions-Guide",
    lead: "Für Spieler, die wissen wollen, wie Extraktion funktioniert: den Fluchtprozess in sichere Entscheidungen aufteilen.",
    sections: [
      { heading: "Fluchtprozess aufteilen", paragraphs: ["Teile den Fluchtprozess in klare, sichere Einzelentscheidungen auf."] },
      { heading: "Worauf du achten musst", paragraphs: ["Die Flucht ungeheilt oder exponiert zu aktivieren, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'bell-creature-guide', title: "Mistfall Hunter Glockenkreatur-Guide: Aufspüren, Töten & Extraktions-Timing",
    description: "Für neue Spieler, die das Extraktionsziel lernen: die Glockenkreatur als geplantes Ziel behandeln, nicht als panische Jagd.",
    eyebrow: 'Guide', h1: "Glockenkreatur-Guide",
    lead: "Für neue Spieler, die das Extraktionsziel lernen: die Glockenkreatur als geplantes Ziel behandeln, nicht als panische Jagd.",
    sections: [
      { heading: "Geplantes Ziel, keine Panikjagd", paragraphs: ["Behandle die Glockenkreatur als geplantes Ziel statt als panische Verfolgung."] },
      { heading: "Worauf du achten musst", paragraphs: ["Das Ziel in gegnerische Spieler oder PvE-Gruppen zu jagen, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'loot-loss-guide', title: "Mistfall Hunter Beuteverlust-Guide: Was passiert, wenn du stirbst?",
    description: "Für Spieler, die sich Sorgen um verlorene Ausrüstung machen: das Todesrisiko verständlich und handhabbar machen.",
    eyebrow: 'Guide', h1: "Beuteverlust-Guide",
    lead: "Für Spieler, die sich Sorgen um verlorene Ausrüstung machen: das Todesrisiko verständlich und handhabbar machen.",
    sections: [
      { heading: "Todesrisiko verständlich machen", paragraphs: ["Mache dir das Todesrisiko bewusst, statt es zu ignorieren oder zu überschätzen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Ausrüstung mitzubringen, die du dir beim Lernen nicht leisten kannst zu verlieren, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'stash-management-guide', title: "Mistfall Hunter Lager-Guide: Was behalten, verkaufen & riskieren?",
    description: "Für Spieler, die extrahierte Beute organisieren: extrahierte Beute in zukünftige Laufoptionen verwandeln.",
    eyebrow: 'Guide', h1: "Lager-Guide",
    lead: "Für Spieler, die extrahierte Beute organisieren: extrahierte Beute in zukünftige Laufoptionen verwandeln.",
    sections: [
      { heading: "Beute in Optionen verwandeln", paragraphs: ["Verwandle extrahierte Beute in Optionen für zukünftige Läufe, statt sie nur zu horten."] },
      { heading: "Worauf du achten musst", paragraphs: ["Geringwertige Items zu horten, während nützliche Ausrüstung in schlechten Routen riskiert wird, ist ein Fehler."] },
    ], related: [],
  },
  {
    slug: 'gear-score-guide', title: "Mistfall Hunter Ausrüstungswert-Guide: Waffen, Rüstung & Affixe bewerten",
    description: "Für Spieler, die entscheiden, ob sich Ausrüstung lohnt: Ausrüstung nach Rolle und Extraktionswert bewerten.",
    eyebrow: 'Guide', h1: "Ausrüstungswert-Guide",
    lead: "Für Spieler, die entscheiden, ob sich Ausrüstung lohnt: Ausrüstung nach Rolle und Extraktionswert bewerten.",
    sections: [
      { heading: "Nach Rolle und Wert bewerten", paragraphs: ["Bewerte Ausrüstung danach, wie gut sie zu deiner Rolle passt und was sie bei Extraktion wert ist."] },
      { heading: "Worauf du achten musst", paragraphs: ["Seltene Items zu behalten, die nicht zu deinem Klassenplan passen, ist ein häufiger Fehler."] },
    ], related: [],
  },
  {
    slug: 'perfect-block-guide', title: "Mistfall Hunter Perfect-Block-Guide: Timing, Ausdauer & Konterfenster",
    description: "Für Spieler, die defensiven Kampf lernen: defensives Timing nutzen, um sichere Konterfenster zu schaffen.",
    eyebrow: 'Guide', h1: "Perfect-Block-Guide",
    lead: "Für Spieler, die defensiven Kampf lernen: defensives Timing nutzen, um sichere Konterfenster zu schaffen.",
    sections: [
      { heading: "Sichere Konterfenster schaffen", paragraphs: ["Nutze präzises Timing, um sichere Konterfenster zu schaffen, statt wahllos zu blocken."] },
      { heading: "Worauf du achten musst", paragraphs: ["Perfect Blocks zu versuchen, wenn Ausweichen die sicherere Antwort ist, ist ein Fehler."] },
    ], related: [],
  },
  {
    slug: 'no-lock-on-combat-guide', title: "Mistfall Hunter Kampf ohne Lock-On: Kamera, Positionierung & PvP-Zielen",
    description: "Für Spieler, die von Soulslike-Lock-On-Kämpfen umsteigen: Kamerakontrolle als Kampffähigkeit behandeln.",
    eyebrow: 'Guide', h1: "Kampf ohne Lock-On",
    lead: "Für Spieler, die von Soulslike-Lock-On-Kämpfen umsteigen: Kamerakontrolle als Kampffähigkeit behandeln.",
    sections: [
      { heading: "Kamerakontrolle als Fähigkeit", paragraphs: ["Behandle Kamerakontrolle als eigene Kampffähigkeit, die geübt werden muss."] },
      { heading: "Worauf du achten musst", paragraphs: ["Angriffe zu verfehlen, weil Bewegung und Zielen nicht abgestimmt sind, ist ein häufiges Problem."] },
    ], related: [],
  },
  {
    slug: 'weapon-swap-guide', title: "Mistfall Hunter Waffenwechsel-Guide: Fähigkeitswechsel, Cooldowns & Kampfpläne",
    description: "Für Spieler, die die Waffenflexibilität ihrer Klasse lernen: Waffenwechsel nutzen, um mitten im Kampf die Rolle zu ändern.",
    eyebrow: 'Guide', h1: "Waffenwechsel-Guide",
    lead: "Für Spieler, die die Waffenflexibilität ihrer Klasse lernen: Waffenwechsel nutzen, um mitten im Kampf die Rolle zu ändern.",
    sections: [
      { heading: "Rolle mitten im Kampf ändern", paragraphs: ["Nutze Waffenwechsel, um deine Rolle im Kampf zu ändern, ohne die Disziplin zu verlieren."] },
      { heading: "Worauf du achten musst", paragraphs: ["Zu wechseln, ohne zu wissen, welches Fähigkeitsfenster gebraucht wird, ist ein Fehler."] },
    ], related: [],
  },
  {
    slug: 'co-op-team-guide', title: "Mistfall Hunter Koop-Team-Guide: Rollen, Calls & Extraktionsdisziplin",
    description: "Für Spieler, die mit Freunden spielen: aus drei Spielern einen Plan machen, statt drei getrennte Duelle.",
    eyebrow: 'Guide', h1: "Koop-Team-Guide",
    lead: "Für Spieler, die mit Freunden spielen: aus drei Spielern einen Plan machen, statt drei getrennte Duelle.",
    sections: [
      { heading: "Einen Plan statt drei Duelle", paragraphs: ["Baue einen gemeinsamen Plan statt drei getrennter Duelle auf."] },
      { heading: "Worauf du achten musst", paragraphs: ["Sich zu weit aufzuteilen, doppelt zu looten oder Ausgänge zu ignorieren, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'solo-vs-squad-guide', title: "Mistfall Hunter Solo vs. Squad: Routenwahl, Risiko & beste Klassen",
    description: "Für Spieler, die entscheiden, wie sie spielen: unterschiedliche Teamgrößen brauchen unterschiedliche Stopp-Regeln.",
    eyebrow: 'Guide', h1: "Solo vs. Squad",
    lead: "Für Spieler, die entscheiden, wie sie spielen: unterschiedliche Teamgrößen brauchen unterschiedliche Stopp-Regeln.",
    sections: [
      { heading: "Unterschiedliche Stopp-Regeln", paragraphs: ["Passe deine Stopp-Regeln an die jeweilige Teamgröße an."] },
      { heading: "Worauf du achten musst", paragraphs: ["Squad-Gewohnheiten solo oder Solo-Gewohnheiten im Team anzuwenden, ist ein häufiger Fehler."] },
    ], related: [],
  },
  {
    slug: 'third-party-guide', title: "Mistfall Hunter Third-Party-Guide: Vermeiden, Bestrafen & PvP-Kollaps entkommen",
    description: "Für Spieler, die nach gewonnenen Kämpfen sterben: der nächste Kampf ist oft gefährlicher als der erste.",
    eyebrow: 'Guide', h1: "Third-Party-Guide",
    lead: "Für Spieler, die nach gewonnenen Kämpfen sterben: der nächste Kampf ist oft gefährlicher als der erste.",
    sections: [
      { heading: "Der nächste Kampf ist gefährlicher", paragraphs: ["Denk daran, dass der nächste Kampf oft gefährlicher ist als der, den du gerade gewonnen hast."] },
      { heading: "Worauf du achten musst", paragraphs: ["Sofort nach einem Kill oder Bossloot zu looten, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'sound-cues-guide', title: "Mistfall Hunter Sound-Guide: Schritte, Kämpfe, Bossgeräusche & Extraktion",
    description: "Für Spieler, die Gefahr hören wollen, bevor sie sie sehen: Sound ist Routeninformation, kein Hintergrundgeräusch.",
    eyebrow: 'Guide', h1: "Sound-Guide",
    lead: "Für Spieler, die Gefahr hören wollen, bevor sie sie sehen: Sound ist Routeninformation, kein Hintergrundgeräusch.",
    sections: [
      { heading: "Sound als Information", paragraphs: ["Behandle Geräusche als wichtige Routeninformation, nicht als Hintergrund."] },
      { heading: "Worauf du achten musst", paragraphs: ["Lange Kämpfe zu ignorieren und in stärkere Teams zu laufen, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'beginner-loadout-guide', title: "Mistfall Hunter Anfänger-Loadout-Guide: Günstige Kits, sichere Waffen & erste Extraktionen",
    description: "Für neue Spieler, die ihre ersten Läufe vorbereiten: nur riskieren, was dir beim Lernen hilft.",
    eyebrow: 'Guide', h1: "Anfänger-Loadout-Guide",
    lead: "Für neue Spieler, die ihre ersten Läufe vorbereiten: nur riskieren, was dir beim Lernen hilft.",
    sections: [
      { heading: "Nur riskieren, was hilft", paragraphs: ["Riskiere nur Ausrüstung, die dir tatsächlich beim Lernen hilft."] },
      { heading: "Worauf du achten musst", paragraphs: ["Teure Ausrüstung mitzubringen, bevor du Ausgänge verstehst, ist ein häufiger Anfängerfehler."] },
    ], related: [],
  },
  {
    slug: 'best-settings-low-end-pc', title: "Mistfall Hunter beste Einstellungen für schwache PCs: FPS, Ruckler & Sichtbarkeit",
    description: "Für PC-Spieler, die stabile Leistung priorisieren: Framestabilität vor visuellem Luxus.",
    eyebrow: 'Guide', h1: "Beste Einstellungen für schwache PCs",
    lead: "Für PC-Spieler, die stabile Leistung priorisieren: Framestabilität vor visuellem Luxus.",
    sections: [
      { heading: "Stabilität vor Optik", paragraphs: ["Priorisiere Framestabilität vor visuellem Luxus."] },
      { heading: "Worauf du achten musst", paragraphs: ["Die Lesbarkeit so weit zu senken, dass PvP-Bewusstsein leidet, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'best-class-for-pvp', title: "Mistfall Hunter beste Klasse für PvP: Druck, Picks, Support & Konter",
    description: "Für Spieler, die einen PvP-Main wählen: Klassen nach Kampfkontrolle und Extraktionssicherheit einordnen.",
    eyebrow: 'Guide', h1: "Beste Klasse für PvP",
    lead: "Für Spieler, die einen PvP-Main wählen: Klassen nach Kampfkontrolle und Extraktionssicherheit einordnen.",
    sections: [
      { heading: "Kontrolle vor Duellstärke", paragraphs: ["Ordne Klassen nach Kampfkontrolle und Extraktionssicherheit ein, nicht nur nach Duellstärke."] },
      { heading: "Worauf du achten musst", paragraphs: ["Duellstärke mit echtem Extraktions-PvP-Wert zu verwechseln, ist ein häufiger Fehler."] },
    ], related: [],
  },
  {
    slug: 'best-class-for-bosses', title: "Mistfall Hunter beste Klasse für Bosse: PvE-Schaden, Support & Extraktionssicherheit",
    description: "Für Spieler, die für PvE-Ziele bauen: Boss-Wert schließt die Fähigkeit ein, mit der Belohnung zu entkommen.",
    eyebrow: 'Guide', h1: "Beste Klasse für Bosse",
    lead: "Für Spieler, die für PvE-Ziele bauen: Boss-Wert schließt die Fähigkeit ein, mit der Belohnung zu entkommen.",
    sections: [
      { heading: "Entkommen zählt mit", paragraphs: ["Der wahre Wert einer Klasse gegen Bosse schließt ein, ob du mit der Belohnung entkommst."] },
      { heading: "Worauf du achten musst", paragraphs: ["Nur nach Schaden zu ranken und Third-Party-Druck zu ignorieren, ist ein Fehler."] },
    ], related: [],
  },
  {
    slug: 'best-class-for-solo', title: "Mistfall Hunter beste Klasse für Solo-Extraktion: Sicherheit, Reset-Tools & Routen",
    description: "Für Spieler, die Solo-Läufe planen: Solo-Stärke bedeutet Kontrolle darüber, wann Kämpfe stattfinden.",
    eyebrow: 'Guide', h1: "Beste Klasse für Solo-Extraktion",
    lead: "Für Spieler, die Solo-Läufe planen: Solo-Stärke bedeutet Kontrolle darüber, wann Kämpfe stattfinden.",
    sections: [
      { heading: "Kontrolle über Kampfbeginn", paragraphs: ["Solo-Stärke bedeutet, selbst zu entscheiden, wann ein Kampf beginnt."] },
      { heading: "Worauf du achten musst", paragraphs: ["Eine squad-fokussierte Klasse ohne genug Solo-Druck zu wählen, ist ein Fehler."] },
    ], related: [],
  },
  {
    slug: 'class-counters-guide', title: "Mistfall Hunter Klassen-Konter-Guide: Matchups, Abstand & Team-Antworten",
    description: "Für Spieler, die PvP-Matchups lernen: Konterspiel beginnt mit Abstand und Routenwahl.",
    eyebrow: 'Guide', h1: "Klassen-Konter-Guide",
    lead: "Für Spieler, die PvP-Matchups lernen: Konterspiel beginnt mit Abstand und Routenwahl.",
    sections: [
      { heading: "Konterspiel beginnt mit Abstand", paragraphs: ["Konterspiel beginnt mit gutem Abstand und der richtigen Routenwahl, nicht nur mit Skills."] },
      { heading: "Worauf du achten musst", paragraphs: ["Harte Konter anzunehmen, bevor Live-Balance bestätigt ist, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'class-roles-guide', title: "Mistfall Hunter Klassenrollen-Guide: Frontline, Fernkampf, Stealth, Magie & Support",
    description: "Für Spieler, die Teams bauen oder einen Main wählen: erst die Rolle wählen, dann den Build.",
    eyebrow: 'Guide', h1: "Klassenrollen-Guide",
    lead: "Für Spieler, die Teams bauen oder einen Main wählen: erst die Rolle wählen, dann den Build.",
    sections: [
      { heading: "Rolle vor Build", paragraphs: ["Wähle zuerst deine Rolle im Team, dann erst den konkreten Build."] },
      { heading: "Worauf du achten musst", paragraphs: ["Drei Spieler auf derselben Rolle ohne Support-Plan zu stapeln, ist ein häufiger Fehler."] },
    ], related: [],
  },
  {
    slug: 'gameplay-loop-explained', title: "Mistfall Hunter Gameplay-Loop erklärt",
    description: "Jeder Lauf läuft auf dieselben Kernentscheidungen hinaus: was bekämpft wird, was gelootet wird, wann ein Kampf sicher ist, und ob man weiter drängt oder rechtzeitig zum Soul of Return zurückkehrt, bevor es ein anderer Hunter tut.",
    eyebrow: 'Guide', h1: "Mistfall Hunter Gameplay-Loop erklärt",
    lead: "Jeder Lauf läuft auf dieselben Kernentscheidungen hinaus: was bekämpft wird, was gelootet wird, wann ein Kampf sicher ist, und ob man weiter drängt oder rechtzeitig zum Soul of Return zurückkehrt, bevor es ein anderer Hunter tut.",
    sections: [
      { heading: "Die Kernschleife", paragraphs: ["Betreten, kämpfen, looten, Extraktion sichern, gehen — das ist der wiederkehrende Kern jedes Laufs."] },
      { heading: "Worauf du achten musst", paragraphs: ["Die Entscheidung, wann genug Loot genug ist, ist oft wichtiger als reine Kampfstärke."] },
    ], related: [],
  },
  {
    slug: 'gameplay-trailer-breakdown', title: "Mistfall Hunter Gameplay-Trailer-Analyse",
    description: "Offizielle Trailer bestätigen sechs Klassen, PvPvE-Kampf gegen Monster und rivalisierende Hunter, einen extraktionsbasierten Loot-Loop und Mist-Lord-Bosskämpfe. Alles, was nicht tatsächlich gezeigt wurde, gilt als noch nicht offiziell bestätigt, nicht als versteckte Mechanik.",
    eyebrow: 'Guide', h1: "Mistfall Hunter Gameplay-Trailer-Analyse",
    lead: "Offizielle Trailer bestätigen sechs Klassen, PvPvE-Kampf gegen Monster und rivalisierende Hunter, einen extraktionsbasierten Loot-Loop und Mist-Lord-Bosskämpfe. Alles, was nicht tatsächlich gezeigt wurde, gilt als noch nicht offiziell bestätigt, nicht als versteckte Mechanik.",
    sections: [
      { heading: "Was bestätigt ist", paragraphs: ["Sechs Klassen, PvPvE-Kampf und ein extraktionsbasierter Loot-Loop sind durch offizielle Trailer bestätigt."] },
      { heading: "Worauf du achten musst", paragraphs: ["Nicht gezeigte Details sollten nicht als bestätigte Mechaniken angenommen werden."] },
    ], related: [],
  },
  {
    slug: 'first-30-minutes-guide', title: "Mistfall Hunter: deine ersten 30 Minuten",
    description: "Verbringe deine ersten dreißig Minuten damit, das grundlegende Kampfgefühl deiner Klasse zu lernen, einen nahen Ausgang zu finden und eine komplette Extraktion mit günstiger Ausrüstung abzuschließen — das zählt mehr, als einen Bosskampf zu suchen, bevor du die Steuerung kennst.",
    eyebrow: 'Guide', h1: "Mistfall Hunter: deine ersten 30 Minuten",
    lead: "Verbringe deine ersten dreißig Minuten damit, das grundlegende Kampfgefühl deiner Klasse zu lernen, einen nahen Ausgang zu finden und eine komplette Extraktion mit günstiger Ausrüstung abzuschließen — das zählt mehr, als einen Bosskampf zu suchen, bevor du die Steuerung kennst.",
    sections: [
      { heading: "Erst die Grundlagen", paragraphs: ["Lerne das Kampfgefühl deiner Klasse und schließe eine einfache Extraktion ab, bevor du Größeres wagst."] },
      { heading: "Worauf du achten musst", paragraphs: ["Einen Bosskampf zu suchen, bevor du die Steuerung kennst, ist ein häufiger Anfängerfehler."] },
    ], related: [],
  },
  {
    slug: 'combat-gameplay-guide', title: "Mistfall Hunter Kampf-Gameplay-Guide",
    description: "Der Kampf dreht sich um Ausdauer-Management, Zielen ohne festes Lock-On, Blocken und Ausweichen sowie die spezifischen Werkzeuge deiner Klasse. Spieler, die am längsten überleben, behandeln Ausdauer wie eine zweite Lebensleiste.",
    eyebrow: 'Guide', h1: "Mistfall Hunter Kampf-Gameplay-Guide",
    lead: "Der Kampf dreht sich um Ausdauer-Management, Zielen ohne festes Lock-On, Blocken und Ausweichen sowie die spezifischen Werkzeuge deiner Klasse. Spieler, die am längsten überleben, behandeln Ausdauer wie eine zweite Lebensleiste.",
    sections: [
      { heading: "Ausdauer als zweite Lebensleiste", paragraphs: ["Behandle deine Ausdauer wie eine zweite Lebensleiste, nicht nur als Ressource für Angriffe."] },
      { heading: "Worauf du achten musst", paragraphs: ["Ausdauer bis zum letzten Rest zu verbrauchen, lässt dich ohne Fluchtoption zurück."] },
    ], related: [],
  },
  {
    slug: 'pvp-gameplay-guide', title: "Mistfall Hunter PvP-Gameplay-Guide",
    description: "PvP ist nicht nur Duellieren — Geräusche, Routenkontrolle und Extraktions-Timing entscheiden die meisten Kämpfe, bevor überhaupt ein Treffer landet. Die sichersten Siege kommen davon, einen abgelenkten Hunter zu erwischen, nicht einen vollständig gesunden herauszufordern.",
    eyebrow: 'Guide', h1: "Mistfall Hunter PvP-Gameplay-Guide",
    lead: "PvP ist nicht nur Duellieren — Geräusche, Routenkontrolle und Extraktions-Timing entscheiden die meisten Kämpfe, bevor überhaupt ein Treffer landet. Die sichersten Siege kommen davon, einen abgelenkten Hunter zu erwischen, nicht einen vollständig gesunden herauszufordern.",
    sections: [
      { heading: "Sieg beginnt vor dem Kampf", paragraphs: ["Geräusche und Routenkontrolle entscheiden die meisten Kämpfe schon vor dem ersten Treffer."] },
      { heading: "Worauf du achten musst", paragraphs: ["Einen vollständig gesunden Gegner direkt herauszufordern, ist riskanter als einen abgelenkten zu erwischen."] },
    ], related: [],
  },
  {
    slug: 'pve-gameplay-guide', title: "Mistfall Hunter PvE-Gameplay-Guide",
    description: "PvE-Bedrohungen kosten Zeit, Geräusch und Ressourcen, selbst wenn du gewinnst. Jeder Kampf gegen ein Monster sollte gegen die Frage abgewogen werden, ob die Belohnung die Aufmerksamkeit wert ist, die er von anderen Huntern anzieht.",
    eyebrow: 'Guide', h1: "Mistfall Hunter PvE-Gameplay-Guide",
    lead: "PvE-Bedrohungen kosten Zeit, Geräusch und Ressourcen, selbst wenn du gewinnst. Jeder Kampf gegen ein Monster sollte gegen die Frage abgewogen werden, ob die Belohnung die Aufmerksamkeit wert ist, die er von anderen Huntern anzieht.",
    sections: [
      { heading: "Jeder Kampf hat einen Preis", paragraphs: ["Wäge jeden PvE-Kampf gegen die Aufmerksamkeit ab, die er von anderen Spielern anziehen könnte."] },
      { heading: "Worauf du achten musst", paragraphs: ["Lange, laute Kämpfe gegen Monster können gefährlicher werden als die Monster selbst."] },
    ], related: [],
  },
  {
    slug: 'solo-gameplay-guide', title: "Mistfall Hunter Solo-Gameplay-Guide",
    description: "Solo-Spiel belohnt kurze, leise Routen und Klassen mit einem Fluchttool. Du kannst die Aufmerksamkeit nicht mit Teamkollegen teilen, daher zählen Routendisziplin und frühe Ausgänge mehr als reine Klassenstärke.",
    eyebrow: 'Guide', h1: "Mistfall Hunter Solo-Gameplay-Guide",
    lead: "Solo-Spiel belohnt kurze, leise Routen und Klassen mit einem Fluchttool. Du kannst die Aufmerksamkeit nicht mit Teamkollegen teilen, daher zählen Routendisziplin und frühe Ausgänge mehr als reine Klassenstärke.",
    sections: [
      { heading: "Routendisziplin zählt mehr als Stärke", paragraphs: ["Kurze, leise Routen und ein verlässliches Fluchttool sind solo wichtiger als reine Klassenstärke."] },
      { heading: "Worauf du achten musst", paragraphs: ["Ohne Teamkollegen musst du Aufmerksamkeit und Risiko allein tragen."] },
    ], related: [],
  },
  {
    slug: 'co-op-gameplay-guide', title: "Mistfall Hunter Koop-Gameplay-Guide",
    description: "Koop-Läufe funktionieren am besten, wenn das Squad die Aufgaben klar aufteilt — ein Hunter macht Druck, einer supportet, einer beobachtet die Umgebung — statt dass alle dasselbe Ziel angreifen.",
    eyebrow: 'Guide', h1: "Mistfall Hunter Koop-Gameplay-Guide",
    lead: "Koop-Läufe funktionieren am besten, wenn das Squad die Aufgaben klar aufteilt — ein Hunter macht Druck, einer supportet, einer beobachtet die Umgebung — statt dass alle dasselbe Ziel angreifen.",
    sections: [
      { heading: "Klare Rollenverteilung", paragraphs: ["Teile die Aufgaben im Team klar auf, statt dass alle dasselbe Ziel angreifen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Ohne klare Rollen wird ein Team leicht zu drei separaten, ungeschützten Spielern."] },
    ], related: [],
  },
  {
    slug: 'mistfall-hunters-spelling', title: "Mistfall Hunter oder Mistfall Hunters? Richtige Schreibweise",
    description: "Der offizielle Titel ist Mistfall Hunter, Singular — Bellrings eigene Seite, Steam und Xbox-Listings verwenden alle die Singularform. \"Mistfall Hunters\" ist einfach eine übliche Suchvariante für dasselbe Spiel.",
    eyebrow: 'Guide', h1: "Mistfall Hunter oder Mistfall Hunters?",
    lead: "Der offizielle Titel ist Mistfall Hunter, Singular — Bellrings eigene Seite, Steam und Xbox-Listings verwenden alle die Singularform. \"Mistfall Hunters\" ist einfach eine übliche Suchvariante für dasselbe Spiel.",
    sections: [
      { heading: "Die offizielle Schreibweise", paragraphs: ["Mistfall Hunter (Singular) ist die offizielle Schreibweise auf allen offiziellen Kanälen."] },
      { heading: "Warum die Variante existiert", paragraphs: ["\"Mistfall Hunters\" ist eine natürliche Suchgewohnheit, kein alternativer Titel."] },
    ], related: [],
  },
  {
    slug: 'mistfall-hunter-vs-mistfall-hunters', title: "Mistfall Hunter vs Mistfall Hunters: dasselbe Spiel",
    description: "Es gibt kein separates Spiel namens Mistfall Hunters — es ist derselbe Titel, Mistfall Hunter, nur anders geschrieben in der Suche. Nutze die Singularform für offizielle Seiten, Stores oder News.",
    eyebrow: 'Guide', h1: "Mistfall Hunter vs Mistfall Hunters",
    lead: "Es gibt kein separates Spiel namens Mistfall Hunters — es ist derselbe Titel, Mistfall Hunter, nur anders geschrieben in der Suche. Nutze die Singularform für offizielle Seiten, Stores oder News.",
    sections: [
      { heading: "Dasselbe Spiel", paragraphs: ["Beide Schreibweisen beziehen sich auf dasselbe Spiel, Mistfall Hunter."] },
      { heading: "Welche Schreibweise nutzen", paragraphs: ["Nutze die Singularform, um offizielle Quellen zuverlässig zu finden."] },
    ], related: [],
  },
  {
    slug: 'mistfall-hunter-name-guide', title: "Mistfall Hunter Namens- & Schreibweisen-Guide",
    description: "Wenn du den Namen als Mistfall Hunters, Mist Fall Hunter oder ähnlich gesehen hast, beziehen sich alle auf dasselbe Spiel. Der offizielle Name auf Steam, Xbox und Bellrings eigener Seite ist Mistfall Hunter.",
    eyebrow: 'Guide', h1: "Mistfall Hunter Namens- und Schreibweisen-Guide",
    lead: "Wenn du den Namen als Mistfall Hunters, Mist Fall Hunter oder ähnlich gesehen hast, beziehen sich alle auf dasselbe Spiel. Der offizielle Name auf Steam, Xbox und Bellrings eigener Seite ist Mistfall Hunter.",
    sections: [
      { heading: "Alle Varianten meinen dasselbe Spiel", paragraphs: ["Verschiedene Schreibweisen wie Mist Fall Hunter beziehen sich alle auf denselben Titel."] },
      { heading: "Der offizielle Name", paragraphs: ["Mistfall Hunter ist der einzige offizielle Name auf Steam, Xbox und der eigenen Seite."] },
    ], related: [],
  },
  {
    slug: 'release-time-time-zones', title: "Mistfall Hunter Release-Zeit in deiner Zeitzone",
    description: "Mistfall Hunter startet am 29. Juli 2026 um 18:00 PT, was dem 30. Juli 2026, 01:00 UTC entspricht — derselbe Zeitpunkt. In Mitteleuropäischer Zeit ist das etwa 3:00 Uhr am 30. Juli; in japanischer Standardzeit etwa 11:00 Uhr am 30. Juli.",
    eyebrow: 'Guide', h1: "Mistfall Hunter Release-Zeit nach Zeitzone",
    lead: "Mistfall Hunter startet am 29. Juli 2026 um 18:00 PT, was dem 30. Juli 2026, 01:00 UTC entspricht — derselbe Zeitpunkt. In Mitteleuropäischer Zeit ist das etwa 3:00 Uhr am 30. Juli; in japanischer Standardzeit etwa 11:00 Uhr am 30. Juli.",
    sections: [
      { heading: "Die Umrechnung", paragraphs: ["18:00 PT am 29. Juli entspricht 01:00 UTC am 30. Juli — demselben Moment weltweit."] },
      { heading: "Regionale Zeiten", paragraphs: ["Prüfe deinen lokalen Store für den genauen Countdown in deiner Zeitzone."] },
    ], related: [],
  },
  {
    slug: 'launch-day-checklist', title: "Mistfall Hunter Launch-Day-Checkliste",
    description: "Vor dem Launch-Tag: Bestätige, dass dein Plattform-Konto verknüpft ist, setze das Spiel auf die Wunschliste oder folge der Store-Seite, entscheide dich zwischen Standard und Deluxe, und wähle eine Klasse, die du gerne lernst.",
    eyebrow: 'Guide', h1: "Mistfall Hunter Launch-Day-Checkliste",
    lead: "Vor dem Launch-Tag: Bestätige, dass dein Plattform-Konto verknüpft ist, setze das Spiel auf die Wunschliste oder folge der Store-Seite, entscheide dich zwischen Standard und Deluxe, und wähle eine Klasse, die du gerne lernst.",
    sections: [
      { heading: "Vor dem Start prüfen", paragraphs: ["Konto verknüpft, Wunschliste gesetzt, Edition entschieden — das gehört zur Vorbereitung."] },
      { heading: "Kein Preload", paragraphs: ["Es gibt keinen Preload, das Spiel wird erst zum offiziellen Startzeitpunkt spielbar."] },
    ], related: [],
  },
  {
    slug: 'launch-week-roadmap', title: "Mistfall Hunter Launch-Woche Roadmap",
    description: "Die Launch-Woche ist das Fenster für Day-One-Patches, Serverstabilitätsberichte und die ersten echten Balance-Diskussionen, sobald Spieler Live-Daten statt Beta-Eindrücke haben. Diese Seite verfolgt das, sobald es offiziell bestätigt wird.",
    eyebrow: 'Guide', h1: "Mistfall Hunter Launch-Woche Roadmap",
    lead: "Die Launch-Woche ist das Fenster für Day-One-Patches, Serverstabilitätsberichte und die ersten echten Balance-Diskussionen, sobald Spieler Live-Daten statt Beta-Eindrücke haben. Diese Seite verfolgt das, sobald es offiziell bestätigt wird.",
    sections: [
      { heading: "Was zu beobachten ist", paragraphs: ["Day-One-Patches und Serverstabilität sind die wichtigsten Themen der ersten Woche."] },
      { heading: "Balance-Diskussionen", paragraphs: ["Erste echte Balance-Diskussionen entstehen erst mit Live-Daten, nicht mit Beta-Eindrücken."] },
    ], related: [],
  },
  {
    slug: 'pre-launch-guide', title: "Mistfall Hunter Vor-dem-Launch-Guide",
    description: "Vor dem Launch ist die nützlichste Vorbereitung, den Extraktions-Loop zu lernen, Klassenrollen zu vergleichen und Plattform und Preis zu bestätigen — nicht, Tierlisten basierend auf Beta-Daten auswendig zu lernen, die möglicherweise nicht in den Launch-Build übernommen werden.",
    eyebrow: 'Guide', h1: "Mistfall Hunter Vor-dem-Launch-Guide",
    lead: "Vor dem Launch ist die nützlichste Vorbereitung, den Extraktions-Loop zu lernen, Klassenrollen zu vergleichen und Plattform und Preis zu bestätigen — nicht, Tierlisten basierend auf Beta-Daten auswendig zu lernen, die möglicherweise nicht in den Launch-Build übernommen werden.",
    sections: [
      { heading: "Was wirklich hilft", paragraphs: ["Den Extraktions-Loop verstehen und Klassenrollen vergleichen ist nützlicher als Beta-Tierlisten auswendig zu lernen."] },
      { heading: "Was zu vermeiden ist", paragraphs: ["Beta-basierte Tierlisten müssen nach dem Launch nicht mehr gelten."] },
    ], related: [],
  },
  {
    slug: 'steam-release-time', title: "Mistfall Hunter Steam-Release-Zeit",
    description: "Steams eigenes Listing zeigt den 29. Juli 2026 als Release. Der genaue Freischaltmoment ist 18:00 PT (30. Juli, 01:00 UTC) laut offizieller Ankündigung; Steam schaltet normalerweise überall zum selben Zeitpunkt frei, angepasst an die lokale Zeit jeder Region.",
    eyebrow: 'Guide', h1: "Mistfall Hunter Steam-Release-Zeit",
    lead: "Steams eigenes Listing zeigt den 29. Juli 2026 als Release. Der genaue Freischaltmoment ist 18:00 PT (30. Juli, 01:00 UTC) laut offizieller Ankündigung; Steam schaltet normalerweise überall zum selben Zeitpunkt frei, angepasst an die lokale Zeit jeder Region.",
    sections: [
      { heading: "Der bestätigte Zeitpunkt", paragraphs: ["Steam zeigt den 29. Juli 2026, mit Freischaltung um 18:00 PT weltweit zum gleichen Moment."] },
      { heading: "Regionale Anpassung", paragraphs: ["Die Uhrzeit wird an die lokale Zeit jeder Region angepasst, der Moment bleibt aber derselbe."] },
    ], related: [],
  },
  {
    slug: 'steam-demo-guide', title: "Mistfall Hunter Steam-Demo-Guide",
    description: "Die Mistfall-Hunter-Demo war während des Steam Next Fest im Juni 2026 verfügbar, getrennt von der offenen Beta vom 15.–22. Juni. Der Demo-Fortschritt wird nicht in die Vollversion übernommen; behandle sie als Vorgeschmack auf Kampf und Extraktions-Loop, nicht als finalen Build.",
    eyebrow: 'Guide', h1: "Mistfall Hunter Steam-Demo-Guide",
    lead: "Die Mistfall-Hunter-Demo war während des Steam Next Fest im Juni 2026 verfügbar, getrennt von der offenen Beta vom 15.–22. Juni. Der Demo-Fortschritt wird nicht in die Vollversion übernommen; behandle sie als Vorgeschmack auf Kampf und Extraktions-Loop, nicht als finalen Build.",
    sections: [
      { heading: "Wann die Demo lief", paragraphs: ["Die Demo lief während des Steam Next Fest im Juni 2026, getrennt von der offenen Beta."] },
      { heading: "Fortschritt zählt nicht", paragraphs: ["Demo-Fortschritt wird nicht in die Vollversion übernommen."] },
    ], related: [],
  },
  {
    slug: 'steam-reviews-tracker', title: "Mistfall Hunter Steam-Bewertungs-Tracker",
    description: "Mistfall Hunter hat nun echte Spieler, die es bewerten können, da es am 29. Juli gestartet ist. Diese Seite verfolgt Bewertungstrends sowie häufiges Lob und häufige Kritik, sobald genug Daten vorliegen.",
    eyebrow: 'Guide', h1: "Mistfall Hunter Steam-Bewertungs-Tracker",
    lead: "Mistfall Hunter hat nun echte Spieler, die es bewerten können, da es am 29. Juli gestartet ist. Diese Seite verfolgt Bewertungstrends sowie häufiges Lob und häufige Kritik, sobald genug Daten vorliegen.",
    sections: [
      { heading: "Frühe Bewertungen", paragraphs: ["Echte Spielerbewertungen entstehen erst jetzt, da das Spiel live ist."] },
      { heading: "Was zu beobachten ist", paragraphs: ["Häufige Kritikpunkte und Lob werden sich in den ersten Tagen nach Launch herauskristallisieren."] },
    ], related: [],
  },
  {
    slug: 'steam-wishlist-guide', title: "Mistfall Hunter Steam-Wunschliste-Guide",
    description: "Mistfall Hunter auf Steam auf die Wunschliste zu setzen (oder auf Xbox oder PlayStation zu folgen) gibt dir eine Benachrichtigung, sobald es freigeschaltet wird. Es gibt keine bestätigte wunschlisten-spezifische Belohnung darüber hinaus.",
    eyebrow: 'Guide', h1: "Mistfall Hunter Steam-Wunschliste-Guide",
    lead: "Mistfall Hunter auf Steam auf die Wunschliste zu setzen (oder auf Xbox oder PlayStation zu folgen) gibt dir eine Benachrichtigung, sobald es freigeschaltet wird. Es gibt keine bestätigte wunschlisten-spezifische Belohnung darüber hinaus.",
    sections: [
      { heading: "Der praktische Nutzen", paragraphs: ["Die Wunschliste sorgt vor allem dafür, dass du den genauen Startzeitpunkt nicht verpasst."] },
      { heading: "Keine spezielle Belohnung", paragraphs: ["Es gibt keine bestätigte, exklusive Belohnung nur für die Wunschliste."] },
    ], related: [],
  },
  {
    slug: 'cross-platform-party-guide', title: "Mistfall Hunter Cross-Plattform-Party-Guide",
    description: "Volles Cross-Play über PC, Xbox und PS5 ist bestätigt und live — Spieler auf unterschiedlichen Plattformen können sich jetzt zusammenschließen und gemeinsam jagen. Cross-Progression ist ein separates Feature und noch nicht in gleicher Form bestätigt.",
    eyebrow: 'Guide', h1: "Mistfall Hunter Cross-Plattform-Party-Guide",
    lead: "Volles Cross-Play über PC, Xbox und PS5 ist bestätigt und live — Spieler auf unterschiedlichen Plattformen können sich jetzt zusammenschließen und gemeinsam jagen. Cross-Progression ist ein separates Feature und noch nicht in gleicher Form bestätigt.",
    sections: [
      { heading: "Live und bestätigt", paragraphs: ["Cross-Play über alle drei Plattformen ist jetzt live und funktioniert."] },
      { heading: "Cross-Progression separat", paragraphs: ["Ein gemeinsames Konto über Plattformen hinweg ist ein anderes, noch nicht bestätigtes Feature."] },
    ], related: [],
  },
  {
    slug: 'cross-progression-guide', title: "Mistfall Hunter Cross-Progression-Guide",
    description: "Cross-Progression — dasselbe Konto und dieselben Freischaltungen über Plattformen hinweg — ist bisher nicht offiziell bestätigt. Die offene Beta bestätigte Cross-Play (Zusammenspielen), was ein verwandtes, aber separates Feature von Cross-Progression (geteilte Spielstände) ist.",
    eyebrow: 'Guide', h1: "Mistfall Hunter Cross-Progression-Guide",
    lead: "Cross-Progression — dasselbe Konto und dieselben Freischaltungen über Plattformen hinweg — ist bisher nicht offiziell bestätigt. Die offene Beta bestätigte Cross-Play (Zusammenspielen), was ein verwandtes, aber separates Feature von Cross-Progression (geteilte Spielstände) ist.",
    sections: [
      { heading: "Was Cross-Progression bedeutet", paragraphs: ["Dasselbe Konto mit geteilten Freischaltungen über Plattformen hinweg zu nutzen, ist noch nicht bestätigt."] },
      { heading: "Nicht zu verwechseln mit Cross-Play", paragraphs: ["Cross-Play (Zusammenspielen) ist bestätigt, Cross-Progression (geteilte Spielstände) ist ein separates Thema."] },
    ], related: [],
  },
  {
    slug: 'pc-xbox-crossplay-guide', title: "Mistfall Hunter PC & Xbox Crossplay-Guide",
    description: "Ja — PC- und Xbox-Spieler können zusammen spielen, da volles Cross-Play über PC, Xbox und PS5 bestätigt und live ist. Konsolen-Online-Multiplayer auf Xbox benötigt Game Pass Core oder Ultimate.",
    eyebrow: 'Guide', h1: "Mistfall Hunter PC und Xbox Crossplay",
    lead: "Ja — PC- und Xbox-Spieler können zusammen spielen, da volles Cross-Play über PC, Xbox und PS5 bestätigt und live ist. Konsolen-Online-Multiplayer auf Xbox benötigt Game Pass Core oder Ultimate.",
    sections: [
      { heading: "Bestätigt und live", paragraphs: ["PC- und Xbox-Spieler können jetzt zusammen spielen, das Cross-Play ist live."] },
      { heading: "Was Xbox-Spieler brauchen", paragraphs: ["Für Online-Multiplayer auf Xbox wird Game Pass Core oder Ultimate benötigt."] },
    ], related: [],
  },
  {
    slug: 'ps5-crossplay-guide', title: "Mistfall Hunter PS5-Crossplay-Guide",
    description: "Ja — PS5 ist im bestätigten vollen Cross-Play über PC, Xbox und PS5 zum Launch enthalten, sodass PS5-Spieler mit PC- und Xbox-Huntern zusammen spielen können.",
    eyebrow: 'Guide', h1: "Mistfall Hunter PS5-Crossplay-Guide",
    lead: "Ja — PS5 ist im bestätigten vollen Cross-Play über PC, Xbox und PS5 zum Launch enthalten, sodass PS5-Spieler mit PC- und Xbox-Huntern zusammen spielen können.",
    sections: [
      { heading: "PS5 ist eingeschlossen", paragraphs: ["PS5 ist Teil des bestätigten Cross-Play-Verbunds mit PC und Xbox."] },
      { heading: "Was das bedeutet", paragraphs: ["PS5-Spieler können ohne Einschränkung mit PC- und Xbox-Spielern zusammenspielen."] },
    ], related: [],
  },
  {
    slug: 'steam-price-guide', title: "Mistfall Hunter Steam-Preis-Guide",
    description: "Auf Steam kostet die Standard Edition 24,99 $ und die Deluxe Edition 39,99 $, mit einem Upgrade-Pfad für 15 $. Ein 10 % Launch-Rabatt gilt vom Moment der Freischaltung bis zum 12. August 2026.",
    eyebrow: 'Guide', h1: "Mistfall Hunter Steam-Preis-Guide",
    lead: "Auf Steam kostet die Standard Edition 24,99 $ und die Deluxe Edition 39,99 $, mit einem Upgrade-Pfad für 15 $. Ein 10 % Launch-Rabatt gilt vom Moment der Freischaltung bis zum 12. August 2026.",
    sections: [
      { heading: "Bestätigter Preis", paragraphs: ["Standard 24,99 $, Deluxe 39,99 $, mit 15 $ Upgrade-Option."] },
      { heading: "Der Launch-Rabatt", paragraphs: ["10 % Rabatt gilt von der Freischaltung bis zum 12. August 2026."] },
    ], related: [],
  },
  {
    slug: 'xbox-price-guide', title: "Mistfall Hunter Xbox-Preis-Guide",
    description: "Die Xbox-Preise entsprechen Steam: 24,99 $ Standard, 39,99 $ Deluxe. Es ist außerdem ab Tag eins im Xbox Game Pass für Xbox und PC, sodass Game-Pass-Abonnenten spielen können, ohne es separat zu kaufen.",
    eyebrow: 'Guide', h1: "Mistfall Hunter Xbox-Preis-Guide",
    lead: "Die Xbox-Preise entsprechen Steam: 24,99 $ Standard, 39,99 $ Deluxe. Es ist außerdem ab Tag eins im Xbox Game Pass für Xbox und PC, sodass Game-Pass-Abonnenten spielen können, ohne es separat zu kaufen.",
    sections: [
      { heading: "Preis wie auf Steam", paragraphs: ["Xbox-Preise entsprechen genau den Steam-Preisen."] },
      { heading: "Game Pass Vorteil", paragraphs: ["Game-Pass-Abonnenten erhalten das Spiel ab Tag eins ohne zusätzlichen Kauf."] },
    ], related: [],
  },
  {
    slug: 'ps5-price-guide', title: "Mistfall Hunter PS5-Preis-Guide",
    description: "Die PS5-Preise folgen derselben Struktur wie überall: 24,99 $ Standard / 39,99 $ Deluxe. Anders als bei Xbox ist es zum Launch nicht in PS Plus enthalten, PS5-Spieler müssen es direkt kaufen.",
    eyebrow: 'Guide', h1: "Mistfall Hunter PS5-Preis-Guide",
    lead: "Die PS5-Preise folgen derselben Struktur wie überall: 24,99 $ Standard / 39,99 $ Deluxe. Anders als bei Xbox ist es zum Launch nicht in PS Plus enthalten, PS5-Spieler müssen es direkt kaufen.",
    sections: [
      { heading: "Preis wie überall", paragraphs: ["PS5-Preise folgen der gleichen 24,99 $ / 39,99 $ Struktur wie auf allen Plattformen."] },
      { heading: "Nicht in PS Plus enthalten", paragraphs: ["Anders als Xbox Game Pass ist das Spiel nicht in PS Plus enthalten."] },
    ], related: [],
  },
  {
    slug: 'game-pass-or-buy-guide', title: "Mistfall Hunter: Game Pass oder Kaufen?",
    description: "Wenn du auf Xbox oder PC bist, bekommst du Mistfall Hunter ab Tag eins über Game Pass ohne zusätzliche Kosten außer dem Abo. Ein Kauf lohnt sich mehr, wenn du über ein mögliches Game-Pass-Ende hinaus weiterspielen willst, oder auf PS5, wo Game Pass nicht gilt.",
    eyebrow: 'Guide', h1: "Mistfall Hunter: Game Pass oder kaufen?",
    lead: "Wenn du auf Xbox oder PC bist, bekommst du Mistfall Hunter ab Tag eins über Game Pass ohne zusätzliche Kosten außer dem Abo. Ein Kauf lohnt sich mehr, wenn du über ein mögliches Game-Pass-Ende hinaus weiterspielen willst, oder auf PS5, wo Game Pass nicht gilt.",
    sections: [
      { heading: "Game Pass für Xbox/PC", paragraphs: ["Game Pass gibt dir Zugang ab Tag eins ohne zusätzlichen Kauf."] },
      { heading: "Wann Kaufen sinnvoll ist", paragraphs: ["Kaufen lohnt sich für langfristiges Spielen oder auf PS5, wo Game Pass nicht verfügbar ist."] },
    ], related: [],
  },
  {
    slug: 'classes-overview-2026', title: "Mistfall Hunter Klassenübersicht (2026)",
    description: "Mistfall Hunter startet mit sechs Klassen: Mercenary (Nahkampf-Bruiser), Sorcerer (Fernkampf-Magie), Blackarrow (Fernkampf-Präzision), Shadowstrix (Stealth und Burst), Seer (Support) und Withered Knight (schwerer Nahkampf mit Paraden). Jede hat mehrere Waffenhaltungen statt eines festen Kits.",
    eyebrow: 'Guide', h1: "Mistfall Hunter Klassenübersicht",
    lead: "Mistfall Hunter startet mit sechs Klassen: Mercenary (Nahkampf-Bruiser), Sorcerer (Fernkampf-Magie), Blackarrow (Fernkampf-Präzision), Shadowstrix (Stealth und Burst), Seer (Support) und Withered Knight (schwerer Nahkampf mit Paraden). Jede hat mehrere Waffenhaltungen statt eines festen Kits.",
    sections: [
      { heading: "Sechs Klassen im Überblick", paragraphs: ["Mercenary, Sorcerer, Blackarrow, Shadowstrix, Seer und Withered Knight — jede mit mehreren Waffenhaltungen."] },
      { heading: "Keine feste Rolle", paragraphs: ["Jede Klasse bietet mehrere Waffenhaltungen statt eines einzigen festen Spielstils."] },
    ], related: [],
  },
  {
    slug: 'classes-ranked-for-launch', title: "Mistfall Hunter Klassen für den Launch bewertet",
    description: "Ohne Live-Balance-Daten ist das sicherste Bewertungskriterium für den Launch Rollenklarheit und Anfängerfreundlichkeit statt reinem Schaden. Siehe den Best-Class-for-Beginners-Guide für eine Aufschlüsselung nach Rolle; echte Tierlisten werden sich mit Launch-Daten verschieben.",
    eyebrow: 'Guide', h1: "Mistfall Hunter Klassen für den Launch bewertet",
    lead: "Ohne Live-Balance-Daten ist das sicherste Bewertungskriterium für den Launch Rollenklarheit und Anfängerfreundlichkeit statt reinem Schaden. Siehe den Best-Class-for-Beginners-Guide für eine Aufschlüsselung nach Rolle; echte Tierlisten werden sich mit Launch-Daten verschieben.",
    sections: [
      { heading: "Klarheit statt reinem Schaden", paragraphs: ["Rollenklarheit und Anfängerfreundlichkeit sind sicherere Kriterien als reine Schadenszahlen."] },
      { heading: "Tierlisten werden sich ändern", paragraphs: ["Echte Tierlisten verschieben sich, sobald Live-Daten aus dem Launch vorliegen."] },
    ], related: [],
  },
  {
    slug: 'classes-for-squads', title: "Beste Mistfall Hunter Klassen für Squads",
    description: "Im Squad können sich Klassen stärker spezialisieren, da Teamkollegen Schwächen abdecken. Eine Mischung aus Frontline-Druck, Fernkampf-Kontrolle und Support übertrifft meist drei Kopien derselben Rolle.",
    eyebrow: 'Guide', h1: "Beste Klassen für Squads",
    lead: "Im Squad können sich Klassen stärker spezialisieren, da Teamkollegen Schwächen abdecken. Eine Mischung aus Frontline-Druck, Fernkampf-Kontrolle und Support übertrifft meist drei Kopien derselben Rolle.",
    sections: [
      { heading: "Stärker spezialisieren", paragraphs: ["Im Team können Klassen sich stärker spezialisieren, weil Teamkollegen Schwächen ausgleichen."] },
      { heading: "Der richtige Mix", paragraphs: ["Frontline, Fernkampf-Kontrolle und Support zusammen schlagen meist drei gleiche Rollen."] },
    ], related: [],
  },
  {
    slug: 'classes-for-beginners-2026', title: "Beste Mistfall Hunter Klassen für Anfänger (2026)",
    description: "Neue Spieler kommen am besten mit einer Klasse zurecht, die Fehler mild bestraft — klare defensive Werkzeuge und eine einfache Siegbedingung schlagen ein komplexes Kit, das du noch nicht gelernt hast.",
    eyebrow: 'Guide', h1: "Beste Klassen für Anfänger",
    lead: "Neue Spieler kommen am besten mit einer Klasse zurecht, die Fehler mild bestraft — klare defensive Werkzeuge und eine einfache Siegbedingung schlagen ein komplexes Kit, das du noch nicht gelernt hast.",
    sections: [
      { heading: "Fehler mild bestrafen", paragraphs: ["Wähle eine Klasse, die Fehler mild bestraft, statt ein komplexes Kit mit hohem Skill-Ceiling."] },
      { heading: "Einfachheit zuerst", paragraphs: ["Klare Verteidigungswerkzeuge sind für den Einstieg wichtiger als hohes Schadenspotenzial."] },
    ], related: [],
  },
  {
    slug: 'best-route-for-beginners', title: "Mistfall Hunter beste Route für Anfänger",
    description: "Die sicherste Anfängerroute bleibt in den Außenbereichen der Karte, meidet die Mist-Lord-Arena und priorisiert das Finden des Soul of Return vor zusätzlichem Loot.",
    eyebrow: 'Guide', h1: "Beste Route für Anfänger",
    lead: "Die sicherste Anfängerroute bleibt in den Außenbereichen der Karte, meidet die Mist-Lord-Arena und priorisiert das Finden des Soul of Return vor zusätzlichem Loot.",
    sections: [
      { heading: "Kurze Route, frühe Extraktion", paragraphs: ["Halte dich an eine kurze, leise Route und übe mit günstiger Ausrüstung, bevor du dich weiter wagst."] },
      { heading: "Worauf du achten musst", paragraphs: ["Boss-Routen zu meiden, bis du die Ausgänge kennst, ist der sicherste Ansatz für den Einstieg."] },
    ], related: [],
  },
  {
    slug: 'safe-loot-route-guide', title: "Mistfall Hunter sichere Loot-Route",
    description: "Eine sichere Loot-Route wiederholt eine kurze, leise Schleife, stoppt sobald die Tasche riskant wertvoll ist, und priorisiert einen klaren Ausgang vor einem weiteren Container.",
    eyebrow: 'Guide', h1: "Sichere Loot-Route",
    lead: "Eine sichere Loot-Route wiederholt eine kurze, leise Schleife, stoppt sobald die Tasche riskant wertvoll ist, und priorisiert einen klaren Ausgang vor einem weiteren Container.",
    sections: [
      { heading: "Wiederholbare Schleife mit Stopp-Regel", paragraphs: ["Nutze eine kurze, wiederholbare Route mit einer klaren Regel, wann du aufhörst."] },
      { heading: "Worauf du achten musst", paragraphs: ["Aus einem Loot-Lauf unabsichtlich einen Boss-Lauf zu machen, ist der häufigste Fehler."] },
    ], related: [],
  },
  {
    slug: 'high-risk-high-reward-route', title: "Mistfall Hunter Hochrisiko-Hochbelohnungs-Route",
    description: "Hochrisiko-Routen führen durch bossnahe Gebiete wie den Divine Anchor oder eine Mist-Lord-Arena, wo die Beute besser, aber PvP-Verkehr und Elite-Gegner viel gefährlicher sind — nicht empfohlen, bis du mit der Basis-Extraktionsschleife vertraut bist.",
    eyebrow: 'Guide', h1: "Hochrisiko-Hochbelohnungs-Route",
    lead: "Hochrisiko-Routen führen durch bossnahe Gebiete wie den Divine Anchor oder eine Mist-Lord-Arena, wo die Beute besser, aber PvP-Verkehr und Elite-Gegner viel gefährlicher sind — nicht empfohlen, bis du mit der Basis-Extraktionsschleife vertraut bist.",
    sections: [
      { heading: "Bessere Beute, höheres Risiko", paragraphs: ["Bossnahe Gebiete bieten bessere Beute, aber deutlich höheres PvP- und Elite-Gegner-Risiko."] },
      { heading: "Worauf du achten musst", paragraphs: ["Diese Routen sind nichts für blutige Anfänger — erst die Basis-Schleife beherrschen."] },
    ], related: [],
  },
  {
    slug: 'duo-route-guide', title: "Mistfall Hunter Duo-Routen-Guide",
    description: "Eine Zweier-Route funktioniert am besten, wenn ein Spieler Druck und Loot übernimmt, während der andere Winkel beobachtet und die Extraktion absichert — getrennte Aufgaben schlagen doppeltes Looten am selben Ort.",
    eyebrow: 'Guide', h1: "Duo-Routen-Guide",
    lead: "Eine Zweier-Route funktioniert am besten, wenn ein Spieler Druck und Loot übernimmt, während der andere Winkel beobachtet und die Extraktion absichert — getrennte Aufgaben schlagen doppeltes Looten am selben Ort.",
    sections: [
      { heading: "Aufgaben aufteilen", paragraphs: ["Ein Spieler übernimmt Druck und Loot, der andere beobachtet Winkel und sichert die Extraktion."] },
      { heading: "Worauf du achten musst", paragraphs: ["Sich so weit aufzuteilen, dass Trades verloren gehen, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'trio-route-guide', title: "Mistfall Hunter Trio-Routen-Guide",
    description: "Eine Dreier-Route profitiert von klaren Rollen: ein Frontliner, ein Fernkämpfer oder Kontrolle, und ein Support oder Späher, die nach jedem Kampf gemeinsam zurücksetzen statt sich zu verstreuen.",
    eyebrow: 'Guide', h1: "Trio-Routen-Guide",
    lead: "Eine Dreier-Route profitiert von klaren Rollen: ein Frontliner, ein Fernkämpfer oder Kontrolle, und ein Support oder Späher, die nach jedem Kampf gemeinsam zurücksetzen statt sich zu verstreuen.",
    sections: [
      { heading: "Klare Rollen", paragraphs: ["Frontline, Fernkampf-Kontrolle und Support — jede Rolle klar zugeteilt statt improvisiert."] },
      { heading: "Worauf du achten musst", paragraphs: ["Wenn alle drei looten und niemand die Winkel beobachtet, wird es gefährlich."] },
    ], related: [],
  },
  {
    slug: 'rat-route-guide', title: "Mistfall Hunter Stealth-Routen-Guide",
    description: "Eine stealth-fokussierte Route meidet Kämpfe komplett, bleibt bei leiser Bewegung und wenig frequentiertem Loot, und extrahiert früh, statt auf eine größere Tasche zu drängen.",
    eyebrow: 'Guide', h1: "Stealth-Routen-Guide",
    lead: "Eine stealth-fokussierte Route meidet Kämpfe komplett, bleibt bei leiser Bewegung und wenig frequentiertem Loot, und extrahiert früh, statt auf eine größere Tasche zu drängen.",
    sections: [
      { heading: "Leise Bewegung, frühe Extraktion", paragraphs: ["Meide Kämpfe komplett und bleib bei leiser Bewegung und wenig frequentiertem Loot."] },
      { heading: "Worauf du achten musst", paragraphs: ["Stealth-Routen nicht als Ausrede nutzen, um zu lange zu bleiben."] },
    ], related: [],
  },
  {
    slug: 'boss-rush-route-guide', title: "Mistfall Hunter Boss-Rush-Routen-Guide",
    description: "Eine bossfokussierte Route behandelt den Kampf als einziges Ziel: erkunde die Arena zuerst, bring genug Vorräte mit und plane die Extraktionsroute vor dem Kampf, nicht danach.",
    eyebrow: 'Guide', h1: "Boss-Rush-Routen-Guide",
    lead: "Eine bossfokussierte Route behandelt den Kampf als einziges Ziel: erkunde die Arena zuerst, bring genug Vorräte mit und plane die Extraktionsroute vor dem Kampf, nicht danach.",
    sections: [
      { heading: "Ein Ziel, ein Plan", paragraphs: ["Erkunde die Arena zuerst und plane die Extraktion, bevor du in den Kampf gehst."] },
      { heading: "Worauf du achten musst", paragraphs: ["Ohne genug Vorräte oder Ausgangskenntnis in einen Boss-Rush zu gehen, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'extraction-camping-counter-guide', title: "Mistfall Hunter Gegenmaßnahmen bei Extraktions-Camping",
    description: "Wenn ein Extraktionspunkt bewacht wird, versuche es aus einem anderen Winkel, höre auf die Position des Campers, oder warte ihn aus der Deckung aus, statt direkt hineinzurennen.",
    eyebrow: 'Guide', h1: "Gegenmaßnahmen bei Extraktions-Camping",
    lead: "Wenn ein Extraktionspunkt bewacht wird, versuche es aus einem anderen Winkel, höre auf die Position des Campers, oder warte ihn aus der Deckung aus, statt direkt hineinzurennen.",
    sections: [
      { heading: "Winkel wechseln, warten, zuhören", paragraphs: ["Nähere dich aus einem anderen Winkel oder warte den Camper aus der Deckung aus."] },
      { heading: "Worauf du achten musst", paragraphs: ["Direkt in eine finale Extraktion zu rennen, ist besonders riskant."] },
    ], related: [],
  },
  {
    slug: 'ambush-guide', title: "Mistfall Hunter Hinterhalt-Guide",
    description: "Ein guter Hinterhalt setzt auf Geräuschdisziplin und einen klaren Winkel — bleib leise, lass das Ziel sich auf Looten oder einen anderen Kampf festlegen, dann schlage mit bereiten Cooldowns und einem schnellen Folgeplan zu.",
    eyebrow: 'Guide', h1: "Hinterhalt-Guide",
    lead: "Ein guter Hinterhalt setzt auf Geräuschdisziplin und einen klaren Winkel — bleib leise, lass das Ziel sich auf Looten oder einen anderen Kampf festlegen, dann schlage mit bereiten Cooldowns und einem schnellen Folgeplan zu.",
    sections: [
      { heading: "Geräusch und Winkel", paragraphs: ["Bleib leise und warte den richtigen Moment ab, bevor du zuschlägst."] },
      { heading: "Worauf du achten musst", paragraphs: ["Hinterhalte, die zu weit von der Extraktion wegziehen, sind riskant."] },
    ], related: [],
  },
  {
    slug: 'escape-after-kill-guide', title: "Mistfall Hunter Flucht nach einem Kill",
    description: "Nach einem Kill widerstehe dem Drang, sofort zu looten — höre zuerst zu, loote dann schnell, setze deine Cooldowns zurück und verlasse das Gebiet, bevor eine Third-Party durch den Lärm angelockt wird.",
    eyebrow: 'Guide', h1: "Flucht nach einem Kill",
    lead: "Nach einem Kill widerstehe dem Drang, sofort zu looten — höre zuerst zu, loote dann schnell, setze deine Cooldowns zurück und verlasse das Gebiet, bevor eine Third-Party durch den Lärm angelockt wird.",
    sections: [
      { heading: "Zuhören, schnell looten, gehen", paragraphs: ["Höre zuerst zu, loote schnell und verlasse das Gebiet vor der nächsten Bedrohung."] },
      { heading: "Worauf du achten musst", paragraphs: ["Sofort ohne Deckung oder Cooldowns zu looten, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'best-affixes-for-solo', title: "Mistfall Hunter beste Affixe für Solo",
    description: "Solo-Builds profitieren am meisten von Überlebens- und Mobilitäts-Affixen — Sustain und Fluchttools zählen mehr als reiner Schaden, da kein Teamkollege eine schlechte Position abdeckt.",
    eyebrow: 'Guide', h1: "Beste Affixe für Solo",
    lead: "Solo-Builds profitieren am meisten von Überlebens- und Mobilitäts-Affixen — Sustain und Fluchttools zählen mehr als reiner Schaden, da kein Teamkollege eine schlechte Position abdeckt.",
    sections: [
      { heading: "Überleben vor Schaden", paragraphs: ["Sustain und Fluchttools sind solo wichtiger als reiner Schaden."] },
      { heading: "Worauf du achten musst", paragraphs: ["Reine Schadenswerte, die keinen Reset ermöglichen, sind ein Fehler."] },
    ], related: [],
  },
  {
    slug: 'best-affixes-for-pvp', title: "Mistfall Hunter beste Affixe für PvP",
    description: "PvP-fokussierte Affixe priorisieren Burst-Schaden, Ausdauereffizienz und defensive Schwellenwerte; genaue Werte brauchen noch Launch-Build-Verifizierung, bevor ein bestimmter Roll als optimal gilt.",
    eyebrow: 'Guide', h1: "Beste Affixe für PvP",
    lead: "PvP-fokussierte Affixe priorisieren Burst-Schaden, Ausdauereffizienz und defensive Schwellenwerte; genaue Werte brauchen noch Launch-Build-Verifizierung, bevor ein bestimmter Roll als optimal gilt.",
    sections: [
      { heading: "Burst und Ausdauer", paragraphs: ["Burst-Schaden, Ausdauereffizienz und defensive Schwellenwerte stehen im Vordergrund."] },
      { heading: "Worauf du achten musst", paragraphs: ["Werte vor bestätigter Live-Balance zu ranken, ist verfrüht."] },
    ], related: [],
  },
  {
    slug: 'best-affixes-for-pve', title: "Mistfall Hunter beste Affixe für PvE",
    description: "PvE-fokussierte Affixe bevorzugen nachhaltigen Schaden und Erholung statt Burst, da Bosskämpfe Durchhaltevermögen mehr belohnen als ein einzelner großer Treffer.",
    eyebrow: 'Guide', h1: "Beste Affixe für PvE",
    lead: "PvE-fokussierte Affixe bevorzugen nachhaltigen Schaden und Erholung statt Burst, da Bosskämpfe Durchhaltevermögen mehr belohnen als ein einzelner großer Treffer.",
    sections: [
      { heading: "Nachhaltiger Schaden vor Burst", paragraphs: ["Bosskämpfe belohnen Durchhaltevermögen mehr als einen einzelnen großen Treffer."] },
      { heading: "Worauf du achten musst", paragraphs: ["PvE-Gier ohne Fluchtplan ist riskant."] },
    ], related: [],
  },
  {
    slug: 'best-affixes-for-bosses', title: "Mistfall Hunter beste Affixe für Bosse",
    description: "Boss-fokussierte Ausrüstung sollte sicheren, nachhaltigen Schaden mit genug Überlebensfähigkeit balancieren, um auch den Extraktionskampf zu gewinnen, der oft auf einen Bosskill folgt.",
    eyebrow: 'Guide', h1: "Beste Affixe für Bosse",
    lead: "Boss-fokussierte Ausrüstung sollte sicheren, nachhaltigen Schaden mit genug Überlebensfähigkeit balancieren, um auch den Extraktionskampf zu gewinnen, der oft auf einen Bosskill folgt.",
    sections: [
      { heading: "Schaden und Überleben balancieren", paragraphs: ["Balanciere sicheren Schaden mit genug Überlebensfähigkeit für den Kampf nach dem Boss."] },
      { heading: "Worauf du achten musst", paragraphs: ["Ausrüstung, die den Boss gewinnt, aber die Extraktion verliert, ist ein Fehler."] },
    ], related: [],
  },
  {
    slug: 'gear-rarity-guide', title: "Mistfall Hunter Ausrüstungs-Seltenheits-Guide",
    description: "Ausrüstungsseltenheit spiegelt sowohl rohe Stärke als auch Affix-Qualität wider; ein Item niedrigerer Seltenheit mit einem build-definierenden Affix kann ein selteneres Item mit generischen Rolls übertreffen.",
    eyebrow: 'Guide', h1: "Ausrüstungs-Seltenheits-Guide",
    lead: "Ausrüstungsseltenheit spiegelt sowohl rohe Stärke als auch Affix-Qualität wider; ein Item niedrigerer Seltenheit mit einem build-definierenden Affix kann ein selteneres Item mit generischen Rolls übertreffen.",
    sections: [
      { heading: "Seltenheit ist nicht alles", paragraphs: ["Ein build-definierender Affix kann wichtiger sein als reine Seltenheitsstufe."] },
      { heading: "Worauf du achten musst", paragraphs: ["Finale Seltenheitsstufen ohne Verifizierung zu erfinden, ist ein Fehler."] },
    ], related: [],
  },
  {
    slug: 'weapon-tier-list', title: "Mistfall Hunter Waffen-Tierliste",
    description: "Ohne Live-Balance-Daten ist ein sicheres Kriterium für die Launch-Woche Rollenpassung und Sicherheit statt reinem Schaden — behandle jede Vor-Launch-Waffen-Tierliste als vorläufig, bis sie getestet ist.",
    eyebrow: 'Guide', h1: "Waffen-Tierliste",
    lead: "Ohne Live-Balance-Daten ist ein sicheres Kriterium für die Launch-Woche Rollenpassung und Sicherheit statt reinem Schaden — behandle jede Vor-Launch-Waffen-Tierliste als vorläufig, bis sie getestet ist.",
    sections: [
      { heading: "Rollenpassung vor reinem Schaden", paragraphs: ["Rollenpassung und Sicherheit sind sicherere Kriterien als reine Schadenszahlen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Finale Tier-Aussagen vor der Launch-Balance sind verfrüht."] },
    ], related: [],
  },
  {
    slug: 'armor-guide', title: "Mistfall Hunter Rüstungs-Guide",
    description: "Rüstungswahl tauscht Überlebensfähigkeit gegen Mobilität; schwerer ist nicht automatisch besser, wenn es dich die Ausdauer kostet, die du zum Lösen eines schlechten Kampfes brauchst.",
    eyebrow: 'Guide', h1: "Rüstungs-Guide",
    lead: "Rüstungswahl tauscht Überlebensfähigkeit gegen Mobilität; schwerer ist nicht automatisch besser, wenn es dich die Ausdauer kostet, die du zum Lösen eines schlechten Kampfes brauchst.",
    sections: [
      { heading: "Überleben gegen Mobilität", paragraphs: ["Schwerere Rüstung ist nicht automatisch besser, wenn sie Mobilität kostet."] },
      { heading: "Worauf du achten musst", paragraphs: ["Anzunehmen, dass schwerer immer besser ist, ist ein Fehler."] },
    ], related: [],
  },
  {
    slug: 'consumables-guide', title: "Mistfall Hunter Verbrauchsgegenstände-Guide",
    description: "Nützliche Verbrauchsgegenstände decken Heilung, Sustain während einer langen Route und Notfallerholung ab — genaue Namen und Effekte brauchen noch Launch-Build-Verifizierung, bevor eine konkrete Liste veröffentlicht wird.",
    eyebrow: 'Guide', h1: "Verbrauchsgegenstände-Guide",
    lead: "Nützliche Verbrauchsgegenstände decken Heilung, Sustain während einer langen Route und Notfallerholung ab — genaue Namen und Effekte brauchen noch Launch-Build-Verifizierung, bevor eine konkrete Liste veröffentlicht wird.",
    sections: [
      { heading: "Heilung, Sustain, Notfall", paragraphs: ["Verbrauchsgegenstände sollten Heilung, Sustain und Notfallerholung abdecken."] },
      { heading: "Worauf du achten musst", paragraphs: ["Konkrete Items ohne Verifizierung zu listen, ist verfrüht."] },
    ], related: [],
  },
  {
    slug: 'crafting-guide', title: "Mistfall Hunter Crafting-Guide",
    description: "Crafting dürfte das Banken von Ressourcen und das Befolgen verifizierter Rezepte beinhalten; genaue Rezepte und Ressourcenkosten sind noch nicht veröffentlicht und sollten nicht erraten werden.",
    eyebrow: 'Guide', h1: "Crafting-Guide",
    lead: "Crafting dürfte das Banken von Ressourcen und das Befolgen verifizierter Rezepte beinhalten; genaue Rezepte und Ressourcenkosten sind noch nicht veröffentlicht und sollten nicht erraten werden.",
    sections: [
      { heading: "Ressourcen banken, Rezepte verifizieren", paragraphs: ["Crafting basiert auf gebankten Ressourcen und verifizierten Rezepten, nicht auf Vermutungen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Erfundene Rezepte oder Quellentabellen sind irreführend."] },
    ], related: [],
  },
  {
    slug: 'vendor-guide', title: "Mistfall Hunter Händler-Guide",
    description: "Händler dürften Kaufen, Verkaufen und das Banken von Fortschrittswert unterstützen; genaues Inventar und Preise brauchen noch Launch-Build-Bestätigung, bevor Details veröffentlicht werden.",
    eyebrow: 'Guide', h1: "Händler-Guide",
    lead: "Händler dürften Kaufen, Verkaufen und das Banken von Fortschrittswert unterstützen; genaues Inventar und Preise brauchen noch Launch-Build-Bestätigung, bevor Details veröffentlicht werden.",
    sections: [
      { heading: "Kaufen, Verkaufen, Banken", paragraphs: ["Händler unterstützen voraussichtlich Kaufen, Verkaufen und das Banken von Fortschrittswert."] },
      { heading: "Worauf du achten musst", paragraphs: ["Händlerinventar vor Launch-Daten zu behaupten, ist verfrüht."] },
    ], related: [],
  },
  {
    slug: 'returner-woodling-guide', title: "Mistfall Hunter Returner-Woodling-Guide",
    description: "Der Returner Woodling ist das Ziel, das mit dem Soul of Return verbunden ist — ihn früh zu finden und zu sichern, macht aus einem Glücksspiel eine kontrollierte Entscheidung darüber, wann man geht.",
    eyebrow: 'Guide', h1: "Returner-Woodling-Guide",
    lead: "Der Returner Woodling ist das Ziel, das mit dem Soul of Return verbunden ist — ihn früh zu finden und zu sichern, macht aus einem Glücksspiel eine kontrollierte Entscheidung darüber, wann man geht.",
    sections: [
      { heading: "Früh finden und sichern", paragraphs: ["Den Returner Woodling früh zu sichern, macht deinen Lauf kontrollierbar statt riskant."] },
      { heading: "Worauf du achten musst", paragraphs: ["Das Ziel nicht als harmlos zu behandeln, wenn es Geräusch oder Verkehr erzeugt."] },
    ], related: [],
  },
  {
    slug: 'soul-of-return-farming', title: "Mistfall Hunter Soul-of-Return-Farming",
    description: "Priorisiere den Soul of Return, bevor die Tasche zu wertvoll zum Riskieren wird — ihn erst zu farmen, wenn du schon beladen bist, fügt nur unnötige Risikozeit hinzu.",
    eyebrow: 'Guide', h1: "Soul-of-Return-Farming",
    lead: "Priorisiere den Soul of Return, bevor die Tasche zu wertvoll zum Riskieren wird — ihn erst zu farmen, wenn du schon beladen bist, fügt nur unnötige Risikozeit hinzu.",
    sections: [
      { heading: "Zuerst sichern, dann looten", paragraphs: ["Sichere den Soul of Return, bevor die Tasche zu wertvoll zum Riskieren wird."] },
      { heading: "Worauf du achten musst", paragraphs: ["Das Ziel erst zu farmen, wenn die Tasche schon wertvoll ist, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'gyldenblood-farming-route', title: "Mistfall Hunter Gyldenblood-Farmroute",
    description: "Gyldenblood ist eine Ressource, die mit dem Fortschritt verbunden ist; eine sichere Farmroute bankt sie konsistent, statt in stark frequentierten Gebieten für marginale Extragewinne zu verweilen.",
    eyebrow: 'Guide', h1: "Gyldenblood-Farmroute",
    lead: "Gyldenblood ist eine Ressource, die mit dem Fortschritt verbunden ist; eine sichere Farmroute bankt sie konsistent, statt in stark frequentierten Gebieten für marginale Extragewinne zu verweilen.",
    sections: [
      { heading: "Konsistent banken", paragraphs: ["Banke Gyldenblood konsistent, statt in gefährlichen Gebieten für marginale Gewinne zu verweilen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Erfundene Drop-Quellen oder Raten sind irreführend."] },
    ], related: [],
  },
  {
    slug: 'corroded-enemies-guide', title: "Mistfall Hunter Corroded-Gegner-Guide",
    description: "Corroded-Gegner sind die häufigen, vom Mist verzerrten Bedrohungen in jeder Zone — sie zu bekämpfen kostet Zeit und Geräusch, also wäge jeden Kampf danach ab, ob die Belohnung die Aufmerksamkeit wert ist, die er anzieht.",
    eyebrow: 'Guide', h1: "Corroded-Gegner-Guide",
    lead: "Corroded-Gegner sind die häufigen, vom Mist verzerrten Bedrohungen in jeder Zone — sie zu bekämpfen kostet Zeit und Geräusch, also wäge jeden Kampf danach ab, ob die Belohnung die Aufmerksamkeit wert ist, die er anzieht.",
    sections: [
      { heading: "Jeder Kampf hat einen Preis", paragraphs: ["Wäge jeden Kampf gegen Corroded-Gegner gegen die Aufmerksamkeit ab, die er anzieht."] },
      { heading: "Worauf du achten musst", paragraphs: ["Zu viel Zeit in geringwertigen PvE-Kämpfen zu verbringen, ist ein Fehler."] },
    ], related: [],
  },
  {
    slug: 'mist-lord-guide', title: "Mistfall Hunter Mist-Lord-Guide",
    description: "Siehe die dedizierte Mist-Lord-Boss-Seite für die vollständige Aufschlüsselung bekannter Begegnungen, Schwierigkeitsstufen und Belohnungsinformationen.",
    eyebrow: 'Guide', h1: "Mist-Lord-Guide",
    lead: "Siehe die dedizierte Mist-Lord-Boss-Seite für die vollständige Aufschlüsselung bekannter Begegnungen, Schwierigkeitsstufen und Belohnungsinformationen.",
    sections: [
      { heading: "Vorbereitung zählt", paragraphs: ["Erkunde und plane deine Route, bevor du einen Mist Lord herausforderst."] },
      { heading: "Worauf du achten musst", paragraphs: ["Boss-Pulls ohne Rückzugs- oder Support-Plan sind riskant."] },
    ], related: [],
  },
  {
    slug: 'boss-rewards-guide', title: "Mistfall Hunter Boss-Belohnungs-Guide",
    description: "Bestätigte Boss-Belohnungen zentrieren sich um Holy-Waffen, jede an einen bestimmten Kartenboss mit einzigartigen Gameplay-Affixen gebunden; genaue vollständige Belohnungstabellen brauchen noch Launch-Build-Verifizierung.",
    eyebrow: 'Guide', h1: "Boss-Belohnungs-Guide",
    lead: "Bestätigte Boss-Belohnungen zentrieren sich um Holy-Waffen, jede an einen bestimmten Kartenboss mit einzigartigen Gameplay-Affixen gebunden; genaue vollständige Belohnungstabellen brauchen noch Launch-Build-Verifizierung.",
    sections: [
      { heading: "Holy-Waffen im Zentrum", paragraphs: ["Jeder Boss trägt eine einzigartige Holy-Waffe mit besonderen Affixen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Belohnungstabellen vor verifizierten Drops zu veröffentlichen, ist verfrüht."] },
    ], related: [],
  },
  {
    slug: 'boss-mechanics-guide', title: "Mistfall Hunter Boss-Mechaniken-Guide",
    description: "Boss-Mechaniken sollten durch Erkundung und sichere erste Versuche gelernt werden, statt aus Beta-Aufnahmen angenommen zu werden, da sich genaue Muster vor dem Launch noch ändern können.",
    eyebrow: 'Guide', h1: "Boss-Mechaniken-Guide",
    lead: "Boss-Mechaniken sollten durch Erkundung und sichere erste Versuche gelernt werden, statt aus Beta-Aufnahmen angenommen zu werden, da sich genaue Muster vor dem Launch noch ändern können.",
    sections: [
      { heading: "Durch Erkundung lernen", paragraphs: ["Lerne Boss-Mechaniken durch vorsichtige erste Versuche statt durch Beta-Annahmen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Exakte Mechaniken vor Live-Tests aufzulisten, ist verfrüht."] },
    ], related: [],
  },
  {
    slug: 'pve-enemy-drops-guide', title: "Mistfall Hunter PvE-Gegner-Drops-Guide",
    description: "Drop-Quellen für PvE-Gegner sind noch nicht vollständig aufgelistet; behandle konkrete Drop-Raten-Behauptungen als unbestätigt, bis sie auf dem Launch-Build bestätigt werden.",
    eyebrow: 'Guide', h1: "PvE-Gegner-Drops-Guide",
    lead: "Drop-Quellen für PvE-Gegner sind noch nicht vollständig aufgelistet; behandle konkrete Drop-Raten-Behauptungen als unbestätigt, bis sie auf dem Launch-Build bestätigt werden.",
    sections: [
      { heading: "Noch nicht vollständig bekannt", paragraphs: ["Drop-Quellen für PvE-Gegner sind noch nicht vollständig verifiziert."] },
      { heading: "Worauf du achten musst", paragraphs: ["Erfundene Drop-Raten sind irreführend."] },
    ], related: [],
  },
  {
    slug: 'rare-loot-guide', title: "Mistfall Hunter seltene-Beute-Guide",
    description: "Seltene Beute ist es wert, extrahiert zu werden, nicht wert, dafür zu sterben — sobald du etwas Wertvolles identifiziert hast, priorisiere einen sicheren Ausgang, statt noch mehr aus demselben Lauf herauszupressen.",
    eyebrow: 'Guide', h1: "Seltene-Beute-Guide",
    lead: "Seltene Beute ist es wert, extrahiert zu werden, nicht wert, dafür zu sterben — sobald du etwas Wertvolles identifiziert hast, priorisiere einen sicheren Ausgang, statt noch mehr aus demselben Lauf herauszupressen.",
    sections: [
      { heading: "Extrahieren, nicht sterben", paragraphs: ["Priorisiere einen sicheren Ausgang, sobald du etwas Wertvolles gefunden hast."] },
      { heading: "Worauf du achten musst", paragraphs: ["Nach seltener Beute zu bleiben, wenn die Route schon gewonnen ist, ist ein Fehler."] },
    ], related: [],
  },
  {
    slug: 'loot-priority-list', title: "Mistfall Hunter Loot-Prioritätsliste",
    description: "Eine praktische Loot-Priorität bevorzugt klassenrelevante Upgrades und Fortschrittsressourcen vor generischen, hochseltenen Items, die du noch nicht nutzen kannst.",
    eyebrow: 'Guide', h1: "Loot-Prioritätsliste",
    lead: "Eine praktische Loot-Priorität bevorzugt klassenrelevante Upgrades und Fortschrittsressourcen vor generischen, hochseltenen Items, die du noch nicht nutzen kannst.",
    sections: [
      { heading: "Klassenrelevanz vor Seltenheit", paragraphs: ["Bevorzuge klassenrelevante Upgrades und Fortschrittsressourcen vor generischen seltenen Items."] },
      { heading: "Worauf du achten musst", paragraphs: ["Universelle Listen vor verifizierter Wirtschaft zu erstellen, ist verfrüht."] },
    ], related: [],
  },
  {
    slug: 'best-route-for-beginners', title: "Mistfall Hunter beste Route für Anfänger",
    description: "Die sicherste Anfängerroute bleibt in den Außenbereichen der Karte, meidet die Mist-Lord-Arena und priorisiert das Finden des Soul of Return vor zusätzlichem Loot.",
    eyebrow: 'Guide', h1: "Beste Route für Anfänger",
    lead: "Die sicherste Anfängerroute bleibt in den Außenbereichen der Karte, meidet die Mist-Lord-Arena und priorisiert das Finden des Soul of Return vor zusätzlichem Loot.",
    sections: [
      { heading: "Kurze Route, frühe Extraktion", paragraphs: ["Halte dich an eine kurze, leise Route und übe mit günstiger Ausrüstung, bevor du dich weiter wagst."] },
      { heading: "Worauf du achten musst", paragraphs: ["Boss-Routen zu meiden, bis du die Ausgänge kennst, ist der sicherste Ansatz für den Einstieg."] },
    ], related: [],
  },
  {
    slug: 'safe-loot-route-guide', title: "Mistfall Hunter sichere Loot-Route",
    description: "Eine sichere Loot-Route wiederholt eine kurze, leise Schleife, stoppt sobald die Tasche riskant wertvoll ist, und priorisiert einen klaren Ausgang vor einem weiteren Container.",
    eyebrow: 'Guide', h1: "Sichere Loot-Route",
    lead: "Eine sichere Loot-Route wiederholt eine kurze, leise Schleife, stoppt sobald die Tasche riskant wertvoll ist, und priorisiert einen klaren Ausgang vor einem weiteren Container.",
    sections: [
      { heading: "Wiederholbare Schleife mit Stopp-Regel", paragraphs: ["Nutze eine kurze, wiederholbare Route mit einer klaren Regel, wann du aufhörst."] },
      { heading: "Worauf du achten musst", paragraphs: ["Aus einem Loot-Lauf unabsichtlich einen Boss-Lauf zu machen, ist der häufigste Fehler."] },
    ], related: [],
  },
  {
    slug: 'high-risk-high-reward-route', title: "Mistfall Hunter Hochrisiko-Hochbelohnungs-Route",
    description: "Hochrisiko-Routen führen durch bossnahe Gebiete wie den Divine Anchor oder eine Mist-Lord-Arena, wo die Beute besser, aber PvP-Verkehr und Elite-Gegner viel gefährlicher sind — nicht empfohlen, bis du mit der Basis-Extraktionsschleife vertraut bist.",
    eyebrow: 'Guide', h1: "Hochrisiko-Hochbelohnungs-Route",
    lead: "Hochrisiko-Routen führen durch bossnahe Gebiete wie den Divine Anchor oder eine Mist-Lord-Arena, wo die Beute besser, aber PvP-Verkehr und Elite-Gegner viel gefährlicher sind — nicht empfohlen, bis du mit der Basis-Extraktionsschleife vertraut bist.",
    sections: [
      { heading: "Bessere Beute, höheres Risiko", paragraphs: ["Bossnahe Gebiete bieten bessere Beute, aber deutlich höheres PvP- und Elite-Gegner-Risiko."] },
      { heading: "Worauf du achten musst", paragraphs: ["Diese Routen sind nichts für blutige Anfänger — erst die Basis-Schleife beherrschen."] },
    ], related: [],
  },
  {
    slug: 'duo-route-guide', title: "Mistfall Hunter Duo-Routen-Guide",
    description: "Eine Zweier-Route funktioniert am besten, wenn ein Spieler Druck und Loot übernimmt, während der andere Winkel beobachtet und die Extraktion absichert — getrennte Aufgaben schlagen doppeltes Looten am selben Ort.",
    eyebrow: 'Guide', h1: "Duo-Routen-Guide",
    lead: "Eine Zweier-Route funktioniert am besten, wenn ein Spieler Druck und Loot übernimmt, während der andere Winkel beobachtet und die Extraktion absichert — getrennte Aufgaben schlagen doppeltes Looten am selben Ort.",
    sections: [
      { heading: "Aufgaben aufteilen", paragraphs: ["Ein Spieler übernimmt Druck und Loot, der andere beobachtet Winkel und sichert die Extraktion."] },
      { heading: "Worauf du achten musst", paragraphs: ["Sich so weit aufzuteilen, dass Trades verloren gehen, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'trio-route-guide', title: "Mistfall Hunter Trio-Routen-Guide",
    description: "Eine Dreier-Route profitiert von klaren Rollen: ein Frontliner, ein Fernkämpfer oder Kontrolle, und ein Support oder Späher, die nach jedem Kampf gemeinsam zurücksetzen statt sich zu verstreuen.",
    eyebrow: 'Guide', h1: "Trio-Routen-Guide",
    lead: "Eine Dreier-Route profitiert von klaren Rollen: ein Frontliner, ein Fernkämpfer oder Kontrolle, und ein Support oder Späher, die nach jedem Kampf gemeinsam zurücksetzen statt sich zu verstreuen.",
    sections: [
      { heading: "Klare Rollen", paragraphs: ["Frontline, Fernkampf-Kontrolle und Support — jede Rolle klar zugeteilt statt improvisiert."] },
      { heading: "Worauf du achten musst", paragraphs: ["Wenn alle drei looten und niemand die Winkel beobachtet, wird es gefährlich."] },
    ], related: [],
  },
  {
    slug: 'rat-route-guide', title: "Mistfall Hunter Stealth-Routen-Guide",
    description: "Eine stealth-fokussierte Route meidet Kämpfe komplett, bleibt bei leiser Bewegung und wenig frequentiertem Loot, und extrahiert früh, statt auf eine größere Tasche zu drängen.",
    eyebrow: 'Guide', h1: "Stealth-Routen-Guide",
    lead: "Eine stealth-fokussierte Route meidet Kämpfe komplett, bleibt bei leiser Bewegung und wenig frequentiertem Loot, und extrahiert früh, statt auf eine größere Tasche zu drängen.",
    sections: [
      { heading: "Leise Bewegung, frühe Extraktion", paragraphs: ["Meide Kämpfe komplett und bleib bei leiser Bewegung und wenig frequentiertem Loot."] },
      { heading: "Worauf du achten musst", paragraphs: ["Stealth-Routen nicht als Ausrede nutzen, um zu lange zu bleiben."] },
    ], related: [],
  },
  {
    slug: 'boss-rush-route-guide', title: "Mistfall Hunter Boss-Rush-Routen-Guide",
    description: "Eine bossfokussierte Route behandelt den Kampf als einziges Ziel: erkunde die Arena zuerst, bring genug Vorräte mit und plane die Extraktionsroute vor dem Kampf, nicht danach.",
    eyebrow: 'Guide', h1: "Boss-Rush-Routen-Guide",
    lead: "Eine bossfokussierte Route behandelt den Kampf als einziges Ziel: erkunde die Arena zuerst, bring genug Vorräte mit und plane die Extraktionsroute vor dem Kampf, nicht danach.",
    sections: [
      { heading: "Ein Ziel, ein Plan", paragraphs: ["Erkunde die Arena zuerst und plane die Extraktion, bevor du in den Kampf gehst."] },
      { heading: "Worauf du achten musst", paragraphs: ["Ohne genug Vorräte oder Ausgangskenntnis in einen Boss-Rush zu gehen, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'extraction-camping-counter-guide', title: "Mistfall Hunter Gegenmaßnahmen bei Extraktions-Camping",
    description: "Wenn ein Extraktionspunkt bewacht wird, versuche es aus einem anderen Winkel, höre auf die Position des Campers, oder warte ihn aus der Deckung aus, statt direkt hineinzurennen.",
    eyebrow: 'Guide', h1: "Gegenmaßnahmen bei Extraktions-Camping",
    lead: "Wenn ein Extraktionspunkt bewacht wird, versuche es aus einem anderen Winkel, höre auf die Position des Campers, oder warte ihn aus der Deckung aus, statt direkt hineinzurennen.",
    sections: [
      { heading: "Winkel wechseln, warten, zuhören", paragraphs: ["Nähere dich aus einem anderen Winkel oder warte den Camper aus der Deckung aus."] },
      { heading: "Worauf du achten musst", paragraphs: ["Direkt in eine finale Extraktion zu rennen, ist besonders riskant."] },
    ], related: [],
  },
  {
    slug: 'ambush-guide', title: "Mistfall Hunter Hinterhalt-Guide",
    description: "Ein guter Hinterhalt setzt auf Geräuschdisziplin und einen klaren Winkel — bleib leise, lass das Ziel sich auf Looten oder einen anderen Kampf festlegen, dann schlage mit bereiten Cooldowns und einem schnellen Folgeplan zu.",
    eyebrow: 'Guide', h1: "Hinterhalt-Guide",
    lead: "Ein guter Hinterhalt setzt auf Geräuschdisziplin und einen klaren Winkel — bleib leise, lass das Ziel sich auf Looten oder einen anderen Kampf festlegen, dann schlage mit bereiten Cooldowns und einem schnellen Folgeplan zu.",
    sections: [
      { heading: "Geräusch und Winkel", paragraphs: ["Bleib leise und warte den richtigen Moment ab, bevor du zuschlägst."] },
      { heading: "Worauf du achten musst", paragraphs: ["Hinterhalte, die zu weit von der Extraktion wegziehen, sind riskant."] },
    ], related: [],
  },
  {
    slug: 'escape-after-kill-guide', title: "Mistfall Hunter Flucht nach einem Kill",
    description: "Nach einem Kill widerstehe dem Drang, sofort zu looten — höre zuerst zu, loote dann schnell, setze deine Cooldowns zurück und verlasse das Gebiet, bevor eine Third-Party durch den Lärm angelockt wird.",
    eyebrow: 'Guide', h1: "Flucht nach einem Kill",
    lead: "Nach einem Kill widerstehe dem Drang, sofort zu looten — höre zuerst zu, loote dann schnell, setze deine Cooldowns zurück und verlasse das Gebiet, bevor eine Third-Party durch den Lärm angelockt wird.",
    sections: [
      { heading: "Zuhören, schnell looten, gehen", paragraphs: ["Höre zuerst zu, loote schnell und verlasse das Gebiet vor der nächsten Bedrohung."] },
      { heading: "Worauf du achten musst", paragraphs: ["Sofort ohne Deckung oder Cooldowns zu looten, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'best-affixes-for-solo', title: "Mistfall Hunter beste Affixe für Solo",
    description: "Solo-Builds profitieren am meisten von Überlebens- und Mobilitäts-Affixen — Sustain und Fluchttools zählen mehr als reiner Schaden, da kein Teamkollege eine schlechte Position abdeckt.",
    eyebrow: 'Guide', h1: "Beste Affixe für Solo",
    lead: "Solo-Builds profitieren am meisten von Überlebens- und Mobilitäts-Affixen — Sustain und Fluchttools zählen mehr als reiner Schaden, da kein Teamkollege eine schlechte Position abdeckt.",
    sections: [
      { heading: "Überleben vor Schaden", paragraphs: ["Sustain und Fluchttools sind solo wichtiger als reiner Schaden."] },
      { heading: "Worauf du achten musst", paragraphs: ["Reine Schadenswerte, die keinen Reset ermöglichen, sind ein Fehler."] },
    ], related: [],
  },
  {
    slug: 'best-affixes-for-pvp', title: "Mistfall Hunter beste Affixe für PvP",
    description: "PvP-fokussierte Affixe priorisieren Burst-Schaden, Ausdauereffizienz und defensive Schwellenwerte; genaue Werte brauchen noch Launch-Build-Verifizierung, bevor ein bestimmter Roll als optimal gilt.",
    eyebrow: 'Guide', h1: "Beste Affixe für PvP",
    lead: "PvP-fokussierte Affixe priorisieren Burst-Schaden, Ausdauereffizienz und defensive Schwellenwerte; genaue Werte brauchen noch Launch-Build-Verifizierung, bevor ein bestimmter Roll als optimal gilt.",
    sections: [
      { heading: "Burst und Ausdauer", paragraphs: ["Burst-Schaden, Ausdauereffizienz und defensive Schwellenwerte stehen im Vordergrund."] },
      { heading: "Worauf du achten musst", paragraphs: ["Werte vor bestätigter Live-Balance zu ranken, ist verfrüht."] },
    ], related: [],
  },
  {
    slug: 'best-affixes-for-pve', title: "Mistfall Hunter beste Affixe für PvE",
    description: "PvE-fokussierte Affixe bevorzugen nachhaltigen Schaden und Erholung statt Burst, da Bosskämpfe Durchhaltevermögen mehr belohnen als ein einzelner großer Treffer.",
    eyebrow: 'Guide', h1: "Beste Affixe für PvE",
    lead: "PvE-fokussierte Affixe bevorzugen nachhaltigen Schaden und Erholung statt Burst, da Bosskämpfe Durchhaltevermögen mehr belohnen als ein einzelner großer Treffer.",
    sections: [
      { heading: "Nachhaltiger Schaden vor Burst", paragraphs: ["Bosskämpfe belohnen Durchhaltevermögen mehr als einen einzelnen großen Treffer."] },
      { heading: "Worauf du achten musst", paragraphs: ["PvE-Gier ohne Fluchtplan ist riskant."] },
    ], related: [],
  },
  {
    slug: 'best-affixes-for-bosses', title: "Mistfall Hunter beste Affixe für Bosse",
    description: "Boss-fokussierte Ausrüstung sollte sicheren, nachhaltigen Schaden mit genug Überlebensfähigkeit balancieren, um auch den Extraktionskampf zu gewinnen, der oft auf einen Bosskill folgt.",
    eyebrow: 'Guide', h1: "Beste Affixe für Bosse",
    lead: "Boss-fokussierte Ausrüstung sollte sicheren, nachhaltigen Schaden mit genug Überlebensfähigkeit balancieren, um auch den Extraktionskampf zu gewinnen, der oft auf einen Bosskill folgt.",
    sections: [
      { heading: "Schaden und Überleben balancieren", paragraphs: ["Balanciere sicheren Schaden mit genug Überlebensfähigkeit für den Kampf nach dem Boss."] },
      { heading: "Worauf du achten musst", paragraphs: ["Ausrüstung, die den Boss gewinnt, aber die Extraktion verliert, ist ein Fehler."] },
    ], related: [],
  },
  {
    slug: 'gear-rarity-guide', title: "Mistfall Hunter Ausrüstungs-Seltenheits-Guide",
    description: "Ausrüstungsseltenheit spiegelt sowohl rohe Stärke als auch Affix-Qualität wider; ein Item niedrigerer Seltenheit mit einem build-definierenden Affix kann ein selteneres Item mit generischen Rolls übertreffen.",
    eyebrow: 'Guide', h1: "Ausrüstungs-Seltenheits-Guide",
    lead: "Ausrüstungsseltenheit spiegelt sowohl rohe Stärke als auch Affix-Qualität wider; ein Item niedrigerer Seltenheit mit einem build-definierenden Affix kann ein selteneres Item mit generischen Rolls übertreffen.",
    sections: [
      { heading: "Seltenheit ist nicht alles", paragraphs: ["Ein build-definierender Affix kann wichtiger sein als reine Seltenheitsstufe."] },
      { heading: "Worauf du achten musst", paragraphs: ["Finale Seltenheitsstufen ohne Verifizierung zu erfinden, ist ein Fehler."] },
    ], related: [],
  },
  {
    slug: 'weapon-tier-list', title: "Mistfall Hunter Waffen-Tierliste",
    description: "Ohne Live-Balance-Daten ist ein sicheres Kriterium für die Launch-Woche Rollenpassung und Sicherheit statt reinem Schaden — behandle jede Vor-Launch-Waffen-Tierliste als vorläufig, bis sie getestet ist.",
    eyebrow: 'Guide', h1: "Waffen-Tierliste",
    lead: "Ohne Live-Balance-Daten ist ein sicheres Kriterium für die Launch-Woche Rollenpassung und Sicherheit statt reinem Schaden — behandle jede Vor-Launch-Waffen-Tierliste als vorläufig, bis sie getestet ist.",
    sections: [
      { heading: "Rollenpassung vor reinem Schaden", paragraphs: ["Rollenpassung und Sicherheit sind sicherere Kriterien als reine Schadenszahlen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Finale Tier-Aussagen vor der Launch-Balance sind verfrüht."] },
    ], related: [],
  },
  {
    slug: 'armor-guide', title: "Mistfall Hunter Rüstungs-Guide",
    description: "Rüstungswahl tauscht Überlebensfähigkeit gegen Mobilität; schwerer ist nicht automatisch besser, wenn es dich die Ausdauer kostet, die du zum Lösen eines schlechten Kampfes brauchst.",
    eyebrow: 'Guide', h1: "Rüstungs-Guide",
    lead: "Rüstungswahl tauscht Überlebensfähigkeit gegen Mobilität; schwerer ist nicht automatisch besser, wenn es dich die Ausdauer kostet, die du zum Lösen eines schlechten Kampfes brauchst.",
    sections: [
      { heading: "Überleben gegen Mobilität", paragraphs: ["Schwerere Rüstung ist nicht automatisch besser, wenn sie Mobilität kostet."] },
      { heading: "Worauf du achten musst", paragraphs: ["Anzunehmen, dass schwerer immer besser ist, ist ein Fehler."] },
    ], related: [],
  },
  {
    slug: 'consumables-guide', title: "Mistfall Hunter Verbrauchsgegenstände-Guide",
    description: "Nützliche Verbrauchsgegenstände decken Heilung, Sustain während einer langen Route und Notfallerholung ab — genaue Namen und Effekte brauchen noch Launch-Build-Verifizierung, bevor eine konkrete Liste veröffentlicht wird.",
    eyebrow: 'Guide', h1: "Verbrauchsgegenstände-Guide",
    lead: "Nützliche Verbrauchsgegenstände decken Heilung, Sustain während einer langen Route und Notfallerholung ab — genaue Namen und Effekte brauchen noch Launch-Build-Verifizierung, bevor eine konkrete Liste veröffentlicht wird.",
    sections: [
      { heading: "Heilung, Sustain, Notfall", paragraphs: ["Verbrauchsgegenstände sollten Heilung, Sustain und Notfallerholung abdecken."] },
      { heading: "Worauf du achten musst", paragraphs: ["Konkrete Items ohne Verifizierung zu listen, ist verfrüht."] },
    ], related: [],
  },
  {
    slug: 'crafting-guide', title: "Mistfall Hunter Crafting-Guide",
    description: "Crafting dürfte das Banken von Ressourcen und das Befolgen verifizierter Rezepte beinhalten; genaue Rezepte und Ressourcenkosten sind noch nicht veröffentlicht und sollten nicht erraten werden.",
    eyebrow: 'Guide', h1: "Crafting-Guide",
    lead: "Crafting dürfte das Banken von Ressourcen und das Befolgen verifizierter Rezepte beinhalten; genaue Rezepte und Ressourcenkosten sind noch nicht veröffentlicht und sollten nicht erraten werden.",
    sections: [
      { heading: "Ressourcen banken, Rezepte verifizieren", paragraphs: ["Crafting basiert auf gebankten Ressourcen und verifizierten Rezepten, nicht auf Vermutungen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Erfundene Rezepte oder Quellentabellen sind irreführend."] },
    ], related: [],
  },
  {
    slug: 'vendor-guide', title: "Mistfall Hunter Händler-Guide",
    description: "Händler dürften Kaufen, Verkaufen und das Banken von Fortschrittswert unterstützen; genaues Inventar und Preise brauchen noch Launch-Build-Bestätigung, bevor Details veröffentlicht werden.",
    eyebrow: 'Guide', h1: "Händler-Guide",
    lead: "Händler dürften Kaufen, Verkaufen und das Banken von Fortschrittswert unterstützen; genaues Inventar und Preise brauchen noch Launch-Build-Bestätigung, bevor Details veröffentlicht werden.",
    sections: [
      { heading: "Kaufen, Verkaufen, Banken", paragraphs: ["Händler unterstützen voraussichtlich Kaufen, Verkaufen und das Banken von Fortschrittswert."] },
      { heading: "Worauf du achten musst", paragraphs: ["Händlerinventar vor Launch-Daten zu behaupten, ist verfrüht."] },
    ], related: [],
  },
  {
    slug: 'returner-woodling-guide', title: "Mistfall Hunter Returner-Woodling-Guide",
    description: "Der Returner Woodling ist das Ziel, das mit dem Soul of Return verbunden ist — ihn früh zu finden und zu sichern, macht aus einem Glücksspiel eine kontrollierte Entscheidung darüber, wann man geht.",
    eyebrow: 'Guide', h1: "Returner-Woodling-Guide",
    lead: "Der Returner Woodling ist das Ziel, das mit dem Soul of Return verbunden ist — ihn früh zu finden und zu sichern, macht aus einem Glücksspiel eine kontrollierte Entscheidung darüber, wann man geht.",
    sections: [
      { heading: "Früh finden und sichern", paragraphs: ["Den Returner Woodling früh zu sichern, macht deinen Lauf kontrollierbar statt riskant."] },
      { heading: "Worauf du achten musst", paragraphs: ["Das Ziel nicht als harmlos zu behandeln, wenn es Geräusch oder Verkehr erzeugt."] },
    ], related: [],
  },
  {
    slug: 'soul-of-return-farming', title: "Mistfall Hunter Soul-of-Return-Farming",
    description: "Priorisiere den Soul of Return, bevor die Tasche zu wertvoll zum Riskieren wird — ihn erst zu farmen, wenn du schon beladen bist, fügt nur unnötige Risikozeit hinzu.",
    eyebrow: 'Guide', h1: "Soul-of-Return-Farming",
    lead: "Priorisiere den Soul of Return, bevor die Tasche zu wertvoll zum Riskieren wird — ihn erst zu farmen, wenn du schon beladen bist, fügt nur unnötige Risikozeit hinzu.",
    sections: [
      { heading: "Zuerst sichern, dann looten", paragraphs: ["Sichere den Soul of Return, bevor die Tasche zu wertvoll zum Riskieren wird."] },
      { heading: "Worauf du achten musst", paragraphs: ["Das Ziel erst zu farmen, wenn die Tasche schon wertvoll ist, ist riskant."] },
    ], related: [],
  },
  {
    slug: 'gyldenblood-farming-route', title: "Mistfall Hunter Gyldenblood-Farmroute",
    description: "Gyldenblood ist eine Ressource, die mit dem Fortschritt verbunden ist; eine sichere Farmroute bankt sie konsistent, statt in stark frequentierten Gebieten für marginale Extragewinne zu verweilen.",
    eyebrow: 'Guide', h1: "Gyldenblood-Farmroute",
    lead: "Gyldenblood ist eine Ressource, die mit dem Fortschritt verbunden ist; eine sichere Farmroute bankt sie konsistent, statt in stark frequentierten Gebieten für marginale Extragewinne zu verweilen.",
    sections: [
      { heading: "Konsistent banken", paragraphs: ["Banke Gyldenblood konsistent, statt in gefährlichen Gebieten für marginale Gewinne zu verweilen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Erfundene Drop-Quellen oder Raten sind irreführend."] },
    ], related: [],
  },
  {
    slug: 'corroded-enemies-guide', title: "Mistfall Hunter Corroded-Gegner-Guide",
    description: "Corroded-Gegner sind die häufigen, vom Mist verzerrten Bedrohungen in jeder Zone — sie zu bekämpfen kostet Zeit und Geräusch, also wäge jeden Kampf danach ab, ob die Belohnung die Aufmerksamkeit wert ist, die er anzieht.",
    eyebrow: 'Guide', h1: "Corroded-Gegner-Guide",
    lead: "Corroded-Gegner sind die häufigen, vom Mist verzerrten Bedrohungen in jeder Zone — sie zu bekämpfen kostet Zeit und Geräusch, also wäge jeden Kampf danach ab, ob die Belohnung die Aufmerksamkeit wert ist, die er anzieht.",
    sections: [
      { heading: "Jeder Kampf hat einen Preis", paragraphs: ["Wäge jeden Kampf gegen Corroded-Gegner gegen die Aufmerksamkeit ab, die er anzieht."] },
      { heading: "Worauf du achten musst", paragraphs: ["Zu viel Zeit in geringwertigen PvE-Kämpfen zu verbringen, ist ein Fehler."] },
    ], related: [],
  },
  {
    slug: 'mist-lord-guide', title: "Mistfall Hunter Mist-Lord-Guide",
    description: "Siehe die dedizierte Mist-Lord-Boss-Seite für die vollständige Aufschlüsselung bekannter Begegnungen, Schwierigkeitsstufen und Belohnungsinformationen.",
    eyebrow: 'Guide', h1: "Mist-Lord-Guide",
    lead: "Siehe die dedizierte Mist-Lord-Boss-Seite für die vollständige Aufschlüsselung bekannter Begegnungen, Schwierigkeitsstufen und Belohnungsinformationen.",
    sections: [
      { heading: "Vorbereitung zählt", paragraphs: ["Erkunde und plane deine Route, bevor du einen Mist Lord herausforderst."] },
      { heading: "Worauf du achten musst", paragraphs: ["Boss-Pulls ohne Rückzugs- oder Support-Plan sind riskant."] },
    ], related: [],
  },
  {
    slug: 'boss-rewards-guide', title: "Mistfall Hunter Boss-Belohnungs-Guide",
    description: "Bestätigte Boss-Belohnungen zentrieren sich um Holy-Waffen, jede an einen bestimmten Kartenboss mit einzigartigen Gameplay-Affixen gebunden; genaue vollständige Belohnungstabellen brauchen noch Launch-Build-Verifizierung.",
    eyebrow: 'Guide', h1: "Boss-Belohnungs-Guide",
    lead: "Bestätigte Boss-Belohnungen zentrieren sich um Holy-Waffen, jede an einen bestimmten Kartenboss mit einzigartigen Gameplay-Affixen gebunden; genaue vollständige Belohnungstabellen brauchen noch Launch-Build-Verifizierung.",
    sections: [
      { heading: "Holy-Waffen im Zentrum", paragraphs: ["Jeder Boss trägt eine einzigartige Holy-Waffe mit besonderen Affixen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Belohnungstabellen vor verifizierten Drops zu veröffentlichen, ist verfrüht."] },
    ], related: [],
  },
  {
    slug: 'boss-mechanics-guide', title: "Mistfall Hunter Boss-Mechaniken-Guide",
    description: "Boss-Mechaniken sollten durch Erkundung und sichere erste Versuche gelernt werden, statt aus Beta-Aufnahmen angenommen zu werden, da sich genaue Muster vor dem Launch noch ändern können.",
    eyebrow: 'Guide', h1: "Boss-Mechaniken-Guide",
    lead: "Boss-Mechaniken sollten durch Erkundung und sichere erste Versuche gelernt werden, statt aus Beta-Aufnahmen angenommen zu werden, da sich genaue Muster vor dem Launch noch ändern können.",
    sections: [
      { heading: "Durch Erkundung lernen", paragraphs: ["Lerne Boss-Mechaniken durch vorsichtige erste Versuche statt durch Beta-Annahmen."] },
      { heading: "Worauf du achten musst", paragraphs: ["Exakte Mechaniken vor Live-Tests aufzulisten, ist verfrüht."] },
    ], related: [],
  },
  {
    slug: 'pve-enemy-drops-guide', title: "Mistfall Hunter PvE-Gegner-Drops-Guide",
    description: "Drop-Quellen für PvE-Gegner sind noch nicht vollständig aufgelistet; behandle konkrete Drop-Raten-Behauptungen als unbestätigt, bis sie auf dem Launch-Build bestätigt werden.",
    eyebrow: 'Guide', h1: "PvE-Gegner-Drops-Guide",
    lead: "Drop-Quellen für PvE-Gegner sind noch nicht vollständig aufgelistet; behandle konkrete Drop-Raten-Behauptungen als unbestätigt, bis sie auf dem Launch-Build bestätigt werden.",
    sections: [
      { heading: "Noch nicht vollständig bekannt", paragraphs: ["Drop-Quellen für PvE-Gegner sind noch nicht vollständig verifiziert."] },
      { heading: "Worauf du achten musst", paragraphs: ["Erfundene Drop-Raten sind irreführend."] },
    ], related: [],
  },
  {
    slug: 'rare-loot-guide', title: "Mistfall Hunter seltene-Beute-Guide",
    description: "Seltene Beute ist es wert, extrahiert zu werden, nicht wert, dafür zu sterben — sobald du etwas Wertvolles identifiziert hast, priorisiere einen sicheren Ausgang, statt noch mehr aus demselben Lauf herauszupressen.",
    eyebrow: 'Guide', h1: "Seltene-Beute-Guide",
    lead: "Seltene Beute ist es wert, extrahiert zu werden, nicht wert, dafür zu sterben — sobald du etwas Wertvolles identifiziert hast, priorisiere einen sicheren Ausgang, statt noch mehr aus demselben Lauf herauszupressen.",
    sections: [
      { heading: "Extrahieren, nicht sterben", paragraphs: ["Priorisiere einen sicheren Ausgang, sobald du etwas Wertvolles gefunden hast."] },
      { heading: "Worauf du achten musst", paragraphs: ["Nach seltener Beute zu bleiben, wenn die Route schon gewonnen ist, ist ein Fehler."] },
    ], related: [],
  },
  {
    slug: 'loot-priority-list', title: "Mistfall Hunter Loot-Prioritätsliste",
    description: "Eine praktische Loot-Priorität bevorzugt klassenrelevante Upgrades und Fortschrittsressourcen vor generischen, hochseltenen Items, die du noch nicht nutzen kannst.",
    eyebrow: 'Guide', h1: "Loot-Prioritätsliste",
    lead: "Eine praktische Loot-Priorität bevorzugt klassenrelevante Upgrades und Fortschrittsressourcen vor generischen, hochseltenen Items, die du noch nicht nutzen kannst.",
    sections: [
      { heading: "Klassenrelevanz vor Seltenheit", paragraphs: ["Bevorzuge klassenrelevante Upgrades und Fortschrittsressourcen vor generischen seltenen Items."] },
      { heading: "Worauf du achten musst", paragraphs: ["Universelle Listen vor verifizierter Wirtschaft zu erstellen, ist verfrüht."] },
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
      { heading: '最初に確認すること', paragraphs: ['まず発売時刻、価格、対応機種を確認し、次に初心者ガイドで脱出の基本を学び、自分に合うクラスを選びます。初期ビルドは完成形ではなく、検証可能な方向性として利用してください。'], bullets: ['世界同時発売：2026年7月29日18:00 PT／7月30日01:00 UTC', '対応機種：PC、Xbox Series X|S、PlayStation 5', '通常版24.99米ドル、デラックス版39.99米ドル', 'クロスプラットフォームマッチング対応', '日本語インターフェース・字幕対応'] },
    ], related: [],
  },
  {
    slug: 'release-date', title: 'Mistfall Hunter 発売日・対応機種・日本語対応',
    description: 'Mistfall Hunterは2026年7月29日18:00 PT発売。PC、Xbox Series X|S、PS5、価格、クロスプレイ、日本語対応を公式情報で整理。',
    eyebrow: '発売情報', h1: 'Mistfall Hunterの発売日と対応機種',
    lead: '世界同時発売は2026年7月29日18:00 PT（7月30日01:00 UTC）。PC、Xbox Series X|S、PlayStation 5が同時に開始します。',
    sections: [
      { heading: '確認されているプラットフォームと価格', paragraphs: ['Steam版はWindows PC向け、Xbox版はSeries X|SとXbox Play Anywhereに対応します。Bellring GamesはPlayStation 5版の同時発売も正式発表しています。公式Launch FAQではクロスプラットフォームマッチングも確認済みです。', '通常版は24.99米ドル、デラックス版は39.99米ドルです。通常版からデラックス版への後日アップグレードは15米ドル。地域価格と税は各ストアで確認してください。'] },
      { heading: '日本語と対応言語', paragraphs: ['Steamでは10言語が掲載され、日本語はインターフェースと字幕に対応しています。フル音声が表示されているのは英語です。日本語フルボイスの表記は現在ありません。'], bullets: ['発売：7月29日18:00 PT／7月30日01:00 UTC', 'PC、Xbox Series X|S、PS5', '日本語UI・字幕対応', '日本語フル音声は未掲載'] },
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
  {
    slug: 'review', title: 'Mistfall Hunter レビュー：発売当日のファーストインプレッション',
    description: 'Mistfall Hunterは2026年7月29日に発売されました。発売当日に確認されていること：Mace Seerの弱体化、2人組マッチメイキング非対応、事前ダウンロードなし、PS5 Pro対応、無料のシーズン1パス。',
    eyebrow: '発売当日', h1: 'Mistfall Hunter レビュー：発売当日のファーストインプレッション',
    lead: 'Mistfall Hunterは現在稼働中です。評点付きの評価はまだありません——それには初日を超えた実際のプレイ時間が必要です——ですが、発売版はすでにベータとは明らかに異なる印象です。',
    sections: [
      { heading: '発売にあたって最大の変化：Mace Seerの弱体化', paragraphs: ['SeerのMace Shapeshiftはベータ期で圧倒的な単人最強ピックでしたが、発売時のクラス調整の中で最も重い弱体化を受けました。ベータでMace Seerに頼っていた場合、発売初日は体感で明らかに弱くなっていると考えてください——ベータ期のSeerビルド攻略は、発売版で再検証されるまで古い情報として扱うべきです。'] },
      { heading: 'ベータ・デモプレイヤーの声', paragraphs: ['デモとベータの報道は、意図的でSouls的な戦闘テンポと、脱出ジャンル特有の緊張感を組み合わせていると描写しています。ランを失えば持ち込んだものすべてを失うため、戦闘には重みがあります。'], bullets: ['戦闘は俊敏というより意図的な印象', '脱出のリスクこそが核であり、戦闘だけが魅力ではない', '各2種類の武器スタンスを持つ6クラスがテストで実際のビルドの幅を示した', 'ベータのフィードバックはCrow StormやMace Shapeshiftの調整など、発売時の調整に直接反映された'] },
      { heading: '発売当日の実際の姿', paragraphs: ['事前ダウンロードはなく、サーバー開放と同時にダウンロードが始まります。想定サイズは約45GBです。マッチメイキングはソロまたは3人パーティに対応していますが、発売時点で2人組（Duo）マッチメイキングは利用できません。PS5プレイヤーはPS5 Pro対応の恩恵を受けられますが、具体的なグラフィック面の詳細はBellringからまだ説明されていません。シーズン1（Soul Hunt）と無料のバトルパスは初日から実装されており、Bellringによるとシーズンは約3〜4か月続き、シーズンごとに進行状況がリセットされます。'] },
      { heading: '「Pay-to-Winではない」という約束', paragraphs: ['BellringはSteamとXboxの公式ストア文言で、Pay-to-Winメカニクスや課金によるステータス強化はないと明言しています。コスメティックを超える部分についてはまだ最終確定していません——詳細はPay-to-Winページを参照してください。'] },
      { heading: '実際のプレイ時間が必要な部分', paragraphs: ['本当の評価には、Mace Seer弱体化を含む調整後の実際のクラスバランス、サーバー安定性、最初の週末を超えた実際のマッチメイキング人口、そしてシーズンリセットを経ても脱出経済が成立するかどうかが必要です。'], bullets: ['Mace Seer弱体化など調整後の実際のクラスバランス', '発売初期のサーバー安定性と待機時間', 'シーズンリセットを超えた長期的な脱出経済', '新設計されたランクシステムが大規模運用でどう機能するか'] },
    ], related: [],
  },
  {
    slug: 'pay-to-win', title: 'Mistfall HunterはPay-to-Winか？Bellringが確認していること',
    description: 'Bellring Gamesは、Mistfall HunterにPay-to-Winメカニクスや課金によるステータス強化がないと表明しています。発売時点で確認されている内容です。',
    eyebrow: 'マネタイズ', h1: 'Mistfall HunterはPay-to-Winか？',
    lead: 'Bellring自身のマーケティングはこの点について異例なほど明確です：Pay-to-Winなし、課金ステータス強化なし。ゲームは既に稼働中で、現時点で確認されている内容をまとめます。',
    sections: [
      { heading: 'Bellringが表明していること', paragraphs: ['公式Steamページとオープンベータのマーケティングはどちらも同じ内容を繰り返しています：Pay-to-Winメカニクスはなく、課金によるステータス強化もない。勝敗は課金ではなく腕前と準備によって決まるという方針です。'] },
      { heading: '発売時点で確認されていること', paragraphs: ['価格は確定しています：スタンダード版24.99ドル、デラックス版39.99ドル（またはアップグレード15ドル）、2026年8月12日まで発売時10%割引。シーズン1（Soul Hunt）は完全無料のバトルパス付きで、発売時点で有料シーズンパスはありません。コスメティックは、ベータのアバターフレーム、ポーズ、エモートと同様、これまで確認されているストアの傾向です。'], bullets: ['スタンダード24.99ドル/デラックス39.99ドル、確定済み', 'シーズン1バトルパスは無料で有料制ではない', 'これまで確認されているのはコスメティック限定の報酬パターン', 'コスメティック以外の利便性アイテムの詳細価格はまだ未公開'] },
    ], related: [],
  },
  {
    slug: 'codes', title: 'Mistfall Hunter コード：有効な引き換えコード追跡',
    description: 'Mistfall Hunterのコード追跡ページ。発売時点で有効な引き換えコードは存在しません。Bellring Gamesが発表次第、即座に更新します。',
    eyebrow: 'コード追跡', h1: 'Mistfall Hunter コード',
    lead: '現在、有効なMistfall Hunterの引き換えコードはありません。このページは、使い古された偽コードではなく、正直で最新の答えを提供するために存在します。',
    sections: [
      { heading: '今、有効なコードはありますか？', paragraphs: ['いいえ。Bellring Gamesはこれまでのところ、Mistfall Hunter向けの引き換えコードシステムを発表していません。報酬がもらえると謳う他サイトのコードは、公式ソースが確認するまで未確認情報として扱ってください。'] },
      { heading: 'オープンベータ参加者は代わりに何を得ましたか？', paragraphs: ['引き換えコードの代わりに、直接的なアカウント連携という仕組みが確認されています。2026年6月のオープンベータ中の特別イベントで獲得したコスメティックは、発売時に同じアカウントへ自動的に引き継がれます——入力するコードはありません。'] },
      { heading: '発売後にコードは登場しますか？', paragraphs: ['公式にはまだどちらとも確認されていません。他の多くのライブサービスゲームと同様の展開になれば、正確なコード、報酬、有効期限とともにこのページを更新します。'] },
      { heading: 'コード詐欺を避ける方法', paragraphs: ['発売前に「無料のGyldenbloodコード」などを謳うサイトや動画には注意してください——現時点でそのような公式の仕組みはありません。Bellring Games自身の公式チャンネルや正規のストアが直接発表したコードのみを信頼してください。'] },
    ], related: [],
  },
  {
    slug: 'crossplay-status', title: 'Mistfall Hunterはクロスプレイ対応？はい——PC・Xbox・PS5',
    description: 'PC、PS5、Xbox Series X|S間の完全クロスプレイが確認されており、既に稼働中です。異なるプラットフォームのプレイヤーが今すぐ一緒にプレイできます。',
    eyebrow: 'クロスプレイ状況', h1: 'Mistfall Hunterはクロスプレイ対応？',
    lead: 'はい——PC、PS5、Xbox Series X|S間の完全クロスプレイが確認されており、既に稼働中です。異なるプラットフォームのパーティが今すぐ一緒にプレイできます。',
    sections: [
      { heading: '確認されていること', paragraphs: ['PC、PlayStation 5、Xbox Series X|S間のクロスプレイが確認されています——異なるプラットフォームのプレイヤーが同じゾーンで一緒に狩りができます。'] },
      { heading: 'まだ確認されていないこと', paragraphs: ['クロスプログレッション——プラットフォームをまたいで同じアカウントと解放要素を共有すること——は別の機能であり、クロスプレイと同じようにはまだ確認されていません。'] },
    ], related: [],
  },
  {
    slug: 'price-status', title: 'Mistfall Hunter 価格：スタンダード・デラックス・Game Pass状況',
    description: 'スタンダード版は24.99ドル、デラックス版は39.99ドル（アップグレードは15ドル）、さらに発売時10%割引。Xbox Game Passには発売初日から対応、PS Plusは対象外。',
    eyebrow: '価格・入手方法', h1: 'Mistfall Hunter 価格・入手方法',
    lead: 'スタンダード版は24.99ドル、デラックス版は39.99ドル（アップグレードは15ドル）、さらに発売時10%割引があります。Xbox Game Passは発売初日から対応、PS Plusは対象外です。',
    sections: [
      { heading: '確認済みの価格', paragraphs: ['スタンダード版：24.99ドル。デラックス版：39.99ドル。スタンダードからデラックスへの個別アップグレードは15ドルです。'] },
      { heading: 'Game PassとPS Plus', paragraphs: ['XboxとPC向けのXbox Game Passには発売初日から含まれます。PS Plusには含まれず、PS5プレイヤーは別途購入が必要です。'] },
    ], related: [],
  },
  {
    slug: 'gameplay-overview', title: 'Mistfall Hunter ゲームプレイ：コアループ・戦闘・脱出を解説',
    description: 'Mistfall Hunterのゲームプレイを日本語で解説。ダークファンタジーPvPvE脱出型ゲーム——侵入、戦闘、略奪、脱出確保、そして欲張りすぎる前に離脱する。',
    eyebrow: 'ゲームプレイ', h1: 'Mistfall Hunter ゲームプレイ解説',
    lead: 'Mistfall Hunterのゲームプレイは、ダークファンタジーPvPvE脱出型ゲームとして説明するのが最も分かりやすいです：侵入、戦闘、略奪、脱出の確保、そして欲張りが勝つ前に離脱すること。',
    sections: [
      { heading: 'コアループ', paragraphs: ['どのランも同じ核心的な判断に帰結します：何と戦うか、何を拾うか、いつ戦闘が安全か、そしてもう一押しするか、他のハンターより先にSoul of Returnへ向かうか。'] },
      { heading: 'PvPvE構造', paragraphs: ['モンスターと敵対ハンターが同じマップを共有するため、PvEの戦闘がいつでもPvPの戦闘に変わり得ます。それぞれ2つの武器スタンスを持つ6つのクラスが、単一の固定キットではなく多様なプレイスタイルを生み出します。'] },
    ], related: [],
  },
  {
    slug: 'mercenary-beginner-build', title: "Mistfall Hunter Mercenary 初心者ビルド：盾・ハンマー・安全な打ち合い",
    description: "扱いやすい近接クラスを求める新規プレイヤー向け。防御重視の学習とシンプルな反撃の隙を軸にします。",
    eyebrow: 'ビルドガイド', h1: "Mercenary 初心者ビルド",
    lead: "扱いやすい近接クラスを求める新規プレイヤー向け。防御重視の学習とシンプルな反撃の隙を軸にします。",
    sections: [
      { heading: "まず防御から", paragraphs: ["リスクの高い攻めよりもブロックとシンプルな反撃の隙を軸に組み立てましょう。それがMercenaryを死なずに覚える近道です。"] },
      { heading: "注意点", paragraphs: ["ブロックのしすぎはスタミナを消費し、戦闘中のスタミナ切れは危険です。知らないPvPエリアまで追いかけないようにしましょう。"] },
    ], related: [],
  },
  {
    slug: 'mercenary-solo-build', title: "Mistfall Hunter Mercenary ソロビルド：防御的ルートと脱出の安全性",
    description: "スティルスより耐久力を好むソロプレイヤー向け。安全な打ち合い、ルート規律、早めの脱出を重視します。",
    eyebrow: 'ビルドガイド', h1: "Mercenary ソロビルド",
    lead: "スティルスより耐久力を好むソロプレイヤー向け。安全な打ち合い、ルート規律、早めの脱出を重視します。",
    sections: [
      { heading: "安全な打ち合いとルート規律", paragraphs: ["自分が制御できる戦闘だけを受け、遅めより早めの脱出を選びましょう。"] },
      { heading: "注意点", paragraphs: ["ローテーションが遅いと、長引く戦闘の後に囲まれる危険があります。"] },
    ], related: [],
  },
  {
    slug: 'mercenary-pvp-build', title: "Mistfall Hunter Mercenary PvPビルド：盾の圧力・パリィ・反撃タイミング",
    description: "安定した前衛を求めるPvPプレイヤー向け。ブロック、完璧なガードタイミング、制御された圧力を重視します。",
    eyebrow: 'ビルドガイド', h1: "Mercenary PvPビルド",
    lead: "安定した前衛を求めるPvPプレイヤー向け。ブロック、完璧なガードタイミング、制御された圧力を重視します。",
    sections: [
      { heading: "ブロックと制御された圧力", paragraphs: ["やみくもに攻めるのではなく、完璧なガードタイミングで反撃の隙を作りましょう。"] },
      { heading: "注意点", paragraphs: ["すべての打ち合いを長期戦にしてしまうと、横取りを呼び込みます。"] },
    ], related: [],
  },
  {
    slug: 'mercenary-boss-build', title: "Mistfall Hunter Mercenary ボスビルド：安全な近接・ブロック・報酬回収",
    description: "ボス戦でMercenaryを使うプレイヤー向け。安全な近接の隙、ルート計画、報酬回収を重視します。",
    eyebrow: 'ビルドガイド', h1: "Mercenary ボスビルド",
    lead: "ボス戦でMercenaryを使うプレイヤー向け。安全な近接の隙、ルート計画、報酬回収を重視します。",
    sections: [
      { heading: "メカニクスを生き延びる", paragraphs: ["スタミナを管理し、ダメージだけでなく報酬を持ち帰ることを意識しましょう。"] },
      { heading: "注意点", paragraphs: ["他のハンターが近づいているのにボスダメージにこだわりすぎるのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'mercenary-affix-priority', title: "Mistfall Hunter Mercenary Affix優先度：防御・スタミナ・近接火力",
    description: "Mercenaryの装備を比較するプレイヤー向け。防御値、スタミナの快適さ、安定した近接ダメージを重視します。",
    eyebrow: 'ビルドガイド', h1: "Mercenary Affix優先度",
    lead: "Mercenaryの装備を比較するプレイヤー向け。防御値、スタミナの快適さ、安定した近接ダメージを重視します。",
    sections: [
      { heading: "まず安定した防御を", paragraphs: ["純粋なダメージより先に、防御的な近接戦を安定させる数値を優先しましょう。"] },
      { heading: "注意点", paragraphs: ["生存が安定する前にダメージ値を過大評価するのはよくある失敗です。"] },
    ], related: [],
  },
  {
    slug: 'sorcerer-beginner-build', title: "Mistfall Hunter Sorcerer 初心者ビルド：魔法の安全性と序盤のPvE処理",
    description: "魔法ダメージクラスを求める新規プレイヤー向け。PvEを素早く処理しつつ、簡単なPvP標的にならないことを重視します。",
    eyebrow: 'ビルドガイド', h1: "Sorcerer 初心者ビルド",
    lead: "魔法ダメージクラスを求める新規プレイヤー向け。PvEを素早く処理しつつ、簡単なPvP標的にならないことを重視します。",
    sections: [
      { heading: "狙われずにPvEを処理する", paragraphs: ["PvEの敵は素早く片付けつつ、動き続けて狙われにくくしましょう。"] },
      { heading: "注意点", paragraphs: ["脆さ、詠唱のしすぎ、退路計画の甘さが最大のリスクです。"] },
    ], related: [],
  },
  {
    slug: 'sorcerer-solo-build', title: "Mistfall Hunter Sorcerer ソロビルド：バーストの隙・キャイティング・脱出",
    description: "魔法での圧力を好むソロプレイヤー向け。バーストの隙、キャイティングのルート、脱出タイミングを重視します。",
    eyebrow: 'ビルドガイド', h1: "Sorcerer ソロビルド",
    lead: "魔法での圧力を好むソロプレイヤー向け。バーストの隙、キャイティングのルート、脱出タイミングを重視します。",
    sections: [
      { heading: "追われる前にバーストしてリセット", paragraphs: ["バーストダメージを与えたら、戦闘が追跡戦になる前に距離を取りましょう。"] },
      { heading: "注意点", paragraphs: ["派手な魔法戦の後は、囲まれやすくなります。"] },
    ], related: [],
  },
  {
    slug: 'sorcerer-pvp-build', title: "Mistfall Hunter Sorcerer PvPビルド：詠唱圧力・位置取り・リセットタイミング",
    description: "PvPルートで魔法を試すプレイヤー向け。逃走の隙を無駄にせず、遠距離から圧力をかけることを重視します。",
    eyebrow: 'ビルドガイド', h1: "Sorcerer PvPビルド",
    lead: "PvPルートで魔法を試すプレイヤー向け。逃走の隙を無駄にせず、遠距離から圧力をかけることを重視します。",
    sections: [
      { heading: "逃走の隙を無駄にしない圧力", paragraphs: ["遠距離からの圧力をかけつつ、大事な逃走の隙を無駄にしないようにしましょう。"] },
      { heading: "注意点", paragraphs: ["無防備なレーンで詠唱すると、リセットの機会を失います。"] },
    ], related: [],
  },
  {
    slug: 'sorcerer-boss-build', title: "Mistfall Hunter Sorcerer ボスビルド：魔法DPS・雑魚処理・撤退計画",
    description: "PvEとボス戦でSorcererを使うプレイヤー向け。長引くボス戦を短縮しつつ退路を確保することを重視します。",
    eyebrow: 'ビルドガイド', h1: "Sorcerer ボスビルド",
    lead: "PvEとボス戦でSorcererを使うプレイヤー向け。長引くボス戦を短縮しつつ退路を確保することを重視します。",
    sections: [
      { heading: "戦闘を短縮しつつ退路を確保", paragraphs: ["他プレイヤーが到着する前にクールダウンを使い切らないよう、ボス戦を短縮しましょう。"] },
      { heading: "注意点", paragraphs: ["プレイヤーが到着する前にクールダウンをすべて使い切るのはよくある失敗です。"] },
    ], related: [],
  },
  {
    slug: 'sorcerer-affix-priority', title: "Mistfall Hunter Sorcerer Affix優先度：詠唱ダメージ・クールダウン・生存",
    description: "Sorcererの装備を比較するプレイヤー向け。詠唱ダメージ、クールダウンの快適さ、脱出に十分な安全性を重視します。",
    eyebrow: 'ビルドガイド', h1: "Sorcerer Affix優先度",
    lead: "Sorcererの装備を比較するプレイヤー向け。詠唱ダメージ、クールダウンの快適さ、脱出に十分な安全性を重視します。",
    sections: [
      { heading: "ダメージと安全性のバランス", paragraphs: ["実際に脱出できるだけの安全性を保ちながら、ダメージの継続性を確保しましょう。"] },
      { heading: "注意点", paragraphs: ["純粋な紙耐久型の数値は、実際のルートでは失敗しがちです。"] },
    ], related: [],
  },
  {
    slug: 'blackarrow-solo-build', title: "Mistfall Hunter Blackarrow ソロビルド：偵察・弓の圧力・安全な離脱",
    description: "射程と情報コントロールを求めるソロプレイヤー向け。早めに脅威を察知し、間合いが崩れる前に離脱することを重視します。",
    eyebrow: 'ビルドガイド', h1: "Blackarrow ソロビルド",
    lead: "射程と情報コントロールを求めるソロプレイヤー向け。早めに脅威を察知し、間合いが崩れる前に離脱することを重視します。",
    sections: [
      { heading: "早めに脅威を察知する", paragraphs: ["早めに脅威を察知し、間合いが崩れる前にその場を離れましょう。"] },
      { heading: "注意点", paragraphs: ["狭い場所では射程の価値が失われ、罠になりかねません。"] },
    ], related: [],
  },
  {
    slug: 'blackarrow-pvp-build', title: "Mistfall Hunter Blackarrow PvPビルド：弓の圧力・角度・横取り対策",
    description: "遠距離での圧力を好むPvPプレイヤー向け。マップの見通しを安全なダメージと情報に変えることを重視します。",
    eyebrow: 'ビルドガイド', h1: "Blackarrow PvPビルド",
    lead: "遠距離での圧力を好むPvPプレイヤー向け。マップの見通しを安全なダメージと情報に変えることを重視します。",
    sections: [
      { heading: "見通しを活用する", paragraphs: ["マップの見通しを安全なダメージと情報優位に変えましょう。"] },
      { heading: "注意点", paragraphs: ["狙いに集中しすぎると、逃走ルートを見失います。"] },
    ], related: [],
  },
  {
    slug: 'blackarrow-boss-build', title: "Mistfall Hunter Blackarrow ボスビルド：遠距離DPS・雑魚処理・脱出ルート",
    description: "PvE目的でBlackarrowを使うプレイヤー向け。周囲への警戒を保ちながら、より安全なレーンからダメージを与えることを重視します。",
    eyebrow: 'ビルドガイド', h1: "Blackarrow ボスビルド",
    lead: "PvE目的でBlackarrowを使うプレイヤー向け。周囲への警戒を保ちながら、より安全なレーンからダメージを与えることを重視します。",
    sections: [
      { heading: "安全なレーンからダメージを", paragraphs: ["周囲への警戒を保ちながら、より安全な位置からダメージを与えましょう。"] },
      { heading: "注意点", paragraphs: ["長時間動かないでいると、他プレイヤーに側面を突かれやすくなります。"] },
    ], related: [],
  },
  {
    slug: 'blackarrow-affix-priority', title: "Mistfall Hunter Blackarrow Affix優先度：射程・クリティカルの隙・機動力",
    description: "Blackarrowの装備を比較するプレイヤー向け。間合いと安定した圧力を守る数値を重視します。",
    eyebrow: 'ビルドガイド', h1: "Blackarrow Affix優先度",
    lead: "Blackarrowの装備を比較するプレイヤー向け。間合いと安定した圧力を守る数値を重視します。",
    sections: [
      { heading: "間合いを守る", paragraphs: ["純粋なダメージよりも、間合いと安定した圧力を守る数値を優先しましょう。"] },
      { heading: "注意点", paragraphs: ["ルートの安全性が弱いのに純粋なダメージを過大評価するのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'blackarrow-controller-settings', title: "Mistfall Hunter Blackarrow コントローラー設定：エイム・カメラ・弓の操作性",
    description: "遠距離クラスをコントローラーで使うプレイヤー向け。リスクの高いPvPルートに入る前にカメラとエイムを調整することを重視します。",
    eyebrow: 'ビルドガイド', h1: "Blackarrow コントローラー設定",
    lead: "遠距離クラスをコントローラーで使うプレイヤー向け。リスクの高いPvPルートに入る前にカメラとエイムを調整することを重視します。",
    sections: [
      { heading: "戦闘前に調整する", paragraphs: ["コストの高いPvPルートに入る前に、カメラ速度とエイムを調整しておきましょう。"] },
      { heading: "注意点", paragraphs: ["一般的なコントローラー設定は遠距離プレイに最適化されておらず、命中を逃す原因になります。"] },
    ], related: [],
  },
  {
    slug: 'shadowstrix-pvp-build', title: "Mistfall Hunter Shadowstrix PvPビルド：ステルスの選択・バースト・リセットルート",
    description: "ステルスによるPvP圧力を求めるプレイヤー向け。有利な戦いだけを選び、マップが反応する前にリセットすることを重視します。",
    eyebrow: 'ビルドガイド', h1: "Shadowstrix PvPビルド",
    lead: "ステルスによるPvP圧力を求めるプレイヤー向け。有利な戦いだけを選び、マップが反応する前にリセットすることを重視します。",
    sections: [
      { heading: "有利な戦いだけを選ぶ", paragraphs: ["勝てる戦いだけを選び、他プレイヤーが反応する前にリセットしましょう。"] },
      { heading: "注意点", paragraphs: ["逃走計画なしでステルスを公平な一騎打ちに変えてしまうのが最もよくある失敗です。"] },
    ], related: [],
  },
  {
    slug: 'shadowstrix-boss-build', title: "Mistfall Hunter Shadowstrix ボスビルド：バーストの隙と戦利品の安全",
    description: "PvEでも価値を発揮したいShadowstrixプレイヤー向け。長引くPvE戦に固執せず、バーストを慎重に使うことを重視します。",
    eyebrow: 'ビルドガイド', h1: "Shadowstrix ボスビルド",
    lead: "PvEでも価値を発揮したいShadowstrixプレイヤー向け。長引くPvE戦に固執せず、バーストを慎重に使うことを重視します。",
    sections: [
      { heading: "バーストを慎重に使う", paragraphs: ["長引くPvE戦に固執せず、バーストダメージを慎重なタイミングで使いましょう。"] },
      { heading: "注意点", paragraphs: ["持続火力の弱さとボスルートへの中途半端な関わり方が主なリスクです。"] },
    ], related: [],
  },
  {
    slug: 'shadowstrix-affix-priority', title: "Mistfall Hunter Shadowstrix Affix優先度：バースト・機動力・生存",
    description: "Shadowstrixの装備を比較するプレイヤー向け。確実な一撃と安全なリセットを高める数値を重視します。",
    eyebrow: 'ビルドガイド', h1: "Shadowstrix Affix優先度",
    lead: "Shadowstrixの装備を比較するプレイヤー向け。確実な一撃と安全なリセットを高める数値を重視します。",
    sections: [
      { heading: "確実な一撃を優先", paragraphs: ["純粋なダメージより、確実な一撃と安全なリセットを可能にする数値を優先しましょう。"] },
      { heading: "注意点", paragraphs: ["逃走に役立たないダメージ数値を追い求めるのはよくある失敗です。"] },
    ], related: [],
  },
  {
    slug: 'shadowstrix-beginner-build', title: "Mistfall Hunter Shadowstrix 初心者ビルド：欲張らないステルス",
    description: "ステルスクラスに惹かれる新規プレイヤー向け。無謀な戦闘ではなく情報収集にステルスを使うことを重視します。",
    eyebrow: 'ビルドガイド', h1: "Shadowstrix 初心者ビルド",
    lead: "ステルスクラスに惹かれる新規プレイヤー向け。無謀な戦闘ではなく情報収集にステルスを使うことを重視します。",
    sections: [
      { heading: "情報収集にステルスを使う", paragraphs: ["すべての戦闘を仕掛けるのではなく、情報収集のためにステルスを活用しましょう。"] },
      { heading: "注意点", paragraphs: ["すべての戦闘を仕掛け、クールダウンを使い切った後に死ぬのが最もよくある初心者の失敗です。"] },
    ], related: [],
  },
  {
    slug: 'shadowstrix-map-routes', title: "Mistfall Hunter Shadowstrix マップルート：側面・待ち伏せレーン・出口",
    description: "マップ移動を計画するステルスプレイヤー向け。奇襲性と退路を維持できるルートの選び方を重視します。",
    eyebrow: 'ビルドガイド', h1: "Shadowstrix マップルート",
    lead: "マップ移動を計画するステルスプレイヤー向け。奇襲性と退路を維持できるルートの選び方を重視します。",
    sections: [
      { heading: "奇襲性を維持する", paragraphs: ["奇襲性と退路を両方維持できるルートを選びましょう。"] },
      { heading: "注意点", paragraphs: ["脱出やリセットのレーンから離れすぎた場所で待ち伏せするのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'seer-beginner-build', title: "Mistfall Hunter Seer 初心者ビルド：回復・コントロール・チームの基本",
    description: "サポート初心者向け。まず自分が生き残ることで、チームがサポートツールの恩恵を受けられるようにすることを重視します。",
    eyebrow: 'ビルドガイド', h1: "Seer 初心者ビルド",
    lead: "サポート初心者向け。まず自分が生き残ることで、チームがサポートツールの恩恵を受けられるようにすることを重視します。",
    sections: [
      { heading: "まず生き残る", paragraphs: ["死んだサポートは何の価値もありません。まず自分が生き残ることを優先しましょう。"] },
      { heading: "注意点", paragraphs: ["前に出すぎると、サポートとしての役割を即座に失います。"] },
    ], related: [],
  },
  {
    slug: 'seer-solo-build', title: "Mistfall Hunter Seer ソロビルド：生存・コントロール・低リスクルート",
    description: "スクワッド外でSeerを試すプレイヤー向け。サポートツールを無理に攻撃的なソロ対人戦に使わないことを重視します。",
    eyebrow: 'ビルドガイド', h1: "Seer ソロビルド",
    lead: "スクワッド外でSeerを試すプレイヤー向け。サポートツールを無理に攻撃的なソロ対人戦に使わないことを重視します。",
    sections: [
      { heading: "サポートツールを無理に使わない", paragraphs: ["サポートツールを、向いていない攻撃的なソロ対人戦に無理に使わないようにしましょう。"] },
      { heading: "注意点", paragraphs: ["キル圧力の低さとルート進行の遅さは、このクラスのソロプレイでは普通のことです。"] },
    ], related: [],
  },
  {
    slug: 'seer-pvp-build', title: "Mistfall Hunter Seer PvPビルド：コントロール・回復の隙・スクワッド戦",
    description: "PvPグループのサポートプレイヤー向け。回復とコントロールを勝利につながるリセットに変えることを重視します。",
    eyebrow: 'ビルドガイド', h1: "Seer PvPビルド",
    lead: "PvPグループのサポートプレイヤー向け。回復とコントロールを勝利につながるリセットに変えることを重視します。",
    sections: [
      { heading: "回復を勝利に変える", paragraphs: ["回復とコントロールを的確なタイミングで使い、戦況を有利にリセットしましょう。"] },
      { heading: "注意点", paragraphs: ["慌てて早すぎる回復をしたり、単独で孤立させられたりするのが主なリスクです。"] },
    ], related: [],
  },
  {
    slug: 'seer-boss-build', title: "Mistfall Hunter Seer ボスビルド：サポートの安全・回復・報酬回収",
    description: "PvE目的でSeerを連れて行くスクワッド向け。ボス戦とその後のPvP圧力を通してチームを安定させることを重視します。",
    eyebrow: 'ビルドガイド', h1: "Seer ボスビルド",
    lead: "PvE目的でSeerを連れて行くスクワッド向け。ボス戦とその後のPvP圧力を通してチームを安定させることを重視します。",
    sections: [
      { heading: "チームを安定させる", paragraphs: ["ボス戦とその後のPvP圧力の間、チームを安定させ続けましょう。"] },
      { heading: "注意点", paragraphs: ["横取りが来る前にサポートのクールダウンを使い切るのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'seer-affix-priority', title: "Mistfall Hunter Seer Affix優先度：回復・クールダウン・生存",
    description: "どのSeer装備を残すか決めるプレイヤー向け。ダメージ欲より、サポートの安定性を優先することを重視します。",
    eyebrow: 'ビルドガイド', h1: "Seer Affix優先度",
    lead: "どのSeer装備を残すか決めるプレイヤー向け。ダメージ欲より、サポートの安定性を優先することを重視します。",
    sections: [
      { heading: "サポートの安定性を優先", paragraphs: ["ダメージを追い求める前に、サポートを安定させる数値を優先しましょう。"] },
      { heading: "注意点", paragraphs: ["集中砲火に耐えられないほど脆く組んでしまうのはよくある失敗です。"] },
    ], related: [],
  },
  {
    slug: 'withered-knight-beginner-build', title: "Mistfall Hunter Withered Knight 初心者ビルド：過度な深追いをしない圧力",
    description: "攻撃的な近接戦を求める新規プレイヤー向け。際限のない追撃ではなく、止め時を決めた圧力を重視します。",
    eyebrow: 'ビルドガイド', h1: "Withered Knight 初心者ビルド",
    lead: "攻撃的な近接戦を求める新規プレイヤー向け。際限のない追撃ではなく、止め時を決めた圧力を重視します。",
    sections: [
      { heading: "止め時を決めた圧力", paragraphs: ["圧力をかけつつも、いつ追撃をやめるかのルールを決めておきましょう。"] },
      { heading: "注意点", paragraphs: ["罠、スクワッド、モンスターに深追いしすぎるのが主なリスクです。"] },
    ], related: [],
  },
  {
    slug: 'withered-knight-solo-build', title: "Mistfall Hunter Withered Knight ソロビルド：圧力・継戦力・撤退ルール",
    description: "攻撃的な近接圧力を求めるソロプレイヤー向け。退路を手放さずに打ち合いに勝つことを重視します。",
    eyebrow: 'ビルドガイド', h1: "Withered Knight ソロビルド",
    lead: "攻撃的な近接圧力を求めるソロプレイヤー向け。退路を手放さずに打ち合いに勝つことを重視します。",
    sections: [
      { heading: "退路を保ちつつ打ち合いに勝つ", paragraphs: ["退路を手放さずに、打ち合いに勝つことを心がけましょう。"] },
      { heading: "注意点", paragraphs: ["キャイティングされたり、横取りルートに誘い込まれたりするのが危険です。"] },
    ], related: [],
  },
  {
    slug: 'withered-knight-boss-build', title: "Mistfall Hunter Withered Knight ボスビルド：近接圧力・報酬の安全性",
    description: "PvE目的でWithered Knightを使うプレイヤー向け。圧力をかけつつ離脱に十分な余力を残すことを重視します。",
    eyebrow: 'ビルドガイド', h1: "Withered Knight ボスビルド",
    lead: "PvE目的でWithered Knightを使うプレイヤー向け。圧力をかけつつ離脱に十分な余力を残すことを重視します。",
    sections: [
      { heading: "余力を残した圧力", paragraphs: ["圧力をかけつつ、安全に離脱できるだけの余力を残しましょう。"] },
      { heading: "注意点", paragraphs: ["脱出の圧力が始まる前にクールダウンを使い切るのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'withered-knight-affix-priority', title: "Mistfall Hunter Withered Knight Affix優先度：圧力・継戦力・スタミナ",
    description: "Withered Knightの装備を比較するプレイヤー向け。制御された積極性を支える数値を重視します。",
    eyebrow: 'ビルドガイド', h1: "Withered Knight Affix優先度",
    lead: "Withered Knightの装備を比較するプレイヤー向け。制御された積極性を支える数値を重視します。",
    sections: [
      { heading: "制御された積極性", paragraphs: ["無闇な攻めではなく、制御された積極性を支える数値を優先しましょう。"] },
      { heading: "注意点", paragraphs: ["回復力を確保せずダメージだけを伸ばすと、脱出戦で危険にさらされます。"] },
    ], related: [],
  },
  {
    slug: 'withered-knight-matchups', title: "Mistfall Hunter Withered Knight 対面相性：遠距離・ステルス・サポート戦",
    description: "近接の対面相性を学ぶPvPプレイヤー向け。追う・打ち合う・リセットするタイミングの見極めを重視します。",
    eyebrow: 'ビルドガイド', h1: "Withered Knight 対面相性",
    lead: "近接の対面相性を学ぶPvPプレイヤー向け。追う・打ち合う・リセットするタイミングの見極めを重視します。",
    sections: [
      { heading: "追う・打ち合う・リセット", paragraphs: ["いつ追い、いつ打ち合い、いつリセットすべきかを見極めましょう。"] },
      { heading: "注意点", paragraphs: ["Blackarrowの見通しやShadowstrixのリセットに釣られるのはよくある危険です。"] },
    ], related: [],
  },
  {
    slug: 'hallowgrove-solo-route', title: "Mistfall Hunter Hallowgrove ソロルート：静かな戦利品・出口・リセット地点",
    description: "Hallowgroveを学ぶソロプレイヤー向け。脱出に戻る短く静かなルートを重視します。",
    eyebrow: 'ガイド', h1: "Hallowgrove ソロルート",
    lead: "Hallowgroveを学ぶソロプレイヤー向け。脱出に戻る短く静かなルートを重視します。",
    sections: [
      { heading: "短く静かなルート", paragraphs: ["マップを広く探索するより、脱出に戻れる短く静かなルートを優先しましょう。"] },
      { heading: "注意点", paragraphs: ["最初の有用な拾い物の後に長居しすぎるのが主なリスクです。"] },
    ], related: [],
  },
  {
    slug: 'hallowgrove-loot-route', title: "Mistfall Hunter Hallowgrove 戦利品ルート：安全な資源とバンキングルール",
    description: "Hallowgroveの序盤資源を集めるプレイヤー向け。明確な停止ルールを持つ反復可能なルートを重視します。",
    eyebrow: 'ガイド', h1: "Hallowgrove 戦利品ルート",
    lead: "Hallowgroveの序盤資源を集めるプレイヤー向け。明確な停止ルールを持つ反復可能なルートを重視します。",
    sections: [
      { heading: "停止ルール付きの反復ルート", paragraphs: ["明確な停止ルールを持つ、繰り返し使える資源ルートを活用しましょう。"] },
      { heading: "注意点", paragraphs: ["良い戦利品ランをボスやPvPの賭けに変えてしまうのがよくある失敗です。"] },
    ], related: [],
  },
  {
    slug: 'hallowgrove-boss-route', title: "Mistfall Hunter Hallowgrove ボスルート：PvE準備・PvPリスク・脱出",
    description: "Hallowgroveのボス目標を計画するプレイヤー向け。撤退と戦利品の計画を持ってボス戦に臨むことを重視します。",
    eyebrow: 'ガイド', h1: "Hallowgrove ボスルート",
    lead: "Hallowgroveのボス目標を計画するプレイヤー向け。撤退と戦利品の計画を持ってボス戦に臨むことを重視します。",
    sections: [
      { heading: "計画を持って挑む", paragraphs: ["明確な撤退と戦利品の計画を持ってのみボス戦に挑みましょう。"] },
      { heading: "注意点", paragraphs: ["退路のないまま騒がしい戦闘を始めるのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'hallowgrove-chaos-route', title: "Mistfall Hunter Hallowgrove カオスルート：バリアントリスクと安全な偵察",
    description: "Hallowgroveのカオスバリアントに入るプレイヤー向け。まず情報収集ランとして扱うことを重視します。",
    eyebrow: 'ガイド', h1: "Hallowgrove カオスルート",
    lead: "Hallowgroveのカオスバリアントに入るプレイヤー向け。まず情報収集ランとして扱うことを重視します。",
    sections: [
      { heading: "まず偵察してから farmする", paragraphs: ["バリアントはまず情報収集ランとして扱い、その後farmルートにしましょう。"] },
      { heading: "注意点", paragraphs: ["変化した条件下で通常マップのルートを何も考えずに使うのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'hallowgrove-extraction-points', title: "Mistfall Hunter Hallowgrove 脱出地点：出口計画と待ち伏せ対策",
    description: "Hallowgroveの出口を探すプレイヤー向け。目標より先に出口を計画することを重視します。",
    eyebrow: 'ガイド', h1: "Hallowgrove 脱出地点",
    lead: "Hallowgroveの出口を探すプレイヤー向け。目標より先に出口を計画することを重視します。",
    sections: [
      { heading: "出口を先に計画する", paragraphs: ["目的に取り組む前に、出口を計画しておきましょう。"] },
      { heading: "注意点", paragraphs: ["負傷し、音を立て、スタミナ切れの状態で脱出地点に到着するのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'brandrgarde-solo-route', title: "Mistfall Hunter Brandrgarde ソロルート：高リスクエリアを安全に進む道",
    description: "Brandrgardeに入るソロプレイヤー向け。よりリスクの高いマップでの被曝を減らすことを重視します。",
    eyebrow: 'ガイド', h1: "Brandrgarde ソロルート",
    lead: "Brandrgardeに入るソロプレイヤー向け。よりリスクの高いマップでの被曝を減らすことを重視します。",
    sections: [
      { heading: "被曝を減らす", paragraphs: ["中央での戦闘より安全な経路を選び、被曝を減らしましょう。"] },
      { heading: "注意点", paragraphs: ["サポートやリセット手段なしで中央の戦闘を受けるのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'brandrgarde-loot-route', title: "Mistfall Hunter Brandrgarde 戦利品ルート：高価値ポイントと撤退ルール",
    description: "Brandrgardeの報酬を稼ぐプレイヤー向け。長居せずに高価値ポイントを取ることを重視します。",
    eyebrow: 'ガイド', h1: "Brandrgarde 戦利品ルート",
    lead: "Brandrgardeの報酬を稼ぐプレイヤー向け。長居せずに高価値ポイントを取ることを重視します。",
    sections: [
      { heading: "高価値ポイントを活用", paragraphs: ["マップに長居しすぎず、高価値なポイントだけを取りましょう。"] },
      { heading: "注意点", paragraphs: ["希少資源やボス周辺の戦利品への欲張りは危険です。"] },
    ], related: [],
  },
  {
    slug: 'brandrgarde-boss-route', title: "Mistfall Hunter Brandrgarde ボスルート：Mist Lord準備とPvP圧力",
    description: "Brandrgardeのボスランを計画するプレイヤー向け。報酬とPvP圧力を一つの課題として扱うことを重視します。",
    eyebrow: 'ガイド', h1: "Brandrgarde ボスルート",
    lead: "Brandrgardeのボスランを計画するプレイヤー向け。報酬とPvP圧力を一つの課題として扱うことを重視します。",
    sections: [
      { heading: "報酬とPvPを一体で考える", paragraphs: ["ボス報酬とPvP圧力を別々ではなく、一つのルートの課題として考えましょう。"] },
      { heading: "注意点", paragraphs: ["ボス戦に勝っても脱出戦に負けるのはよくあるリスクです。"] },
    ], related: [],
  },
  {
    slug: 'brandrgarde-chaos-route', title: "Mistfall Hunter Brandrgarde カオスルート：バリアント偵察と報酬リスク",
    description: "Brandrgardeのカオスバリアントを試すプレイヤー向け。farmとして扱う前にまず偵察することを重視します。",
    eyebrow: 'ガイド', h1: "Brandrgarde カオスルート",
    lead: "Brandrgardeのカオスバリアントを試すプレイヤー向け。farmとして扱う前にまず偵察することを重視します。",
    sections: [
      { heading: "まず偵察する", paragraphs: ["繰り返しfarmする前に、まずバリアントを偵察しましょう。"] },
      { heading: "注意点", paragraphs: ["どんな危険なバリアント戦でも報酬に見合うと思い込むのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'brandrgarde-extraction-points', title: "Mistfall Hunter Brandrgarde 脱出地点：出口ルートと最終決戦",
    description: "Brandrgardeの出口を探すプレイヤー向け。出口を単なるマーカーではなく戦闘エリアとして理解することを重視します。",
    eyebrow: 'ガイド', h1: "Brandrgarde 脱出地点",
    lead: "Brandrgardeの出口を探すプレイヤー向け。出口を単なるマーカーではなく戦闘エリアとして理解することを重視します。",
    sections: [
      { heading: "出口を戦闘エリアとして見る", paragraphs: ["出口を単なるマップのマーカーではなく、独立した戦闘エリアとして理解しましょう。"] },
      { heading: "注意点", paragraphs: ["クールダウンと回復をすべて使い切った状態で脱出地点に到着するのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'gyldenmist-timer-guide', title: "Mistfall Hunter Gyldenmist タイマーガイド：汚染・ラン時間・脱出",
    description: "対局のプレッシャーを理解したいプレイヤー向け。タイマーをパニックの引き金ではなく停止ルールとして使うことを重視します。",
    eyebrow: 'ガイド', h1: "Gyldenmist タイマーガイド",
    lead: "対局のプレッシャーを理解したいプレイヤー向け。タイマーをパニックの引き金ではなく停止ルールとして使うことを重視します。",
    sections: [
      { heading: "タイマーを停止ルールに", paragraphs: ["タイマーをパニックの引き金ではなく、明確な停止ルールとして使いましょう。"] },
      { heading: "注意点", paragraphs: ["汚染の圧力が安全な選択肢を奪うまで待つのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'shrine-extraction-guide', title: "Mistfall Hunter 祠脱出ガイド：起動・ベルクリーチャー討伐・離脱",
    description: "脱出の仕組みを知りたいプレイヤー向け。離脱プロセスを安全な判断に分解することを重視します。",
    eyebrow: 'ガイド', h1: "祠脱出ガイド",
    lead: "脱出の仕組みを知りたいプレイヤー向け。離脱プロセスを安全な判断に分解することを重視します。",
    sections: [
      { heading: "離脱プロセスを分解する", paragraphs: ["離脱プロセスを、安全な個々の判断に分解して考えましょう。"] },
      { heading: "注意点", paragraphs: ["回復していない、または無防備な状態で離脱を起動するのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'bell-creature-guide', title: "Mistfall Hunter ベルクリーチャーガイド：追跡・討伐・脱出タイミング",
    description: "脱出目標を学ぶ新規プレイヤー向け。ベルクリーチャーを計画的な目標として扱い、パニックの追跡にしないことを重視します。",
    eyebrow: 'ガイド', h1: "ベルクリーチャーガイド",
    lead: "脱出目標を学ぶ新規プレイヤー向け。ベルクリーチャーを計画的な目標として扱い、パニックの追跡にしないことを重視します。",
    sections: [
      { heading: "計画的な目標として扱う", paragraphs: ["ベルクリーチャーはパニックで追いかけるのではなく、計画的な目標として扱いましょう。"] },
      { heading: "注意点", paragraphs: ["目標を追って敵プレイヤーやPvE集団に突っ込むのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'loot-loss-guide', title: "Mistfall Hunter 戦利品喪失ガイド：死亡時に何が起こるか",
    description: "装備を失うことを心配するプレイヤー向け。死亡リスクを理解し、管理できるようにすることを重視します。",
    eyebrow: 'ガイド', h1: "戦利品喪失ガイド",
    lead: "装備を失うことを心配するプレイヤー向け。死亡リスクを理解し、管理できるようにすることを重視します。",
    sections: [
      { heading: "死亡リスクを理解する", paragraphs: ["死亡リスクを無視したり過大評価したりせず、正しく理解しましょう。"] },
      { heading: "注意点", paragraphs: ["学習中に失うと困る装備を持ち込むのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'stash-management-guide', title: "Mistfall Hunter 保管庫管理ガイド：何を残し・売り・リスクにするか",
    description: "脱出した戦利品を整理するプレイヤー向け。戦利品を将来のランの選択肢に変えることを重視します。",
    eyebrow: 'ガイド', h1: "保管庫管理ガイド",
    lead: "脱出した戦利品を整理するプレイヤー向け。戦利品を将来のランの選択肢に変えることを重視します。",
    sections: [
      { heading: "戦利品を選択肢に変える", paragraphs: ["ただ貯め込むのではなく、脱出した戦利品を将来のランの選択肢に変えましょう。"] },
      { heading: "注意点", paragraphs: ["低価値なアイテムを貯め込みつつ、有用な装備を悪いルートで危険にさらすのは失敗です。"] },
    ], related: [],
  },
  {
    slug: 'gear-score-guide', title: "Mistfall Hunter 装備価値ガイド：武器・防具・Affixの見極め方",
    description: "装備を保管する価値があるか判断するプレイヤー向け。役割適性と脱出価値で装備を評価することを重視します。",
    eyebrow: 'ガイド', h1: "装備価値ガイド",
    lead: "装備を保管する価値があるか判断するプレイヤー向け。役割適性と脱出価値で装備を評価することを重視します。",
    sections: [
      { heading: "役割適性と価値で評価", paragraphs: ["役割にどれだけ合っているか、脱出時の価値がどれだけあるかで装備を評価しましょう。"] },
      { heading: "注意点", paragraphs: ["クラスプランに合わないレア装備を残してしまうのはよくある失敗です。"] },
    ], related: [],
  },
  {
    slug: 'perfect-block-guide', title: "Mistfall Hunter 完璧なブロックガイド：タイミング・スタミナ・反撃の隙",
    description: "防御的な戦闘を学ぶプレイヤー向け。防御のタイミングを使って安全な反撃の隙を作ることを重視します。",
    eyebrow: 'ガイド', h1: "完璧なブロックガイド",
    lead: "防御的な戦闘を学ぶプレイヤー向け。防御のタイミングを使って安全な反撃の隙を作ることを重視します。",
    sections: [
      { heading: "安全な反撃の隙を作る", paragraphs: ["正確なタイミングを使って、安全な反撃の隙を作りましょう。"] },
      { heading: "注意点", paragraphs: ["回避の方が安全な場面で完璧ブロックを狙うのは失敗のもとです。"] },
    ], related: [],
  },
  {
    slug: 'no-lock-on-combat-guide', title: "Mistfall Hunter ロックオンなし戦闘：カメラ・位置取り・PvPエイム",
    description: "Souls的なロックオン戦闘から移行するプレイヤー向け。カメラ操作を戦闘スキルとして扱うことを重視します。",
    eyebrow: 'ガイド', h1: "ロックオンなし戦闘",
    lead: "Souls的なロックオン戦闘から移行するプレイヤー向け。カメラ操作を戦闘スキルとして扱うことを重視します。",
    sections: [
      { heading: "カメラ操作を技術として扱う", paragraphs: ["カメラ操作を、練習が必要な独立した戦闘スキルとして扱いましょう。"] },
      { heading: "注意点", paragraphs: ["移動とエイムが噛み合わず攻撃を外してしまうのはよくある問題です。"] },
    ], related: [],
  },
  {
    slug: 'weapon-swap-guide', title: "Mistfall Hunter 武器切り替えガイド：スキル変化・クールダウン・戦術",
    description: "クラスの武器の柔軟性を学ぶプレイヤー向け。戦闘中に役割を変えるための武器切り替えを重視します。",
    eyebrow: 'ガイド', h1: "武器切り替えガイド",
    lead: "クラスの武器の柔軟性を学ぶプレイヤー向け。戦闘中に役割を変えるための武器切り替えを重視します。",
    sections: [
      { heading: "戦闘中に役割を変える", paragraphs: ["規律を失わずに、武器切り替えで戦闘中の役割を変えましょう。"] },
      { heading: "注意点", paragraphs: ["必要なスキルの隙を理解せずに切り替えるのは失敗のもとです。"] },
    ], related: [],
  },
  {
    slug: 'co-op-team-guide', title: "Mistfall Hunter 協力プレイガイド：役割・連携・脱出規律",
    description: "友達と一緒にプレイするプレイヤー向け。3人を3つの別々の戦いにせず、一つの計画にまとめることを重視します。",
    eyebrow: 'ガイド', h1: "協力プレイガイド",
    lead: "友達と一緒にプレイするプレイヤー向け。3人を3つの別々の戦いにせず、一つの計画にまとめることを重視します。",
    sections: [
      { heading: "別々の戦いを一つの計画に", paragraphs: ["3人がバラバラに戦うのではなく、一つの計画としてまとめましょう。"] },
      { heading: "注意点", paragraphs: ["離れすぎたり、二重に漁ったり、出口を無視したりするのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'solo-vs-squad-guide', title: "Mistfall Hunter ソロ vs スクワッド：ルート選択・リスク・最適クラス",
    description: "どうプレイするか決めるプレイヤー向け。チーム人数ごとに異なる停止ルールが必要なことを重視します。",
    eyebrow: 'ガイド', h1: "ソロ vs スクワッド",
    lead: "どうプレイするか決めるプレイヤー向け。チーム人数ごとに異なる停止ルールが必要なことを重視します。",
    sections: [
      { heading: "人数に応じた停止ルール", paragraphs: ["チーム人数に合わせて停止ルールを調整しましょう。"] },
      { heading: "注意点", paragraphs: ["スクワッドの習慣をソロで、あるいはソロの習慣をチームで使うのはよくある失敗です。"] },
    ], related: [],
  },
  {
    slug: 'third-party-guide', title: "Mistfall Hunter 横取り対策ガイド：回避・反撃・PvP崩壊からの脱出",
    description: "勝った戦闘の後に死ぬプレイヤー向け。次の戦闘は最初の戦闘より危険なことが多いという意識を重視します。",
    eyebrow: 'ガイド', h1: "横取り対策ガイド",
    lead: "勝った戦闘の後に死ぬプレイヤー向け。次の戦闘は最初の戦闘より危険なことが多いという意識を重視します。",
    sections: [
      { heading: "次の戦闘の方が危険", paragraphs: ["今勝った戦闘より、次の戦闘の方が危険なことが多いと意識しましょう。"] },
      { heading: "注意点", paragraphs: ["キル直後やボス報酬直後にすぐ漁るのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'sound-cues-guide', title: "Mistfall Hunter 音の手がかりガイド：足音・戦闘・ボス音・脱出",
    description: "見る前に危険を察知したいプレイヤー向け。音は背景ノイズではなくルート情報だと意識することを重視します。",
    eyebrow: 'ガイド', h1: "音の手がかりガイド",
    lead: "見る前に危険を察知したいプレイヤー向け。音は背景ノイズではなくルート情報だと意識することを重視します。",
    sections: [
      { heading: "音を情報として扱う", paragraphs: ["音を単なる背景ではなく、重要なルート情報として扱いましょう。"] },
      { heading: "注意点", paragraphs: ["長引く戦闘の音を無視して強いチームに突っ込むのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'beginner-loadout-guide', title: "Mistfall Hunter 初心者装備ガイド：安価なキット・安全な武器・初脱出",
    description: "最初のランを準備する新規プレイヤー向け。学習に役立つものだけをリスクにすることを重視します。",
    eyebrow: 'ガイド', h1: "初心者装備ガイド",
    lead: "最初のランを準備する新規プレイヤー向け。学習に役立つものだけをリスクにすることを重視します。",
    sections: [
      { heading: "学習に役立つものだけをリスクに", paragraphs: ["実際に学習の助けになる装備だけをリスクにしましょう。"] },
      { heading: "注意点", paragraphs: ["出口を理解する前に高価な装備を持ち込むのはよくある初心者の失敗です。"] },
    ], related: [],
  },
  {
    slug: 'best-settings-low-end-pc', title: "Mistfall Hunter 低スペックPC向け最適設定：FPS・カクつき・視認性",
    description: "安定した性能を優先するPCプレイヤー向け。見た目の豪華さよりフレーム安定性を重視します。",
    eyebrow: 'ガイド', h1: "低スペックPC向け最適設定",
    lead: "安定した性能を優先するPCプレイヤー向け。見た目の豪華さよりフレーム安定性を重視します。",
    sections: [
      { heading: "安定性を優先", paragraphs: ["見た目の豪華さより、フレームレートの安定性を優先しましょう。"] },
      { heading: "注意点", paragraphs: ["視認性を下げすぎてPvPでの状況把握に支障が出るのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'best-class-for-pvp', title: "Mistfall Hunter PvP最強クラス：圧力・選択・サポート・カウンター",
    description: "PvPメインを選ぶプレイヤー向け。純粋な決闘の強さより、戦闘制御と脱出の安全性でクラスを評価することを重視します。",
    eyebrow: 'ガイド', h1: "PvP最強クラス",
    lead: "PvPメインを選ぶプレイヤー向け。純粋な決闘の強さより、戦闘制御と脱出の安全性でクラスを評価することを重視します。",
    sections: [
      { heading: "決闘の強さより制御力", paragraphs: ["決闘の強さだけでなく、戦闘制御と脱出の安全性でクラスを評価しましょう。"] },
      { heading: "注意点", paragraphs: ["決闘の強さと実際の脱出PvP価値を混同するのはよくある失敗です。"] },
    ], related: [],
  },
  {
    slug: 'best-class-for-bosses', title: "Mistfall Hunter ボス最強クラス：PvEダメージ・サポート・脱出の安全性",
    description: "PvE目標のためにビルドするプレイヤー向け。報酬を持ち帰る能力もボスでの価値に含めることを重視します。",
    eyebrow: 'ガイド', h1: "ボス最強クラス",
    lead: "PvE目標のためにビルドするプレイヤー向け。報酬を持ち帰る能力もボスでの価値に含めることを重視します。",
    sections: [
      { heading: "持ち帰る力も価値に含める", paragraphs: ["ダメージだけでなく、報酬を持ち帰る力もクラスの価値として考えましょう。"] },
      { heading: "注意点", paragraphs: ["横取りの圧力を無視してダメージだけでランク付けするのは失敗です。"] },
    ], related: [],
  },
  {
    slug: 'best-class-for-solo', title: "Mistfall Hunter ソロ脱出最強クラス：安全性・リセット手段・ルート",
    description: "ソロランを計画するプレイヤー向け。ソロの強さとは戦闘開始のタイミングを自分で決められることだと重視します。",
    eyebrow: 'ガイド', h1: "ソロ脱出最強クラス",
    lead: "ソロランを計画するプレイヤー向け。ソロの強さとは戦闘開始のタイミングを自分で決められることだと重視します。",
    sections: [
      { heading: "戦闘開始を自分で決める", paragraphs: ["ソロの強さとは、いつ戦闘が始まるかを自分でコントロールできることです。"] },
      { heading: "注意点", paragraphs: ["ソロ火力が足りないスクワッド向けクラスを選ぶのは失敗のもとです。"] },
    ], related: [],
  },
  {
    slug: 'class-counters-guide', title: "Mistfall Hunter クラス相性ガイド：対面・間合い・チームでの対処",
    description: "PvPの対面を学ぶプレイヤー向け。対処は間合いとルート選択から始まることを重視します。",
    eyebrow: 'ガイド', h1: "クラス相性ガイド",
    lead: "PvPの対面を学ぶプレイヤー向け。対処は間合いとルート選択から始まることを重視します。",
    sections: [
      { heading: "対処は間合いから始まる", paragraphs: ["スキルだけでなく、間合いとルート選択から対処を始めましょう。"] },
      { heading: "注意点", paragraphs: ["実際のバランスが確認される前に、絶対的な相性を決めつけるのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'class-roles-guide', title: "Mistfall Hunter クラス役割ガイド：前衛・遠距離・ステルス・魔法・サポート",
    description: "チームを組む、またはメインを選ぶプレイヤー向け。ビルドより先に役割を選ぶことを重視します。",
    eyebrow: 'ガイド', h1: "クラス役割ガイド",
    lead: "チームを組む、またはメインを選ぶプレイヤー向け。ビルドより先に役割を選ぶことを重視します。",
    sections: [
      { heading: "ビルドより先に役割を", paragraphs: ["具体的なビルドを決める前に、まずチーム内での役割を選びましょう。"] },
      { heading: "注意点", paragraphs: ["サポート計画なしに3人が同じ役割を重ねてしまうのはよくある失敗です。"] },
    ], related: [],
  },
  {
    slug: 'gameplay-loop-explained', title: "Mistfall Hunter ゲームプレイループ解説",
    description: "どのランも同じ核心的な判断に帰結します：何と戦うか、何を拾うか、いつ戦闘が安全か、そしてもう一押しするか、他のハンターより先にSoul of Returnへ向かうか。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter ゲームプレイループ解説",
    lead: "どのランも同じ核心的な判断に帰結します：何と戦うか、何を拾うか、いつ戦闘が安全か、そしてもう一押しするか、他のハンターより先にSoul of Returnへ向かうか。",
    sections: [
      { heading: "コアループ", paragraphs: ["侵入、戦闘、略奪、脱出の確保、離脱——これがすべてのランに共通する核心です。"] },
      { heading: "注意点", paragraphs: ["十分な戦利品がいつ「十分」になるかの判断は、純粋な戦闘力より重要なことが多いです。"] },
    ], related: [],
  },
  {
    slug: 'gameplay-trailer-breakdown', title: "Mistfall Hunter ゲームプレイトレーラー解説",
    description: "公式トレーラーは6クラス、モンストと敵対ハンター双方に対するPvPvE戦闘、脱出型の戦利品ループ、Mist Lordボス戦を確認しています。画面に映っていない要素は、隠されたメカニクスではなく単に未確認として扱ってください。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter ゲームプレイトレーラー解説",
    lead: "公式トレーラーは6クラス、モンストと敵対ハンター双方に対するPvPvE戦闘、脱出型の戦利品ループ、Mist Lordボス戦を確認しています。画面に映っていない要素は、隠されたメカニクスではなく単に未確認として扱ってください。",
    sections: [
      { heading: "確認されていること", paragraphs: ["6クラス、PvPvE戦闘、脱出型戦利品ループが公式トレーラーで確認されています。"] },
      { heading: "注意点", paragraphs: ["画面に映っていない詳細を確認済みメカニクスと決めつけないようにしましょう。"] },
    ], related: [],
  },
  {
    slug: 'first-30-minutes-guide', title: "Mistfall Hunter：最初の30分",
    description: "最初の30分は、自分のクラスの基本的な戦闘感覚を学び、近くの出口を見つけ、安価な装備で一回完全な脱出を達成することに使いましょう——操作を覚える前にボス戦を探すより重要です。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter：最初の30分",
    lead: "最初の30分は、自分のクラスの基本的な戦闘感覚を学び、近くの出口を見つけ、安価な装備で一回完全な脱出を達成することに使いましょう——操作を覚える前にボス戦を探すより重要です。",
    sections: [
      { heading: "まず基本から", paragraphs: ["自分のクラスの戦闘感覚を学び、大きな挑戦の前にシンプルな脱出を一度完了させましょう。"] },
      { heading: "注意点", paragraphs: ["操作に慣れる前にボス戦を探すのはよくある初心者の失敗です。"] },
    ], related: [],
  },
  {
    slug: 'combat-gameplay-guide', title: "Mistfall Hunter 戦闘ガイド",
    description: "戦闘の中心はスタミナ管理、固定ロックオンなしのエイム、ブロックと回避、そして自分のクラス固有のツールです。最も長く生き残るプレイヤーは、スタミナを第二の体力ゲージのように扱います。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter 戦闘ガイド",
    lead: "戦闘の中心はスタミナ管理、固定ロックオンなしのエイム、ブロックと回避、そして自分のクラス固有のツールです。最も長く生き残るプレイヤーは、スタミナを第二の体力ゲージのように扱います。",
    sections: [
      { heading: "スタミナは第二の体力", paragraphs: ["スタミナを単なる攻撃用リソースではなく、第二の体力ゲージとして扱いましょう。"] },
      { heading: "注意点", paragraphs: ["スタミナを使い切ってしまうと、逃げる手段がなくなります。"] },
    ], related: [],
  },
  {
    slug: 'pvp-gameplay-guide', title: "Mistfall Hunter PvPガイド",
    description: "PvPは単なる決闘ではありません——音、ルート管理、脱出タイミングが、一撃が当たる前にほとんどの戦闘の結果を決めます。最も安全な勝利は、油断している相手を捉えることから生まれます。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter PvPガイド",
    lead: "PvPは単なる決闘ではありません——音、ルート管理、脱出タイミングが、一撃が当たる前にほとんどの戦闘の結果を決めます。最も安全な勝利は、油断している相手を捉えることから生まれます。",
    sections: [
      { heading: "勝利は戦う前に決まる", paragraphs: ["音とルート管理が、最初の一撃より前にほとんどの戦闘を決定づけます。"] },
      { heading: "注意点", paragraphs: ["満タンの相手に正面から挑むより、油断している相手を狙う方が安全です。"] },
    ], related: [],
  },
  {
    slug: 'pve-gameplay-guide', title: "Mistfall Hunter PvEガイド",
    description: "PvEの脅威は、勝ったとしても時間・音・資源を消費します。モンスターとの戦闘は、それが他のハンターを引き寄せるリスクに見合うかどうかを常に天秤にかけるべきです。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter PvEガイド",
    lead: "PvEの脅威は、勝ったとしても時間・音・資源を消費します。モンスターとの戦闘は、それが他のハンターを引き寄せるリスクに見合うかどうかを常に天秤にかけるべきです。",
    sections: [
      { heading: "すべての戦闘に代償がある", paragraphs: ["PvE戦闘のたびに、他プレイヤーを引き寄せるリスクと報酬を天秤にかけましょう。"] },
      { heading: "注意点", paragraphs: ["長く騒がしいモンスター戦は、モンスター自体より危険になり得ます。"] },
    ], related: [],
  },
  {
    slug: 'solo-gameplay-guide', title: "Mistfall Hunter ソロガイド",
    description: "ソロプレイは短く静かなルートと、逃走手段を持つクラスに報酬を与えます。仲間と注意を分担できないため、純粋なクラスの強さよりルート規律と早めの離脱が重要です。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter ソロガイド",
    lead: "ソロプレイは短く静かなルートと、逃走手段を持つクラスに報酬を与えます。仲間と注意を分担できないため、純粋なクラスの強さよりルート規律と早めの離脱が重要です。",
    sections: [
      { heading: "規律が強さより重要", paragraphs: ["ソロでは、純粋なクラスの強さより短く静かなルートと確実な逃走手段が重要です。"] },
      { heading: "注意点", paragraphs: ["仲間がいない分、注意とリスクをすべて一人で背負うことになります。"] },
    ], related: [],
  },
  {
    slug: 'co-op-gameplay-guide', title: "Mistfall Hunter 協力プレイガイド",
    description: "協力プレイは、全員が同じ相手を攻撃するのではなく、一人が圧力役、一人がサポート役、一人が周囲を警戒する役と、役割を明確に分担するとうまくいきます。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter 協力プレイガイド",
    lead: "協力プレイは、全員が同じ相手を攻撃するのではなく、一人が圧力役、一人がサポート役、一人が周囲を警戒する役と、役割を明確に分担するとうまくいきます。",
    sections: [
      { heading: "役割を明確に分担", paragraphs: ["全員が同じ相手を攻撃するのではなく、チーム内で役割を明確に分担しましょう。"] },
      { heading: "注意点", paragraphs: ["役割分担がないと、チームは無防備な3人のバラバラな存在になってしまいます。"] },
    ], related: [],
  },
  {
    slug: 'mistfall-hunters-spelling', title: "Mistfall HunterかMistfall Huntersか？正しい表記",
    description: "公式タイトルは単数形のMistfall Hunterです——Bellring自身のサイト、Steam、Xboxのリスティングすべてが単数形を使用しています。「Mistfall Hunters」は同じゲームを検索する際のよくある表記ゆれに過ぎません。",
    eyebrow: 'ガイド', h1: "Mistfall HunterかMistfall Huntersか？",
    lead: "公式タイトルは単数形のMistfall Hunterです——Bellring自身のサイト、Steam、Xboxのリスティングすべてが単数形を使用しています。「Mistfall Hunters」は同じゲームを検索する際のよくある表記ゆれに過ぎません。",
    sections: [
      { heading: "公式の表記", paragraphs: ["単数形のMistfall Hunterが、すべての公式チャンネルでの正式表記です。"] },
      { heading: "なぜ複数形が使われるのか", paragraphs: ["「Mistfall Hunters」は別のタイトルではなく、自然な検索の癖によるものです。"] },
    ], related: [],
  },
  {
    slug: 'mistfall-hunter-vs-mistfall-hunters', title: "Mistfall Hunter vs Mistfall Hunters：同じゲーム",
    description: "Mistfall Huntersという別のゲームは存在しません——同じタイトル、Mistfall Hunterが検索で異なる表記をされているだけです。公式ページ、ストア、ニュースを探す際は単数形を使いましょう。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter vs Mistfall Hunters",
    lead: "Mistfall Huntersという別のゲームは存在しません——同じタイトル、Mistfall Hunterが検索で異なる表記をされているだけです。公式ページ、ストア、ニュースを探す際は単数形を使いましょう。",
    sections: [
      { heading: "同じゲーム", paragraphs: ["どちらの表記も同じゲーム、Mistfall Hunterを指しています。"] },
      { heading: "どちらを使うべきか", paragraphs: ["公式情報源を確実に見つけるには、単数形を使いましょう。"] },
    ], related: [],
  },
  {
    slug: 'mistfall-hunter-name-guide', title: "Mistfall Hunter 名称・表記ガイド",
    description: "Mistfall HuntersやMist Fall Hunterなど、様々な表記を見たとしても、すべて同じゲームを指しています。Steam、Xbox、Bellring公式サイトでの正式名称はMistfall Hunterです。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter 名称・表記ガイド",
    lead: "Mistfall HuntersやMist Fall Hunterなど、様々な表記を見たとしても、すべて同じゲームを指しています。Steam、Xbox、Bellring公式サイトでの正式名称はMistfall Hunterです。",
    sections: [
      { heading: "すべての表記が同じゲームを指す", paragraphs: ["Mist Fall Hunterなど様々な表記は、すべて同じタイトルを指しています。"] },
      { heading: "正式名称", paragraphs: ["Steam、Xbox、公式サイトでの唯一の正式名称はMistfall Hunterです。"] },
    ], related: [],
  },
  {
    slug: 'release-time-time-zones', title: "Mistfall Hunter 発売時刻（各タイムゾーン）",
    description: "Mistfall Hunterは2026年7月29日午後6時（太平洋時間）に発売され、これは2026年7月30日午前1時（UTC）と同じ瞬間です。中央ヨーロッパ時間ではおよそ7月30日午前3時、日本標準時ではおよそ7月30日午前11時になります。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter 発売時刻（タイムゾーン別）",
    lead: "Mistfall Hunterは2026年7月29日午後6時（太平洋時間）に発売され、これは2026年7月30日午前1時（UTC）と同じ瞬間です。中央ヨーロッパ時間ではおよそ7月30日午前3時、日本標準時ではおよそ7月30日午前11時になります。",
    sections: [
      { heading: "時差の換算", paragraphs: ["7月29日午後6時（PT）は、7月30日午前1時（UTC）と世界共通の同じ瞬間です。"] },
      { heading: "地域ごとの時刻", paragraphs: ["正確なカウントダウンは、お住まいの地域のストアで確認してください。"] },
    ], related: [],
  },
  {
    slug: 'launch-day-checklist', title: "Mistfall Hunter 発売日チェックリスト",
    description: "発売日前に：プラットフォームアカウントの連携を確認し、ウィッシュリストに登録するかストアページをフォローし、スタンダードかデラックスかを決め、トレーラーで見ただけでなく安心して学べるクラスを選びましょう。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter 発売日チェックリスト",
    lead: "発売日前に：プラットフォームアカウントの連携を確認し、ウィッシュリストに登録するかストアページをフォローし、スタンダードかデラックスかを決め、トレーラーで見ただけでなく安心して学べるクラスを選びましょう。",
    sections: [
      { heading: "発売前の確認事項", paragraphs: ["アカウント連携、ウィッシュリスト登録、エディション選択——これらが事前準備です。"] },
      { heading: "事前ダウンロードなし", paragraphs: ["事前ダウンロードはなく、公式の発売時刻になって初めてプレイ可能になります。"] },
    ], related: [],
  },
  {
    slug: 'launch-week-roadmap', title: "Mistfall Hunter 発売週ロードマップ",
    description: "発売週は、初日パッチ、サーバー安定性の報告、そしてベータの印象ではなく実機データに基づく最初の本格的なバランス議論を注視する期間です。このページは公式に確認され次第、それらを追跡します。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter 発売週ロードマップ",
    lead: "発売週は、初日パッチ、サーバー安定性の報告、そしてベータの印象ではなく実機データに基づく最初の本格的なバランス議論を注視する期間です。このページは公式に確認され次第、それらを追跡します。",
    sections: [
      { heading: "注目すべきこと", paragraphs: ["初日パッチとサーバー安定性が最初の週の最重要トピックです。"] },
      { heading: "バランス議論", paragraphs: ["本格的なバランス議論は、ベータの印象ではなく実機データが揃って初めて始まります。"] },
    ], related: [],
  },
  {
    slug: 'pre-launch-guide', title: "Mistfall Hunter 発売前ガイド",
    description: "発売前に最も役立つ準備は、脱出ループを学び、クラスの役割を比較し、プラットフォームと価格を確認することです——発売版に引き継がれるとは限らないベータデータに基づくTier表を暗記することではありません。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter 発売前ガイド",
    lead: "発売前に最も役立つ準備は、脱出ループを学び、クラスの役割を比較し、プラットフォームと価格を確認することです——発売版に引き継がれるとは限らないベータデータに基づくTier表を暗記することではありません。",
    sections: [
      { heading: "本当に役立つこと", paragraphs: ["脱出ループの理解とクラスの役割比較は、ベータのTier表を覚えるより有用です。"] },
      { heading: "避けるべきこと", paragraphs: ["ベータ基準のTier表は、発売後には通用しなくなる可能性があります。"] },
    ], related: [],
  },
  {
    slug: 'steam-release-time', title: "Mistfall Hunter Steam発売時刻",
    description: "Steam自体のリスティングは2026年7月29日を発売日として表示しています。正確な解禁時刻は公式発表によると午後6時PT（7月30日午前1時UTC）で、Steamは通常どの地域でも同じ瞬間に、各地域のローカル時刻に合わせて解禁します。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter Steam発売時刻",
    lead: "Steam自体のリスティングは2026年7月29日を発売日として表示しています。正確な解禁時刻は公式発表によると午後6時PT（7月30日午前1時UTC）で、Steamは通常どの地域でも同じ瞬間に、各地域のローカル時刻に合わせて解禁します。",
    sections: [
      { heading: "確定した時刻", paragraphs: ["Steamは2026年7月29日を表示し、世界共通で午後6時PTに解禁されます。"] },
      { heading: "地域ごとの調整", paragraphs: ["時刻は各地域のローカル時間に合わせて表示されますが、瞬間自体は同じです。"] },
    ], related: [],
  },
  {
    slug: 'steam-demo-guide', title: "Mistfall Hunter Steamデモガイド",
    description: "Mistfall Hunterのデモは2026年6月のSteam Next Fest期間中に利用可能で、6月15〜22日のオープンベータとは別のものでした。デモの進行状況は正式版には引き継がれません——戦闘と脱出ループの味見として捉えてください。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter Steamデモガイド",
    lead: "Mistfall Hunterのデモは2026年6月のSteam Next Fest期間中に利用可能で、6月15〜22日のオープンベータとは別のものでした。デモの進行状況は正式版には引き継がれません——戦闘と脱出ループの味見として捉えてください。",
    sections: [
      { heading: "デモの提供時期", paragraphs: ["デモは2026年6月のSteam Next Fest期間中に、オープンベータとは別に提供されました。"] },
      { heading: "進行状況は引き継がれない", paragraphs: ["デモの進行状況は正式版には引き継がれません。"] },
    ], related: [],
  },
  {
    slug: 'steam-reviews-tracker', title: "Mistfall Hunter Steamレビュー追跡",
    description: "Mistfall Hunterは7月29日に発売されたため、今では実際のプレイヤーがレビューできます。このページは、十分なデータが集まり次第、レビューの傾向やよくある称賛・不満を追跡します。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter Steamレビュー追跡",
    lead: "Mistfall Hunterは7月29日に発売されたため、今では実際のプレイヤーがレビューできます。このページは、十分なデータが集まり次第、レビューの傾向やよくある称賛・不満を追跡します。",
    sections: [
      { heading: "初期のレビュー", paragraphs: ["ゲームが稼働中の今、実際のプレイヤーレビューが集まり始めています。"] },
      { heading: "注目すべきこと", paragraphs: ["発売後数日でよくある批判点や称賛点が明らかになってきます。"] },
    ], related: [],
  },
  {
    slug: 'steam-wishlist-guide', title: "Mistfall Hunter Steamウィッシュリストガイド",
    description: "SteamでMistfall Hunterをウィッシュリストに追加する（またはXboxやPlayStationでフォローする）と、解禁された瞬間に通知が届きます。それ以上の確認済みウィッシュリスト特典はありません。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter Steamウィッシュリストガイド",
    lead: "SteamでMistfall Hunterをウィッシュリストに追加する（またはXboxやPlayStationでフォローする）と、解禁された瞬間に通知が届きます。それ以上の確認済みウィッシュリスト特典はありません。",
    sections: [
      { heading: "実用的なメリット", paragraphs: ["ウィッシュリストの主な利点は、正確な発売の瞬間を逃さないことです。"] },
      { heading: "特別な特典はない", paragraphs: ["ウィッシュリスト限定の確認済み特典は特にありません。"] },
    ], related: [],
  },
  {
    slug: 'cross-platform-party-guide', title: "Mistfall Hunter クロスプラットフォームパーティガイド",
    description: "PC、Xbox、PS5間の完全クロスプレイは確認済みで既に稼働中です——異なるプラットフォームのプレイヤーが今すぐパーティを組んで一緒に狩りができます。クロスプログレッションは別機能で、同様には確認されていません。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter クロスプラットフォームパーティガイド",
    lead: "PC、Xbox、PS5間の完全クロスプレイは確認済みで既に稼働中です——異なるプラットフォームのプレイヤーが今すぐパーティを組んで一緒に狩りができます。クロスプログレッションは別機能で、同様には確認されていません。",
    sections: [
      { heading: "稼働中で確認済み", paragraphs: ["3プラットフォーム間のクロスプレイは今、実際に機能しています。"] },
      { heading: "クロスプログレッションは別", paragraphs: ["プラットフォームをまたいだアカウント共有は別機能で、まだ確認されていません。"] },
    ], related: [],
  },
  {
    slug: 'cross-progression-guide', title: "Mistfall Hunter クロスプログレッションガイド",
    description: "クロスプログレッション——プラットフォームをまたいで同じアカウントと解放要素を共有すること——は公式にはまだ確認されていません。オープンベータで確認されたのはクロスプレイ（一緒にプレイすること）で、これはクロスプログレッション（セーブデータ共有）とは関連していますが別の機能です。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter クロスプログレッションガイド",
    lead: "クロスプログレッション——プラットフォームをまたいで同じアカウントと解放要素を共有すること——は公式にはまだ確認されていません。オープンベータで確認されたのはクロスプレイ（一緒にプレイすること）で、これはクロスプログレッション（セーブデータ共有）とは関連していますが別の機能です。",
    sections: [
      { heading: "クロスプログレッションとは", paragraphs: ["プラットフォームをまたいで同じアカウントと解放要素を共有することは、まだ確認されていません。"] },
      { heading: "クロスプレイと混同しない", paragraphs: ["クロスプレイ（一緒にプレイ）は確認済みですが、クロスプログレッション（セーブ共有）は別の話です。"] },
    ], related: [],
  },
  {
    slug: 'pc-xbox-crossplay-guide', title: "Mistfall Hunter PC＆Xboxクロスプレイガイド",
    description: "はい——PC、Xbox、PS5間の完全クロスプレイが確認済みで稼働中のため、PCとXboxのプレイヤーは一緒にプレイできます。Xboxのコンソールオンラインマルチプレイには、Game Pass CoreまたはUltimateが必要です。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter PCとXboxのクロスプレイ",
    lead: "はい——PC、Xbox、PS5間の完全クロスプレイが確認済みで稼働中のため、PCとXboxのプレイヤーは一緒にプレイできます。Xboxのコンソールオンラインマルチプレイには、Game Pass CoreまたはUltimateが必要です。",
    sections: [
      { heading: "確認済みで稼働中", paragraphs: ["PCとXboxのプレイヤーは今すぐ一緒にプレイでき、クロスプレイは実際に機能しています。"] },
      { heading: "Xboxプレイヤーに必要なもの", paragraphs: ["Xboxでのオンラインマルチプレイには、Game Pass CoreまたはUltimateが必要です。"] },
    ], related: [],
  },
  {
    slug: 'ps5-crossplay-guide', title: "Mistfall Hunter PS5クロスプレイガイド",
    description: "はい——PS5は発売時に確認されたPC、Xbox、PS5間の完全クロスプレイに含まれており、PS5プレイヤーはPCやXboxのハンターと一緒にプレイできます。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter PS5クロスプレイガイド",
    lead: "はい——PS5は発売時に確認されたPC、Xbox、PS5間の完全クロスプレイに含まれており、PS5プレイヤーはPCやXboxのハンターと一緒にプレイできます。",
    sections: [
      { heading: "PS5も対象に含まれる", paragraphs: ["PS5はPC・Xboxと共に、確認済みのクロスプレイの対象に含まれています。"] },
      { heading: "実際の意味", paragraphs: ["PS5プレイヤーは制限なくPC・Xboxプレイヤーと一緒にプレイできます。"] },
    ], related: [],
  },
  {
    slug: 'steam-price-guide', title: "Mistfall Hunter Steam価格ガイド",
    description: "Steamでは、スタンダード版が24.99ドル、デラックス版が39.99ドルで、15ドルでのアップグレードも可能です。発売時から2026年8月12日まで、10%の発売記念割引が適用されます。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter Steam価格ガイド",
    lead: "Steamでは、スタンダード版が24.99ドル、デラックス版が39.99ドルで、15ドルでのアップグレードも可能です。発売時から2026年8月12日まで、10%の発売記念割引が適用されます。",
    sections: [
      { heading: "確定価格", paragraphs: ["スタンダード24.99ドル、デラックス39.99ドル、15ドルでアップグレード可能です。"] },
      { heading: "発売記念割引", paragraphs: ["発売時から2026年8月12日まで10%割引が適用されます。"] },
    ], related: [],
  },
  {
    slug: 'xbox-price-guide', title: "Mistfall Hunter Xbox価格ガイド",
    description: "Xboxの価格はSteamと同じです：スタンダード24.99ドル、デラックス39.99ドル。さらにXboxとPC向けにXbox Game Passで発売初日から対応しているため、Game Pass加入者は別途購入せずにプレイできます。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter Xbox価格ガイド",
    lead: "Xboxの価格はSteamと同じです：スタンダード24.99ドル、デラックス39.99ドル。さらにXboxとPC向けにXbox Game Passで発売初日から対応しているため、Game Pass加入者は別途購入せずにプレイできます。",
    sections: [
      { heading: "Steamと同じ価格", paragraphs: ["Xboxの価格はSteamの価格とまったく同じです。"] },
      { heading: "Game Passの利点", paragraphs: ["Game Pass加入者は初日から追加購入なしでプレイできます。"] },
    ], related: [],
  },
  {
    slug: 'ps5-price-guide', title: "Mistfall Hunter PS5価格ガイド",
    description: "PS5の価格は他プラットフォームと同じ構造です：スタンダード24.99ドル／デラックス39.99ドル。Xboxとは異なり、発売時点でPS Plusには含まれないため、PS5プレイヤーは直接購入する必要があります。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter PS5価格ガイド",
    lead: "PS5の価格は他プラットフォームと同じ構造です：スタンダード24.99ドル／デラックス39.99ドル。Xboxとは異なり、発売時点でPS Plusには含まれないため、PS5プレイヤーは直接購入する必要があります。",
    sections: [
      { heading: "他と同じ価格", paragraphs: ["PS5の価格は全プラットフォーム共通の24.99ドル／39.99ドル構造です。"] },
      { heading: "PS Plusには含まれない", paragraphs: ["Xbox Game Passとは異なり、PS Plusには含まれていません。"] },
    ], related: [],
  },
  {
    slug: 'game-pass-or-buy-guide', title: "Mistfall Hunter：Game Passか購入か？",
    description: "XboxやPCなら、Game Passで初日からサブスク料金だけでMistfall Hunterがプレイできます。Game Pass加入が終了した後も続けたい場合や、Game Passが適用されないPS5では、購入する方が理にかなっています。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter：Game Passか購入か？",
    lead: "XboxやPCなら、Game Passで初日からサブスク料金だけでMistfall Hunterがプレイできます。Game Pass加入が終了した後も続けたい場合や、Game Passが適用されないPS5では、購入する方が理にかなっています。",
    sections: [
      { heading: "Xbox/PCのGame Pass", paragraphs: ["Game Passなら追加購入なしで初日からプレイできます。"] },
      { heading: "購入が理にかなう場合", paragraphs: ["長く遊び続けたい場合や、Game Passが使えないPS5では購入がおすすめです。"] },
    ], related: [],
  },
  {
    slug: 'classes-overview-2026', title: "Mistfall Hunter クラス概要（2026）",
    description: "Mistfall Hunterは6クラスでスタートします：Mercenary（近接アタッカー）、Sorcerer（遠距離魔法）、Blackarrow（遠距離精密攻撃）、Shadowstrix（ステルスとバースト）、Seer（サポート）、Withered Knight（パリィ持ちの重量近接）。それぞれ単一の固定キットではなく複数の武器スタンスを持ちます。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter クラス概要",
    lead: "Mistfall Hunterは6クラスでスタートします：Mercenary（近接アタッカー）、Sorcerer（遠距離魔法）、Blackarrow（遠距離精密攻撃）、Shadowstrix（ステルスとバースト）、Seer（サポート）、Withered Knight（パリィ持ちの重量近接）。それぞれ単一の固定キットではなく複数の武器スタンスを持ちます。",
    sections: [
      { heading: "6クラスの概要", paragraphs: ["Mercenary、Sorcerer、Blackarrow、Shadowstrix、Seer、Withered Knight——それぞれ複数の武器スタンスを持ちます。"] },
      { heading: "固定された役割はない", paragraphs: ["各クラスは単一のプレイスタイルではなく、複数の武器スタンスを提供します。"] },
    ], related: [],
  },
  {
    slug: 'classes-ranked-for-launch', title: "Mistfall Hunter 発売時点のクラス評価",
    description: "実際のバランスデータがない状態では、生の火力より役割の明確さと初心者への優しさが最も安全な評価基準です。役割ごとの内訳はベストビギナークラスガイドを参照してください。実際のTier表は発売後のデータで変わることが予想されます。",
    eyebrow: 'ガイド', h1: "Mistfall Hunter 発売時点のクラス評価",
    lead: "実際のバランスデータがない状態では、生の火力より役割の明確さと初心者への優しさが最も安全な評価基準です。役割ごとの内訳はベストビギナークラスガイドを参照してください。実際のTier表は発売後のデータで変わることが予想されます。",
    sections: [
      { heading: "明確さが火力より重要", paragraphs: ["役割の明確さと初心者への優しさは、生の火力よりも安全な評価基準です。"] },
      { heading: "Tier表は変わる", paragraphs: ["実際のTier表は、発売後のデータが揃うにつれて変化します。"] },
    ], related: [],
  },
  {
    slug: 'classes-for-squads', title: "Mistfall Hunter スクワッド最強クラス",
    description: "スクワッドでは仲間が弱点をカバーできるため、クラスはより尖った特化が可能です。前衛の圧力、遠距離コントロール、サポートの組み合わせは、同じ役割を3人重ねるより優れていることが多いです。",
    eyebrow: 'ガイド', h1: "スクワッド最強クラス",
    lead: "スクワッドでは仲間が弱点をカバーできるため、クラスはより尖った特化が可能です。前衛の圧力、遠距離コントロール、サポートの組み合わせは、同じ役割を3人重ねるより優れていることが多いです。",
    sections: [
      { heading: "より尖った特化が可能", paragraphs: ["仲間が弱点をカバーできるチームでは、クラスをより尖った形で特化できます。"] },
      { heading: "適切な組み合わせ", paragraphs: ["前衛・遠距離コントロール・サポートの組み合わせは、同じ役割の重複より優れています。"] },
    ], related: [],
  },
  {
    slug: 'classes-for-beginners-2026', title: "Mistfall Hunter 初心者最強クラス（2026）",
    description: "新規プレイヤーには、ミスに寛容なクラスが最適です——明確な防御手段とシンプルな勝ち筋は、まだ学んでいない高難度キットより優れています。",
    eyebrow: 'ガイド', h1: "初心者最強クラス",
    lead: "新規プレイヤーには、ミスに寛容なクラスが最適です——明確な防御手段とシンプルな勝ち筋は、まだ学んでいない高難度キットより優れています。",
    sections: [
      { heading: "ミスに寛容なクラスを", paragraphs: ["高難度キットより、ミスに寛容で明確な防御手段を持つクラスを選びましょう。"] },
      { heading: "まずはシンプルさ", paragraphs: ["入門時は高いダメージ潜在力より、明確な防御手段の方が重要です。"] },
    ], related: [],
  },
  {
    slug: 'best-route-for-beginners', title: "Mistfall Hunter 初心者向けベストルート",
    description: "最も安全な初心者ルートはマップの外周にとどまり、Mist Lordの戦場を避け、追加の戦利品より先にSoul of Returnを見つけることを優先します。",
    eyebrow: 'ガイド', h1: "初心者向けベストルート",
    lead: "最も安全な初心者ルートはマップの外周にとどまり、Mist Lordの戦場を避け、追加の戦利品より先にSoul of Returnを見つけることを優先します。",
    sections: [
      { heading: "短いルートで早めの脱出", paragraphs: ["安価な装備で短く静かなルートを練習してから、さらに踏み込みましょう。"] },
      { heading: "注意点", paragraphs: ["出口を把握するまでボスルートを避けるのが、入門時の最も安全なやり方です。"] },
    ], related: [],
  },
  {
    slug: 'safe-loot-route-guide', title: "Mistfall Hunter 安全な戦利品ルート",
    description: "安全な戦利品ルートは短く静かなループを繰り返し、バッグがリスクに見合う価値になったら止め、もう一つのコンテナより明確な出口を優先します。",
    eyebrow: 'ガイド', h1: "安全な戦利品ルート",
    lead: "安全な戦利品ルートは短く静かなループを繰り返し、バッグがリスクに見合う価値になったら止め、もう一つのコンテナより明確な出口を優先します。",
    sections: [
      { heading: "停止ルール付きの反復ループ", paragraphs: ["いつ止めるかを明確に決めた、短く反復可能なルートを使いましょう。"] },
      { heading: "注意点", paragraphs: ["戦利品ランを気づかぬうちにボスランに変えてしまうのが最もよくある失敗です。"] },
    ], related: [],
  },
  {
    slug: 'high-risk-high-reward-route', title: "Mistfall Hunter ハイリスク・ハイリターンルート",
    description: "ハイリスクルートはDivine AnchorやMist Lordの戦場などボス隣接エリアを通り、戦利品は良いものの、PvPの往来とエリート敵がはるかに危険です——基本の脱出ループに慣れるまでは推奨されません。",
    eyebrow: 'ガイド', h1: "ハイリスク・ハイリターンルート",
    lead: "ハイリスクルートはDivine AnchorやMist Lordの戦場などボス隣接エリアを通り、戦利品は良いものの、PvPの往来とエリート敵がはるかに危険です——基本の脱出ループに慣れるまでは推奨されません。",
    sections: [
      { heading: "良い戦利品、高いリスク", paragraphs: ["ボス隣接エリアは戦利品が良い分、PvPとエリート敵のリスクが大幅に高くなります。"] },
      { heading: "注意点", paragraphs: ["このルートは完全な初心者向けではありません——まず基本ループを習得しましょう。"] },
    ], related: [],
  },
  {
    slug: 'duo-route-guide', title: "Mistfall Hunter デュオルートガイド",
    description: "2人ルートは、1人が圧力と戦利品回収を担当し、もう1人が角度を見張り脱出を援護する時に最もうまくいきます——役割分担は同じ場所を2人で漁るより優れています。",
    eyebrow: 'ガイド', h1: "デュオルートガイド",
    lead: "2人ルートは、1人が圧力と戦利品回収を担当し、もう1人が角度を見張り脱出を援護する時に最もうまくいきます——役割分担は同じ場所を2人で漁るより優れています。",
    sections: [
      { heading: "役割を分担する", paragraphs: ["1人が圧力と戦利品回収、もう1人が角度の見張りと脱出援護を担当しましょう。"] },
      { heading: "注意点", paragraphs: ["打ち合いに負けるほど離れすぎるのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'trio-route-guide', title: "Mistfall Hunter トリオルートガイド",
    description: "3人ルートは明確な役割分担の恩恵を受けます：前衛1人、遠距離またはコントロール1人、サポートまたは見張り1人が、戦闘後にバラバラにならず一緒にリセットします。",
    eyebrow: 'ガイド', h1: "トリオルートガイド",
    lead: "3人ルートは明確な役割分担の恩恵を受けます：前衛1人、遠距離またはコントロール1人、サポートまたは見張り1人が、戦闘後にバラバラにならず一緒にリセットします。",
    sections: [
      { heading: "明確な役割分担", paragraphs: ["前衛、遠距離コントロール、サポート——各役割を即興ではなく明確に割り当てましょう。"] },
      { heading: "注意点", paragraphs: ["3人全員が漁って誰も角度を見張らないと危険です。"] },
    ], related: [],
  },
  {
    slug: 'rat-route-guide', title: "Mistfall Hunter ステルスルートガイド",
    description: "ステルス重視のルートは戦闘を完全に避け、静かな移動と人が少ない戦利品にとどまり、大きなバッグを狙うより早めに脱出します。",
    eyebrow: 'ガイド', h1: "ステルスルートガイド",
    lead: "ステルス重視のルートは戦闘を完全に避け、静かな移動と人が少ない戦利品にとどまり、大きなバッグを狙うより早めに脱出します。",
    sections: [
      { heading: "静かな移動、早めの脱出", paragraphs: ["戦闘を完全に避け、静かな移動と人が少ない戦利品にとどまりましょう。"] },
      { heading: "注意点", paragraphs: ["ステルスルートを長居する言い訳にしないようにしましょう。"] },
    ], related: [],
  },
  {
    slug: 'boss-rush-route-guide', title: "Mistfall Hunter ボスラッシュルートガイド",
    description: "ボス重視のルートは戦闘を唯一の目標として扱います：まず戦場を偵察し、十分な物資を持ち込み、戦闘前に脱出ルートを計画しましょう（戦闘後ではなく）。",
    eyebrow: 'ガイド', h1: "ボスラッシュルートガイド",
    lead: "ボス重視のルートは戦闘を唯一の目標として扱います：まず戦場を偵察し、十分な物資を持ち込み、戦闘前に脱出ルートを計画しましょう（戦闘後ではなく）。",
    sections: [
      { heading: "一つの目標、一つの計画", paragraphs: ["まず戦場を偵察し、戦闘に入る前に脱出を計画しましょう。"] },
      { heading: "注意点", paragraphs: ["十分な物資や出口の知識なしにボスラッシュに挑むのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'extraction-camping-counter-guide', title: "Mistfall Hunter 脱出地点待ち伏せ対策",
    description: "脱出地点が待ち伏せされている場合、別の角度からアプローチする、待ち伏せしている相手の位置を音で確認する、あるいは物陰から様子を見るなど、まっすぐ突っ込まないようにしましょう。",
    eyebrow: 'ガイド', h1: "脱出地点待ち伏せ対策",
    lead: "脱出地点が待ち伏せされている場合、別の角度からアプローチする、待ち伏せしている相手の位置を音で確認する、あるいは物陰から様子を見るなど、まっすぐ突っ込まないようにしましょう。",
    sections: [
      { heading: "角度を変える・待つ・聞く", paragraphs: ["別の角度からアプローチするか、物陰から待ち伏せ相手をやり過ごしましょう。"] },
      { heading: "注意点", paragraphs: ["最終脱出にまっすぐ突っ込むのは特に危険です。"] },
    ], related: [],
  },
  {
    slug: 'ambush-guide', title: "Mistfall Hunter 待ち伏せガイド",
    description: "良い待ち伏せは音の規律と明確な角度に基づきます——静かにして、相手が戦利品回収や他の戦闘に集中するのを待ち、クールダウンを整えて素早いフォロープランで攻撃しましょう。",
    eyebrow: 'ガイド', h1: "待ち伏せガイド",
    lead: "良い待ち伏せは音の規律と明確な角度に基づきます——静かにして、相手が戦利品回収や他の戦闘に集中するのを待ち、クールダウンを整えて素早いフォロープランで攻撃しましょう。",
    sections: [
      { heading: "音と角度", paragraphs: ["静かにして、攻撃する適切な瞬間を待ちましょう。"] },
      { heading: "注意点", paragraphs: ["脱出地点から離れすぎた待ち伏せは危険です。"] },
    ], related: [],
  },
  {
    slug: 'escape-after-kill-guide', title: "Mistfall Hunter キル後の離脱",
    description: "キルの後、すぐに漁りたい衝動を抑えましょう——まず耳を澄まし、それから素早く漁り、クールダウンをリセットして、音に引き寄せられた横取りが来る前にその場を離れましょう。",
    eyebrow: 'ガイド', h1: "キル後の離脱",
    lead: "キルの後、すぐに漁りたい衝動を抑えましょう——まず耳を澄まし、それから素早く漁り、クールダウンをリセットして、音に引き寄せられた横取りが来る前にその場を離れましょう。",
    sections: [
      { heading: "聞く・素早く漁う・離れる", paragraphs: ["まず耳を澄まし、素早く漁い、次の脅威が来る前にその場を離れましょう。"] },
      { heading: "注意点", paragraphs: ["遮蔽物やクールダウンなしですぐに漁るのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'best-affixes-for-solo', title: "Mistfall Hunter ソロ最強Affix",
    description: "ソロビルドは生存とモビリティのAffixから最も恩恵を受けます——仲間が悪い状況をカバーしてくれないため、純粋なダメージより継戦力と逃走手段が重要です。",
    eyebrow: 'ガイド', h1: "ソロ最強Affix",
    lead: "ソロビルドは生存とモビリティのAffixから最も恩恵を受けます——仲間が悪い状況をカバーしてくれないため、純粋なダメージより継戦力と逃走手段が重要です。",
    sections: [
      { heading: "ダメージより生存", paragraphs: ["ソロでは純粋なダメージより継戦力と逃走手段が重要です。"] },
      { heading: "注意点", paragraphs: ["リセットに役立たない純粋なダメージ数値は失敗のもとです。"] },
    ], related: [],
  },
  {
    slug: 'best-affixes-for-pvp', title: "Mistfall Hunter PvP最強Affix",
    description: "PvP向けAffixはバーストダメージ、スタミナ効率、防御の閾値を優先します。特定のロールを最適と決めつける前に、正確な数値は正式版での検証が必要です。",
    eyebrow: 'ガイド', h1: "PvP最強Affix",
    lead: "PvP向けAffixはバーストダメージ、スタミナ効率、防御の閾値を優先します。特定のロールを最適と決めつける前に、正確な数値は正式版での検証が必要です。",
    sections: [
      { heading: "バーストとスタミナ", paragraphs: ["バーストダメージ、スタミナ効率、防御の閾値が中心です。"] },
      { heading: "注意点", paragraphs: ["実際のバランスが確認される前に数値をランク付けするのは時期尚早です。"] },
    ], related: [],
  },
  {
    slug: 'best-affixes-for-pve', title: "Mistfall Hunter PvE最強Affix",
    description: "PvE向けAffixはバーストより持続ダメージと回復を優先します。ボス戦は一撃の大ダメージより継戦力を評価するためです。",
    eyebrow: 'ガイド', h1: "PvE最強Affix",
    lead: "PvE向けAffixはバーストより持続ダメージと回復を優先します。ボス戦は一撃の大ダメージより継戦力を評価するためです。",
    sections: [
      { heading: "バーストより持続ダメージ", paragraphs: ["ボス戦は一撃より継戦力を重視しましょう。"] },
      { heading: "注意点", paragraphs: ["退路のないPvEの欲張りは危険です。"] },
    ], related: [],
  },
  {
    slug: 'best-affixes-for-bosses', title: "Mistfall Hunter ボス最強Affix",
    description: "ボス向け装備は、安全で持続的なダメージと、ボス撃破後によく続く脱出戦に勝つための十分な生存力のバランスを取るべきです。",
    eyebrow: 'ガイド', h1: "ボス最強Affix",
    lead: "ボス向け装備は、安全で持続的なダメージと、ボス撃破後によく続く脱出戦に勝つための十分な生存力のバランスを取るべきです。",
    sections: [
      { heading: "ダメージと生存のバランス", paragraphs: ["安全なダメージと、ボス後の戦闘に勝てる十分な生存力をバランスさせましょう。"] },
      { heading: "注意点", paragraphs: ["ボスに勝っても脱出戦に負ける装備は失敗です。"] },
    ], related: [],
  },
  {
    slug: 'gear-rarity-guide', title: "Mistfall Hunter 装備レア度ガイド",
    description: "装備のレア度は生の強さとAffixの質の両方を反映します。ビルドを決定づけるAffixを持つ低レア度アイテムが、汎用ロールの高レア度アイテムを上回ることもあります。",
    eyebrow: 'ガイド', h1: "装備レア度ガイド",
    lead: "装備のレア度は生の強さとAffixの質の両方を反映します。ビルドを決定づけるAffixを持つ低レア度アイテムが、汎用ロールの高レア度アイテムを上回ることもあります。",
    sections: [
      { heading: "レア度がすべてではない", paragraphs: ["ビルドを決定づけるAffixは、単なるレア度より重要な場合があります。"] },
      { heading: "注意点", paragraphs: ["検証なしに最終的なレア度階層を決めつけるのは失敗です。"] },
    ], related: [],
  },
  {
    slug: 'weapon-tier-list', title: "Mistfall Hunter 武器Tierリスト",
    description: "実際のバランスデータがない状態では、発売週の安全な評価基準は純粋なダメージより役割適性と安全性です——発売前の武器Tierリストは、テストされるまで暫定的なものとして扱ってください。",
    eyebrow: 'ガイド', h1: "武器Tierリスト",
    lead: "実際のバランスデータがない状態では、発売週の安全な評価基準は純粋なダメージより役割適性と安全性です——発売前の武器Tierリストは、テストされるまで暫定的なものとして扱ってください。",
    sections: [
      { heading: "ダメージより役割適性", paragraphs: ["役割適性と安全性は、純粋なダメージより安全な評価基準です。"] },
      { heading: "注意点", paragraphs: ["発売前のバランスで最終的なTierを断言するのは時期尚早です。"] },
    ], related: [],
  },
  {
    slug: 'armor-guide', title: "Mistfall Hunter 防具ガイド",
    description: "防具選びは生存力とモビリティのトレードオフです。悪い戦闘から離脱するのに必要なスタミナを犠牲にするなら、重装備が自動的に優れているわけではありません。",
    eyebrow: 'ガイド', h1: "防具ガイド",
    lead: "防具選びは生存力とモビリティのトレードオフです。悪い戦闘から離脱するのに必要なスタミナを犠牲にするなら、重装備が自動的に優れているわけではありません。",
    sections: [
      { heading: "生存力とモビリティ", paragraphs: ["モビリティを犠牲にするなら、重装備が自動的に優れているわけではありません。"] },
      { heading: "注意点", paragraphs: ["重い方が常に良いと思い込むのは失敗のもとです。"] },
    ], related: [],
  },
  {
    slug: 'consumables-guide', title: "Mistfall Hunter 消耗品ガイド",
    description: "有用な消耗品は回復、長いルート中の継戦力、緊急時の回復をカバーします——具体的なリストを公開する前に、正確な名称と効果は正式版での検証が必要です。",
    eyebrow: 'ガイド', h1: "消耗品ガイド",
    lead: "有用な消耗品は回復、長いルート中の継戦力、緊急時の回復をカバーします——具体的なリストを公開する前に、正確な名称と効果は正式版での検証が必要です。",
    sections: [
      { heading: "回復・継戦力・緊急対応", paragraphs: ["消耗品は回復、継戦力、緊急時の回復をカバーすべきです。"] },
      { heading: "注意点", paragraphs: ["検証なしに具体的なアイテムをリストするのは時期尚早です。"] },
    ], related: [],
  },
  {
    slug: 'crafting-guide', title: "Mistfall Hunter クラフトガイド",
    description: "クラフトは資源の貯蓄と検証済みレシピに従うことを含むと予想されます。正確なレシピと資源コストはまだ公開されておらず、推測すべきではありません。",
    eyebrow: 'ガイド', h1: "クラフトガイド",
    lead: "クラフトは資源の貯蓄と検証済みレシピに従うことを含むと予想されます。正確なレシピと資源コストはまだ公開されておらず、推測すべきではありません。",
    sections: [
      { heading: "資源貯蓄とレシピ検証", paragraphs: ["クラフトは推測ではなく、貯蓄した資源と検証済みレシピに基づきます。"] },
      { heading: "注意点", paragraphs: ["架空のレシピや入手元表は誤解を招きます。"] },
    ], related: [],
  },
  {
    slug: 'vendor-guide', title: "Mistfall Hunter 商人ガイド",
    description: "商人は購入、売却、成長価値の貯蓄をサポートすると予想されます。具体的な在庫と価格は、詳細を公開する前に正式版での確認が必要です。",
    eyebrow: 'ガイド', h1: "商人ガイド",
    lead: "商人は購入、売却、成長価値の貯蓄をサポートすると予想されます。具体的な在庫と価格は、詳細を公開する前に正式版での確認が必要です。",
    sections: [
      { heading: "購入・売却・貯蓄", paragraphs: ["商人は購入、売却、成長価値の貯蓄をサポートすると予想されます。"] },
      { heading: "注意点", paragraphs: ["発売データがない状態で商人の在庫を断言するのは時期尚早です。"] },
    ], related: [],
  },
  {
    slug: 'returner-woodling-guide', title: "Mistfall Hunter Returner Woodlingガイド",
    description: "Returner WoodlingはSoul of Returnに紐づく目標です——早めに見つけて確保することで、ランは賭けから、いつ離脱するかという制御された判断に変わります。",
    eyebrow: 'ガイド', h1: "Returner Woodlingガイド",
    lead: "Returner WoodlingはSoul of Returnに紐づく目標です——早めに見つけて確保することで、ランは賭けから、いつ離脱するかという制御された判断に変わります。",
    sections: [
      { heading: "早めに見つけて確保する", paragraphs: ["Returner Woodlingを早めに確保することで、ランが賭けではなく制御されたものになります。"] },
      { heading: "注意点", paragraphs: ["音や往来を生む目標を無害だと思い込まないようにしましょう。"] },
    ], related: [],
  },
  {
    slug: 'soul-of-return-farming', title: "Mistfall Hunter Soul of Return 稼ぎ方",
    description: "バッグがリスクを取るには重すぎる価値になる前にSoul of Returnを優先しましょう——すでに荷物を抱えた後に稼ぐのは、不要なリスク時間を増やすだけです。",
    eyebrow: 'ガイド', h1: "Soul of Return 稼ぎ方",
    lead: "バッグがリスクを取るには重すぎる価値になる前にSoul of Returnを優先しましょう——すでに荷物を抱えた後に稼ぐのは、不要なリスク時間を増やすだけです。",
    sections: [
      { heading: "先に確保してから拾う", paragraphs: ["バッグが重くなりすぎる前にSoul of Returnを確保しましょう。"] },
      { heading: "注意点", paragraphs: ["バッグがすでに価値ある状態になってから目標を稼ぐのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'gyldenblood-farming-route', title: "Mistfall Hunter Gyldenblood 稼ぎルート",
    description: "Gyldenbloodは成長に紐づく資源です。安全な稼ぎルートは、わずかな追加利益のために危険なエリアに留まるのではなく、着実に貯蓄します。",
    eyebrow: 'ガイド', h1: "Gyldenblood 稼ぎルート",
    lead: "Gyldenbloodは成長に紐づく資源です。安全な稼ぎルートは、わずかな追加利益のために危険なエリアに留まるのではなく、着実に貯蓄します。",
    sections: [
      { heading: "着実に貯蓄する", paragraphs: ["わずかな利益のために危険なエリアに留まらず、着実にGyldenbloodを貯蓄しましょう。"] },
      { heading: "注意点", paragraphs: ["架空のドロップ元やドロップ率は誤解を招きます。"] },
    ], related: [],
  },
  {
    slug: 'corroded-enemies-guide', title: "Mistfall Hunter Corroded敵ガイド",
    description: "Corroded敵は各ゾーンに共通する、霧に歪められた脅威です——戦うと時間と音を消費するので、それが引き寄せる注目に見合うかどうかで各戦闘を判断しましょう。",
    eyebrow: 'ガイド', h1: "Corroded敵ガイド",
    lead: "Corroded敵は各ゾーンに共通する、霧に歪められた脅威です——戦うと時間と音を消費するので、それが引き寄せる注目に見合うかどうかで各戦闘を判断しましょう。",
    sections: [
      { heading: "すべての戦闘に代償がある", paragraphs: ["Corroded敵との戦闘は、それが引き寄せる注目と見合うか天秤にかけましょう。"] },
      { heading: "注意点", paragraphs: ["価値の低いPvE戦闘に時間を使いすぎるのは失敗です。"] },
    ], related: [],
  },
  {
    slug: 'mist-lord-guide', title: "Mistfall Hunter Mist Lordガイド",
    description: "既知の遭遇、難易度層、報酬情報の完全な内訳は、専用のMist Lordボスページを参照してください。",
    eyebrow: 'ガイド', h1: "Mist Lordガイド",
    lead: "既知の遭遇、難易度層、報酬情報の完全な内訳は、専用のMist Lordボスページを参照してください。",
    sections: [
      { heading: "準備が重要", paragraphs: ["Mist Lordに挑む前に偵察し、ルートを計画しましょう。"] },
      { heading: "注意点", paragraphs: ["撤退やサポート計画なしにボスに挑むのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'boss-rewards-guide', title: "Mistfall Hunter ボス報酬ガイド",
    description: "確認されているボス報酬はHoly武器が中心で、それぞれ特定のマップボスに紐づき独自のゲームプレイAffixを持ちます。正確な完全な報酬テーブルはまだ正式版での検証が必要です。",
    eyebrow: 'ガイド', h1: "ボス報酬ガイド",
    lead: "確認されているボス報酬はHoly武器が中心で、それぞれ特定のマップボスに紐づき独自のゲームプレイAffixを持ちます。正確な完全な報酬テーブルはまだ正式版での検証が必要です。",
    sections: [
      { heading: "Holy武器が中心", paragraphs: ["各ボスは独自のAffixを持つユニークなHoly武器を落とします。"] },
      { heading: "注意点", paragraphs: ["検証済みドロップがない状態で報酬テーブルを公開するのは時期尚早です。"] },
    ], related: [],
  },
  {
    slug: 'boss-mechanics-guide', title: "Mistfall Hunter ボスメカニクスガイド",
    description: "ボスメカニクスは、ベータ映像からの推測ではなく、偵察と安全な初回挑戦を通じて学ぶべきです。正確なパターンは発売前にまだ変わる可能性があります。",
    eyebrow: 'ガイド', h1: "ボスメカニクスガイド",
    lead: "ボスメカニクスは、ベータ映像からの推測ではなく、偵察と安全な初回挑戦を通じて学ぶべきです。正確なパターンは発売前にまだ変わる可能性があります。",
    sections: [
      { heading: "偵察を通じて学ぶ", paragraphs: ["ベータの推測ではなく、慎重な初回挑戦を通じてボスメカニクスを学びましょう。"] },
      { heading: "注意点", paragraphs: ["実機テスト前に正確なメカニクスをリストするのは時期尚早です。"] },
    ], related: [],
  },
  {
    slug: 'pve-enemy-drops-guide', title: "Mistfall Hunter PvEドロップガイド",
    description: "PvE敵のドロップ元はまだ完全にはリスト化されていません。具体的なドロップ率の主張は、正式版で確認されるまで未検証として扱ってください。",
    eyebrow: 'ガイド', h1: "PvEドロップガイド",
    lead: "PvE敵のドロップ元はまだ完全にはリスト化されていません。具体的なドロップ率の主張は、正式版で確認されるまで未検証として扱ってください。",
    sections: [
      { heading: "まだ完全には判明していない", paragraphs: ["PvE敵のドロップ元はまだ完全には検証されていません。"] },
      { heading: "注意点", paragraphs: ["架空のドロップ率は誤解を招きます。"] },
    ], related: [],
  },
  {
    slug: 'rare-loot-guide', title: "Mistfall Hunter レア戦利品ガイド",
    description: "レアな戦利品は脱出させる価値があるものであり、そのために死ぬ価値はありません——価値あるものを見つけたら、同じランでさらに搾り取るより安全な離脱を優先しましょう。",
    eyebrow: 'ガイド', h1: "レア戦利品ガイド",
    lead: "レアな戦利品は脱出させる価値があるものであり、そのために死ぬ価値はありません——価値あるものを見つけたら、同じランでさらに搾り取るより安全な離脱を優先しましょう。",
    sections: [
      { heading: "脱出させる、死なない", paragraphs: ["価値あるものを見つけたら、安全な離脱を優先しましょう。"] },
      { heading: "注意点", paragraphs: ["ルートがすでに成功しているのにレア戦利品の後に長居するのは失敗です。"] },
    ], related: [],
  },
  {
    slug: 'loot-priority-list', title: "Mistfall Hunter 戦利品優先度リスト",
    description: "実用的な戦利品優先度は、まだ使えない汎用的な高レア度アイテムより、クラスに関連するアップグレードと成長資源を優先します。",
    eyebrow: 'ガイド', h1: "戦利品優先度リスト",
    lead: "実用的な戦利品優先度は、まだ使えない汎用的な高レア度アイテムより、クラスに関連するアップグレードと成長資源を優先します。",
    sections: [
      { heading: "レア度よりクラス適性", paragraphs: ["汎用的なレアアイテムより、クラスに関連するアップグレードと成長資源を優先しましょう。"] },
      { heading: "注意点", paragraphs: ["経済が検証される前に万能リストを作るのは時期尚早です。"] },
    ], related: [],
  },
  {
    slug: 'best-route-for-beginners', title: "Mistfall Hunter 初心者向けベストルート",
    description: "最も安全な初心者ルートはマップの外周にとどまり、Mist Lordの戦場を避け、追加の戦利品より先にSoul of Returnを見つけることを優先します。",
    eyebrow: 'ガイド', h1: "初心者向けベストルート",
    lead: "最も安全な初心者ルートはマップの外周にとどまり、Mist Lordの戦場を避け、追加の戦利品より先にSoul of Returnを見つけることを優先します。",
    sections: [
      { heading: "短いルートで早めの脱出", paragraphs: ["安価な装備で短く静かなルートを練習してから、さらに踏み込みましょう。"] },
      { heading: "注意点", paragraphs: ["出口を把握するまでボスルートを避けるのが、入門時の最も安全なやり方です。"] },
    ], related: [],
  },
  {
    slug: 'safe-loot-route-guide', title: "Mistfall Hunter 安全な戦利品ルート",
    description: "安全な戦利品ルートは短く静かなループを繰り返し、バッグがリスクに見合う価値になったら止め、もう一つのコンテナより明確な出口を優先します。",
    eyebrow: 'ガイド', h1: "安全な戦利品ルート",
    lead: "安全な戦利品ルートは短く静かなループを繰り返し、バッグがリスクに見合う価値になったら止め、もう一つのコンテナより明確な出口を優先します。",
    sections: [
      { heading: "停止ルール付きの反復ループ", paragraphs: ["いつ止めるかを明確に決めた、短く反復可能なルートを使いましょう。"] },
      { heading: "注意点", paragraphs: ["戦利品ランを気づかぬうちにボスランに変えてしまうのが最もよくある失敗です。"] },
    ], related: [],
  },
  {
    slug: 'high-risk-high-reward-route', title: "Mistfall Hunter ハイリスク・ハイリターンルート",
    description: "ハイリスクルートはDivine AnchorやMist Lordの戦場などボス隣接エリアを通り、戦利品は良いものの、PvPの往来とエリート敵がはるかに危険です——基本の脱出ループに慣れるまでは推奨されません。",
    eyebrow: 'ガイド', h1: "ハイリスク・ハイリターンルート",
    lead: "ハイリスクルートはDivine AnchorやMist Lordの戦場などボス隣接エリアを通り、戦利品は良いものの、PvPの往来とエリート敵がはるかに危険です——基本の脱出ループに慣れるまでは推奨されません。",
    sections: [
      { heading: "良い戦利品、高いリスク", paragraphs: ["ボス隣接エリアは戦利品が良い分、PvPとエリート敵のリスクが大幅に高くなります。"] },
      { heading: "注意点", paragraphs: ["このルートは完全な初心者向けではありません——まず基本ループを習得しましょう。"] },
    ], related: [],
  },
  {
    slug: 'duo-route-guide', title: "Mistfall Hunter デュオルートガイド",
    description: "2人ルートは、1人が圧力と戦利品回収を担当し、もう1人が角度を見張り脱出を援護する時に最もうまくいきます——役割分担は同じ場所を2人で漁るより優れています。",
    eyebrow: 'ガイド', h1: "デュオルートガイド",
    lead: "2人ルートは、1人が圧力と戦利品回収を担当し、もう1人が角度を見張り脱出を援護する時に最もうまくいきます——役割分担は同じ場所を2人で漁るより優れています。",
    sections: [
      { heading: "役割を分担する", paragraphs: ["1人が圧力と戦利品回収、もう1人が角度の見張りと脱出援護を担当しましょう。"] },
      { heading: "注意点", paragraphs: ["打ち合いに負けるほど離れすぎるのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'trio-route-guide', title: "Mistfall Hunter トリオルートガイド",
    description: "3人ルートは明確な役割分担の恩恵を受けます：前衛1人、遠距離またはコントロール1人、サポートまたは見張り1人が、戦闘後にバラバラにならず一緒にリセットします。",
    eyebrow: 'ガイド', h1: "トリオルートガイド",
    lead: "3人ルートは明確な役割分担の恩恵を受けます：前衛1人、遠距離またはコントロール1人、サポートまたは見張り1人が、戦闘後にバラバラにならず一緒にリセットします。",
    sections: [
      { heading: "明確な役割分担", paragraphs: ["前衛、遠距離コントロール、サポート——各役割を即興ではなく明確に割り当てましょう。"] },
      { heading: "注意点", paragraphs: ["3人全員が漁って誰も角度を見張らないと危険です。"] },
    ], related: [],
  },
  {
    slug: 'rat-route-guide', title: "Mistfall Hunter ステルスルートガイド",
    description: "ステルス重視のルートは戦闘を完全に避け、静かな移動と人が少ない戦利品にとどまり、大きなバッグを狙うより早めに脱出します。",
    eyebrow: 'ガイド', h1: "ステルスルートガイド",
    lead: "ステルス重視のルートは戦闘を完全に避け、静かな移動と人が少ない戦利品にとどまり、大きなバッグを狙うより早めに脱出します。",
    sections: [
      { heading: "静かな移動、早めの脱出", paragraphs: ["戦闘を完全に避け、静かな移動と人が少ない戦利品にとどまりましょう。"] },
      { heading: "注意点", paragraphs: ["ステルスルートを長居する言い訳にしないようにしましょう。"] },
    ], related: [],
  },
  {
    slug: 'boss-rush-route-guide', title: "Mistfall Hunter ボスラッシュルートガイド",
    description: "ボス重視のルートは戦闘を唯一の目標として扱います：まず戦場を偵察し、十分な物資を持ち込み、戦闘前に脱出ルートを計画しましょう（戦闘後ではなく）。",
    eyebrow: 'ガイド', h1: "ボスラッシュルートガイド",
    lead: "ボス重視のルートは戦闘を唯一の目標として扱います：まず戦場を偵察し、十分な物資を持ち込み、戦闘前に脱出ルートを計画しましょう（戦闘後ではなく）。",
    sections: [
      { heading: "一つの目標、一つの計画", paragraphs: ["まず戦場を偵察し、戦闘に入る前に脱出を計画しましょう。"] },
      { heading: "注意点", paragraphs: ["十分な物資や出口の知識なしにボスラッシュに挑むのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'extraction-camping-counter-guide', title: "Mistfall Hunter 脱出地点待ち伏せ対策",
    description: "脱出地点が待ち伏せされている場合、別の角度からアプローチする、待ち伏せしている相手の位置を音で確認する、あるいは物陰から様子を見るなど、まっすぐ突っ込まないようにしましょう。",
    eyebrow: 'ガイド', h1: "脱出地点待ち伏せ対策",
    lead: "脱出地点が待ち伏せされている場合、別の角度からアプローチする、待ち伏せしている相手の位置を音で確認する、あるいは物陰から様子を見るなど、まっすぐ突っ込まないようにしましょう。",
    sections: [
      { heading: "角度を変える・待つ・聞く", paragraphs: ["別の角度からアプローチするか、物陰から待ち伏せ相手をやり過ごしましょう。"] },
      { heading: "注意点", paragraphs: ["最終脱出にまっすぐ突っ込むのは特に危険です。"] },
    ], related: [],
  },
  {
    slug: 'ambush-guide', title: "Mistfall Hunter 待ち伏せガイド",
    description: "良い待ち伏せは音の規律と明確な角度に基づきます——静かにして、相手が戦利品回収や他の戦闘に集中するのを待ち、クールダウンを整えて素早いフォロープランで攻撃しましょう。",
    eyebrow: 'ガイド', h1: "待ち伏せガイド",
    lead: "良い待ち伏せは音の規律と明確な角度に基づきます——静かにして、相手が戦利品回収や他の戦闘に集中するのを待ち、クールダウンを整えて素早いフォロープランで攻撃しましょう。",
    sections: [
      { heading: "音と角度", paragraphs: ["静かにして、攻撃する適切な瞬間を待ちましょう。"] },
      { heading: "注意点", paragraphs: ["脱出地点から離れすぎた待ち伏せは危険です。"] },
    ], related: [],
  },
  {
    slug: 'escape-after-kill-guide', title: "Mistfall Hunter キル後の離脱",
    description: "キルの後、すぐに漁りたい衝動を抑えましょう——まず耳を澄まし、それから素早く漁り、クールダウンをリセットして、音に引き寄せられた横取りが来る前にその場を離れましょう。",
    eyebrow: 'ガイド', h1: "キル後の離脱",
    lead: "キルの後、すぐに漁りたい衝動を抑えましょう——まず耳を澄まし、それから素早く漁り、クールダウンをリセットして、音に引き寄せられた横取りが来る前にその場を離れましょう。",
    sections: [
      { heading: "聞く・素早く漁う・離れる", paragraphs: ["まず耳を澄まし、素早く漁い、次の脅威が来る前にその場を離れましょう。"] },
      { heading: "注意点", paragraphs: ["遮蔽物やクールダウンなしですぐに漁るのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'best-affixes-for-solo', title: "Mistfall Hunter ソロ最強Affix",
    description: "ソロビルドは生存とモビリティのAffixから最も恩恵を受けます——仲間が悪い状況をカバーしてくれないため、純粋なダメージより継戦力と逃走手段が重要です。",
    eyebrow: 'ガイド', h1: "ソロ最強Affix",
    lead: "ソロビルドは生存とモビリティのAffixから最も恩恵を受けます——仲間が悪い状況をカバーしてくれないため、純粋なダメージより継戦力と逃走手段が重要です。",
    sections: [
      { heading: "ダメージより生存", paragraphs: ["ソロでは純粋なダメージより継戦力と逃走手段が重要です。"] },
      { heading: "注意点", paragraphs: ["リセットに役立たない純粋なダメージ数値は失敗のもとです。"] },
    ], related: [],
  },
  {
    slug: 'best-affixes-for-pvp', title: "Mistfall Hunter PvP最強Affix",
    description: "PvP向けAffixはバーストダメージ、スタミナ効率、防御の閾値を優先します。特定のロールを最適と決めつける前に、正確な数値は正式版での検証が必要です。",
    eyebrow: 'ガイド', h1: "PvP最強Affix",
    lead: "PvP向けAffixはバーストダメージ、スタミナ効率、防御の閾値を優先します。特定のロールを最適と決めつける前に、正確な数値は正式版での検証が必要です。",
    sections: [
      { heading: "バーストとスタミナ", paragraphs: ["バーストダメージ、スタミナ効率、防御の閾値が中心です。"] },
      { heading: "注意点", paragraphs: ["実際のバランスが確認される前に数値をランク付けするのは時期尚早です。"] },
    ], related: [],
  },
  {
    slug: 'best-affixes-for-pve', title: "Mistfall Hunter PvE最強Affix",
    description: "PvE向けAffixはバーストより持続ダメージと回復を優先します。ボス戦は一撃の大ダメージより継戦力を評価するためです。",
    eyebrow: 'ガイド', h1: "PvE最強Affix",
    lead: "PvE向けAffixはバーストより持続ダメージと回復を優先します。ボス戦は一撃の大ダメージより継戦力を評価するためです。",
    sections: [
      { heading: "バーストより持続ダメージ", paragraphs: ["ボス戦は一撃より継戦力を重視しましょう。"] },
      { heading: "注意点", paragraphs: ["退路のないPvEの欲張りは危険です。"] },
    ], related: [],
  },
  {
    slug: 'best-affixes-for-bosses', title: "Mistfall Hunter ボス最強Affix",
    description: "ボス向け装備は、安全で持続的なダメージと、ボス撃破後によく続く脱出戦に勝つための十分な生存力のバランスを取るべきです。",
    eyebrow: 'ガイド', h1: "ボス最強Affix",
    lead: "ボス向け装備は、安全で持続的なダメージと、ボス撃破後によく続く脱出戦に勝つための十分な生存力のバランスを取るべきです。",
    sections: [
      { heading: "ダメージと生存のバランス", paragraphs: ["安全なダメージと、ボス後の戦闘に勝てる十分な生存力をバランスさせましょう。"] },
      { heading: "注意点", paragraphs: ["ボスに勝っても脱出戦に負ける装備は失敗です。"] },
    ], related: [],
  },
  {
    slug: 'gear-rarity-guide', title: "Mistfall Hunter 装備レア度ガイド",
    description: "装備のレア度は生の強さとAffixの質の両方を反映します。ビルドを決定づけるAffixを持つ低レア度アイテムが、汎用ロールの高レア度アイテムを上回ることもあります。",
    eyebrow: 'ガイド', h1: "装備レア度ガイド",
    lead: "装備のレア度は生の強さとAffixの質の両方を反映します。ビルドを決定づけるAffixを持つ低レア度アイテムが、汎用ロールの高レア度アイテムを上回ることもあります。",
    sections: [
      { heading: "レア度がすべてではない", paragraphs: ["ビルドを決定づけるAffixは、単なるレア度より重要な場合があります。"] },
      { heading: "注意点", paragraphs: ["検証なしに最終的なレア度階層を決めつけるのは失敗です。"] },
    ], related: [],
  },
  {
    slug: 'weapon-tier-list', title: "Mistfall Hunter 武器Tierリスト",
    description: "実際のバランスデータがない状態では、発売週の安全な評価基準は純粋なダメージより役割適性と安全性です——発売前の武器Tierリストは、テストされるまで暫定的なものとして扱ってください。",
    eyebrow: 'ガイド', h1: "武器Tierリスト",
    lead: "実際のバランスデータがない状態では、発売週の安全な評価基準は純粋なダメージより役割適性と安全性です——発売前の武器Tierリストは、テストされるまで暫定的なものとして扱ってください。",
    sections: [
      { heading: "ダメージより役割適性", paragraphs: ["役割適性と安全性は、純粋なダメージより安全な評価基準です。"] },
      { heading: "注意点", paragraphs: ["発売前のバランスで最終的なTierを断言するのは時期尚早です。"] },
    ], related: [],
  },
  {
    slug: 'armor-guide', title: "Mistfall Hunter 防具ガイド",
    description: "防具選びは生存力とモビリティのトレードオフです。悪い戦闘から離脱するのに必要なスタミナを犠牲にするなら、重装備が自動的に優れているわけではありません。",
    eyebrow: 'ガイド', h1: "防具ガイド",
    lead: "防具選びは生存力とモビリティのトレードオフです。悪い戦闘から離脱するのに必要なスタミナを犠牲にするなら、重装備が自動的に優れているわけではありません。",
    sections: [
      { heading: "生存力とモビリティ", paragraphs: ["モビリティを犠牲にするなら、重装備が自動的に優れているわけではありません。"] },
      { heading: "注意点", paragraphs: ["重い方が常に良いと思い込むのは失敗のもとです。"] },
    ], related: [],
  },
  {
    slug: 'consumables-guide', title: "Mistfall Hunter 消耗品ガイド",
    description: "有用な消耗品は回復、長いルート中の継戦力、緊急時の回復をカバーします——具体的なリストを公開する前に、正確な名称と効果は正式版での検証が必要です。",
    eyebrow: 'ガイド', h1: "消耗品ガイド",
    lead: "有用な消耗品は回復、長いルート中の継戦力、緊急時の回復をカバーします——具体的なリストを公開する前に、正確な名称と効果は正式版での検証が必要です。",
    sections: [
      { heading: "回復・継戦力・緊急対応", paragraphs: ["消耗品は回復、継戦力、緊急時の回復をカバーすべきです。"] },
      { heading: "注意点", paragraphs: ["検証なしに具体的なアイテムをリストするのは時期尚早です。"] },
    ], related: [],
  },
  {
    slug: 'crafting-guide', title: "Mistfall Hunter クラフトガイド",
    description: "クラフトは資源の貯蓄と検証済みレシピに従うことを含むと予想されます。正確なレシピと資源コストはまだ公開されておらず、推測すべきではありません。",
    eyebrow: 'ガイド', h1: "クラフトガイド",
    lead: "クラフトは資源の貯蓄と検証済みレシピに従うことを含むと予想されます。正確なレシピと資源コストはまだ公開されておらず、推測すべきではありません。",
    sections: [
      { heading: "資源貯蓄とレシピ検証", paragraphs: ["クラフトは推測ではなく、貯蓄した資源と検証済みレシピに基づきます。"] },
      { heading: "注意点", paragraphs: ["架空のレシピや入手元表は誤解を招きます。"] },
    ], related: [],
  },
  {
    slug: 'vendor-guide', title: "Mistfall Hunter 商人ガイド",
    description: "商人は購入、売却、成長価値の貯蓄をサポートすると予想されます。具体的な在庫と価格は、詳細を公開する前に正式版での確認が必要です。",
    eyebrow: 'ガイド', h1: "商人ガイド",
    lead: "商人は購入、売却、成長価値の貯蓄をサポートすると予想されます。具体的な在庫と価格は、詳細を公開する前に正式版での確認が必要です。",
    sections: [
      { heading: "購入・売却・貯蓄", paragraphs: ["商人は購入、売却、成長価値の貯蓄をサポートすると予想されます。"] },
      { heading: "注意点", paragraphs: ["発売データがない状態で商人の在庫を断言するのは時期尚早です。"] },
    ], related: [],
  },
  {
    slug: 'returner-woodling-guide', title: "Mistfall Hunter Returner Woodlingガイド",
    description: "Returner WoodlingはSoul of Returnに紐づく目標です——早めに見つけて確保することで、ランは賭けから、いつ離脱するかという制御された判断に変わります。",
    eyebrow: 'ガイド', h1: "Returner Woodlingガイド",
    lead: "Returner WoodlingはSoul of Returnに紐づく目標です——早めに見つけて確保することで、ランは賭けから、いつ離脱するかという制御された判断に変わります。",
    sections: [
      { heading: "早めに見つけて確保する", paragraphs: ["Returner Woodlingを早めに確保することで、ランが賭けではなく制御されたものになります。"] },
      { heading: "注意点", paragraphs: ["音や往来を生む目標を無害だと思い込まないようにしましょう。"] },
    ], related: [],
  },
  {
    slug: 'soul-of-return-farming', title: "Mistfall Hunter Soul of Return 稼ぎ方",
    description: "バッグがリスクを取るには重すぎる価値になる前にSoul of Returnを優先しましょう——すでに荷物を抱えた後に稼ぐのは、不要なリスク時間を増やすだけです。",
    eyebrow: 'ガイド', h1: "Soul of Return 稼ぎ方",
    lead: "バッグがリスクを取るには重すぎる価値になる前にSoul of Returnを優先しましょう——すでに荷物を抱えた後に稼ぐのは、不要なリスク時間を増やすだけです。",
    sections: [
      { heading: "先に確保してから拾う", paragraphs: ["バッグが重くなりすぎる前にSoul of Returnを確保しましょう。"] },
      { heading: "注意点", paragraphs: ["バッグがすでに価値ある状態になってから目標を稼ぐのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'gyldenblood-farming-route', title: "Mistfall Hunter Gyldenblood 稼ぎルート",
    description: "Gyldenbloodは成長に紐づく資源です。安全な稼ぎルートは、わずかな追加利益のために危険なエリアに留まるのではなく、着実に貯蓄します。",
    eyebrow: 'ガイド', h1: "Gyldenblood 稼ぎルート",
    lead: "Gyldenbloodは成長に紐づく資源です。安全な稼ぎルートは、わずかな追加利益のために危険なエリアに留まるのではなく、着実に貯蓄します。",
    sections: [
      { heading: "着実に貯蓄する", paragraphs: ["わずかな利益のために危険なエリアに留まらず、着実にGyldenbloodを貯蓄しましょう。"] },
      { heading: "注意点", paragraphs: ["架空のドロップ元やドロップ率は誤解を招きます。"] },
    ], related: [],
  },
  {
    slug: 'corroded-enemies-guide', title: "Mistfall Hunter Corroded敵ガイド",
    description: "Corroded敵は各ゾーンに共通する、霧に歪められた脅威です——戦うと時間と音を消費するので、それが引き寄せる注目に見合うかどうかで各戦闘を判断しましょう。",
    eyebrow: 'ガイド', h1: "Corroded敵ガイド",
    lead: "Corroded敵は各ゾーンに共通する、霧に歪められた脅威です——戦うと時間と音を消費するので、それが引き寄せる注目に見合うかどうかで各戦闘を判断しましょう。",
    sections: [
      { heading: "すべての戦闘に代償がある", paragraphs: ["Corroded敵との戦闘は、それが引き寄せる注目と見合うか天秤にかけましょう。"] },
      { heading: "注意点", paragraphs: ["価値の低いPvE戦闘に時間を使いすぎるのは失敗です。"] },
    ], related: [],
  },
  {
    slug: 'mist-lord-guide', title: "Mistfall Hunter Mist Lordガイド",
    description: "既知の遭遇、難易度層、報酬情報の完全な内訳は、専用のMist Lordボスページを参照してください。",
    eyebrow: 'ガイド', h1: "Mist Lordガイド",
    lead: "既知の遭遇、難易度層、報酬情報の完全な内訳は、専用のMist Lordボスページを参照してください。",
    sections: [
      { heading: "準備が重要", paragraphs: ["Mist Lordに挑む前に偵察し、ルートを計画しましょう。"] },
      { heading: "注意点", paragraphs: ["撤退やサポート計画なしにボスに挑むのは危険です。"] },
    ], related: [],
  },
  {
    slug: 'boss-rewards-guide', title: "Mistfall Hunter ボス報酬ガイド",
    description: "確認されているボス報酬はHoly武器が中心で、それぞれ特定のマップボスに紐づき独自のゲームプレイAffixを持ちます。正確な完全な報酬テーブルはまだ正式版での検証が必要です。",
    eyebrow: 'ガイド', h1: "ボス報酬ガイド",
    lead: "確認されているボス報酬はHoly武器が中心で、それぞれ特定のマップボスに紐づき独自のゲームプレイAffixを持ちます。正確な完全な報酬テーブルはまだ正式版での検証が必要です。",
    sections: [
      { heading: "Holy武器が中心", paragraphs: ["各ボスは独自のAffixを持つユニークなHoly武器を落とします。"] },
      { heading: "注意点", paragraphs: ["検証済みドロップがない状態で報酬テーブルを公開するのは時期尚早です。"] },
    ], related: [],
  },
  {
    slug: 'boss-mechanics-guide', title: "Mistfall Hunter ボスメカニクスガイド",
    description: "ボスメカニクスは、ベータ映像からの推測ではなく、偵察と安全な初回挑戦を通じて学ぶべきです。正確なパターンは発売前にまだ変わる可能性があります。",
    eyebrow: 'ガイド', h1: "ボスメカニクスガイド",
    lead: "ボスメカニクスは、ベータ映像からの推測ではなく、偵察と安全な初回挑戦を通じて学ぶべきです。正確なパターンは発売前にまだ変わる可能性があります。",
    sections: [
      { heading: "偵察を通じて学ぶ", paragraphs: ["ベータの推測ではなく、慎重な初回挑戦を通じてボスメカニクスを学びましょう。"] },
      { heading: "注意点", paragraphs: ["実機テスト前に正確なメカニクスをリストするのは時期尚早です。"] },
    ], related: [],
  },
  {
    slug: 'pve-enemy-drops-guide', title: "Mistfall Hunter PvEドロップガイド",
    description: "PvE敵のドロップ元はまだ完全にはリスト化されていません。具体的なドロップ率の主張は、正式版で確認されるまで未検証として扱ってください。",
    eyebrow: 'ガイド', h1: "PvEドロップガイド",
    lead: "PvE敵のドロップ元はまだ完全にはリスト化されていません。具体的なドロップ率の主張は、正式版で確認されるまで未検証として扱ってください。",
    sections: [
      { heading: "まだ完全には判明していない", paragraphs: ["PvE敵のドロップ元はまだ完全には検証されていません。"] },
      { heading: "注意点", paragraphs: ["架空のドロップ率は誤解を招きます。"] },
    ], related: [],
  },
  {
    slug: 'rare-loot-guide', title: "Mistfall Hunter レア戦利品ガイド",
    description: "レアな戦利品は脱出させる価値があるものであり、そのために死ぬ価値はありません——価値あるものを見つけたら、同じランでさらに搾り取るより安全な離脱を優先しましょう。",
    eyebrow: 'ガイド', h1: "レア戦利品ガイド",
    lead: "レアな戦利品は脱出させる価値があるものであり、そのために死ぬ価値はありません——価値あるものを見つけたら、同じランでさらに搾り取るより安全な離脱を優先しましょう。",
    sections: [
      { heading: "脱出させる、死なない", paragraphs: ["価値あるものを見つけたら、安全な離脱を優先しましょう。"] },
      { heading: "注意点", paragraphs: ["ルートがすでに成功しているのにレア戦利品の後に長居するのは失敗です。"] },
    ], related: [],
  },
  {
    slug: 'loot-priority-list', title: "Mistfall Hunter 戦利品優先度リスト",
    description: "実用的な戦利品優先度は、まだ使えない汎用的な高レア度アイテムより、クラスに関連するアップグレードと成長資源を優先します。",
    eyebrow: 'ガイド', h1: "戦利品優先度リスト",
    lead: "実用的な戦利品優先度は、まだ使えない汎用的な高レア度アイテムより、クラスに関連するアップグレードと成長資源を優先します。",
    sections: [
      { heading: "レア度よりクラス適性", paragraphs: ["汎用的なレアアイテムより、クラスに関連するアップグレードと成長資源を優先しましょう。"] },
      { heading: "注意点", paragraphs: ["経済が検証される前に万能リストを作るのは時期尚早です。"] },
    ], related: [],
  },
];

export const localizedCorePages: Record<'de' | 'ja' | FirstEditionLang, LocalizedCorePage[]> = { de, ja, ...officialLanguageCorePages };

export function getLocalizedCorePage(lang: 'de' | 'ja' | FirstEditionLang, slug: string) {
  return localizedCorePages[lang].find((page) => page.slug === slug);
}

export function localizedCorePath(lang: Lang, slug: string) {
  const suffix = slug === 'home' ? '/' : `/${slug}/`;
  return lang === 'en' ? suffix : `/${lang}${suffix}`;
}
