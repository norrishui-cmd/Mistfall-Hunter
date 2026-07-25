import type { GameDataLocaleCopy } from './gameDataLocales';
import type { Lang } from '../i18n';

export const secondEditionGameDataSlugs = [
  'withered-knight',
  'mercenary',
  'shadowstrix',
  'holy-weapons',
  'equipment-vouchers',
  'brandrgarde-cataclysm',
  'pve-soul-revival',
  'hallowgrove',
  'cursed-moonwane',
  'beta-regions-languages-controller',
] as const;

type SecondLang = Extract<Lang, 'zh-hant' | 'es' | 'ru' | 'ko' | 'fr' | 'pt-br'>;
type Entry = { title: string; description: string; answer: string };

const entries: Record<SecondLang, Record<(typeof secondEditionGameDataSlugs)[number], Entry>> = {
  'zh-hant': {
    'withered-knight': { title:'Withered Knight 武器與技能指南', description:'大劍、長柄武器與盾牌的官方已確認資料。', answer:'Withered Knight 以大劍施加與引爆 Wither 效果，另一條武器路線使用長柄武器與盾牌，提供六項技能及遠距救援能力。' },
    mercenary: { title:'Mercenary 劍盾與戰鎚流派', description:'Mercenary 的攻擊、防禦、蓄力與暈眩路線。', answer:'Mercenary 可選劍盾或戰鎚：劍盾偏向格擋、完美招架與追擊，戰鎚則以移動蓄力和連續暈眩控制敵人。' },
    shadowstrix: { title:'Shadowstrix 匕首、雙刃與平衡調整', description:'潛行、Wound Burst 與 Crow Storm 的最新方向。', answer:'Shadowstrix 以匕首和雙刃建立潛行爆發與傷口疊層；Crow Storm 不再對已暈眩目標重複疊加控制，傷害亦會下調。' },
    'holy-weapons': { title:'Holy Weapons Boss 掉落與專屬詞綴', description:'神聖武器的取得方式、Boss 關聯與專屬效果。', answer:'Holy Weapons 是由地圖 Boss 掉落的高階裝備；每個 Boss 對應獨特武器與專屬玩法詞綴，因此 Boss 路線會直接影響 Build 成長。' },
    'equipment-vouchers': { title:'Equipment Vouchers 裝備券規則', description:'裝備券稀有度、使用難度與首次撤離規則。', answer:'裝備券可在不同難度提供對應稀有度裝備；只有攜帶裝備成功撤離後，玩家才取得所有權與自訂權限。' },
    'brandrgarde-cataclysm': { title:'Brandrgarde Cataclysm 高風險模式', description:'強化菁英、稀有戰利品與 PvPvE 風險。', answer:'Cataclysm 是 Brandrgarde 的高風險高回報難度，包含更強菁英與稀有頂級戰利品；進場前應先規劃撤離路線。' },
    'pve-soul-revival': { title:'PvE Soul Revival 復活機制', description:'怪物或墜落死亡後的 Soul Form 與取回屍體規則。', answer:'若死亡前未受到敵對玩家傷害，獵人可進入 Soul Form、在最近復活點重生並於屍體消失前取回物品；PvP 擊殺不適用。' },
    hallowgrove: { title:'Hallowgrove 地圖與區域指南', description:'枯白森林、三個子區域、Mist Lord 與撤離風險。', answer:'Hallowgrove 是遮蔽密集的枯白森林，包含 Divine Anchor、Hastine’s Fall、Witchery Woods 與中央 Mist Lord 戰場，近距離伏擊風險較高。' },
    'cursed-moonwane': { title:'Sálmar, the Cursed Moonwane Boss 指南', description:'六月公開測試登場的兩階段 Mist Lord 戰鬥。', answer:'Sálmar, the Cursed Moonwane 是與 Hallowgrove 同期公開的兩階段 Boss；測試期打法只能作背景，具體機制需用正式版本再次核實。' },
    'beta-regions-languages-controller': { title:'Beta 伺服器、語言與手把支援', description:'公開測試的五個伺服器國家、十種語言與控制器資訊。', answer:'公開測試在中國、美國、德國、新加坡及巴西部署伺服器，支援十種語言與手把；正式版仍應以各平台商店標示為準。' },
  },
  es: {
    'withered-knight': { title:'Withered Knight: armas y habilidades', description:'Datos confirmados sobre mandoble, arma de asta y escudo.', answer:'Withered Knight aplica y detona Wither con el mandoble; su otra ruta combina arma de asta y escudo, seis habilidades y rescate de aliados a distancia.' },
    mercenary: { title:'Mercenary: builds de espada, escudo y martillo', description:'Rutas oficiales de ataque, defensa, carga y aturdimiento.', answer:'Mercenary elige espada y escudo para bloquear, contraatacar y perseguir, o martillo para cargar en movimiento y acumular control por aturdimiento.' },
    shadowstrix: { title:'Shadowstrix: dagas, hojas dobles y balance', description:'Sigilo, Wound Burst y los últimos cambios de Crow Storm.', answer:'Shadowstrix usa dagas y hojas dobles para emboscadas, daño explosivo y acumulación de heridas; Crow Storm ya no encadena control sobre objetivos aturdidos y recibirá menos daño.' },
    'holy-weapons': { title:'Holy Weapons: jefes y afijos exclusivos', description:'Cómo se obtienen las armas sagradas y qué las diferencia.', answer:'Las Holy Weapons son botín avanzado de los jefes de mapa; cada jefe tiene un arma propia con afijos de juego exclusivos, por lo que la ruta de jefes afecta directamente al build.' },
    'equipment-vouchers': { title:'Equipment Vouchers: niveles y extracción', description:'Rareza, uso y propiedad del equipo obtenido con vales.', answer:'Los vales entregan equipo de rareza escalonada en cualquier dificultad; la propiedad y personalización solo se desbloquean después de extraer con éxito ese equipo.' },
    'brandrgarde-cataclysm': { title:'Brandrgarde Cataclysm: riesgo y recompensas', description:'Élites reforzados, botín raro y presión PvPvE.', answer:'Cataclysm es la dificultad de alto riesgo de Brandrgarde, con élites más fuertes y botín excepcional; conviene fijar una salida antes de disputar los puntos valiosos.' },
    'pve-soul-revival': { title:'PvE Soul Revival: cómo funciona', description:'Reglas de Soul Form tras morir por monstruos o caídas.', answer:'Si ningún jugador hostil participó en la muerte, el cazador entra en Soul Form, revive en el punto más cercano y puede recuperar el cuerpo antes de que desaparezca; las muertes PvP no cuentan.' },
    hallowgrove: { title:'Hallowgrove: mapa y zonas principales', description:'Bosque cerrado, tres subzonas, Mist Lord y rutas de extracción.', answer:'Hallowgrove es un bosque blanquecino con mucha cobertura que incluye Divine Anchor, Hastine’s Fall, Witchery Woods y una arena central de Mist Lord; favorece emboscadas a corta distancia.' },
    'cursed-moonwane': { title:'Sálmar, the Cursed Moonwane: jefe', description:'Encuentro de dos fases presentado en la beta abierta de junio.', answer:'Sálmar, the Cursed Moonwane es un Mist Lord de dos fases presentado junto a Hallowgrove; las tácticas de beta deben verificarse en la versión de lanzamiento.' },
    'beta-regions-languages-controller': { title:'Beta: servidores, idiomas y mando', description:'Cinco países de servidor, diez idiomas y compatibilidad con mando.', answer:'La beta desplegó servidores en China, Estados Unidos, Alemania, Singapur y Brasil, con diez idiomas y mando; para el lanzamiento manda la ficha actual de cada tienda.' },
  },
  ru: {
    'withered-knight': { title:'Withered Knight: оружие и навыки', description:'Подтверждённые данные о двуручном мече, древковом оружии и щите.', answer:'Withered Knight накладывает и взрывает Wither двуручным мечом; альтернативная ветка сочетает древковое оружие, щит, шесть навыков и дистанционное спасение союзника.' },
    mercenary: { title:'Mercenary: меч, щит и молот', description:'Официальные ветки атаки, защиты, заряда и оглушения.', answer:'Mercenary использует меч и щит для блока, контратак и преследования либо молот для подвижной зарядки удара и накопления оглушения.' },
    shadowstrix: { title:'Shadowstrix: кинжалы, парные клинки и баланс', description:'Скрытность, Wound Burst и изменения Crow Storm.', answer:'Shadowstrix строит засады и взрывной урон через кинжалы и парные клинки; Crow Storm больше не наслаивает контроль на оглушённые цели и получит снижение урона.' },
    'holy-weapons': { title:'Holy Weapons: боссы и уникальные аффиксы', description:'Как добываются святые оружия и чем они отличаются.', answer:'Holy Weapons выпадают из боссов карт; каждому боссу соответствует уникальное оружие с особым игровым аффиксом, поэтому маршрут боссов напрямую связан с развитием билда.' },
    'equipment-vouchers': { title:'Equipment Vouchers: уровни и эвакуация', description:'Редкость экипировки и правило первого успешного выхода.', answer:'Ваучеры дают экипировку соответствующей редкости на любой сложности; владение и настройка открываются только после успешной эвакуации с предметом.' },
    'brandrgarde-cataclysm': { title:'Brandrgarde Cataclysm: риск и награды', description:'Усиленные элиты, редкая добыча и PvPvE-опасность.', answer:'Cataclysm — высокорисковая сложность Brandrgarde с усиленными элитами и редкой топовой добычей; маршрут эвакуации стоит выбрать до боя за ориентиры.' },
    'pve-soul-revival': { title:'PvE Soul Revival: правила возрождения', description:'Soul Form после смерти от монстров или падения.', answer:'Если в смерти не участвовал вражеский игрок, охотник переходит в Soul Form, возрождается у ближайшей точки и может вернуть тело до исчезновения; PvP-смерти исключены.' },
    hallowgrove: { title:'Hallowgrove: карта и зоны', description:'Густой лес, три подзоны, Mist Lord и риски эвакуации.', answer:'Hallowgrove — бледный лес с плотными укрытиями, включающий Divine Anchor, Hastine’s Fall, Witchery Woods и центральную арену Mist Lord; здесь особенно опасны ближние засады.' },
    'cursed-moonwane': { title:'Sálmar, the Cursed Moonwane: босс', description:'Двухфазный Mist Lord из июньской открытой беты.', answer:'Sálmar, the Cursed Moonwane — двухфазный босс, представленный вместе с Hallowgrove; тактики из беты нужно перепроверить в релизной версии.' },
    'beta-regions-languages-controller': { title:'Бета: серверы, языки и геймпад', description:'Пять стран серверов, десять языков и поддержка контроллера.', answer:'В бете работали серверы в Китае, США, Германии, Сингапуре и Бразилии, поддерживались десять языков и контроллер; релизные данные следует сверять с магазинами.' },
  },
  ko: {
    'withered-knight': { title:'Withered Knight 무기와 스킬 가이드', description:'대검, 장병기와 방패에 관한 공식 확인 정보.', answer:'Withered Knight는 대검으로 Wither를 부여하고 폭발시키며, 다른 무기 경로는 장병기와 방패, 6개 스킬, 원거리 아군 구조 능력을 제공합니다.' },
    mercenary: { title:'Mercenary 검방패와 해머 빌드', description:'공격, 방어, 차지와 기절 중심의 공식 무기 경로.', answer:'Mercenary는 검방패로 막기, 완벽 패리와 추격을 수행하거나 해머로 이동 차지와 연속 기절 제어를 노릴 수 있습니다.' },
    shadowstrix: { title:'Shadowstrix 단검·쌍검과 밸런스', description:'은신, Wound Burst와 Crow Storm 조정 내용.', answer:'Shadowstrix는 단검과 쌍검으로 기습, 폭발 피해와 상처 중첩을 만듭니다. Crow Storm은 이미 기절한 대상에게 제어를 중첩하지 않으며 피해도 낮아집니다.' },
    'holy-weapons': { title:'Holy Weapons 보스 드롭과 전용 접사', description:'성스러운 무기의 획득처와 고유 효과.', answer:'Holy Weapons는 맵 보스에게서 획득하는 상위 장비입니다. 보스마다 고유 무기와 전용 플레이 접사가 있어 보스 동선이 빌드 성장에 직접 연결됩니다.' },
    'equipment-vouchers': { title:'Equipment Vouchers 등급과 탈출 규칙', description:'장비권 희귀도, 사용 난이도와 소유권 해금.', answer:'장비권은 모든 난이도에서 단계별 희귀도 장비를 제공합니다. 해당 장비로 성공적으로 탈출해야 소유권과 커스터마이즈가 해금됩니다.' },
    'brandrgarde-cataclysm': { title:'Brandrgarde Cataclysm 고위험 모드', description:'강화 엘리트, 희귀 전리품과 PvPvE 위험.', answer:'Cataclysm은 더 강한 엘리트와 희귀 최상급 전리품이 있는 Brandrgarde의 고위험·고보상 난이도입니다. 교전 전에 탈출로부터 정해야 합니다.' },
    'pve-soul-revival': { title:'PvE Soul Revival 부활 규칙', description:'몬스터 또는 낙사 후 Soul Form과 시체 회수 방법.', answer:'적 플레이어 피해 없이 사망하면 Soul Form으로 전환되어 가장 가까운 지점에서 부활하고 시체가 사라지기 전에 회수할 수 있습니다. PvP 사망은 제외됩니다.' },
    hallowgrove: { title:'Hallowgrove 맵과 지역 가이드', description:'울창한 숲, 세 하위 지역, Mist Lord와 탈출 위험.', answer:'Hallowgrove는 Divine Anchor, Hastine’s Fall, Witchery Woods와 중앙 Mist Lord 경기장을 포함한 엄폐가 빽빽한 창백한 숲으로, 근거리 매복 위험이 큽니다.' },
    'cursed-moonwane': { title:'Sálmar, the Cursed Moonwane 보스', description:'6월 오픈 베타에서 공개된 2단계 Mist Lord 전투.', answer:'Sálmar, the Cursed Moonwane는 Hallowgrove와 함께 공개된 2단계 보스입니다. 베타 공략은 출시 빌드에서 다시 검증해야 합니다.' },
    'beta-regions-languages-controller': { title:'베타 서버·언어·컨트롤러 지원', description:'서버 5개 국가, 10개 언어와 컨트롤러 정보.', answer:'베타는 중국, 미국, 독일, 싱가포르, 브라질에 서버를 두고 10개 언어와 컨트롤러를 지원했습니다. 출시 정보는 각 스토어 표기를 우선해야 합니다.' },
  },
  fr: {
    'withered-knight': { title:'Withered Knight : armes et compétences', description:'Données confirmées sur l’espadon, l’arme d’hast et le bouclier.', answer:'Withered Knight applique puis déclenche Wither avec l’espadon ; son autre voie réunit arme d’hast, bouclier, six compétences et sauvetage à distance.' },
    mercenary: { title:'Mercenary : builds épée, bouclier et marteau', description:'Voies officielles d’attaque, défense, charge et étourdissement.', answer:'Mercenary choisit l’épée et le bouclier pour bloquer, parer et poursuivre, ou le marteau pour charger en mouvement et accumuler les étourdissements.' },
    shadowstrix: { title:'Shadowstrix : dagues, doubles lames et équilibrage', description:'Furtivité, Wound Burst et changements de Crow Storm.', answer:'Shadowstrix utilise dagues et doubles lames pour l’embuscade, le burst et les blessures cumulées ; Crow Storm ne prolonge plus le contrôle d’une cible étourdie et perd des dégâts.' },
    'holy-weapons': { title:'Holy Weapons : boss et affixes exclusifs', description:'Obtention des armes sacrées et particularités de leurs effets.', answer:'Les Holy Weapons tombent sur les boss de carte ; chaque boss possède une arme unique avec des affixes de gameplay exclusifs, reliant directement parcours de boss et progression du build.' },
    'equipment-vouchers': { title:'Equipment Vouchers : paliers et extraction', description:'Rareté, utilisation et propriété de l’équipement obtenu.', answer:'Les coupons donnent de l’équipement de rareté progressive à toutes les difficultés ; propriété et personnalisation ne s’ouvrent qu’après une extraction réussie avec l’objet.' },
    'brandrgarde-cataclysm': { title:'Brandrgarde Cataclysm : risques et butin', description:'Élites renforcés, récompenses rares et pression PvPvE.', answer:'Cataclysm est la difficulté à haut risque de Brandrgarde, avec élites plus puissants et butin exceptionnel ; préparez l’extraction avant de contester les lieux importants.' },
    'pve-soul-revival': { title:'PvE Soul Revival : fonctionnement', description:'Soul Form après une mort causée par un monstre ou une chute.', answer:'Sans dégâts d’un joueur hostile, le chasseur passe en Soul Form, réapparaît au point le plus proche et peut récupérer son corps avant sa disparition ; une mort PvP est exclue.' },
    hallowgrove: { title:'Hallowgrove : carte et zones principales', description:'Forêt dense, trois sous-zones, Mist Lord et risques d’extraction.', answer:'Hallowgrove est une forêt pâle très couverte comprenant Divine Anchor, Hastine’s Fall, Witchery Woods et une arène centrale de Mist Lord ; les embuscades rapprochées y dominent.' },
    'cursed-moonwane': { title:'Sálmar, the Cursed Moonwane : boss', description:'Mist Lord en deux phases révélé pendant la bêta ouverte de juin.', answer:'Sálmar, the Cursed Moonwane est un boss en deux phases présenté avec Hallowgrove ; les stratégies de bêta doivent être vérifiées dans la version de lancement.' },
    'beta-regions-languages-controller': { title:'Bêta : serveurs, langues et manette', description:'Cinq pays serveurs, dix langues et prise en charge de la manette.', answer:'La bêta utilisait des serveurs en Chine, aux États-Unis, en Allemagne, à Singapour et au Brésil, avec dix langues et la manette ; les fiches des boutiques font foi au lancement.' },
  },
  'pt-br': {
    'withered-knight': { title:'Withered Knight: armas e habilidades', description:'Dados confirmados sobre montante, arma de haste e escudo.', answer:'Withered Knight aplica e detona Wither com o montante; a outra rota combina arma de haste, escudo, seis habilidades e resgate de aliados à distância.' },
    mercenary: { title:'Mercenary: builds de espada, escudo e martelo', description:'Rotas oficiais de ataque, defesa, carga e atordoamento.', answer:'Mercenary usa espada e escudo para bloquear, aparar e perseguir, ou martelo para carregar golpes em movimento e acumular atordoamento.' },
    shadowstrix: { title:'Shadowstrix: adagas, lâminas duplas e balanceamento', description:'Furtividade, Wound Burst e mudanças de Crow Storm.', answer:'Shadowstrix usa adagas e lâminas duplas para emboscada, explosão e feridas acumuladas; Crow Storm não encadeia controle em alvos já atordoados e terá dano menor.' },
    'holy-weapons': { title:'Holy Weapons: chefes e afixos exclusivos', description:'Como obter armas sagradas e o que diferencia seus efeitos.', answer:'Holy Weapons são saque de chefes do mapa; cada chefe possui uma arma única com afixos de jogabilidade exclusivos, ligando a rota de chefes ao avanço do build.' },
    'equipment-vouchers': { title:'Equipment Vouchers: níveis e extração', description:'Raridade, uso e propriedade do equipamento resgatado.', answer:'Os vouchers fornecem equipamento de raridade escalonada em qualquer dificuldade; propriedade e personalização só são liberadas após extrair com sucesso usando o item.' },
    'brandrgarde-cataclysm': { title:'Brandrgarde Cataclysm: risco e recompensas', description:'Elites reforçados, saque raro e pressão PvPvE.', answer:'Cataclysm é a dificuldade de alto risco de Brandrgarde, com elites mais fortes e saque excepcional; defina uma rota de extração antes de disputar os pontos valiosos.' },
    'pve-soul-revival': { title:'PvE Soul Revival: como funciona', description:'Soul Form após morte por monstros ou quedas.', answer:'Sem dano de jogador hostil, o caçador entra em Soul Form, renasce no ponto mais próximo e pode recuperar o corpo antes que desapareça; mortes PvP não se qualificam.' },
    hallowgrove: { title:'Hallowgrove: mapa e áreas principais', description:'Floresta fechada, três subáreas, Mist Lord e risco de extração.', answer:'Hallowgrove é uma floresta pálida com muita cobertura, incluindo Divine Anchor, Hastine’s Fall, Witchery Woods e uma arena central de Mist Lord; emboscadas de curta distância são frequentes.' },
    'cursed-moonwane': { title:'Sálmar, the Cursed Moonwane: chefe', description:'Encontro de duas fases apresentado no beta aberto de junho.', answer:'Sálmar, the Cursed Moonwane é um chefe de duas fases apresentado junto de Hallowgrove; estratégias do beta precisam ser confirmadas na versão de lançamento.' },
    'beta-regions-languages-controller': { title:'Beta: servidores, idiomas e controle', description:'Cinco países de servidor, dez idiomas e suporte a controle.', answer:'O beta teve servidores na China, EUA, Alemanha, Singapura e Brasil, com dez idiomas e suporte a controle; no lançamento, confirme os recursos na loja da plataforma.' },
  },
};

const common: Record<SecondLang, { verified:string; detail:string; impact:string; watch:string }> = {
  'zh-hant': { verified:'本頁內容依據官方公告與商店資料整理。', detail:'測試內容、正式版內容與未來計畫會分開標示，避免把舊測試數值當成現行規則。', impact:'此機制會影響裝備選擇、交戰路線或撤離決策。', watch:'正式上線後需再次核對技能數值、掉落與地圖位置。' },
  es: { verified:'Esta ficha se basa en anuncios oficiales y páginas de las tiendas.', detail:'Separamos datos de pruebas, contenido de lanzamiento y planes futuros para no presentar valores antiguos como reglas actuales.', impact:'La mecánica cambia la elección de equipo, la ruta de combate o la decisión de extraer.', watch:'Tras el lanzamiento deben comprobarse valores, botín y ubicaciones en el cliente activo.' },
  ru: { verified:'Страница основана на официальных объявлениях и данных магазинов.', detail:'Тестовые сведения, релизный контент и будущие планы разделены, чтобы старые значения не выдавались за действующие.', impact:'Механика влияет на выбор снаряжения, маршрут боя или решение об эвакуации.', watch:'После релиза нужно повторно проверить числа, добычу и расположение объектов.' },
  ko: { verified:'이 문서는 공식 공지와 스토어 정보를 기준으로 작성했습니다.', detail:'테스트 정보, 출시 콘텐츠와 향후 계획을 구분해 과거 수치를 현재 규칙처럼 표시하지 않습니다.', impact:'이 시스템은 장비 선택, 교전 동선 또는 탈출 판단에 영향을 줍니다.', watch:'출시 후 실제 클라이언트에서 수치, 드롭과 위치를 다시 확인해야 합니다.' },
  fr: { verified:'Cette fiche s’appuie sur les annonces officielles et les boutiques.', detail:'Les données de test, le contenu de lancement et les projets futurs sont séparés afin de ne pas présenter d’anciennes valeurs comme actuelles.', impact:'Ce système influence le choix d’équipement, le parcours de combat ou la décision d’extraire.', watch:'Après la sortie, il faudra revérifier valeurs, butin et emplacements dans le client actif.' },
  'pt-br': { verified:'Esta página usa anúncios oficiais e dados das lojas como fonte.', detail:'Dados de teste, conteúdo de lançamento e planos futuros são separados para não tratar valores antigos como regras atuais.', impact:'A mecânica altera a escolha de equipamento, a rota de combate ou a decisão de extrair.', watch:'Após o lançamento, números, saques e locais devem ser verificados novamente no cliente ativo.' },
};

export function getSecondEditionCopy(lang: SecondLang, slug: string): GameDataLocaleCopy | undefined {
  const entry = entries[lang]?.[slug as keyof typeof entries[SecondLang]];
  if (!entry) return undefined;
  const c = common[lang];
  return {
    ...entry,
    facts: [c.verified, entry.answer, c.detail],
    implications: [c.impact, c.detail],
    watch: c.watch,
  };
}

