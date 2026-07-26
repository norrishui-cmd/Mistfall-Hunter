import type { NewsCluster, NewsLocale } from './tabNews';

type CopySeed = [title: string, description: string, answer: string, context: string];
type Locale = 'de' | 'ja';

const de: Record<string, CopySeed> = {
  'release-date-july-29-confirmed':['Globaler Starttermin bestätigt','Mistfall Hunter startet am 29. Juli 2026 um 18:00 PT beziehungsweise am 30. Juli um 01:00 UTC.','Der weltweite Start erfolgt am 29. Juli 2026 um 18:00 PT (30. Juli, 01:00 UTC).','Die beiden Datumsangaben bezeichnen denselben Zeitpunkt; Steam zeigt für amerikanische Zeitzonen den 29. Juli.'],
  'pc-xbox-ps5-platforms-confirmed':['PC, Xbox Series X|S und PS5 starten gleichzeitig','Alle drei Plattformen sind für denselben Veröffentlichungstermin bestätigt.','Mistfall Hunter erscheint gleichzeitig für Steam-PC, Xbox Series X|S und PlayStation 5.','PS4, Xbox One und Nintendo Switch sind weiterhin nicht angekündigt.'],
  'xbox-play-anywhere-access-update':['Xbox Play Anywhere ist gelistet','Der Xbox Store führt Play Anywhere als unterstützte Funktion.','Mistfall Hunter ist auf der offiziellen Xbox-Seite als Xbox-Play-Anywhere-Titel gekennzeichnet.','Kaufrecht, Region und Speicherstand sollten beim Start im jeweiligen Store geprüft werden.'],
  'ten-supported-languages-announced':['Zehn unterstützte Sprachen gelistet','Steam nennt zehn Sprachen für Oberfläche und Untertitel.','Steam listet Englisch sowie neun weitere lokalisierte Sprachen.','Deutsch, Japanisch, Französisch, Spanisch, Koreanisch, Russisch, Chinesisch und brasilianisches Portugiesisch sind enthalten.'],
  'pc-system-requirements-published':['Offizielle PC-Systemanforderungen veröffentlicht','Steam nennt Mindest- und empfohlene Hardware sowie eine SSD-Empfehlung.','Mindestens erforderlich sind Windows 10 64-Bit, 12 GB RAM, DirectX 12 und eine GTX 1060 oder RX 580.','Empfohlen werden 16 GB RAM; reale Leistung hängt von Auflösung, Treiber und Patches ab.'],
  'official-gameplay-loop-explained':['Offizielle Spielschleife: Jagen, Beute, Extraktion','Die Store-Beschreibung ordnet das Spiel als PvPvE-Extraction-Action-RPG ein.','Ein Einsatz verbindet PvE, Begegnungen mit Spielern, Beuteentscheidungen und die erfolgreiche Flucht.','Erst die Extraktion sichert den Fortschritt; wertvolle Beute allein beendet den Einsatz nicht.'],
  'solo-and-three-player-squads-confirmed':['Solo und Dreiertrupps bestätigt','Einsätze sind allein oder in Teams mit bis zu drei Spielern möglich.','Mistfall Hunter unterstützt Solospiel und Trupps mit maximal drei Personen.','Eine besondere Solo-Warteschlange sollte ohne offizielle Live-Regeln nicht vorausgesetzt werden.'],
  'six-classes-two-weapon-stances':['Sechs Klassen und zwei Waffenhaltungen','Jede der sechs Klassen arbeitet mit zwei Waffenhaltungen.','Zum Start stehen sechs Klassen mit jeweils zwei Waffenhaltungen zur Wahl.','Talente, Edelstein-Affixe und aktive Fähigkeiten ergänzen die Haltungswahl.'],
  'returner-woodling-extraction-role':['Rolle des Returner Woodling bei der Extraktion','Offizielle Angaben verbinden Returner Woodling und Soul of Return mit der Flucht.','Returner Woodling und Soul of Return sind zentrale Teile des bekannten Extraktionsablaufs.','Spawnpunkte und alternative Routen müssen erst im Live-Build kartiert werden.'],
  'pvpve-survival-priorities':['Überlebensprioritäten im PvPvE','Informationen, Ressourcen und ein erreichbarer Ausgang sind wichtiger als Kills allein.','Ein stabiler Einsatz priorisiert Lagebild, Vorräte und Extraktion.','PvE-Kämpfe können die eigene Position verraten und Ausgänge werden von anderen Teams umkämpft.'],
  'build-system-talents-affixes-skills':['Builds kombinieren Talente, Affixe und Skills','Builds bestehen aus mehreren Systemen statt aus einem einzelnen Gegenstand.','Klassen-Talente, Edelstein-Affixe, aktive Fähigkeiten und Waffenhaltungen greifen ineinander.','Die Auswahl sollte ein klares Ziel wie Überleben, Druck oder Unterstützung verfolgen.'],
  'weapon-stance-build-planning':['Waffenhaltungen als Ausgangspunkt für Builds','Die Aufgabe jeder Haltung sollte vor Talenten und Affixen feststehen.','Lege zuerst fest, welchen Zweck beide Waffenhaltungen erfüllen.','Doppelte Funktionen können Lücken gegen Reichweite, Druck oder Rückzug hinterlassen.'],
  'gem-affix-priority-framework':['Praxisrahmen für Edelstein-Affixe','Affixe sollten nach dem Problem des Builds bewertet werden.','Priorisiere Überleben, verlässlichen Schaden, Kontrolle, Mobilität oder Teamnutzen.','Bedingte Boni lohnen sich nur, wenn der Build ihre Auslösung zuverlässig erfüllt.'],
  'solo-vs-squad-build-differences':['Warum Solo- und Gruppen-Builds andere Prioritäten brauchen','Solo-Builds benötigen Eigenständigkeit, Trupps können Rollen aufteilen.','Ein Solo-Build muss Flucht, Heilung und Fehlerkorrektur selbst abdecken.','Im Team können Kontrolle, Unterstützung und kombinierte Fähigkeiten stärker gewichtet werden.'],
  'launch-meta-verification-policy':['So prüfen wir die Launch-Meta','Tierlisten werden erst nach nachvollziehbaren Live-Tests veröffentlicht.','Wir trennen bestätigte Mechaniken von vorläufigen Stärkeurteilen.','Patchstand, Modus, Gruppengröße und Ausrüstung müssen bei Vergleichen dokumentiert werden.'],
  'bellring-anti-cheat-disclosure':['Bellring Anti-Cheat auf Steam angegeben','Steam nennt Bellring Anti-Cheat als Kernel-Level-System.','Die Steam-Seite weist Bellring Anti-Cheat ausdrücklich aus.','Kompatibilität und Datenschutz sollten anhand der offiziellen Hinweise geprüft werden.'],
  'xbox-pc-cross-platform-features':['Plattformübergreifender Mehrspieler und Koop gelistet','Xbox führt Cross-Platform Multiplayer und Cross-Platform Co-op.','Die Xbox-Seite bestätigt plattformübergreifende Mehrspieler- und Koop-Funktionen.','Die genaue Konto- und Freundeslisten-Verknüpfung muss im Live-Dienst geprüft werden.'],
  'online-coop-two-to-three-players':['Online-Koop für zwei bis drei Spieler','Die Xbox-Seite nennt zwei bis drei Spieler für Online-Koop.','Koop-Trupps bestehen offiziell aus zwei oder drei Spielern.','Diese Angabe beschreibt die Gruppengröße und nicht die Gesamtzahl eines Matches.'],
  'online-match-player-count-listing':['Online-Matches mit 2–15 Spielern gelistet','Xbox nennt einen Online-Mehrspielerbereich von zwei bis 15 Spielern.','Der offizielle Xbox Store zeigt 2–15 Spieler für Online-Multiplayer.','Die Zahl darf nicht mit der maximalen Truppgröße von drei verwechselt werden.'],
  'official-no-pay-to-win-position':['Offizielle Beschreibung: kein Pay-to-Win','Die Store-Beschreibung positioniert das Spiel ohne käufliche Kampfvorteile.','Offizielle Angaben sagen, dass bezahlte Inhalte keinen unfairen Kampfvorteil bieten sollen.','Kosmetik und Editionsinhalte sollten weiterhin getrennt von spielerischer Macht bewertet werden.'],
  'bellring-games-and-skystone-publishing':['Bellring entwickelt, Skystone veröffentlicht','Die offiziellen Store-Seiten nennen die Rollen der beiden Unternehmen.','Bellring Games ist der Entwickler; Skystone Games ist der Publisher.','Diese Zuordnung hilft, offizielle Ankündigungen von Community-Inhalten zu unterscheiden.'],
  'dark-fantasy-pvpve-world-overview':['Die Dark-Fantasy-PvPvE-Identität','Das Spiel verbindet düstere Fantasy, Action-RPG-Kämpfe und Extraktionsrisiko.','Mistfall Hunter ist ein Dark-Fantasy-PvPvE-Extraction-Action-RPG.','Spieler kämpfen gegen Kreaturen und rivalisierende Teams, während Beute verloren gehen kann.'],
  'xbox-visual-and-audio-features':['Xbox listet 4K, HDR10, VRR und Raytracing','Mehrere Bild- und Audiofunktionen erscheinen im Xbox Store.','Xbox führt 4K, HDR10, variable Bildrate, Raytracing und räumliches Audio auf.','Verfügbarkeit und Leistung können je nach Konsole, Display und Grafikmodus variieren.'],
  'steam-hdr-family-sharing-features':['Steam listet HDR und Familienbibliothek','Die Steam-Funktionsliste enthält HDR und Family Sharing.','Steam nennt HDR-Unterstützung und die Nutzung über die Familienbibliothek.','Kontoberechtigung und regionale Einschränkungen richten sich nach den Steam-Regeln.'],
  'deluxe-package-cosmetics-fate-coins':['Deluxe-Paket mit Kosmetik und 2.500 Fate Coins','Das Deluxe-Angebot nennt kosmetische Inhalte und Fate Coins.','Das Deluxe-Paket enthält gelistete Kosmetik sowie 2.500 Fate Coins.','Vor dem Kauf sollten Preis, regionale Inhalte und der rein kosmetische Nutzen geprüft werden.'],
};

const ja: Record<string, CopySeed> = {
  'release-date-july-29-confirmed':['世界同時リリース時刻が確定','発売は2026年7月29日18時（PT）、日本時間では7月30日に当たります。','世界同時リリースは2026年7月29日18時（PT）／7月30日1時（UTC）です。','7月29日と30日の表記は時差によるもので、同じ瞬間を示します。'],
  'pc-xbox-ps5-platforms-confirmed':['PC・Xbox Series X|S・PS5で同時発売','3プラットフォームすべてが同じ発売日に対応します。','Steam版PC、Xbox Series X|S、PlayStation 5で同時発売されます。','PS4、Xbox One、Nintendo Switch版は発表されていません。'],
  'xbox-play-anywhere-access-update':['Xbox Play Anywhere対応を掲載','Xboxストアの機能欄にPlay Anywhereが記載されています。','公式XboxページではXbox Play Anywhere対応タイトルとして掲載されています。','購入権利、地域、セーブ連携の詳細は発売後のストア表示で確認が必要です。'],
  'ten-supported-languages-announced':['対応言語は全10言語','Steamはインターフェースと字幕の対応言語を10種類掲載しています。','英語に加え、日本語を含む9言語のローカライズが掲載されています。','日本語、ドイツ語、フランス語、韓国語、中国語などが含まれます。'],
  'pc-system-requirements-published':['公式PC動作環境を公開','Steamに最低・推奨スペックとSSD推奨が掲載されました。','最低環境はWindows 10 64-bit、12GB RAM、DirectX 12、GTX 1060またはRX 580です。','推奨メモリは16GBで、実際の性能は解像度、ドライバー、パッチに左右されます。'],
  'official-gameplay-loop-explained':['公式ゲームループ：探索・戦利品・脱出','本作はPvPvE脱出型アクションRPGです。','PvE、他プレイヤーとの遭遇、戦利品の判断、脱出成功が1回の探索を構成します。','貴重品を拾うだけでは完了せず、脱出して初めて成果を確保できます。'],
  'solo-and-three-player-squads-confirmed':['ソロと最大3人部隊に対応','単独または最大3人のチームで出撃できます。','ソロプレイと最大3人編成の部隊が公式に対応しています。','ソロ専用マッチの有無は正式なマッチメイク規則を待つ必要があります。'],
  'six-classes-two-weapon-stances':['6クラスと2種類の武器スタンス','各クラスは2種類の武器スタンスを軸に戦います。','発売時は6クラスがあり、それぞれ2種類の武器スタンスを持ちます。','才能、宝石アフィックス、アクティブスキルもビルドに関係します。'],
  'returner-woodling-extraction-role':['Returner Woodlingと脱出の関係','公式情報ではReturner WoodlingとSoul of Returnが脱出に関係します。','この2要素は現在判明している脱出フローの中心です。','出現位置や別ルートは正式版での検証後に案内します。'],
  'pvpve-survival-priorities':['PvPvEで優先すべき生存判断','キル数だけでなく、情報、物資、到達可能な出口が重要です。','安定した探索では索敵、資源管理、脱出経路を優先します。','PvE戦闘は位置を露呈し、出口は他チームに争われる可能性があります。'],
  'build-system-talents-affixes-skills':['才能・アフィックス・スキルで作るビルド','単一装備ではなく複数システムの組み合わせで構成されます。','クラス才能、宝石アフィックス、アクティブスキル、武器スタンスを組み合わせます。','生存、圧力、支援など明確な目的から選ぶのが基本です。'],
  'weapon-stance-build-planning':['武器スタンスを起点にビルドを設計','才能やアフィックスより先に各スタンスの役割を決めます。','2つの武器スタンスが何を補うかを最初に設定してください。','役割が重複すると射程、離脱、圧力への対応が不足します。'],
  'gem-affix-priority-framework':['宝石アフィックス優先度の考え方','ビルドが解決したい課題に応じて評価します。','生存、安定火力、制御、機動力、チーム支援の順序を決めます。','条件付き効果は安定して発動できる場合にだけ価値があります。'],
  'solo-vs-squad-build-differences':['ソロと部隊でビルド優先度が違う理由','ソロは自己完結、部隊は役割分担を重視できます。','ソロでは回復、離脱、失敗からの立て直しを自分で担います。','チームでは制御、支援、連携スキルへ特化しやすくなります。'],
  'launch-meta-verification-policy':['発売後メタの検証方針','再現可能な正式版テスト後にのみTier評価を公開します。','確定メカニクスと暫定的な強さ評価を明確に分けます。','パッチ、モード、人数、装備条件を記録して比較します。'],
  'bellring-anti-cheat-disclosure':['Bellring Anti-CheatをSteamで明記','Steamはカーネルレベルのアンチチートとして掲載しています。','公式SteamページにBellring Anti-Cheatの使用が明記されています。','互換性とプライバシーは公式説明を確認してください。'],
  'xbox-pc-cross-platform-features':['クロスプラットフォーム対戦・協力を掲載','Xboxはクロスプラットフォームのマルチプレイと協力を記載しています。','公式Xboxページでクロスプレイとクロスプラットフォーム協力が確認できます。','アカウント連携とフレンド招待の詳細はサービス開始後に確認します。'],
  'online-coop-two-to-three-players':['オンライン協力は2～3人','Xboxページはオンライン協力人数を2～3人としています。','協力部隊は2人または3人で編成できます。','これは部隊人数であり、1マッチ全体の人数ではありません。'],
  'online-match-player-count-listing':['オンライン対戦は2～15人と掲載','Xboxはオンラインマルチプレイを2～15人と記載しています。','公式Xboxストアの掲載人数は2～15人です。','最大3人という部隊人数と混同しないよう注意が必要です。'],
  'official-no-pay-to-win-position':['公式説明はPay-to-Winなし','ストア説明では課金による不公平な戦闘優位を否定しています。','有料コンテンツで不公平な戦闘上の優位を得ない方針が示されています。','コスメとエディション特典は戦力要素と分けて評価します。'],
  'bellring-games-and-skystone-publishing':['開発はBellring、販売はSkystone','公式ストアで両社の役割を確認できます。','開発元はBellring Games、販売元はSkystone Gamesです。','公式発表とコミュニティ情報を見分ける基礎情報です。'],
  'dark-fantasy-pvpve-world-overview':['ダークファンタジーPvPvEという特徴','暗い幻想世界、アクションRPG戦闘、脱出リスクを組み合わせます。','本作はダークファンタジーPvPvE脱出型アクションRPGです。','怪物と他部隊の双方に対処し、死亡時には戦利品を失う可能性があります。'],
  'xbox-visual-and-audio-features':['Xbox版は4K・HDR10・VRR・レイトレを掲載','Xboxストアに複数の映像・音響機能があります。','4K、HDR10、可変リフレッシュレート、レイトレーシング、空間オーディオが掲載されています。','利用可否と性能は本体、ディスプレイ、画質モードによって異なります。'],
  'steam-hdr-family-sharing-features':['Steam版はHDRとファミリー共有に対応','Steamの機能欄にHDRとファミリー共有があります。','SteamはHDR対応とファミリーライブラリ共有を掲載しています。','アカウント権利と地域制限はSteamの規則に従います。'],
  'deluxe-package-cosmetics-fate-coins':['デラックス版にコスメと2,500 Fate Coins','デラックス商品には外見アイテムとFate Coinsが含まれます。','掲載内容はコスメティックアイテムと2,500 Fate Coinsです。','購入前に地域価格、収録内容、ゲーム内用途を確認してください。'],
};

const clusterWhy: Record<Locale, Record<NewsCluster, string>> = {
  de:{release:'Diese bestätigte Information hilft bei Kauf-, Download- und Startplanung.',guides:'Die Einordnung beantwortet eine konkrete Anfängerfrage, ohne unbestätigte Routen zu erfinden.',builds:'Der Ansatz bleibt auch nach Balance-Änderungen nützlich und vermeidet unbelegte Tierlisten.',faq:'Die getrennte Darstellung verhindert, dass Store-Funktionen und Spielregeln verwechselt werden.',about:'Die Angabe ordnet offizielle Produktinformationen transparent ein.'},
  ja:{release:'購入、ダウンロード、開始時刻の判断に使える公式情報です。',guides:'未確認のルートを作らず、初心者の具体的な疑問に答えます。',builds:'根拠のないTier表を避け、調整後も使える判断軸を示します。',faq:'ストア機能と実際のゲームルールの混同を防ぎます。',about:'公式の商品情報を出典とともに整理しています。'},
};
const watch: Record<Locale,string> = {
  de:'Live-Regeln, regionale Store-Angaben und Patch-Änderungen werden nach Veröffentlichung erneut geprüft.',
  ja:'正式サービスのルール、地域別ストア表示、パッチ変更は発売後に再確認します。',
};

function build(seed: CopySeed, lang: Locale, cluster: NewsCluster): NewsLocale {
  const [title, description, answer, context] = seed;
  return { title, description, answer, details:[context, lang === 'de' ? 'Grundlage sind die offiziellen Steam- und Xbox-Angaben.' : '公式SteamおよびXboxの掲載情報を根拠にしています。'], why:clusterWhy[lang][cluster], watch:watch[lang] };
}

export function getDeepNewsLocale(slug: string, cluster: NewsCluster, lang: Locale): NewsLocale {
  const seed = (lang === 'de' ? de : ja)[slug];
  if (!seed) throw new Error(`Missing ${lang} news translation: ${slug}`);
  return build(seed, lang, cluster);
}

