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
    slug: 'review', title: 'Mistfall Hunter Test: Frühe Eindrücke vor dem Launch',
    description: 'Mistfall Hunter hat noch keinen Launch-Test. So lauten Beta- und Demo-Eindrücke, offizielle Positionierung und bestätigte Funktionen kurz vor dem Launch.',
    eyebrow: 'Vorschau', h1: 'Mistfall Hunter Test: Was wir vor dem Launch wissen',
    lead: 'Es gibt noch keinen offiziellen Test. Diese Seite fasst zusammen, was Beta- und Demo-Eindrücke sowie Bellrings eigene Aussagen bisher wirklich bestätigen.',
    sections: [
      { heading: 'Warum es noch keinen echten Test gibt', paragraphs: ['Ein Test braucht ein fertiges, laufendes Spiel. Alles, was vor dem Launch veröffentlicht wird, ist eine Vorschau auf Basis der Steam-Next-Fest-Demo und der offenen Beta vom 15.\u201322. Juni \u2014 nicht der finalen Version. Diese Seite wird nach dem Launch durch ein echtes Urteil ersetzt.'] },
      { heading: 'Was Beta- und Demo-Spieler sagten', paragraphs: ['Berichte zu Demo und Beta beschreiben bewusstes, Souls-artiges Kampftempo gepaart mit typischer Extraction-Spannung: Kämpfe zählen, weil ein verlorener Lauf alles kostet, was man mitgebracht hat.'], bullets: ['Kampf wirkt bewusst, nicht hektisch', 'Extraktionsrisiko ist der zentrale Reiz, nicht nur der Kampf', 'Sechs Klassen mit je zwei Waffenhaltungen boten echte Build-Vielfalt im Test', 'Beta-Feedback floss direkt in Launch-Anpassungen ein, etwa bei Crow Storm und Mace Shapeshift'] },
      { heading: 'Das Versprechen gegen Pay-to-Win', paragraphs: ['Bellrings eigene Store-Texte auf Steam und Xbox betonen, dass es keine Pay-to-Win-Mechaniken und keine käuflichen Statuswerte gibt. Was über Kosmetik hinausgeht, ist noch nicht final geklärt \u2014 siehe die Pay-to-Win-Seite für Details.'] },
      { heading: 'Was zum Launch noch offen ist', paragraphs: ['Finales Klassen-Balancing, Serverstabilität, echte Matchmaking-Population und ob die Extraktionswirtschaft nach der ersten Woche trägt, lassen sich nicht aus einer Beta ablesen.'], bullets: ['Live-Klassenbalance und Matchups', 'Serverstabilität und Wartezeiten in den ersten Tagen', 'Langfristige Extraktionswirtschaft und Fortschrittstempo', 'Endgültiger Stand zu Crossplay und Cross-Progression'] },
    ], related: [],
  },
  {
    slug: 'pay-to-win', title: 'Ist Mistfall Hunter Pay-to-Win? Was Bellring bestätigt hat',
    description: 'Bellring Games hat wiederholt erklärt, dass Mistfall Hunter keine Pay-to-Win-Mechaniken und keine käuflichen Statuswerte hat. Was das genau bedeutet.',
    eyebrow: 'Monetarisierung', h1: 'Ist Mistfall Hunter Pay-to-Win?',
    lead: 'Bellrings eigenes Marketing ist an diesem Punkt ungewöhnlich direkt: kein Pay-to-Win, keine käuflichen Statuswerte. Das ist bestätigt, das braucht noch Beobachtung.',
    sections: [
      { heading: 'Was Bellring gesagt hat', paragraphs: ['Sowohl die offizielle Steam-Seite als auch das Marketing der offenen Beta wiederholen dieselbe Aussage: keine Pay-to-Win-Mechaniken, keine käuflichen Statuswerte \u2014 der Sieg soll von Können und Vorbereitung abhängen, nicht vom Geldbeutel.'] },
      { heading: 'Was noch offen ist', paragraphs: ['"Keine Statuswerte" sagt nicht automatisch, was verkauft WIRD. Kosmetik gilt als so gut wie sicher, basierend auf Avatar-Rahmen, Posen und Emotes aus der Beta. Ein Battle Pass oder die genaue Preisgestaltung sind noch nicht bestätigt.'], bullets: ['Rein kosmetische Belohnungen sind das bisher bestätigte Muster', 'Deluxe- und Standard-Editionen existieren in irgendeiner Form (aus Beta-Event-Kontext)', 'Noch kein bestätigtes Battle-Pass- oder Season-Pass-System', 'Endpreis noch nicht angekündigt'] },
    ], related: [],
  },
  {
    slug: 'codes', title: 'Mistfall Hunter Codes: Tracker für aktive Gutscheincodes',
    description: 'Mistfall Hunter Codes-Tracker. Vor dem Launch gibt es keine aktiven Gutscheincodes; diese Seite wird sofort aktualisiert, sobald Bellring Games welche ankündigt.',
    eyebrow: 'Code-Tracker', h1: 'Mistfall Hunter Codes',
    lead: 'Derzeit gibt es keine aktiven Mistfall-Hunter-Gutscheincodes. Diese Seite soll eine ehrliche, aktuelle Antwort geben statt wiederholter Fake-Codes.',
    sections: [
      { heading: 'Gibt es gerade aktive Codes?', paragraphs: ['Nein. Bellring Games hat bisher kein Gutscheincode-System für Mistfall Hunter veröffentlicht. Jeder anderswo gelistete Code, der Belohnungen vor dem Launch verspricht, sollte als unbestätigt gelten, bis eine offizielle Quelle ihn bestätigt.'] },
      { heading: 'Was bekamen Beta-Teilnehmer stattdessen?', paragraphs: ['Statt Gutscheincodes gab es eine direkte Kontoverknüpfung: Kosmetik aus Sonder-Events der offenen Beta im Juni 2026 kann auf dasselbe Konto zum Launch übertragen werden \u2014 automatisch, ohne Code-Eingabe.'] },
      { heading: 'Wird es nach dem Launch Codes geben?', paragraphs: ['Offiziell weder bestätigt noch dementiert. Falls Mistfall Hunter dem üblichen Muster folgt, wird diese Seite mit genauem Code, Belohnung und Ablaufdatum aktualisiert.'] },
      { heading: 'Wie man Code-Betrug vermeidet', paragraphs: ['Sei skeptisch bei Seiten oder Videos, die vor dem Launch "kostenlose Gyldenblood-Codes" versprechen \u2014 dafür gibt es aktuell keinen offiziellen Mechanismus. Vertraue nur Codes von Bellrings eigenen Kanälen oder seriösen Stores.'] },
    ], related: [],
  },
  {
    slug: 'crossplay-status', title: 'Ist Mistfall Hunter Crossplay? Ja \u2014 PC, Xbox & PS5',
    description: 'Volles Cross-Play über PC, PS5 und Xbox Series X|S ist bestätigt. Mitspieler auf unterschiedlichen Plattformen können gemeinsam spielen, sobald die Server öffnen.',
    eyebrow: 'Crossplay-Status', h1: 'Ist Mistfall Hunter Crossplay?',
    lead: 'Ja \u2014 volles Cross-Play über PC, PS5 und Xbox Series X|S ist bestätigt. Trupps auf unterschiedlichen Plattformen können zusammenspielen, sobald die Server öffnen.',
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
    slug: 'review', title: 'Mistfall Hunter レビュー：発売前の早期インプレッション',
    description: 'Mistfall Hunterにはまだ発売レビューがありません。ベータとデモの実機インプレッション、公式の立場、確認済み機能を発売直前にまとめました。',
    eyebrow: 'プレビュー', h1: 'Mistfall Hunter レビュー：発売前に分かっていること',
    lead: 'まだ公式レビューはありません。このページはベータ・デモの実機インプレッションと、Bellring自身の発言が現時点で実際に確認している内容をまとめています。',
    sections: [
      { heading: 'まだ本当のレビューがない理由', paragraphs: ['レビューには完成した稼働中のゲームが必要です。発売前に公開される内容は、Steam Next Festのデモと6月15〜22日のオープンベータに基づくプレビューであり、発売版そのものではありません。発売後、このページは単なるプレビューの焼き直しではなく、本当の評価に置き換わります。'] },
      { heading: 'ベータ・デモプレイヤーの声', paragraphs: ['デモとベータの報道は、意図的でSouls的な戦闘テンポと、脱出ジャンル特有の緊張感を組み合わせていると描写しています。ランを失えば持ち込んだものすべてを失うため、戦闘には重みがあります。'], bullets: ['戦闘は俊敏というより意図的な印象', '脱出のリスクこそが核であり、戦闘だけが魅力ではない', '各2種類の武器スタンスを持つ6クラスがテストで実際のビルドの幅を示した', 'ベータのフィードバックはCrow StormやMace Shapeshiftの調整など、発売時の調整に直接反映された'] },
      { heading: '「Pay-to-Winではない」という約束', paragraphs: ['BellringはSteamとXboxの公式ストア文言で、Pay-to-Winメカニクスや課金によるステータス強化はないと明言しています。コスメティックを超える部分についてはまだ最終確定していません——詳細はPay-to-Winページを参照してください。'] },
      { heading: '発売時点でまだ分からないこと', paragraphs: ['本当のレビューに必要なもの——最終的なクラスバランス、実際のサーバー安定性、実際のマッチメイキング人口、脱出経済が最初の週を超えて成立するか——はベータからは判断できません。'], bullets: ['実機でのクラスバランスとマッチアップ', '発売初期のサーバー安定性と待機時間', '長期的な脱出経済と成長ペース', 'クロスプレイとクロスプログレッションの最終的な状態'] },
    ], related: [],
  },
  {
    slug: 'pay-to-win', title: 'Mistfall HunterはPay-to-Winか？Bellringが確認していること',
    description: 'Bellring Gamesは、Mistfall HunterにPay-to-Winメカニクスや課金によるステータス強化がないと繰り返し表明しています。その正確な意味を解説します。',
    eyebrow: 'マネタイズ', h1: 'Mistfall HunterはPay-to-Winか？',
    lead: 'Bellring自身のマーケティングはこの点について異例なほど明確です：Pay-to-Winなし、課金ステータス強化なし。確認済みの部分と、まだ注視が必要な部分を整理します。',
    sections: [
      { heading: 'Bellringが表明していること', paragraphs: ['公式Steamページとオープンベータのマーケティングはどちらも同じ内容を繰り返しています：Pay-to-Winメカニクスはなく、課金によるステータス強化もない。勝敗は課金ではなく腕前と準備によって決まるという方針です。'] },
      { heading: 'まだ確定していないこと', paragraphs: ['「ステータス強化なし」は、何が販売されるかまでは示していません。ベータの報酬傾向から見て、コスメティックはほぼ確実視されていますが、バトルパスや正確な価格設定はまだ確定していません。'], bullets: ['これまで確認されているのはコスメティック限定の報酬パターン', 'デラックス版・スタンダード版は何らかの形で存在（ベータイベントの文脈より）', 'バトルパスやシーズンパス制度はまだ未確認', '最終価格はまだ発表されていない'] },
    ], related: [],
  },
  {
    slug: 'codes', title: 'Mistfall Hunter コード：有効な引き換えコード追跡',
    description: 'Mistfall Hunterのコード追跡ページ。発売前は有効な引き換えコードは存在しません。Bellring Gamesが発表次第、即座に更新します。',
    eyebrow: 'コード追跡', h1: 'Mistfall Hunter コード',
    lead: '現在、有効なMistfall Hunterの引き換えコードはありません。このページは、使い古された偽コードではなく、正直で最新の答えを提供するために存在します。',
    sections: [
      { heading: '今、有効なコードはありますか？', paragraphs: ['いいえ。Bellring Gamesはこれまでのところ、Mistfall Hunter向けの引き換えコードシステムを発表していません。発売前に報酬がもらえると謳う他サイトのコードは、公式ソースが確認するまで未確認情報として扱ってください。'] },
      { heading: 'オープンベータ参加者は代わりに何を得ましたか？', paragraphs: ['引き換えコードの代わりに、直接的なアカウント連携という仕組みが確認されています。2026年6月のオープンベータ中の特別イベントで獲得したコスメティックは、発売時に同じアカウントへ自動的に引き継がれます——入力するコードはありません。'] },
      { heading: '発売後にコードは登場しますか？', paragraphs: ['公式にはまだどちらとも確認されていません。他の多くのライブサービスゲームと同様の展開になれば、正確なコード、報酬、有効期限とともにこのページを更新します。'] },
      { heading: 'コード詐欺を避ける方法', paragraphs: ['発売前に「無料のGyldenbloodコード」などを謳うサイトや動画には注意してください——現時点でそのような公式の仕組みはありません。Bellring Games自身の公式チャンネルや正規のストアが直接発表したコードのみを信頼してください。'] },
    ], related: [],
  },
  {
    slug: 'crossplay-status', title: 'Mistfall Hunterはクロスプレイ対応？はい——PC・Xbox・PS5',
    description: 'PC、PS5、Xbox Series X|S間の完全クロスプレイが確認されています。サーバーが開いた時点で、異なるプラットフォームのプレイヤーが一緒にプレイできます。',
    eyebrow: 'クロスプレイ状況', h1: 'Mistfall Hunterはクロスプレイ対応？',
    lead: 'はい——PC、PS5、Xbox Series X|S間の完全クロスプレイが確認されています。サーバーが開けば、異なるプラットフォームのパーティが一緒にプレイできます。',
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
];

export const localizedCorePages: Record<'de' | 'ja' | FirstEditionLang, LocalizedCorePage[]> = { de, ja, ...officialLanguageCorePages };

export function getLocalizedCorePage(lang: 'de' | 'ja' | FirstEditionLang, slug: string) {
  return localizedCorePages[lang].find((page) => page.slug === slug);
}

export function localizedCorePath(lang: Lang, slug: string) {
  const suffix = slug === 'home' ? '/' : `/${slug}/`;
  return lang === 'en' ? suffix : `/${lang}${suffix}`;
}
