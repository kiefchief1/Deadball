(() => {
  const STORAGE_KEYS = {
    archive: 'deadball-radio-archive',
    campaigns: 'deadball-radio-campaigns',
    customTeams: 'deadball-radio-custom-teams',
    franchise: 'deadball-radio-franchise',
    prospects: 'deadball-radio-prospects',
    tradeEval: 'deadball-radio-trade-eval',
    playoffs: 'deadball-radio-playoffs'
  };

  const PITCH_LEVELS = ['-d20', '-d12', '-d8', '-d4', 'd4', 'd8', 'd12', 'd20'];

  const DEFAULT_TEAMS = [
    {
      name: 'Williamsburg Ospreys',
      short: 'WIL',
      manager: 'Ben Rosol',
      daring: 17,
      era: 'Modern',
      lineup: [
        { name: 'Clyde Shaud, Jr.', pos: 'SS', hand: 'L', bt: 31, obt: 39, traits: ['S+'] },
        { name: 'A.B. Tongier', pos: 'LF', hand: 'R', bt: 32, obt: 39, traits: ['D+'] },
        { name: 'Ryan Fisk', pos: 'RF', hand: 'L', bt: 35, obt: 37, traits: ['C+'] },
        { name: 'Anthony Mack', pos: '2B', hand: 'R', bt: 27, obt: 30, traits: ['P+'] },
        { name: 'Larry Bucchioni', pos: 'CF', hand: 'S', bt: 30, obt: 38, traits: [] },
        { name: 'Joe Vader', pos: '1B', hand: 'R', bt: 30, obt: 34, traits: [] },
        { name: 'R.K. Dawley', pos: '3B', hand: 'L', bt: 28, obt: 36, traits: [] },
        { name: 'Amber Morris', pos: 'C', hand: 'R', bt: 24, obt: 29, traits: ['P+'] }
      ],
      starter: { name: 'Danny Rogers', role: 'SP', hand: 'R', pd: 'd12', bt: 9, obt: 14, traits: [] },
      bullpen: [
        { name: 'Rebekah Grier', role: 'RP', hand: 'L', pd: 'd12', bt: 7, obt: 12, traits: [] },
        { name: 'Sadie Hartman', role: 'RP', hand: 'L', pd: 'd8', bt: 7, obt: 11, traits: ['ST+'] },
        { name: 'Merle Bernard', role: 'RP', hand: 'R', pd: 'd8', bt: 13, obt: 17, traits: ['GB+'] }
      ]
    },
    {
      name: 'Knoxville Grackles',
      short: 'KNO',
      manager: 'John George',
      daring: 10,
      era: 'Modern',
      lineup: [
        { name: 'Mac McClintock', pos: 'SS', hand: 'R', bt: 30, obt: 37, traits: [] },
        { name: 'Denise Atkins', pos: 'RF', hand: 'R', bt: 30, obt: 37, traits: ['P++'] },
        { name: 'Drew Akers', pos: 'CF', hand: 'R', bt: 24, obt: 36, traits: [] },
        { name: 'Scott Kent', pos: '2B', hand: 'L', bt: 24, obt: 37, traits: [] },
        { name: 'Sheila Hurley', pos: 'LF', hand: 'R', bt: 26, obt: 33, traits: [] },
        { name: 'Andy Zak', pos: 'C', hand: 'R', bt: 24, obt: 31, traits: ['D+'] },
        { name: 'Michael Stahl', pos: '3B', hand: 'R', bt: 22, obt: 31, traits: ['D+'] },
        { name: 'Kate Coughlin', pos: '1B', hand: 'R', bt: 23, obt: 26, traits: [] }
      ],
      starter: { name: 'Crackerjack Allen', role: 'SP', hand: 'L', pd: 'd12', bt: 10, obt: 16, traits: [] },
      bullpen: [
        { name: 'Filip Cervantes', role: 'RP', hand: 'L', pd: 'd12', bt: 3, obt: 9, traits: ['K+'] },
        { name: 'Kiley Jaramillo', role: 'RP', hand: 'R', pd: 'd8', bt: 10, obt: 17, traits: ['GB+'] },
        { name: 'Jay Street', role: 'RP', hand: 'R', pd: 'd4', bt: 13, obt: 18, traits: ['K+'] }
      ]
    },
    {
      name: 'Paducah Red Birds',
      short: 'PAD',
      manager: 'August Haas III',
      daring: 14,
      era: 'Modern',
      lineup: [
        { name: 'K.M. Seanor', pos: 'SS', hand: 'L', bt: 34, obt: 42, traits: [] },
        { name: 'Ken Packenten', pos: 'LF', hand: 'R', bt: 35, obt: 40, traits: ['C-'] },
        { name: 'Neil Tredray', pos: 'RF', hand: 'L', bt: 30, obt: 42, traits: ['P++'] },
        { name: 'Chloe Ramsay', pos: '1B', hand: 'S', bt: 30, obt: 39, traits: ['D+'] },
        { name: 'Madyson Stuart', pos: 'CF', hand: 'L', bt: 26, obt: 35, traits: [] },
        { name: 'Matt Kerntke', pos: '3B', hand: 'R', bt: 26, obt: 33, traits: ['D+'] },
        { name: 'Lillian Varela', pos: '2B', hand: 'L', bt: 26, obt: 33, traits: [] },
        { name: 'Cary Stolarczyk', pos: 'C', hand: 'R', bt: 23, obt: 29, traits: ['D+'] }
      ],
      starter: { name: 'Gwendolyn Ellis', role: 'SP', hand: 'R', pd: 'd12', bt: 18, obt: 23, traits: [] },
      bullpen: [
        { name: 'Caldwell Akers', role: 'RP', hand: 'R', pd: 'd12', bt: 7, obt: 12, traits: ['K+'] },
        { name: 'Euan Clark', role: 'RP', hand: 'R', pd: 'd8', bt: 7, obt: 12, traits: [] },
        { name: 'Charlene Collins', role: 'RP', hand: 'L', pd: 'd8', bt: 6, obt: 8, traits: [] }
      ]
    },
    {
      name: 'Cooper River Chickadees',
      short: 'COO',
      manager: 'Rogen Jemi',
      daring: 9,
      era: 'Modern',
      lineup: [
        { name: 'Keiron Peskett', pos: 'CF', hand: 'S', bt: 31, obt: 39, traits: [] },
        { name: 'Rogen Jemi', pos: 'LF', hand: 'S', bt: 34, obt: 44, traits: ['C+', 'P-'] },
        { name: 'Sam Fishell', pos: 'C', hand: 'L', bt: 32, obt: 40, traits: ['D+'] },
        { name: 'Thunder Wells', pos: '3B', hand: 'S', bt: 28, obt: 40, traits: ['P+'] },
        { name: 'Ian White', pos: '2B', hand: 'S', bt: 30, obt: 37, traits: ['P+'] },
        { name: 'Zelda Myslak', pos: 'RF', hand: 'R', bt: 28, obt: 37, traits: ['C+'] },
        { name: 'Cooper Plagens', pos: 'SS', hand: 'R', bt: 24, obt: 39, traits: ['D+'] },
        { name: 'Charles Pearson', pos: '1B', hand: 'L', bt: 26, obt: 33, traits: ['P+', 'S-'] }
      ],
      starter: { name: 'Waldemar Pedersen', role: 'SP', hand: 'L', pd: 'd12', bt: 23, obt: 28, traits: ['ST+'] },
      bullpen: [
        { name: 'Rob Zigenhagen', role: 'RP', hand: 'L', pd: 'd8', bt: 9, obt: 13, traits: [] },
        { name: 'Acadia LeQuire', role: 'RP', hand: 'R', pd: 'd8', bt: 13, obt: 20, traits: ['ST+'] },
        { name: 'Kylie Coe', role: 'RP', hand: 'R', pd: 'd8', bt: 6, obt: 11, traits: [] }
      ]
    },
    {
      name: 'Tallahassee Wrens',
      short: 'TAL',
      manager: 'James McInnes',
      daring: 12,
      era: 'Modern',
      lineup: [
        { name: 'B.L. Coffin', pos: 'SS', hand: 'R', bt: 33, obt: 40, traits: [] },
        { name: 'Gabby Lewis', pos: '1B', hand: 'S', bt: 25, obt: 35, traits: ['P+'] },
        { name: 'Bryce Carter', pos: '2B', hand: 'L', bt: 26, obt: 33, traits: ['P++'] },
        { name: 'David Pruitt V', pos: 'LF', hand: 'R', bt: 26, obt: 35, traits: [] },
        { name: 'Amber Morris', pos: 'C', hand: 'R', bt: 26, obt: 35, traits: ['P+'] },
        { name: 'Garret Myhan', pos: '3B', hand: 'R', bt: 25, obt: 29, traits: ['D+'] },
        { name: 'Terry Caniff', pos: 'CF', hand: 'L', bt: 22, obt: 29, traits: ['D+', 'P-'] },
        { name: 'Alexa Mooney', pos: 'RF', hand: 'L', bt: 18, obt: 27, traits: ['D+'] }
      ],
      starter: { name: 'Alyssa Romano', role: 'SP', hand: 'R', pd: 'd12', bt: 13, obt: 20, traits: ['K+'] },
      bullpen: [
        { name: 'BenJac Janeway', role: 'RP', hand: 'R', pd: 'd8', bt: 4, obt: 7, traits: ['K+', 'ST+'] },
        { name: 'Sam Sizemore', role: 'RP', hand: 'L', pd: 'd8', bt: 5, obt: 9, traits: [] },
        { name: 'Ori Bando', role: 'RP', hand: 'L', pd: 'd4', bt: 14, obt: 17, traits: [] }
      ]
    }
  ];

  const SOURCEBOOK_MODULES = [
    {
      title: 'Single Exhibition Game',
      status: 'Implemented now',
      detail: 'Responsive solo game mode with play-by-play radio call, box score, local archive saving, and a magazine-style recap.'
    },
    {
      title: 'Nine Game Pennant',
      status: 'Campaign templates included',
      detail: 'The uploaded books and supplements repeatedly frame Nine Game Pennant as the fastest, most exciting way to play, with prebuilt stretches for 2018, 2020, 2022, 1910, 1912, and 1913.'
    },
    {
      title: 'Franchise Builder',
      status: 'Planned next',
      detail: 'Your Year II materials include club, ballpark, manager, fanbase, and roster generation tools, which fit naturally into an in-app franchise sandbox.'
    },
    {
      title: 'Season Play Toolkit',
      status: 'Planned next',
      detail: 'Second Edition season play rules support Team Score simulation, standings generation, prospects, trades, and long-running leagues.'
    },
    {
      title: 'Oddities and Injuries',
      status: 'Implemented now',
      detail: 'Modern-era oddities like balks, wild pitches, fan interference, dropped third strikes, and injuries are built into this prototype as an optional layer.'
    },
    {
      title: 'Dirty Play Layer',
      status: 'Planned next',
      detail: 'Year II and the quick reference add headhunting, brawls, take-out slides, and showing off, which can become optional high-chaos rulesets.'
    },
    {
      title: 'All-Star and Legends Games',
      status: 'Planned next',
      detail: 'Your zips include all-star rosters, legends games, Ring of Honor material, and extra showcase play that fits special event scheduling.'
    },
    {
      title: 'Narrative Side Content',
      status: 'Planned next',
      detail: 'Year IV includes stories, mysteries, and ballpark fiction that could inspire campaign interludes, season news pages, and between-game flavor.'
    },
    {
      title: 'Old Hollywood and Special Theme Teams',
      status: 'Planned next',
      detail: 'The Second Edition supplements include themed teams and teaching materials that could become unlockable quick-play packs.'
    }
  ];

  const CAMPAIGN_TEMPLATES = [
    { id: 'freeplay', name: 'Free Play Journal', description: 'Track exhibition games, notes, and recaps without standings.' },
    { id: 'ngp2022', name: 'Nine Game Pennant 2022', description: 'Source-backed stretch run for the 2022 Southern Circuit.' },
    { id: 'ngp2020', name: 'Nine Game Pennant 2020', description: 'Source-backed stretch run for the 2020 Southern Circuit.' },
    { id: 'ngp2018', name: 'Nine Game Pennant 2018', description: 'Source-backed stretch run for the 2018 Southern Circuit.' },
    { id: 'ngp1913', name: 'Nine Game Pennant 1913', description: 'Ancient-era pennant chase from the Second Edition materials.' },
    { id: 'ngp1912', name: 'Nine Game Pennant 1912', description: 'Ancient-era pennant chase from Year IV supplements.' },
    { id: 'ngp1910', name: 'Nine Game Pennant 1910', description: 'Ancient-era pennant chase from Year II supplements.' },
    { id: 'franchise', name: 'Franchise Sandbox', description: 'For a long-running club, prospects, trades, injuries, and house rules.' },
    { id: 'season', name: 'Season Tracker', description: 'For a custom league using Team Score simulation between played games.' },
    { id: 'special', name: 'Special Event Set', description: 'All-Star, legends, Ring of Honor, or Old Hollywood exhibitions.' }
  ];

  const ui = {};
  let archive = readJson(STORAGE_KEYS.archive, []);
  let campaigns = readJson(STORAGE_KEYS.campaigns, []);
  let customTeams = readJson(STORAGE_KEYS.customTeams, []);
  let currentFranchise = readJson(STORAGE_KEYS.franchise, null);
  let prospectBoard = readJson(STORAGE_KEYS.prospects, []);
  let tradeEval = readJson(STORAGE_KEYS.tradeEval, null);
  let playoffBracket = readJson(STORAGE_KEYS.playoffs, null);
  let currentGame = null;

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    bindUi();
    renderTabs();
    refreshTeamSelectors();
    populateCampaignSelectors();
    renderArchive();
    renderCampaigns();
    renderSourcebook();
    renderTeams();
    populateFrontOfficeSelectors();
    populatePlayoffSelectors();
    renderFranchise();
    renderFrontOffice();
    renderPlayoffs();
    renderDeploy();
    ui.loadExampleBtn.addEventListener('click', loadExampleJson);
    ui.importTeamBtn.addEventListener('click', importTeamJson);
    ui.newGameBtn.addEventListener('click', startNewGame);
    ui.saveGameBtn.addEventListener('click', saveCurrentGame);
    ui.clearArchiveBtn.addEventListener('click', clearArchive);
    ui.createCampaignBtn.addEventListener('click', createCampaign);
    ui.clearLogBtn.addEventListener('click', () => { if (currentGame) renderLog(currentGame.logs.slice(-30)); });
    ui.swingBtn.addEventListener('click', () => playAction('swing'));
    ui.buntBtn.addEventListener('click', () => playAction('bunt'));
    ui.stealBtn.addEventListener('click', () => playAction('steal'));
    ui.hitRunBtn.addEventListener('click', () => playAction('hitrun'));
    ui.autoHalfBtn.addEventListener('click', () => autoPlayHalfInning());
    ui.autoGameBtn.addEventListener('click', () => autoPlayGame());
    ui.generateFranchiseBtn?.addEventListener('click', generateFranchise);
    ui.saveFranchiseBtn?.addEventListener('click', saveFranchiseAsTeam);
    ui.foTeamSelect?.addEventListener('change', renderFrontOffice);
    ui.tradePartnerSelect?.addEventListener('change', renderFrontOffice);
    ui.evaluateTradeBtn?.addEventListener('click', evaluateTrade);
    ui.applyTradeBtn?.addEventListener('click', applyTrade);
    ui.generateProspectsBtn?.addEventListener('click', generateProspects);
    ui.draftProspectBtn?.addEventListener('click', draftProspect);
    ui.generateBracketBtn?.addEventListener('click', generateBracket);
    ui.simulateBracketBtn?.addEventListener('click', simulateBracket);
    if (!campaigns.length) {
      const starterCampaign = {
        id: makeId(),
        name: 'Free Play Journal',
        templateId: 'freeplay',
        description: CAMPAIGN_TEMPLATES[0].description,
        notes: 'Default journal for saved exhibition games.',
        games: [],
        createdAt: new Date().toISOString()
      };
      campaigns.push(starterCampaign);
      persistCampaigns();
      renderCampaigns();
      populateCampaignSelectors();
    }
    startNewGame();
  }

  function bindUi() {
    const ids = [
      'awaySelect', 'homeSelect', 'campaignSelect', 'odditiesToggle', 'newGameBtn', 'saveGameBtn', 'heroBoard', 'scoreboard', 'diamond', 'countbox',
      'statusBar', 'matchupCard', 'lineupRail', 'headlineRail', 'log', 'boxscore', 'recap', 'archiveList', 'clearArchiveBtn', 'campaignName', 'campaignTemplate',
      'campaignNotes', 'createCampaignBtn', 'campaignList', 'sourcebookContent', 'teamList', 'teamJson', 'loadExampleBtn', 'importTeamBtn',
      'swingBtn', 'buntBtn', 'stealBtn', 'hitRunBtn', 'autoHalfBtn', 'autoGameBtn', 'clearLogBtn',
      'frEra','frCity','frMascot','frBallpark','frManager','frSaveName','generateFranchiseBtn','saveFranchiseBtn','franchiseOutput',
      'foTeamSelect','tradePartnerSelect','rosterOutput','tradeSendSelect','tradeReceiveSelect','evaluateTradeBtn','applyTradeBtn','tradeResult',
      'draftTeamSelect','draftCount','generateProspectsBtn','draftProspectBtn','prospectOutput',
      'playoffCampaignSelect','playoffSize','playoffSeriesLength','generateBracketBtn','simulateBracketBtn','playoffOutput','deployOutput'
    ];
    ids.forEach(id => ui[id] = document.getElementById(id));
    document.querySelectorAll('.tab').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
      });
    });
  }

  function renderTabs() {
    CAMPAIGN_TEMPLATES.forEach(template => {
      const option = document.createElement('option');
      option.value = template.id;
      option.textContent = template.name;
      ui.campaignTemplate.appendChild(option);
    });
  }

  function getAllTeams() {
    return [...DEFAULT_TEAMS, ...customTeams];
  }

  function refreshTeamSelectors() {
    const teams = getAllTeams();
    [ui.awaySelect, ui.homeSelect].forEach(select => select.innerHTML = '');
    teams.forEach((team, idx) => {
      const optAway = document.createElement('option');
      optAway.value = team.name;
      optAway.textContent = team.name;
      ui.awaySelect.appendChild(optAway);
      const optHome = document.createElement('option');
      optHome.value = team.name;
      optHome.textContent = team.name;
      ui.homeSelect.appendChild(optHome);
      if (idx === 0) ui.awaySelect.value = team.name;
      if (idx === 1) ui.homeSelect.value = team.name;
    });
    if (teams.length === 1) ui.homeSelect.value = teams[0].name;
  }

  function populateCampaignSelectors() {
    ui.campaignSelect.innerHTML = '';
    campaigns.forEach(campaign => {
      const option = document.createElement('option');
      option.value = campaign.id;
      option.textContent = campaign.name;
      ui.campaignSelect.appendChild(option);
    });
  }

  function startNewGame() {
    const away = findTeamByName(ui.awaySelect.value) || getAllTeams()[0];
    const home = findTeamByName(ui.homeSelect.value) || getAllTeams()[1] || getAllTeams()[0];
    const awayWorking = buildWorkingTeam(away);
    const homeWorking = buildWorkingTeam(home);
    currentGame = {
      id: makeId(),
      createdAt: new Date().toISOString(),
      campaignId: ui.campaignSelect.value || null,
      useOddities: !!ui.odditiesToggle.checked,
      away: awayWorking,
      home: homeWorking,
      inning: 1,
      half: 'top',
      outs: 0,
      bases: [null, null, null],
      score: { away: 0, home: 0 },
      hits: { away: 0, home: 0 },
      errors: { away: 0, home: 0 },
      lineScore: { away: [], home: [] },
      logs: [],
      events: [],
      leadChanges: 0,
      previousLeader: null,
      over: false,
      recap: '',
      visibleLogCount: 40
    };
    ensureInningSlots(currentGame);
    logPlay(currentGame, `Good evening from the radio booth. ${awayWorking.name} meet ${homeWorking.name}, and the scorebook is fresh.`, { type: 'intro' });
    updateUi();
  }

  function buildWorkingTeam(team) {
    const working = clone(team);
    working.lineup = team.lineup.map(player => decorateBatter(player));
    working.bullpen = team.bullpen.map(pitcher => decoratePitcher(pitcher));
    working.pitcher = decoratePitcher(team.starter);
    working.lineup.push(decorateBatter({
      name: working.pitcher.name,
      pos: 'P',
      hand: working.pitcher.hand,
      bt: working.pitcher.bt,
      obt: working.pitcher.obt,
      traits: working.pitcher.traits || []
    }));
    working.battingIndex = 0;
    working.teamBatting = createEmptyBattingBook(working.lineup);
    working.teamPitching = createEmptyPitchingBook([working.pitcher, ...working.bullpen]);
    return working;
  }

  function decorateBatter(player) {
    return { ...clone(player), ab: 0, h: 0, bb: 0, r: 0, rbi: 0, hr: 0, k: 0, notes: [] };
  }

  function decoratePitcher(player) {
    return {
      ...clone(player),
      currentPd: player.pd,
      basePd: player.pd,
      outsRecorded: 0,
      inningsCompleted: 0,
      hitsAllowed: 0,
      runsAllowed: 0,
      walksAllowed: 0,
      strikeouts: 0,
      appearanceRunsThisInning: 0,
      inningStrikeouts: 0,
      inningBatters: 0,
      consecutiveScorelessInnings: 0,
      jamActive: false,
      inningThreeRunPenaltyApplied: false,
      appearanceRole: player.role || 'RP'
    };
  }

  function createEmptyBattingBook(lineup) {
    const book = {};
    lineup.forEach(player => {
      book[player.name] = { name: player.name, pos: player.pos, ab: 0, h: 0, bb: 0, r: 0, rbi: 0, hr: 0, k: 0 };
    });
    return book;
  }

  function createEmptyPitchingBook(pitchers) {
    const book = {};
    pitchers.forEach(pitcher => {
      book[pitcher.name] = { name: pitcher.name, ipOuts: 0, h: 0, r: 0, bb: 0, k: 0, startPd: pitcher.pd };
    });
    return book;
  }

  function playAction(action) {
    if (!currentGame || currentGame.over) return;
    if (action === 'steal') {
      resolveSteal(currentGame);
    } else if (action === 'bunt') {
      resolveBunt(currentGame);
    } else if (action === 'hitrun') {
      resolveHitAndRun(currentGame);
    } else {
      resolveSwing(currentGame, { via: action });
    }
    updateUi();
  }

  function autoPlayHalfInning() {
    if (!currentGame || currentGame.over) return;
    const halfMarker = `${currentGame.half}-${currentGame.inning}`;
    let safety = 0;
    while (!currentGame.over && `${currentGame.half}-${currentGame.inning}` === halfMarker && safety < 200) {
      const action = chooseAiAction(currentGame);
      playAction(action);
      safety += 1;
    }
  }

  function autoPlayGame() {
    if (!currentGame || currentGame.over) return;
    let safety = 0;
    while (!currentGame.over && safety < 3000) {
      const action = chooseAiAction(currentGame);
      playAction(action);
      safety += 1;
    }
  }

  function chooseAiAction(game) {
    const offense = teamAtBat(game);
    const batter = currentBatter(game);
    const daring = offense.daring || 10;
    const lateClose = game.inning >= 7 && Math.abs(game.score.away - game.score.home) <= 2;
    if (game.bases[0] && !game.bases[1] && batter && (hasTrait(game.bases[0], 'S+') || daring >= 15) && Math.random() < (lateClose ? 0.35 : 0.18)) {
      return 'steal';
    }
    if (game.bases[0] && !game.bases[1] && game.outs === 0 && daring >= 14 && Math.random() < 0.12) {
      return 'hitrun';
    }
    if ((game.bases[0] || game.bases[1]) && game.outs < 2 && batter.bt <= 24 && Math.random() < (lateClose ? 0.18 : 0.08)) {
      return 'bunt';
    }
    return 'swing';
  }

  function resolveSteal(game) {
    const offense = teamAtBat(game);
    const target = chooseStealTarget(game);
    if (!target) {
      resolveSwing(game, { via: 'fallback-after-no-steal' });
      return;
    }
    const runner = game.bases[target.from];
    let roll = rollDie(8);
    if (target.to === 2) roll -= 1;
    if (target.to === 3) {
      roll = rollDie(8);
      if (!hasTrait(runner, 'S+')) {
        logPlay(game, `${runner.name} gets a daring idea about home, thinks better of it, and everybody exhales.`, { type: 'flavor' });
        return;
      }
    }
    roll += stealModifier(game, runner);
    const catcher = getDefender(teamFielding(game), 'C');
    if (catcher && hasTrait(catcher, 'D+')) roll -= 1;
    if (catcher && hasTrait(catcher, 'D-')) roll += 1;
    const safe = roll >= 4;
    if (safe) {
      game.bases[target.from] = null;
      if (target.to === 3) {
        scoreRunner(game, runner, { team: offense, batter: null, kind: 'steal-home' });
        logPlay(game, `${runner.name} breaks for the plate and beats the throw with a headfirst slide. He steals home and the booth nearly loses its mind.`, { type: 'scoring' });
      } else {
        game.bases[target.to] = runner;
        const baseName = ['first', 'second', 'third'][target.to];
        logPlay(game, `${runner.name} is off with the pitch, the throw comes ${sample(['late', 'high', 'to the short side', 'with a hop'])}, and he steals ${baseName}.`, { type: 'baserunning' });
      }
    } else {
      game.bases[target.from] = null;
      recordOut(game, offense, teamFielding(game), { notation: 'CS', text: `${runner.name} tries to steal and is cut down on the bases.` });
      logPlay(game, `${runner.name} takes off, but the catcher puts it right on the bag and the runner is out by a stride.`, { type: 'baserunning' });
      if (!game.over && game.outs >= 3) endHalfInning(game);
    }
  }

  function chooseStealTarget(game) {
    if (game.bases[2] && hasTrait(game.bases[2], 'S+')) return { from: 2, to: 3 };
    if (game.bases[1] && !game.bases[2]) return { from: 1, to: 2 };
    if (game.bases[0] && !game.bases[1]) return { from: 0, to: 1 };
    return null;
  }

  function resolveBunt(game) {
    const offense = teamAtBat(game);
    const batter = currentBatter(game);
    if (!game.bases[0] && !game.bases[1] && !game.bases[2]) {
      resolveSwing(game, { via: 'fallback-after-empty-bunt' });
      return;
    }
    const raw = rollDie(6);
    const mod = hasTrait(batter, 'C+') ? 1 : hasTrait(batter, 'C-') ? -1 : 0;
    const roll = raw + mod;
    const leadBase = game.bases[2] ? 2 : game.bases[1] ? 1 : 0;
    const leadRunner = game.bases[leadBase];
    batterBook(game, offense, batter.name).ab += 1;
    batterBook(game, offense, batter.name).name = batter.name;
    if (roll <= 2) {
      if (leadBase === 2 || leadBase === 1 || leadBase === 0) {
        game.bases[leadBase] = null;
        if (leadBase === 0) game.bases[0] = batter;
        else game.bases[0] = batter;
        batterBook(game, offense, batter.name).h += 0;
        logPlay(game, `${batter.name} deadens the bunt perfectly, the defense goes to the lead runner, and ${batter.name} reaches first safely.`, { type: 'bunt' });
        advanceBatterIndex(game);
        return;
      }
    }
    if (roll === 3 && leadBase === 2) {
      game.bases[leadBase] = null;
      game.bases[0] = batter;
      logPlay(game, `${batter.name} drops the bunt down the third-base side. The defense gets the runner breaking from third, but the batter reaches first.`, { type: 'bunt' });
      advanceBatterIndex(game);
      return;
    }
    if (roll >= 6 && hasTrait(batter, 'S+')) {
      const defTeam = teamFielding(game);
      const def = defenseRoll(getDefender(defTeam, '3B'));
      if (def >= 12) {
        recordOut(game, offense, defTeam, { notation: '5-3', text: `${batter.name} bunts for a hit but is thrown out by the third baseman.` });
        logPlay(game, `${batter.name} tries to bunt for a hit, but the third baseman charges hard and nips him at first.`, { type: 'bunt' });
      } else {
        hitSingle(game, offense, batter, { adv2: false, fromBunt: true });
        logPlay(game, `${batter.name} shows bunt, deadens it, and legs it out. That is a beauty of a bunt single.`, { type: 'bunt' });
      }
      advanceBatterIndex(game);
      if (!game.over && game.outs >= 3) endHalfInning(game);
      return;
    }
    sacrificeAdvance(game, offense, batter, leadBase);
  }

  function sacrificeAdvance(game, offense, batter, leadBase) {
    const runnerNames = [];
    if (leadBase === 0 && game.bases[0]) {
      game.bases[1] = game.bases[0];
      game.bases[0] = null;
      runnerNames.push(game.bases[1].name);
    } else if (leadBase === 1 && game.bases[1]) {
      game.bases[2] = game.bases[1];
      game.bases[1] = null;
      runnerNames.push(game.bases[2].name);
      if (game.bases[0]) { game.bases[1] = game.bases[0]; game.bases[0] = null; }
    } else if (leadBase === 2 && game.bases[2]) {
      const runner = game.bases[2];
      game.bases[2] = null;
      scoreRunner(game, runner, { team: offense, batter, kind: 'sac-bunt-rbi' });
      batterBook(game, offense, batter.name).rbi += 1;
      runnerNames.push(runner.name);
      if (game.bases[1]) { game.bases[2] = game.bases[1]; game.bases[1] = null; }
      if (game.bases[0]) { game.bases[1] = game.bases[0]; game.bases[0] = null; }
    }
    batterBook(game, offense, batter.name).ab += 1;
    recordOut(game, offense, teamFielding(game), { notation: 'SAC', text: `${batter.name} bunts and is retired, but moves the runners along.` });
    logPlay(game, `${batter.name} gives himself up with a neat sacrifice bunt, and the runners are moved into better country${runnerNames.length ? `, including ${runnerNames.join(', ')}` : ''}.`, { type: 'bunt' });
    advanceBatterIndex(game);
    if (!game.over && game.outs >= 3) endHalfInning(game);
  }

  function resolveHitAndRun(game) {
    if (!game.bases[0]) {
      resolveSwing(game, { via: 'fallback-after-no-hitrun' });
      return;
    }
    const offense = teamAtBat(game);
    const defense = teamFielding(game);
    const batter = currentBatter(game);
    const runner = game.bases[0];
    let stealRoll = rollDie(8) + stealModifier(game, runner);
    const catcher = getDefender(defense, 'C');
    if (catcher && hasTrait(catcher, 'D+')) stealRoll -= 1;
    if (catcher && hasTrait(catcher, 'D-')) stealRoll += 1;
    const stealSuccess = stealRoll >= 4;
    const atBat = resolveAtBatResult(game, batter, defense.pitcher, 5 + (hasTrait(batter, 'C+') ? 5 : 0));
    const bBook = batterBook(game, offense, batter.name);
    if (atBat.type === 'hit') {
      bBook.ab += 1;
      bBook.h += 1;
      game.hits[sideKey(offense, game)] += 1;
      pitcherBook(game, defense, defense.pitcher.name).h += 1;
      defense.pitcher.hitsAllowed += 1;
      game.bases[0] = batter;
      game.bases[1] = stealSuccess ? null : runner;
      game.bases[2] = stealSuccess ? runner : null;
      logPlay(game, `${batter.name} was swinging from the jump on the hit-and-run, and it works. ${runner.name} tears around the bag while the batter shoots the ball into play, leaving runners ${stealSuccess ? 'at the corners' : 'at first and second'}.`, { type: 'baserunning' });
      advanceBatterIndex(game);
      return;
    }
    bBook.ab += atBat.countsAsAB ? 1 : 0;
    if (isFlyOrStrikeout(atBat.outNotation)) {
      if (atBat.outNotation === 'K') {
        bBook.k += 1;
        defense.pitcher.strikeouts += 1;
        defense.pitcher.inningStrikeouts += 1;
        pitcherBook(game, defense, defense.pitcher.name).k += 1;
      }
      recordOut(game, offense, defense, { notation: atBat.outNotation, text: atBat.outText });
      if (!stealSuccess) {
        game.bases[0] = null;
        recordAdditionalOut(game, runner.name);
        logPlay(game, `${batter.name} cannot protect the runner. The hit-and-run turns into a tailor-made double play.`, { type: 'baserunning' });
      } else {
        logPlay(game, `${batter.name} is retired, but ${runner.name} got back in time and remains at first.`, { type: 'baserunning' });
      }
      advanceBatterIndex(game);
      if (!game.over && game.outs >= 3) endHalfInning(game);
      return;
    }
    recordOut(game, offense, defense, { notation: atBat.outNotation, text: atBat.outText });
    if (stealSuccess) {
      game.bases[0] = null;
      game.bases[1] = runner;
      logPlay(game, `${batter.name} pounds it on the infield and is retired, but ${runner.name} keeps charging into second.`, { type: 'baserunning' });
    } else {
      game.bases[0] = null;
      recordAdditionalOut(game, runner.name);
      logPlay(game, `${batter.name} rolls it on the infield, and the hit-and-run collapses into a double play.`, { type: 'baserunning' });
    }
    advanceBatterIndex(game);
    if (!game.over && game.outs >= 3) endHalfInning(game);
  }

  function resolveSwing(game, options = {}) {
    const offense = teamAtBat(game);
    const defense = teamFielding(game);
    maybeChangePitcher(game, defense);
    const batter = currentBatter(game);
    const result = resolveAtBatResult(game, batter, defense.pitcher, 0);
    applyAtBatResult(game, offense, defense, batter, result, options);
    if (!game.over && game.outs >= 3) endHalfInning(game);
  }

  function resolveAtBatResult(game, batter, pitcher, extraObtBonus = 0) {
    const swing = rollDie(100);
    const batterSide = batter.hand === 'S' ? (pitcher.hand === 'L' ? 'R' : 'L') : batter.hand;
    const effectiveBt = adjustedBt(game, batter, pitcher) + (hasTrait(batter, 'C+') && extraObtBonus === 10 ? 10 : 0);
    const effectiveObt = adjustedObt(game, batter, pitcher) + extraObtBonus;
    const effectivePd = matchupPitchDie(pitcher.currentPd, pitcher.appearanceRole, pitcher.hand, batterSide);
    const pitchRoll = rollPitchDie(effectivePd);
    const mss = swing + pitchRoll;
    const meta = { swing, pitchRoll, mss, effectiveBt, effectiveObt, effectivePd };

    if (game.useOddities && (mss === 1 || mss === 99)) {
      return { type: 'oddity', meta, oddity: rollOddity() };
    }
    if (mss <= 5) {
      const hit = resolveHitRoll(batter, true);
      return { type: 'hit', hitKind: hit.kind, meta, critical: true };
    }
    if (mss <= effectiveBt) {
      const hit = resolveHitRoll(batter, false);
      return { type: 'hit', hitKind: hit.kind, meta, critical: false };
    }
    if (mss <= effectiveObt) {
      return { type: 'walk', meta };
    }
    if (mss <= effectiveObt + 5) {
      return { type: 'possibleError', meta };
    }
    return resolveOutFromMss(game, batter, pitcher, mss, meta);
  }

  function applyAtBatResult(game, offense, defense, batter, result) {
    const bBook = batterBook(game, offense, batter.name);
    if (result.type === 'oddity') {
      handleOddity(game, offense, defense, batter, result);
      return;
    }
    if (result.type === 'walk') {
      bBook.bb += 1;
      defense.pitcher.walksAllowed += 1;
      pitcherBook(game, defense, defense.pitcher.name).bb += 1;
      forceWalk(game, offense, batter);
      logPlay(game, `${batter.name} works the count, takes ball four, and trots to first with the quiet confidence of a hitter who won the at-bat early.`, { type: 'plate', meta: pitchMeta(result.meta) });
      advanceBatterIndex(game);
      return;
    }
    if (result.type === 'possibleError') {
      bBook.ab += 1;
      const fielder = errorFielderFromMss(defense, result.meta.mss);
      const def = defenseRoll(fielder);
      if (def <= 2) {
        game.errors[sideKey(defense, game)] += 1;
        forceErrorReach(game, offense, batter);
        logPlay(game, `${batter.name} sends a tricky chance toward ${fielder.name}, and it kicks away. An error puts the batter aboard and everyone moves up a station.`, { type: 'scoring', meta: pitchMeta(result.meta) });
      } else {
        const notation = fielderOutNotation(fielder);
        recordOut(game, offense, defense, { notation, text: `${batter.name} is retired on a routine chance.` });
        logPlay(game, `${batter.name} makes ${fielder.name} hurry, but the fielder gathers himself and gets the out.`, { type: 'fielding', meta: pitchMeta(result.meta) });
      }
      advanceBatterIndex(game);
      return;
    }
    if (result.type === 'hit') {
      bBook.ab += 1;
      if (result.hitKind === 'single') hitSingle(game, offense, batter, {});
      if (result.hitKind === 'single2') hitSingle(game, offense, batter, { adv2: true });
      if (result.hitKind === 'double') hitDouble(game, offense, batter, {});
      if (result.hitKind === 'double3') hitDouble(game, offense, batter, { adv3: true });
      if (result.hitKind === 'triple') hitTriple(game, offense, batter, {});
      if (result.hitKind === 'homeRun') hitHomeRun(game, offense, batter, {});
      const criticalText = result.critical ? ' It was a critical hit, and the ballpark gasp came a half-second after the crack of the bat.' : '';
      logPlay(game, describeHit(game, offense, defense, batter, result.hitKind) + criticalText, { type: result.hitKind === 'homeRun' ? 'scoring' : 'plate', meta: pitchMeta(result.meta) });
      advanceBatterIndex(game);
      return;
    }
    bBook.ab += result.countsAsAB ? 1 : 0;
    if (result.outNotation === 'K') {
      bBook.k += 1;
      defense.pitcher.strikeouts += 1;
      defense.pitcher.inningStrikeouts += 1;
      pitcherBook(game, defense, defense.pitcher.name).k += 1;
    }
    handleOutResult(game, offense, defense, batter, result);
    advanceBatterIndex(game);
  }

  function handleOutResult(game, offense, defense, batter, result) {
    const mss = result.meta.mss;
    const outPos = result.outPos;
    if (mss <= 49) {
      if (game.bases[0] && isInfieldOut(outPos)) {
        game.bases[1] = game.bases[0];
        game.bases[0] = null;
        recordOut(game, offense, defense, { notation: result.outNotation, text: result.outText });
        logPlay(game, `${batter.name} is retired, but the runner from first advances on the infield out.`, { type: 'fielding', meta: pitchMeta(result.meta) });
        return;
      }
      if (canProductiveOutAdvance(outPos)) {
        const runs = productiveAdvance(game, offense, batter, false);
        recordOut(game, offense, defense, { notation: result.outNotation, text: result.outText });
        if (runs > 0) batterBook(game, offense, batter.name).rbi += runs;
        logPlay(game, `${batter.name} is out, but it is the useful kind of out. The runners move up and the offense wrings value from the plate appearance.`, { type: runs ? 'scoring' : 'fielding', meta: pitchMeta(result.meta) });
        return;
      }
    }
    if (mss <= 69) {
      if (game.bases[0] && isInfieldOut(outPos)) {
        const runner = game.bases[0];
        game.bases[0] = batter;
        recordOut(game, offense, defense, { notation: 'FC', text: `${runner.name} is forced out and ${batter.name} reaches on a fielder's choice.` });
        logPlay(game, `${batter.name} chops it to the infield. The defense takes the sure out on ${runner.name}, and ${batter.name} is safe at first on the fielder's choice.`, { type: 'fielding', meta: pitchMeta(result.meta) });
        return;
      }
      if (canProductiveOutAdvance(outPos)) {
        const runs = productiveAdvance(game, offense, batter, false);
        recordOut(game, offense, defense, { notation: result.outNotation, text: result.outText });
        if (runs > 0) batterBook(game, offense, batter.name).rbi += runs;
        logPlay(game, `${batter.name} makes an out, but the ball was deep enough to let the runners creep forward.`, { type: runs ? 'scoring' : 'fielding', meta: pitchMeta(result.meta) });
        return;
      }
    }
    if (mss >= 100 && game.bases[0] && game.bases[1] && isInfieldOut(outPos)) {
      const runnerOne = game.bases[0];
      const runnerTwo = game.bases[1];
      game.bases[0] = null;
      game.bases[1] = null;
      recordOut(game, offense, defense, { notation: result.outNotation, text: result.outText });
      recordAdditionalOut(game, runnerOne.name);
      recordAdditionalOut(game, runnerTwo.name);
      logPlay(game, `${batter.name} pounds a nightmare grounder at the defense, and somehow it becomes a triple play. The inning vanishes in an instant.`, { type: 'fielding', meta: pitchMeta(result.meta) });
      return;
    }
    if (mss >= 70 && game.bases[0] && isInfieldOut(outPos)) {
      const runner = game.bases[0];
      game.bases[0] = null;
      recordOut(game, offense, defense, { notation: result.outNotation, text: result.outText });
      recordAdditionalOut(game, runner.name);
      logPlay(game, `${batter.name} sends up a double-play ball, and the defense turns two with practiced coldness.`, { type: 'fielding', meta: pitchMeta(result.meta) });
      return;
    }
    recordOut(game, offense, defense, { notation: result.outNotation, text: result.outText });
    const flyText = result.outNotation.startsWith('F') ? `${batter.name} lifts it into the outfield, but there will be no advance on that one.` : `${batter.name} is retired and the runners are frozen where they stand.`;
    logPlay(game, flyText, { type: 'fielding', meta: pitchMeta(result.meta) });
  }

  function handleOddity(game, offense, defense, batter, result) {
    const oddity = result.oddity;
    const bBook = batterBook(game, offense, batter.name);
    const meta = pitchMeta(result.meta);
    const pitcher = defense.pitcher;
    switch (oddity.roll) {
      case 2:
        if (pdIsEven(pitcher.currentPd)) {
          bBook.ab += 1;
          recordOut(game, offense, defense, { notation: 'FAN', text: 'Fan interference overturns the would-be big fly.' });
          logPlay(game, `Would-be glory is snatched from the sky by fan interference. The crowd gasps, the homer is erased, and ${batter.name} is out.`, { type: 'oddity', meta });
          advanceBatterIndex(game);
        } else {
          logPlay(game, `A fan leans into the drama and chaos follows, but the batter stays alive and the at-bat continues.`, { type: 'oddity', meta });
          resolveSwing(game, { via: 'oddity-reroll' });
        }
        break;
      case 3:
        logPlay(game, `An animal delay steals the scene for a moment. The crowd roars, the players laugh, and the game regains its posture.`, { type: 'oddity', meta });
        resolveSwing(game, { via: 'oddity-reroll' });
        break;
      case 4:
        logPlay(game, `A rain delay blows through the radio booth like an old story. After the pause, the game resumes.`, { type: 'oddity', meta });
        resolveSwing(game, { via: 'oddity-reroll' });
        break;
      case 5:
        injuryNote(game, defense, randomFielder(defense), 'fielder');
        resolveSwing(game, { via: 'oddity-reroll' });
        break;
      case 6:
        injuryNote(game, defense, pitcher, 'pitcher');
        resolveSwing(game, { via: 'oddity-reroll' });
        break;
      case 7:
        if (game.bases[2] || game.bases[1] || game.bases[0]) {
          const leadIndex = game.bases[2] ? 2 : game.bases[1] ? 1 : 0;
          const runner = game.bases[leadIndex];
          game.bases[leadIndex] = null;
          recordOut(game, offense, defense, { notation: 'TOOTBLAN', text: `${runner.name} is thrown out wandering the bases.` });
          logPlay(game, `${runner.name} wanders too far and gets picked off the basepaths in a pure TOOTBLAN moment.`, { type: 'oddity', meta });
        } else {
          bBook.ab += 1;
          recordOut(game, offense, defense, { notation: 'TAG', text: `${batter.name} is tagged out after a basepath blunder.` });
          advanceBatterIndex(game);
          logPlay(game, `${batter.name} overplays the moment and is tagged out in a small tragedy of indecision.`, { type: 'oddity', meta });
        }
        break;
      case 8:
        if (game.bases[0]) {
          const runner = game.bases[0];
          game.bases[0] = null;
          recordOut(game, offense, defense, { notation: 'PO', text: `${runner.name} is picked off first.` });
          logPlay(game, `${pitcher.name} whirls, fires, and nabs ${runner.name} leaning the wrong way at first.`, { type: 'oddity', meta });
        } else {
          logPlay(game, `The catcher flashes some extra snarl after a pickoff feint. Nothing official changes, but the runners hear the warning.`, { type: 'oddity', meta });
        }
        break;
      case 9:
      case 10:
      case 11:
      case 20:
        bBook.bb += 1;
        pitcher.walksAllowed += 1;
        pitcherBook(game, defense, pitcher.name).bb += 1;
        forceWalk(game, offense, batter);
        logPlay(game, oddity.roll === 11
          ? `${batter.name} is clipped by the pitch and takes first.`
          : oddity.roll === 20
            ? `${batter.name} reaches on catcher interference, and the defense can only mutter at fate.`
            : `The plate umpire injects himself into the plot, and ${batter.name} is awarded first base.`,
          { type: 'oddity', meta });
        advanceBatterIndex(game);
        break;
      case 12:
      case 15:
      case 19:
        moveAllRunnersOneBase(game, offense, oddity.roll === 19 ? 'balk' : oddity.roll === 12 ? 'wild-pitch' : 'passed-ball');
        logPlay(game, oddity.roll === 19
          ? `${pitcher.name} flinches into a balk, and the runners advance on baseball's oldest little crime.`
          : oddity.roll === 12
            ? `${pitcher.name} uncorks a wild pitch and everyone on base scrambles up ninety feet.`
            : `The catcher cannot smother it, and the passed ball lets the runners move along.`,
          { type: 'oddity', meta });
        resolveSwing(game, { via: 'oddity-reroll' });
        break;
      case 13:
        logPlay(game, `${pitcher.name} loses focus for a heartbeat. The runner timing just got a touch easier on this at-bat.`, { type: 'oddity', meta });
        resolveSwing(game, { via: 'oddity-reroll' });
        break;
      case 14:
        bBook.ab += 1;
        bBook.k += 1;
        pitcher.strikeouts += 1;
        pitcher.inningStrikeouts += 1;
        pitcherBook(game, defense, pitcher.name).k += 1;
        if (rollDie(8) >= 4) {
          forceWalk(game, offense, batter);
          logPlay(game, `${batter.name} swings through strike three, but the catcher cannot finish the play. On the dropped third strike, the batter reaches first.`, { type: 'oddity', meta });
          advanceBatterIndex(game);
        } else {
          recordOut(game, offense, defense, { notation: 'K', text: `${batter.name} strikes out on a dropped third strike but is retired anyway.` });
          logPlay(game, `${batter.name} fans, takes a hopeful step, and is still thrown out after the dropped third strike.`, { type: 'oddity', meta });
          advanceBatterIndex(game);
        }
        break;
      case 16:
        injuryNote(game, offense, batter, 'batter');
        resolveSwing(game, { via: 'oddity-reroll' });
        break;
      case 17:
        injuryNote(game, offense, previousBatter(game, offense), 'previous batter');
        resolveSwing(game, { via: 'oddity-reroll' });
        break;
      case 18:
        forceErrorReach(game, offense, batter);
        game.errors[sideKey(defense, game)] += 1;
        logPlay(game, `${pitcher.name} rushes a routine chance and throws the inning into confusion. The batter reaches on a pitcher error and the runners move up.`, { type: 'oddity', meta });
        advanceBatterIndex(game);
        break;
      default:
        resolveSwing(game, { via: 'oddity-reroll' });
        break;
    }
  }

  function injuryNote(game, team, player, label) {
    if (!player) return;
    const locRoll = rollDie(20);
    const sevRoll = rollDie(100);
    const location = injuryLocation(locRoll);
    const severity = injurySeverity(sevRoll);
    player.notes = player.notes || [];
    player.notes.push(`${severity} ${location}`);
    logPlay(game, `${player.name} looks shaken up. It is a ${severity.toLowerCase()} issue at the ${location.toLowerCase()}, and the dugout takes careful inventory.`, { type: 'injury' });
    if (label === 'pitcher' && severity !== 'Player is unhurt') {
      maybeForcePitcherExit(game, team);
    }
  }

  function maybeForcePitcherExit(game, team) {
    if (team !== teamFielding(game)) return;
    if (team.bullpen.length) {
      const next = team.bullpen.shift();
      const old = team.pitcher;
      team.pitcher = decoratePitcher(next);
      team.lineup[8] = decorateBatter({ name: team.pitcher.name, pos: 'P', hand: team.pitcher.hand, bt: team.pitcher.bt, obt: team.pitcher.obt, traits: team.pitcher.traits || [] });
      if (!team.teamBatting[team.pitcher.name]) team.teamBatting[team.pitcher.name] = { name: team.pitcher.name, pos: 'P', ab: 0, h: 0, bb: 0, r: 0, rbi: 0, hr: 0, k: 0 };
      if (!team.teamPitching[team.pitcher.name]) team.teamPitching[team.pitcher.name] = { name: team.pitcher.name, ipOuts: 0, h: 0, r: 0, bb: 0, k: 0, startPd: team.pitcher.pd };
      logPlay(game, `${old.name} heads for the clubhouse and ${team.pitcher.name} is hurried in from the bullpen.`, { type: 'injury' });
    }
  }

  function resolveOutFromMss(game, batter, pitcher, mss, meta) {
    const digit = ((mss % 10) + 10) % 10;
    let outNotation = 'K';
    let outPos = 'P';
    if (digit === 0 || digit === 1 || digit === 2) {
      outNotation = 'K';
      outPos = 'P';
    } else if (digit === 3) {
      outNotation = hasTrait(pitcher, 'K+') ? 'K' : 'G-3';
      outPos = hasTrait(pitcher, 'K+') ? 'P' : '1B';
    } else if (digit === 4) {
      outNotation = '4-3'; outPos = '2B';
    } else if (digit === 5) {
      outNotation = '5-3'; outPos = '3B';
    } else if (digit === 6) {
      outNotation = '6-3'; outPos = 'SS';
    } else if (digit === 7) {
      outNotation = 'F-7'; outPos = 'LF';
    } else if (digit === 8) {
      outNotation = 'F-8'; outPos = 'CF';
    } else if (digit === 9) {
      outNotation = 'F-9'; outPos = 'RF';
    }
    if (digit === 2 && hasTrait(pitcher, 'GB+')) {
      outNotation = '6-3';
      outPos = 'SS';
    }
    return {
      type: 'out',
      outNotation,
      outPos,
      countsAsAB: true,
      outText: `${batter.name} is retired.`,
      meta
    };
  }

  function hitSingle(game, offense, batter, options = {}) {
    const bBook = batterBook(game, offense, batter.name);
    bBook.h += 1;
    game.hits[sideKey(offense, game)] += 1;
    pitcherBook(game, teamFielding(game), teamFielding(game).pitcher.name).h += 1;
    teamFielding(game).pitcher.hitsAllowed += 1;
    let runs = 0;
    if (options.adv2) {
      if (game.bases[2]) { scoreRunner(game, game.bases[2], { team: offense, batter, kind: 'single2' }); runs += 1; }
      if (game.bases[1]) { scoreRunner(game, game.bases[1], { team: offense, batter, kind: 'single2' }); runs += 1; }
      const runnerFirst = game.bases[0];
      game.bases[2] = runnerFirst || null;
      game.bases[1] = null;
      game.bases[0] = batter;
      if (runnerFirst === batter) game.bases[2] = null;
    } else {
      if (game.bases[2]) { scoreRunner(game, game.bases[2], { team: offense, batter, kind: options.fromBunt ? 'buntSingle' : 'single' }); runs += 1; }
      const oldSecond = game.bases[1];
      const oldFirst = game.bases[0];
      game.bases[2] = oldSecond || null;
      game.bases[1] = oldFirst || null;
      game.bases[0] = batter;
    }
    bBook.rbi += runs;
  }

  function hitDouble(game, offense, batter, options = {}) {
    const bBook = batterBook(game, offense, batter.name);
    bBook.h += 1;
    game.hits[sideKey(offense, game)] += 1;
    pitcherBook(game, teamFielding(game), teamFielding(game).pitcher.name).h += 1;
    teamFielding(game).pitcher.hitsAllowed += 1;
    let runs = 0;
    if (game.bases[2]) { scoreRunner(game, game.bases[2], { team: offense, batter, kind: 'double' }); runs += 1; }
    if (game.bases[1]) { scoreRunner(game, game.bases[1], { team: offense, batter, kind: 'double' }); runs += 1; }
    if (options.adv3 && game.bases[0]) { scoreRunner(game, game.bases[0], { team: offense, batter, kind: 'double3' }); runs += 1; game.bases[0] = null; }
    else {
      game.bases[2] = game.bases[0] || null;
    }
    game.bases[1] = batter;
    game.bases[0] = null;
    bBook.rbi += runs;
  }

  function hitTriple(game, offense, batter) {
    const bBook = batterBook(game, offense, batter.name);
    bBook.h += 1;
    game.hits[sideKey(offense, game)] += 1;
    pitcherBook(game, teamFielding(game), teamFielding(game).pitcher.name).h += 1;
    teamFielding(game).pitcher.hitsAllowed += 1;
    let runs = 0;
    [2, 1, 0].forEach(idx => {
      if (game.bases[idx]) { scoreRunner(game, game.bases[idx], { team: offense, batter, kind: 'triple' }); runs += 1; game.bases[idx] = null; }
    });
    game.bases[2] = batter;
    bBook.rbi += runs;
  }

  function hitHomeRun(game, offense, batter) {
    const bBook = batterBook(game, offense, batter.name);
    bBook.h += 1;
    bBook.hr += 1;
    game.hits[sideKey(offense, game)] += 1;
    pitcherBook(game, teamFielding(game), teamFielding(game).pitcher.name).h += 1;
    teamFielding(game).pitcher.hitsAllowed += 1;
    let runs = 0;
    [2, 1, 0].forEach(idx => {
      if (game.bases[idx]) { scoreRunner(game, game.bases[idx], { team: offense, batter, kind: 'homeRun' }); runs += 1; game.bases[idx] = null; }
    });
    scoreRunner(game, batter, { team: offense, batter, kind: 'homeRun' });
    runs += 1;
    bBook.rbi += runs;
  }

  function describeHit(game, offense, defense, batter, hitKind) {
    const defenderName = sample(['past the infield', 'into the gap', 'through the right side', 'inside the chalk', 'under an outfielder\'s glove']);
    if (hitKind === 'single') return `${batter.name} strokes a clean single ${defenderName}.`;
    if (hitKind === 'single2') return `${batter.name} lines a hard single and the runners tear ahead two bases.`;
    if (hitKind === 'double') return `${batter.name} rips a double into open country.`;
    if (hitKind === 'double3') return `${batter.name} lashes an extra-base hit and clears the bases with a ringing double.`;
    if (hitKind === 'triple') return `${batter.name} drives it to the wall and motors all the way to third for a triple.`;
    return `${batter.name} unloads, and that ball is gone. It leaves in a hurry and lands in legend.`;
  }

  function forceWalk(game, offense, batter) {
    if (game.bases[0] && game.bases[1] && game.bases[2]) {
      scoreRunner(game, game.bases[2], { team: offense, batter, kind: 'forced-walk' });
    }
    if (game.bases[1] && game.bases[0]) game.bases[2] = game.bases[1];
    if (game.bases[0]) game.bases[1] = game.bases[0];
    game.bases[0] = batter;
  }

  function forceErrorReach(game, offense, batter) {
    const oldThird = game.bases[2];
    const oldSecond = game.bases[1];
    const oldFirst = game.bases[0];
    if (oldThird) scoreRunner(game, oldThird, { team: offense, batter, kind: 'error' });
    game.bases[2] = oldSecond || null;
    game.bases[1] = oldFirst || null;
    game.bases[0] = batter;
  }

  function moveAllRunnersOneBase(game, offense, reason) {
    if (game.bases[2]) { scoreRunner(game, game.bases[2], { team: offense, batter: null, kind: reason }); game.bases[2] = null; }
    if (game.bases[1]) { game.bases[2] = game.bases[1]; game.bases[1] = null; }
    if (game.bases[0]) { game.bases[1] = game.bases[0]; game.bases[0] = null; }
  }

  function productiveAdvance(game, offense, batter) {
    let runs = 0;
    if (game.bases[2]) {
      scoreRunner(game, game.bases[2], { team: offense, batter, kind: 'productive-out' });
      runs += 1;
      game.bases[2] = null;
    }
    if (game.bases[1]) {
      game.bases[2] = game.bases[1];
      game.bases[1] = null;
    }
    return runs;
  }

  function recordOut(game, offense, defense, info) {
    game.outs += 1;
    defense.pitcher.outsRecorded += 1;
    defense.pitcher.inningBatters += 1;
    pitcherBook(game, defense, defense.pitcher.name).ipOuts += 1;
    if (defense.pitcher.appearanceRole === 'RP' && defense.pitcher.outsRecorded % 3 === 0) {
      defense.pitcher.currentPd = shiftPitchDie(defense.pitcher.currentPd, -1);
    }
  }

  function recordAdditionalOut(game) {
    game.outs += 1;
    const defense = teamFielding(game);
    defense.pitcher.outsRecorded += 1;
    pitcherBook(game, defense, defense.pitcher.name).ipOuts += 1;
    if (defense.pitcher.appearanceRole === 'RP' && defense.pitcher.outsRecorded % 3 === 0) {
      defense.pitcher.currentPd = shiftPitchDie(defense.pitcher.currentPd, -1);
    }
  }

  function scoreRunner(game, runner, context) {
    const side = sideKey(context.team, game);
    game.score[side] += 1;
    ensureInningSlots(game);
    game.lineScore[side][game.inning - 1] = (game.lineScore[side][game.inning - 1] || 0) + 1;
    batterBook(game, context.team, runner.name).r += 1;
    const defense = teamFielding(game);
    defense.pitcher.runsAllowed += 1;
    defense.pitcher.appearanceRunsThisInning += 1;
    pitcherBook(game, defense, defense.pitcher.name).r += 1;
    if (defense.pitcher.appearanceRole === 'SP') {
      if (game.inning >= 7) defense.pitcher.currentPd = 'd4';
      if (defense.pitcher.appearanceRunsThisInning >= 3 && !defense.pitcher.inningThreeRunPenaltyApplied) {
        defense.pitcher.currentPd = shiftPitchDie(defense.pitcher.currentPd, -1);
        defense.pitcher.inningThreeRunPenaltyApplied = true;
      }
      if (defense.pitcher.runsAllowed > 4) {
        defense.pitcher.currentPd = shiftPitchDie(defense.pitcher.currentPd, -1);
      }
    } else {
      defense.pitcher.currentPd = shiftPitchDie(defense.pitcher.currentPd, -1);
    }
    updateLeaderChanges(game);
  }

  function maybeChangePitcher(game, defense) {
    const pitcher = defense.pitcher;
    const bullpenAvailable = defense.bullpen.length > 0;
    if (!bullpenAvailable) return;
    const pdIndex = PITCH_LEVELS.indexOf(pitcher.currentPd);
    if (pitcher.appearanceRole === 'SP') {
      const fatigueThreshold = hasTrait(pitcher, 'ST+') ? 7 : 6;
      if (pitcher.inningsCompleted >= fatigueThreshold || pitcher.runsAllowed >= 4 || pdIndex <= 2) {
        changePitcher(game, defense);
      }
    } else if (pitcher.outsRecorded >= 6 || pitcher.runsAllowed >= 2 || pdIndex <= 2) {
      changePitcher(game, defense);
    }
  }

  function changePitcher(game, defense) {
    if (!defense.bullpen.length) return;
    const old = defense.pitcher;
    const next = defense.bullpen.shift();
    defense.pitcher = decoratePitcher(next);
    defense.lineup[8] = decorateBatter({ name: defense.pitcher.name, pos: 'P', hand: defense.pitcher.hand, bt: defense.pitcher.bt, obt: defense.pitcher.obt, traits: defense.pitcher.traits || [] });
    if (!defense.teamBatting[defense.pitcher.name]) defense.teamBatting[defense.pitcher.name] = { name: defense.pitcher.name, pos: 'P', ab: 0, h: 0, bb: 0, r: 0, rbi: 0, hr: 0, k: 0 };
    if (!defense.teamPitching[defense.pitcher.name]) defense.teamPitching[defense.pitcher.name] = { name: defense.pitcher.name, ipOuts: 0, h: 0, r: 0, bb: 0, k: 0, startPd: defense.pitcher.pd };
    logPlay(game, `${defense.name} goes to the bullpen. ${old.name} is done, and ${defense.pitcher.name} takes over on the mound.`, { type: 'pitching' });
  }

  function endHalfInning(game) {
    const defense = teamFielding(game);
    const pitcher = defense.pitcher;
    if (pitcher.appearanceRunsThisInning === 0) {
      pitcher.consecutiveScorelessInnings += 1;
      if (pitcher.consecutiveScorelessInnings % 3 === 0) pitcher.currentPd = shiftPitchDie(pitcher.currentPd, 1);
    } else {
      pitcher.consecutiveScorelessInnings = 0;
    }
    if (pitcher.inningStrikeouts >= 3 && pitcher.inningStrikeouts === pitcher.inningBatters) pitcher.currentPd = shiftPitchDie(pitcher.currentPd, 1);
    if (pitcher.jamActive && pitcher.appearanceRunsThisInning === 0) pitcher.currentPd = shiftPitchDie(pitcher.currentPd, 1);
    if (pitcher.appearanceRole === 'SP') {
      pitcher.inningsCompleted += 1;
      const fatigueStart = hasTrait(pitcher, 'ST+') ? 7 : 6;
      if (pitcher.inningsCompleted > fatigueStart) pitcher.currentPd = shiftPitchDie(pitcher.currentPd, -1);
    }
    pitcher.appearanceRunsThisInning = 0;
    pitcher.inningStrikeouts = 0;
    pitcher.inningBatters = 0;
    pitcher.inningThreeRunPenaltyApplied = false;
    pitcher.jamActive = false;

    const side = game.half === 'top' ? 'away' : 'home';
    logPlay(game, `${capitalize(game.half)} of the ${ordinal(game.inning)} is in the books. ${game.away.name} ${game.score.away}, ${game.home.name} ${game.score.home}.`, { type: 'inning' });

    game.outs = 0;
    game.bases = [null, null, null];
    if (game.half === 'top') {
      game.half = 'bottom';
    } else {
      const homeAheadAfterNine = game.inning >= 9 && game.score.home !== game.score.away;
      if (game.inning >= 9 && homeAheadAfterNine) {
        finishGame(game);
        return;
      }
      game.half = 'top';
      game.inning += 1;
      ensureInningSlots(game);
    }
    if (game.inning > 9 && game.half === 'top' && game.score.away !== game.score.home) {
      finishGame(game);
    }
  }

  function finishGame(game) {
    if (game.over) return;
    game.over = true;
    game.recap = buildRecap(game);
    const winner = game.score.away > game.score.home ? game.away.name : game.home.name;
    logPlay(game, `That is the final out. ${winner} win it ${game.score.away}-${game.score.home} in a game that gave the scorebook plenty to remember.`, { type: 'final' });
  }

  function buildRecap(game) {
    const winnerSide = game.score.away > game.score.home ? 'away' : 'home';
    const loserSide = winnerSide === 'away' ? 'home' : 'away';
    const winnerTeam = game[winnerSide];
    const loserTeam = game[loserSide];
    const keyBatters = topBatters(game, winnerTeam.name, 2);
    const keyPitchers = topPitchers(game, 2);
    const oddityCount = game.logs.filter(log => log.type === 'oddity').length;
    const injuryCount = game.logs.filter(log => log.type === 'injury').length;
    const scoringEvents = game.logs.filter(log => log.type === 'scoring');
    const biggestFrame = biggestInning(game);
    const leadLine = game.leadChanges > 0 ? `The lead changed hands ${game.leadChanges} time${game.leadChanges === 1 ? '' : 's'}, which kept the whole thing taut.` : `The winning side seized command and never fully let the game wriggle free.`;
    const starLine = keyBatters.length
      ? `${keyBatters.map(player => `${player.name} went ${player.h}-${player.ab > 0 ? player.ab : 1}${player.hr ? ` with ${player.hr} homer${player.hr === 1 ? '' : 's'}` : ''}${player.rbi ? ` and ${player.rbi} RBI` : ''}`).join('; ')}.`
      : 'The box score spread the credit widely.';
    const armLine = keyPitchers.length
      ? `${keyPitchers.map(player => `${player.name} logged ${formatInnings(player.ipOuts)} with ${player.k} strikeout${player.k === 1 ? '' : 's'} and ${player.r} run${player.r === 1 ? '' : 's'} allowed`).join('; ')}.`
      : 'No pitcher escaped entirely clean.';
    const weirdLine = oddityCount || injuryCount
      ? `The game also carried a little roadside theater, with ${oddityCount} oddit${oddityCount === 1 ? 'y' : 'ies'}${injuryCount ? ` and ${injuryCount} injury scare${injuryCount === 1 ? '' : 's'}` : ''} shaping the mood as much as the chalkboard math.`
      : `For all the scoring, the game stayed mostly inside the lines, decided by sharp swings and the slow squeeze of pitching fatigue.`;

    return [
      `${winnerTeam.name} beat ${loserTeam.name} ${game.score[winnerSide]}-${game.score[loserSide]} in a Deadball thriller that felt bigger with every inning. ${leadLine} ${biggestFrame ? `The loudest turn came in the ${ordinal(biggestFrame.inning)} when ${biggestFrame.team} pushed across ${biggestFrame.runs} run${biggestFrame.runs === 1 ? '' : 's'} and bent the night toward its final shape.` : ''}`,
      `${starLine} ${armLine}`,
      `${weirdLine} By the time the last out settled in, the final paragraph practically wrote itself: ${winnerTeam.name} had the sharper swing in the key moments, the steadier mound work when it mattered, and the better claim on the evening when the booth signed off.`
    ].map(p => `<p>${p}</p>`).join('');
  }

  function biggestInning(game) {
    let best = null;
    ['away', 'home'].forEach(side => {
      game.lineScore[side].forEach((runs, idx) => {
        if (!runs) return;
        if (!best || runs > best.runs) best = { team: game[side].name, inning: idx + 1, runs };
      });
    });
    return best;
  }

  function topBatters(game, teamName, count) {
    const team = game.away.name === teamName ? game.away : game.home;
    return Object.values(team.teamBatting)
      .filter(player => player.ab + player.bb > 0)
      .sort((a, b) => (b.rbi * 10 + b.hr * 8 + b.h * 3 + b.r) - (a.rbi * 10 + a.hr * 8 + a.h * 3 + a.r))
      .slice(0, count);
  }

  function topPitchers(game, count) {
    return [...Object.values(game.away.teamPitching), ...Object.values(game.home.teamPitching)]
      .filter(p => p.ipOuts > 0)
      .sort((a, b) => (b.ipOuts * 2 + b.k - b.r * 4) - (a.ipOuts * 2 + a.k - a.r * 4))
      .slice(0, count);
  }

  function renderArchive() {
    ui.archiveList.innerHTML = '';
    if (!archive.length) {
      ui.archiveList.innerHTML = '<div class="stack-item"><h3>No saved games yet</h3><p>Finish a game and save it to keep the writeup, box score snapshot, and campaign link.</p></div>';
      return;
    }
    archive.slice().reverse().forEach(item => {
      const div = document.createElement('div');
      div.className = 'stack-item';
      div.innerHTML = `
        <h3>${item.awayName} at ${item.homeName} • ${item.score}</h3>
        <p>${formatDate(item.savedAt)} • ${item.campaignName || 'No campaign'}</p>
        <div class="badge-row"><span class="badge">${item.winner}</span><span class="badge">${item.hits}</span><span class="badge">${item.errors}</span></div>
        <div class="recap">${item.recap}</div>
      `;
      ui.archiveList.appendChild(div);
    });
  }

  function renderCampaigns() {
    ui.campaignList.innerHTML = '';
    campaigns.forEach(campaign => {
      const div = document.createElement('div');
      div.className = 'stack-item';
      const template = CAMPAIGN_TEMPLATES.find(t => t.id === campaign.templateId);
      div.innerHTML = `
        <h3>${campaign.name}</h3>
        <p>${template ? template.name : 'Custom campaign'} • ${campaign.games.length} saved game${campaign.games.length === 1 ? '' : 's'}</p>
        <p>${campaign.notes || campaign.description || ''}</p>
        <div class="badge-row"><span class="badge good">${campaign.games.length ? 'Active history' : 'Fresh notebook'}</span></div>
      `;
      ui.campaignList.appendChild(div);
    });
  }

  function renderSourcebook() {
    ui.sourcebookContent.innerHTML = '';
    SOURCEBOOK_MODULES.forEach(item => {
      const div = document.createElement('div');
      div.className = 'source-card';
      const statusClass = item.status.includes('Implemented') ? 'good' : 'planned';
      div.innerHTML = `
        <h3>${item.title}</h3>
        <div class="badge-row"><span class="badge ${statusClass}">${item.status}</span></div>
        <p>${item.detail}</p>
      `;
      ui.sourcebookContent.appendChild(div);
    });
  }

  function renderTeams() {
    ui.teamList.innerHTML = '';
    getAllTeams().forEach(team => {
      const div = document.createElement('div');
      div.className = 'stack-item';
      div.innerHTML = `
        <h3>${team.name}</h3>
        <p>${team.manager} • Daring ${team.daring} • ${team.era}</p>
        <div class="badge-row"><span class="badge">${team.short || team.name.slice(0, 3).toUpperCase()}</span><span class="badge">${team.lineup.length} hitters</span><span class="badge">${team.bullpen.length + 1} pitchers</span></div>
      `;
      ui.teamList.appendChild(div);
    });
  }

  function updateUi() {
    renderHeroBoard();
    renderScoreboard();
    renderDiamond();
    renderStatus();
    renderMatchupCard();
    renderLineupRail();
    renderHeadlineRail();
    renderLog(currentGame ? currentGame.logs.slice(-currentGame.visibleLogCount) : []);
    renderBoxscore();
    ui.recap.innerHTML = currentGame && currentGame.recap ? currentGame.recap : 'Finish a game and the full writeup will appear here.';
    ui.recap.classList.toggle('empty', !(currentGame && currentGame.recap));
    toggleButtons();
  }

  function toggleButtons() {
    const disabled = !currentGame || currentGame.over;
    [ui.swingBtn, ui.buntBtn, ui.stealBtn, ui.hitRunBtn, ui.autoHalfBtn, ui.autoGameBtn].forEach(btn => btn.disabled = disabled);
  }

  function renderHeroBoard() {
    if (!ui.heroBoard) return;
    if (!currentGame) {
      ui.heroBoard.innerHTML = '';
      return;
    }
    const offenseSide = currentGame.over ? null : (currentGame.half === 'top' ? 'away' : 'home');
    const campaign = campaigns.find(c => c.id === currentGame.campaignId);
    const stateLabel = currentGame.over ? 'Final' : `${capitalize(currentGame.half)} ${currentGame.inning}`;
    const heroPills = [
      currentGame.over ? 'Game complete' : `${currentGame.outs} out${currentGame.outs === 1 ? '' : 's'}`,
      baseSummaryCompact(currentGame),
      currentGame.over ? winningSummary(currentGame) : `${teamAtBat(currentGame).short || teamAtBat(currentGame).name.slice(0,3).toUpperCase()} batting`
    ];
    ui.heroBoard.innerHTML = `
      ${renderTeamScorePanel(currentGame.away, 'away', offenseSide === 'away')}
      <div class="hero-center-panel">
        <div class="game-state-badge">${stateLabel}</div>
        <div class="hero-series">${campaign ? campaign.name : 'Exhibition Game'}</div>
        <div class="hero-matchup-title">${currentGame.away.name} at ${currentGame.home.name}</div>
        <div class="hero-situation-row">${heroPills.map(pill => `<span class="hero-situation-pill">${pill}</span>`).join('')}</div>
      </div>
      ${renderTeamScorePanel(currentGame.home, 'home', offenseSide === 'home')}
    `;
  }

  function renderTeamScorePanel(team, side, isBatting) {
    const short = team.short || team.name.split(' ').map(part => part[0]).join('').slice(0, 3).toUpperCase();
    const score = currentGame.score[side];
    const hits = currentGame.hits[side];
    const errors = currentGame.errors[side];
    return `
      <div class="team-score-panel ${isBatting ? 'is-batting' : ''}">
        <div class="team-score-top">
          <span class="team-chip">${short}</span>
          <span class="team-role">${side === 'away' ? 'Away' : 'Home'}</span>
        </div>
        <div class="team-name-block">
          <div class="team-name">${team.name}</div>
          <div class="team-manager">${team.manager} • Daring ${team.daring}</div>
        </div>
        <div class="team-score">${score}</div>
        <div class="team-metrics">
          <span class="metric-pill"><b>H</b> ${hits}</span>
          <span class="metric-pill"><b>E</b> ${errors}</span>
          <span class="metric-pill"><b>P</b> ${team.pitcher.name}</span>
        </div>
      </div>
    `;
  }

  function renderScoreboard() {
    if (!currentGame) {
      ui.scoreboard.innerHTML = '';
      return;
    }
    const innings = Math.max(9, currentGame.inning);
    let header = '<tr><th>Loc</th><th>Team</th>';
    for (let i = 1; i <= innings; i += 1) {
      const currentFrame = !currentGame.over && currentGame.inning === i ? ' class="current-frame"' : '';
      header += `<th${currentFrame}>${i}</th>`;
    }
    header += '<th>R</th><th>H</th><th>E</th></tr>';
    const awayRow = buildScoreRow(currentGame, 'away', innings);
    const homeRow = buildScoreRow(currentGame, 'home', innings);
    ui.scoreboard.innerHTML = `<div class="table-shell"><table class="scoreboard"><thead>${header}</thead><tbody>${awayRow}${homeRow}</tbody></table></div>`;
  }

  function buildScoreRow(game, side, innings) {
    const label = side === 'away' ? 'Away' : 'Home';
    const short = game[side].short || game[side].name.split(' ').map(part => part[0]).join('').slice(0, 3).toUpperCase();
    let row = `<tr class="team-row"><td>${label}</td><td>${short} • ${game[side].name}</td>`;
    for (let i = 0; i < innings; i += 1) {
      const currentFrame = !game.over && game.inning === i + 1 ? ' class="current-frame"' : '';
      row += `<td${currentFrame}>${game.lineScore[side][i] ?? ''}</td>`;
    }
    row += `<td class="team-score-meta">${game.score[side]}</td><td>${game.hits[side]}</td><td>${game.errors[side]}</td></tr>`;
    return row;
  }

  function renderDiamond() {
    ui.diamond.innerHTML = `
      <div class="base second ${currentGame && currentGame.bases[1] ? 'on' : ''}"></div>
      <div class="base third ${currentGame && currentGame.bases[2] ? 'on' : ''}"></div>
      <div class="base first ${currentGame && currentGame.bases[0] ? 'on' : ''}"></div>
      <div class="base home on"></div>
    `;
    if (!currentGame) {
      ui.countbox.textContent = 'No game loaded';
      return;
    }
    ui.countbox.textContent = `${capitalize(currentGame.half)} ${currentGame.inning}, ${currentGame.outs} out${currentGame.outs === 1 ? '' : 's'}`;
  }

  function renderStatus() {
    if (!currentGame) {
      ui.statusBar.textContent = 'Load a game to begin.';
      return;
    }
    if (currentGame.over) {
      ui.statusBar.textContent = `${winningSummary(currentGame)} Final score ${currentGame.away.name} ${currentGame.score.away}, ${currentGame.home.name} ${currentGame.score.home}. Save the game to archive the recap and campaign history.`;
      return;
    }
    const offense = teamAtBat(currentGame);
    const defense = teamFielding(currentGame);
    const batter = currentBatter(currentGame);
    ui.statusBar.textContent = `${capitalize(currentGame.half)} ${currentGame.inning}. ${offense.name} are batting with ${currentGame.outs} out${currentGame.outs === 1 ? '' : 's'}. ${batter.name} is up against ${defense.pitcher.name}. ${baseSummary(currentGame)}.`;
  }

  function renderMatchupCard() {
    if (!currentGame) {
      ui.matchupCard.innerHTML = '';
      return;
    }
    const offense = teamAtBat(currentGame);
    const defense = teamFielding(currentGame);
    const batter = currentBatter(currentGame);
    const pitcher = defense.pitcher;
    const onDeck = offense.lineup[(offense.battingIndex + 1) % offense.lineup.length];
    const inHole = offense.lineup[(offense.battingIndex + 2) % offense.lineup.length];
    ui.matchupCard.innerHTML = `
      <div class="matchup-showcase">
        <div class="player-spotlight">
          <div class="player-spotlight-label">Current batter</div>
          <div class="player-spotlight-name">${batter.name}</div>
          <div class="player-spotlight-meta">${batter.pos} • ${batter.hand}-handed • BT ${batter.bt} / OBT ${batter.obt}</div>
          <div class="badge-row"><span class="badge live">${traitTextShort(batter.traits)}</span></div>
        </div>
        <div class="player-spotlight">
          <div class="player-spotlight-label">Pitcher</div>
          <div class="player-spotlight-name">${pitcher.name}</div>
          <div class="player-spotlight-meta">${pitcher.hand}-handed • Current PD ${pitcher.currentPd}${pitcher.basePd !== pitcher.currentPd ? ` • opened at ${pitcher.basePd}` : ''}</div>
          <div class="badge-row"><span class="badge">${traitTextShort(pitcher.traits)}</span></div>
        </div>
      </div>
      <div class="matchup-ribbon">
        <div class="matchup-ribbon-card">
          <div class="kicker">On deck</div>
          <div class="value">${onDeck.name}</div>
        </div>
        <div class="matchup-ribbon-card">
          <div class="kicker">In the hole</div>
          <div class="value">${inHole.name}</div>
        </div>
        <div class="matchup-ribbon-card">
          <div class="kicker">Booth note</div>
          <div class="value">${baseSummaryCompact(currentGame)}</div>
        </div>
      </div>
      <div class="info-pair-grid">
        <div class="info-pair">
          <div class="info-label">Manager daring</div>
          <div class="info-value">${offense.daring}</div>
        </div>
        <div class="info-pair">
          <div class="info-label">Fielding club</div>
          <div class="info-value">${defense.name}</div>
        </div>
        <div class="info-pair">
          <div class="info-label">Half inning</div>
          <div class="info-value">${capitalize(currentGame.half)} ${currentGame.inning}</div>
        </div>
        <div class="info-pair">
          <div class="info-label">Situation</div>
          <div class="info-value">${baseSummaryCompact(currentGame)}</div>
        </div>
      </div>
    `;
  }

  function renderLineupRail() {
    if (!ui.lineupRail) return;
    if (!currentGame) {
      ui.lineupRail.innerHTML = '<div class="hint">Start a game to load both lineups.</div>';
      return;
    }
    ui.lineupRail.innerHTML = [
      renderLineupColumn(currentGame.away, 'away', currentGame.half === 'top' && !currentGame.over),
      renderLineupColumn(currentGame.home, 'home', currentGame.half === 'bottom' && !currentGame.over)
    ].join('');
  }

  function renderLineupColumn(team, side, isBatting) {
    const short = team.short || team.name.split(' ').map(part => part[0]).join('').slice(0, 3).toUpperCase();
    const rows = team.lineup.slice(0, 9).map((player, idx) => {
      const current = isBatting && idx === team.battingIndex % team.lineup.length;
      const onDeck = isBatting && idx === (team.battingIndex + 1) % team.lineup.length;
      const inHole = isBatting && idx === (team.battingIndex + 2) % team.lineup.length;
      const tag = current ? '<span class="lineup-tag live">At bat</span>' : onDeck ? '<span class="lineup-tag waiting">On deck</span>' : inHole ? '<span class="lineup-tag soon">In hole</span>' : `<span class="lineup-tag">${player.pos}</span>`;
      return `
        <div class="lineup-row ${current ? 'current-batter' : ''} ${onDeck ? 'on-deck' : ''} ${inHole ? 'in-hole' : ''}">
          <div class="lineup-slot">${idx + 1}</div>
          <div class="lineup-name">
            <strong>${player.name}</strong>
            <span>${player.pos} • ${player.hand}-handed • BT ${player.bt} / OBT ${player.obt}</span>
          </div>
          ${tag}
        </div>
      `;
    }).join('');
    return `
      <div class="lineup-column">
        <div class="lineup-heading">
          <h3>${team.name}</h3>
          <span class="team-chip">${short}</span>
        </div>
        <div class="lineup-list">${rows}</div>
      </div>
    `;
  }

  function renderHeadlineRail() {
    if (!ui.headlineRail) return;
    if (!currentGame) {
      ui.headlineRail.innerHTML = '<div class="hint">Broadcast notes will appear here once the game starts.</div>';
      return;
    }
    const latest = currentGame.logs.slice(-1)[0];
    const scoring = currentGame.logs.slice().reverse().find(entry => /scores|home run|double|triple|walks in/i.test(entry.text));
    const notes = [];
    notes.push({
      kicker: 'Latest call',
      text: latest ? latest.text : 'No action yet.',
      meta: latest ? latest.inningLabel : ''
    });
    notes.push({
      kicker: 'Situation',
      text: currentGame.over ? `${winningSummary(currentGame)} closes it out.` : `${teamAtBat(currentGame).name} batting in the ${capitalize(currentGame.half)} of the ${currentGame.inning} with ${currentGame.outs} out${currentGame.outs === 1 ? '' : 's'} and ${baseSummaryCompact(currentGame).toLowerCase()}.`,
      meta: currentGame.over ? 'Final' : `${currentGame.away.short || currentGame.away.name.slice(0,3).toUpperCase()} ${currentGame.score.away} • ${currentGame.home.short || currentGame.home.name.slice(0,3).toUpperCase()} ${currentGame.score.home}`
    });
    notes.push({
      kicker: 'Big moment',
      text: scoring ? scoring.text : 'No scoring swing yet. The booth is waiting for the first crack in the game.',
      meta: scoring ? scoring.inningLabel : 'Game story still building'
    });
    ui.headlineRail.innerHTML = notes.map(note => `
      <div class="headline-card">
        <div class="headline-kicker">${note.kicker}</div>
        <div class="headline-text">${note.text}</div>
        <div class="headline-meta">${note.meta}</div>
      </div>
    `).join('');
  }

  function renderLog(entries) {
    ui.log.innerHTML = '';
    entries.forEach(entry => {
      const div = document.createElement('div');
      div.className = `log-entry ${entry.type || ''}`;
      const typeLabel = logTypeLabel(entry.type);
      div.innerHTML = `
        <div class="meta">
          <span class="meta-chip">${entry.inningLabel}</span>
          ${typeLabel ? `<span class="meta-chip">${typeLabel}</span>` : ''}
          ${entry.meta ? `<span class="meta-detail">${entry.meta}</span>` : ''}
        </div>
        <div class="text">${entry.text}</div>
      `;
      ui.log.appendChild(div);
    });
    ui.log.scrollTop = ui.log.scrollHeight;
  }

  function renderBoxscore() {
    if (!currentGame) {
      ui.boxscore.innerHTML = '';
      return;
    }
    const awayBatters = Object.values(currentGame.away.teamBatting);
    const homeBatters = Object.values(currentGame.home.teamBatting);
    const awayPitchers = Object.values(currentGame.away.teamPitching);
    const homePitchers = Object.values(currentGame.home.teamPitching);
    const summaryCards = [
      buildSummaryCard(`${currentGame.away.name} leaders`, [
        leaderLine(awayBatters, 'h', 'Hits'),
        leaderLine(awayBatters, 'rbi', 'RBI'),
        leaderLine(awayPitchers, 'k', 'Strikeouts')
      ]),
      buildGameSummaryCard(),
      buildSummaryCard(`${currentGame.home.name} leaders`, [
        leaderLine(homeBatters, 'h', 'Hits'),
        leaderLine(homeBatters, 'rbi', 'RBI'),
        leaderLine(homePitchers, 'k', 'Strikeouts')
      ])
    ].join('');
    ui.boxscore.innerHTML = `
      <div class="boxscore-dashboard">
        <div class="boxscore-summary-grid">${summaryCards}</div>
        <div class="boxscore-club-grid">
          ${buildClubBoxscore(currentGame.away, 'away')}
          ${buildClubBoxscore(currentGame.home, 'home')}
        </div>
      </div>
    `;
  }

  function buildSummaryCard(title, lines) {
    return `
      <div class="boxscore-summary-card">
        <h3>${title}</h3>
        <ul>${lines.map(line => `<li>${line}</li>`).join('')}</ul>
      </div>
    `;
  }

  function buildGameSummaryCard() {
    const inningText = currentGame.over ? 'Final' : `${capitalize(currentGame.half)} ${currentGame.inning}`;
    const scoreText = `${currentGame.away.short || currentGame.away.name.slice(0,3).toUpperCase()} ${currentGame.score.away} • ${currentGame.home.short || currentGame.home.name.slice(0,3).toUpperCase()} ${currentGame.score.home}`;
    const latest = currentGame.logs.slice(-1)[0];
    return `
      <div class="boxscore-summary-card">
        <h3>Game pulse</h3>
        <ul>
          <li><strong>${inningText}</strong> • ${scoreText}</li>
          <li>${baseSummary(currentGame)}</li>
          <li>${latest ? latest.text : 'No recorded play yet.'}</li>
        </ul>
      </div>
    `;
  }

  function leaderLine(players, stat, label) {
    const eligible = players.filter(player => Number(player[stat] || 0) > 0);
    if (!eligible.length) return `${label}: no leader yet`;
    const max = Math.max(...eligible.map(player => Number(player[stat] || 0)));
    const leaders = eligible.filter(player => Number(player[stat] || 0) === max).map(player => player.name).join(', ');
    return `${label}: ${leaders} (${max})`;
  }

  function buildClubBoxscore(team, side) {
    const short = team.short || team.name.split(' ').map(part => part[0]).join('').slice(0, 3).toUpperCase();
    return `
      <section class="boxscore-club-card">
        <div class="boxscore-club-header">
          <div>
            <div class="eyebrow">${side === 'away' ? 'Away club' : 'Home club'}</div>
            <h3>${team.name}</h3>
          </div>
          <div class="boxscore-mini-metrics">
            <span class="metric-pill"><b>${short}</b></span>
            <span class="metric-pill"><b>R</b> ${currentGame.score[side]}</span>
            <span class="metric-pill"><b>H</b> ${currentGame.hits[side]}</span>
            <span class="metric-pill"><b>E</b> ${currentGame.errors[side]}</span>
          </div>
        </div>
        <div class="table-block">
          <h3>Batting</h3>
          ${battingTable(team.teamBatting, team.name)}
        </div>
        <div class="table-block">
          <h3>Pitching</h3>
          ${pitchingTable(team.teamPitching, team.name)}
        </div>
      </section>
    `;
  }

  function battingTable(book, label) {
    const players = Object.values(book);
    const totals = players.reduce((sum, player) => ({
      ab: sum.ab + (player.ab || 0),
      h: sum.h + (player.h || 0),
      bb: sum.bb + (player.bb || 0),
      r: sum.r + (player.r || 0),
      rbi: sum.rbi + (player.rbi || 0),
      hr: sum.hr + (player.hr || 0),
      k: sum.k + (player.k || 0)
    }), { ab: 0, h: 0, bb: 0, r: 0, rbi: 0, hr: 0, k: 0 });
    const rows = players.map(player => `<tr><td>${player.name}</td><td>${player.ab}</td><td>${player.h}</td><td>${player.bb}</td><td>${player.r}</td><td>${player.rbi}</td><td>${player.hr}</td><td>${player.k}</td></tr>`).join('');
    return `<div class="table-shell"><table class="stat-table"><thead><tr><th>Player</th><th>AB</th><th>H</th><th>BB</th><th>R</th><th>RBI</th><th>HR</th><th>K</th></tr></thead><tbody>${rows}<tr class="totals-row"><td>Team total</td><td>${totals.ab}</td><td>${totals.h}</td><td>${totals.bb}</td><td>${totals.r}</td><td>${totals.rbi}</td><td>${totals.hr}</td><td>${totals.k}</td></tr></tbody></table></div>`;
  }

  function pitchingTable(book, label) {
    const players = Object.values(book).filter(player => player.ipOuts > 0 || player.h || player.bb || player.r);
    const rows = players.map(player => `<tr><td>${player.name}</td><td>${formatInnings(player.ipOuts)}</td><td>${player.h}</td><td>${player.r}</td><td>${player.bb}</td><td>${player.k}</td><td>${player.startPd}</td></tr>`).join('');
    const totalOuts = players.reduce((sum, player) => sum + (player.ipOuts || 0), 0);
    const totalH = players.reduce((sum, player) => sum + (player.h || 0), 0);
    const totalR = players.reduce((sum, player) => sum + (player.r || 0), 0);
    const totalBB = players.reduce((sum, player) => sum + (player.bb || 0), 0);
    const totalK = players.reduce((sum, player) => sum + (player.k || 0), 0);
    return `<div class="table-shell"><table class="stat-table"><thead><tr><th>Pitcher</th><th>IP</th><th>H</th><th>R</th><th>BB</th><th>K</th><th>Start PD</th></tr></thead><tbody>${rows || '<tr><td colspan="7">No pitching line yet.</td></tr>'}<tr class="totals-row"><td>Staff total</td><td>${formatInnings(totalOuts)}</td><td>${totalH}</td><td>${totalR}</td><td>${totalBB}</td><td>${totalK}</td><td>—</td></tr></tbody></table></div>`;
  }

  function saveCurrentGame() {
    if (!currentGame || !currentGame.over) return;
    const campaign = campaigns.find(c => c.id === currentGame.campaignId);
    const winner = currentGame.score.away > currentGame.score.home ? currentGame.away.name : currentGame.home.name;
    const entry = {
      id: currentGame.id,
      savedAt: new Date().toISOString(),
      awayName: currentGame.away.name,
      homeName: currentGame.home.name,
      score: `${currentGame.score.away}-${currentGame.score.home}`,
      winner,
      campaignId: campaign ? campaign.id : null,
      campaignName: campaign ? campaign.name : null,
      hits: `Hits ${currentGame.hits.away}-${currentGame.hits.home}`,
      errors: `Errors ${currentGame.errors.away}-${currentGame.errors.home}`,
      recap: currentGame.recap,
      logs: currentGame.logs.slice(),
      lineScore: currentGame.lineScore,
      box: {
        awayBatting: currentGame.away.teamBatting,
        homeBatting: currentGame.home.teamBatting,
        awayPitching: currentGame.away.teamPitching,
        homePitching: currentGame.home.teamPitching
      }
    };
    archive.push(entry);
    persistArchive();
    if (campaign) {
      campaign.games.push({ id: entry.id, label: `${entry.awayName} at ${entry.homeName}`, score: entry.score, savedAt: entry.savedAt });
      persistCampaigns();
      renderCampaigns();
    }
    renderArchive();
  }

  function clearArchive() {
    archive = [];
    persistArchive();
    renderArchive();
  }

  function createCampaign() {
    const template = CAMPAIGN_TEMPLATES.find(t => t.id === ui.campaignTemplate.value) || CAMPAIGN_TEMPLATES[0];
    const campaign = {
      id: makeId(),
      name: ui.campaignName.value.trim() || template.name,
      templateId: template.id,
      description: template.description,
      notes: ui.campaignNotes.value.trim(),
      games: [],
      createdAt: new Date().toISOString()
    };
    campaigns.push(campaign);
    persistCampaigns();
    renderCampaigns();
    populateCampaignSelectors();
    populatePlayoffSelectors();
    ui.campaignSelect.value = campaign.id;
    ui.campaignName.value = '';
    ui.campaignNotes.value = '';
  }

  function loadExampleJson() {
    ui.teamJson.value = JSON.stringify({
      name: 'Custom Caps',
      short: 'CAP',
      manager: 'Casey Example',
      daring: 13,
      era: 'Modern',
      lineup: [
        { name: 'Alex Leadman', pos: 'SS', hand: 'L', bt: 29, obt: 37, traits: ['S+'] },
        { name: 'Benny Sparks', pos: 'LF', hand: 'R', bt: 31, obt: 38, traits: ['C+'] },
        { name: 'Cal Knox', pos: 'RF', hand: 'R', bt: 33, obt: 39, traits: ['P+'] },
        { name: 'Drew Slate', pos: '1B', hand: 'L', bt: 28, obt: 35, traits: [] },
        { name: 'Eli Stone', pos: '3B', hand: 'R', bt: 26, obt: 33, traits: ['D+'] },
        { name: 'Finn Mercer', pos: '2B', hand: 'S', bt: 25, obt: 34, traits: [] },
        { name: 'Gray Hollow', pos: 'CF', hand: 'L', bt: 24, obt: 30, traits: [] },
        { name: 'Hale Porter', pos: 'C', hand: 'R', bt: 23, obt: 30, traits: ['D+'] }
      ],
      starter: { name: 'Ivy Branch', role: 'SP', hand: 'R', pd: 'd12', bt: 12, obt: 18, traits: ['K+'] },
      bullpen: [
        { name: 'Jules North', role: 'RP', hand: 'L', pd: 'd8', bt: 8, obt: 13, traits: [] },
        { name: 'Kip Rowe', role: 'RP', hand: 'R', pd: 'd8', bt: 9, obt: 14, traits: ['GB+'] }
      ]
    }, null, 2);
  }

  function importTeamJson() {
    try {
      const team = JSON.parse(ui.teamJson.value);
      validateTeam(team);
      customTeams.push(team);
      persistCustomTeams();
      refreshTeamSelectors();
      renderTeams();
      populateFrontOfficeSelectors();
      ui.teamJson.value = '';
    } catch (error) {
      alert(`Could not import team: ${error.message}`);
    }
  }

  function validateTeam(team) {
    if (!team.name) throw new Error('Team name is required');
    if (!Array.isArray(team.lineup) || team.lineup.length < 8) throw new Error('Need at least 8 lineup players');
    if (!team.starter || !team.starter.pd) throw new Error('Starter with pitch die is required');
    if (!Array.isArray(team.bullpen)) throw new Error('Bullpen array is required');
  }



  const FR_DATA = {
    cities: ['Tampa','Queens','Asheville','Savannah','Toledo','Omaha','Panhandle','Augusta','Mobile','Cedar Ridge'],
    mascots: ['Ospreys','Grackles','Wrens','Owls','Peacocks','Ravens','Yellowstockings','Doves','Biscuits','Heaters','Barons','Admirals','Herons'],
    ownerBackgrounds: ['Captain of Industry','Eccentric Inventor','Entertainer','Former Player','Heir to Previous Owner','Local Government','Local Magnate','Media Personality','Millionaire Recluse','Newspaper Syndicate','Oil Man','Player Cooperative','Politician','Railroad Baron','Real Estate Developer','Riverboat Gambler','Venture Capitalist','War Hero'],
    ownerPersonalities: ['Baffled','Boastful','Combative','Cowardly','Destructive','Elegant','Even-Keeled','Giddy','Gossipy','Gregarious','Humble','Lovable','Miserly','Noble','Quixotic','Sadistic','Temperamental'],
    managerPersonalities: ['Apathetic','Charming','Colorless','Dignified','Domineering','Dull','Fatalistic','Fiery','Fun-Loving','Gloomy','Imaginative','Loyal','Open','Polite','Rude','Sincere','Taciturn','Thin-Skinned','Tough','Vain'],
    priorities: ['Hitting for Power','Hitting for Average','Starting Pitching','Bullpen','Speed','Defense'],
    makeups: ['Mostly Prospects','Balanced','Mostly Veterans'],
    fanbases: ['Non-existent','Indifferent','Fair Weather','Loyal','Obsessive'],
    parkTypes: ['Jewel Box','Baseball Palace','Space Age','Concrete Donut','Retro'],
    quirks: ['Cozy Outfield','Expansive Outfield','Short Left Field Porch','Short Right Field Porch','Left Field Oddity','Center Field Oddity','Right Field Oddity','Fast Infield','Slow Infield','High Mound','Beautiful','Hideous'],
    namesFirst: ['Clyde','Amber','Mercury','Beefsteak','Rosco','Danny','Malia','Pam','Rogen','Zelda','Walter','Nadia','Ben','August','Neil','Denise','Liberty','Kaki','Dash','Bud'],
    namesLast: ['Akers','Birdsong','Tyne','Atkins','Packenten','Rosol','Padgett','Seanor','Dawley','Morris','Clark','Weber','Ward','Casey','Ramsay','Tongier','Shaud','Pawlowski','Jemi','Novak']
  };

  function randFrom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function randomName() { return `${randFrom(FR_DATA.namesFirst)} ${randFrom(FR_DATA.namesLast)}`; }
  function computeTeamScoreFor(team) {
    const lineup = team.lineup || [];
    const pen = team.bullpen || [];
    const batting = lineup.reduce((sum, p) => sum + (Number(p.bt) || 0), 0);
    const pitching = [team.starter, ...pen].filter(Boolean).reduce((sum, p) => sum + (pitchDieValue(p.pd) * 7), 0);
    return Math.max(1, Math.round((batting + pitching) / 10));
  }
  function pitchDieValue(pd) {
    const map = {'d20':20,'d12':12,'d8':8,'d4':4,'-d4':-4,'-d8':-8,'-d12':-12,'-d20':-20};
    return map[pd] ?? 0;
  }
  function btForPriority(priority) {
    const base = priority === 'Hitting for Power' ? 28 : priority === 'Hitting for Average' ? 29 : priority === 'Defense' ? 25 : 26;
    return Math.max(18, Math.min(36, base + rollDie(8) - 4));
  }
  function pdForPriority(priority, bullpen=false) {
    if (priority === 'Starting Pitching' && !bullpen) return randFrom(['d12','d12','d8','d8','d4']);
    if ((priority === 'Bullpen' && bullpen) || bullpen) return randFrom(['d12','d8','d8','d4','d4','-d4']);
    return randFrom(['d8','d8','d4','d4','-d4']);
  }
  function simpleTraits(pos, priority) {
    const pool = [];
    if (priority === 'Hitting for Power') pool.push('P+');
    if (priority === 'Hitting for Average') pool.push('C+');
    if (priority === 'Speed') pool.push('S+');
    if (priority === 'Defense' || pos === 'C') pool.push('D+');
    if (!pool.length && Math.random() < 0.35) pool.push(randFrom(['P+','C+','S+']));
    return pool;
  }
  function generateFranchise() {
    const era = ui.frEra.value;
    const city = ui.frCity.value.trim() || randFrom(FR_DATA.cities);
    const nickname = ui.frMascot.value.trim() || randFrom(FR_DATA.mascots);
    const teamName = ui.frSaveName.value.trim() || `${city} ${nickname}`;
    const priority = randFrom(FR_DATA.priorities);
    const lineupPositions = ['SS','LF','RF','2B','CF','1B','3B','C'];
    const lineup = lineupPositions.map(pos => {
      const bt = btForPriority(priority); return { name: randomName(), pos, hand: randFrom(['L','R','S']), bt, obt: bt + 6 + rollDie(6) - 1, traits: simpleTraits(pos, priority) };
    });
    const starter = { name: ui.frManager.value.trim() ? `${ui.frManager.value.trim()} Jr.` : randomName(), role: 'SP', hand: randFrom(['L','R']), pd: pdForPriority(priority), bt: 10 + rollDie(8), obt: 16 + rollDie(8), traits: randFrom([['K+'],['ST+'],['GB+'],[]]) };
    const bullpen = Array.from({length:3}, () => ({ name: randomName(), role: 'RP', hand: randFrom(['L','R']), pd: pdForPriority(priority, true), bt: 6 + rollDie(8), obt: 10 + rollDie(8), traits: randFrom([['K+'],['GB+'],['ST+'],[]]) }));
    currentFranchise = {
      id: makeId(), era, name: teamName, short: teamName.split(' ').map(w => w[0]).join('').slice(0,3).toUpperCase(),
      manager: ui.frManager.value.trim() || randomName(), daring: Math.min(19, rollDie(20)),
      owner: { name: randomName(), background: randFrom(FR_DATA.ownerBackgrounds), personality: randFrom(FR_DATA.ownerPersonalities) },
      ballpark: ui.frBallpark.value.trim() || `${city} ${randFrom(['Park','Field','Grounds','Yards'])}`,
      parkType: randFrom(FR_DATA.parkTypes), parkQuirks: [randFrom(FR_DATA.quirks), randFrom(FR_DATA.quirks)],
      priority, makeup: randFrom(FR_DATA.makeups), fanbase: randFrom(FR_DATA.fanbases), lineup, starter, bullpen
    };
    currentFranchise.teamScore = computeTeamScoreFor(currentFranchise);
    localStorage.setItem(STORAGE_KEYS.franchise, JSON.stringify(currentFranchise));
    renderFranchise();
  }
  function renderFranchise() {
    if (!ui.franchiseOutput) return;
    if (!currentFranchise) {
      ui.franchiseOutput.innerHTML = '<p class="small">No franchise generated yet.</p>';
      return;
    }
    ui.franchiseOutput.innerHTML = `<div class="stack-item"><h3>${currentFranchise.name}</h3><div class="kv-grid"><div class="label">Era</div><div>${currentFranchise.era}</div><div class="label">Owner</div><div>${currentFranchise.owner.name} • ${currentFranchise.owner.background} • ${currentFranchise.owner.personality}</div><div class="label">Ballpark</div><div>${currentFranchise.ballpark} • ${currentFranchise.parkType}</div><div class="label">Quirks</div><div>${currentFranchise.parkQuirks.join(' • ')}</div><div class="label">Manager</div><div>${currentFranchise.manager} • Daring ${currentFranchise.daring}</div><div class="label">Club focus</div><div>${currentFranchise.priority} • ${currentFranchise.makeup}</div><div class="label">Fanbase</div><div>${currentFranchise.fanbase}</div><div class="label">Team score</div><div>${currentFranchise.teamScore}</div></div><p class="small">Roster shell: ${currentFranchise.lineup.length} hitters, 1 starter, ${currentFranchise.bullpen.length} relievers.</p></div>`;
  }
  function saveFranchiseAsTeam() {
    if (!currentFranchise) return;
    const team = clone(currentFranchise);
    delete team.owner; delete team.ballpark; delete team.parkType; delete team.parkQuirks; delete team.priority; delete team.makeup; delete team.fanbase; delete team.teamScore;
    customTeams.push(team);
    persistCustomTeams(); refreshTeamSelectors(); renderTeams(); populateFrontOfficeSelectors();
  }
  function populateFrontOfficeSelectors() {
    if (!ui.foTeamSelect) return;
    const teams = getAllTeams();
    [ui.foTeamSelect, ui.tradePartnerSelect, ui.draftTeamSelect].forEach(select => {
      if (!select) return; const current = select.value; select.innerHTML = ''; teams.forEach(t => { const o = document.createElement('option'); o.value = t.name; o.textContent = t.name; select.appendChild(o); }); if (current) select.value = current;
    });
    renderFrontOffice();
  }
  function allPlayers(team) { return [...team.lineup, team.starter, ...team.bullpen].filter(Boolean); }
  function playerTradeValue(player) {
    const positives = (player.traits || []).filter(t => ['P+','P++','C+','S+','D+','K+','GB+','CN+','ST+','T+'].includes(t)).length;
    return player.pd ? pitchDieValue(player.pd) * 5 + positives * 5 : (Number(player.bt) || 0) + positives * 5;
  }
  function renderFrontOffice() {
    if (!ui.foTeamSelect) return;
    const team = findTeamByName(ui.foTeamSelect.value || getAllTeams()[0]?.name);
    const partner = findTeamByName(ui.tradePartnerSelect.value || getAllTeams()[1]?.name);
    if (!team || !partner) return;
    ui.rosterOutput.innerHTML = `<div class="stack-item"><h3>${team.name}</h3><table class="roster-table"><thead><tr><th>Player</th><th>Pos/PD</th><th>BT</th><th>OBT</th><th>Traits</th></tr></thead><tbody>${allPlayers(team).map(p => `<tr><td>${p.name}</td><td>${p.pos || p.pd}</td><td>${p.bt || '—'}</td><td>${p.obt || '—'}</td><td>${traitText(p.traits)}</td></tr>`).join('')}</tbody></table></div>`;
    const populate = (select, list) => { if (!select) return; select.innerHTML = ''; list.forEach(p => { const o = document.createElement('option'); o.value = `${p.name}`; o.textContent = `${p.name} (${playerTradeValue(p)})`; select.appendChild(o); }); };
    populate(ui.tradeSendSelect, allPlayers(team)); populate(ui.tradeReceiveSelect, allPlayers(partner));
    renderProspects();
  }
  function selectedValues(select) { return Array.from(select?.selectedOptions || []).map(o => o.value); }
  function getPlayer(team, name) { return allPlayers(team).find(p => p.name === name); }
  function evaluateTrade() {
    const team = findTeamByName(ui.foTeamSelect.value); const partner = findTeamByName(ui.tradePartnerSelect.value); if (!team || !partner) return;
    const send = selectedValues(ui.tradeSendSelect).map(n => getPlayer(team,n)).filter(Boolean);
    const recv = selectedValues(ui.tradeReceiveSelect).map(n => getPlayer(partner,n)).filter(Boolean);
    const sendValue = send.reduce((s,p)=>s+playerTradeValue(p),0); const recvValue = recv.reduce((s,p)=>s+playerTradeValue(p),0);
    const issues = [];
    if (send.length > 2 || recv.length > 2) issues.push('Normal rulebook trade limit is two players per side before prospects.');
    if (send.length === 2 && recv.length === 1 && Math.max(...send.map(playerTradeValue),0) < playerTradeValue(recv[0]) / 2) issues.push('Your 2-for-1 offer is too light under the refusal rule.');
    if (sendValue - recvValue >= 25) issues.push('This deal is too favorable to you and is an auto-refusal.');
    const chance = Math.max(1, Math.min(99, 50 + sendValue - recvValue));
    const accepted = !issues.length && rollDie(100) <= chance;
    tradeEval = { team: team.name, partner: partner.name, send: send.map(p=>p.name), recv: recv.map(p=>p.name), chance, accepted, issues };
    localStorage.setItem(STORAGE_KEYS.tradeEval, JSON.stringify(tradeEval));
    ui.tradeResult.innerHTML = `<p><strong>Trade chance:</strong> ${chance}%</p><p><strong>Your value:</strong> ${sendValue} • <strong>Their value:</strong> ${recvValue}</p><p>${issues.length ? issues.join(' ') : (accepted ? 'The trade is accepted.' : 'The trade is declined.')}</p>`;
  }
  function removePlayer(team, name) {
    ['lineup','bullpen'].forEach(group => { team[group] = team[group].filter(p => p.name !== name); }); if (team.starter && team.starter.name === name) team.starter = team.bullpen.shift() || team.starter;
  }
  function applyTrade() {
    if (!tradeEval || !tradeEval.accepted || tradeEval.issues?.length) return;
    const team = findTeamByName(tradeEval.team); const partner = findTeamByName(tradeEval.partner); if (!team || !partner) return;
    const sendPlayers = tradeEval.send.map(n => clone(getPlayer(team,n))).filter(Boolean); const recvPlayers = tradeEval.recv.map(n => clone(getPlayer(partner,n))).filter(Boolean);
    tradeEval.send.forEach(n => removePlayer(team,n)); tradeEval.recv.forEach(n => removePlayer(partner,n));
    recvPlayers.forEach(p => p.pd ? team.bullpen.push(p) : team.lineup.push(p)); sendPlayers.forEach(p => p.pd ? partner.bullpen.push(p) : partner.lineup.push(p));
    persistCustomTeams(); renderTeams(); renderFrontOffice();
  }
  function generateProspects() {
    const teamName = ui.draftTeamSelect.value; const count = Number(ui.draftCount.value || 3);
    prospectBoard = Array.from({length:count}, (_,i) => {
      const isPitcher = Math.random() < 0.4; const tier = i === 0 ? 'Top Prospect' : 'Farmhand';
      if (isPitcher) return { id: makeId(), teamName, tier, selected:false, name: randomName(), pd: randFrom(i===0 ? ['d12','d8','d8','d4'] : ['d8','d4','d4','-d4']), hand: randFrom(['L','R']), traits: randFrom([['K+'],['GB+'],['ST+'],[]]), scouting: `${tier} arm generated from Year II style prospect tables.` };
      const bt = i===0 ? rollDie(10)+rollDie(10)+15 : rollDie(10)+15; return { id: makeId(), teamName, tier, selected:false, name: randomName(), pos: randFrom(['SS','2B','3B','1B','LF','CF','RF']), hand: randFrom(['L','R','S']), bt, obt: bt + rollDie(6) + 3, traits: randFrom([['P+'],['C+'],['S+'],['D+'],[]]), scouting: `${tier} bat with upside and a clear scouting hook.` };
    });
    localStorage.setItem(STORAGE_KEYS.prospects, JSON.stringify(prospectBoard)); renderProspects();
  }
  function renderProspects() {
    if (!ui.prospectOutput) return;
    if (!prospectBoard.length) { ui.prospectOutput.innerHTML = '<p class="small">No active prospect board.</p>'; return; }
    ui.prospectOutput.innerHTML = prospectBoard.map(p => `<label class="player-card"><input type="radio" name="prospectPick" value="${p.id}" ${p.selected ? 'checked' : ''}> <strong>${p.name}</strong> • ${p.tier} • ${p.pos || p.pd}${p.bt ? ` • BT ${p.bt} / OBT ${p.obt}` : ''}<br><span class="small">${traitText(p.traits)} • ${p.scouting}</span></label>`).join('');
    ui.prospectOutput.querySelectorAll('input[name="prospectPick"]').forEach(input => input.addEventListener('change', () => { prospectBoard = prospectBoard.map(p => ({...p, selected: p.id === input.value})); localStorage.setItem(STORAGE_KEYS.prospects, JSON.stringify(prospectBoard)); }));
  }
  function draftProspect() {
    const pick = prospectBoard.find(p => p.selected) || prospectBoard[0]; if (!pick) return; const team = findTeamByName(ui.draftTeamSelect.value || pick.teamName); if (!team) return; const player = clone(pick); delete player.id; delete player.teamName; delete player.tier; delete player.selected; delete player.scouting; if (player.pd) team.bullpen.push(player); else team.lineup.push(player); prospectBoard = prospectBoard.filter(p => p.id !== pick.id); localStorage.setItem(STORAGE_KEYS.prospects, JSON.stringify(prospectBoard)); persistCustomTeams(); renderTeams(); renderFrontOffice();
  }
  function populatePlayoffSelectors() {
    if (!ui.playoffCampaignSelect) return; ui.playoffCampaignSelect.innerHTML = ''; campaigns.forEach(c => { const o=document.createElement('option'); o.value=c.id; o.textContent=c.name; ui.playoffCampaignSelect.appendChild(o); });
  }
  function campaignStandings(campaign) {
    const teams = getAllTeams().map(t => ({ name: t.name, wins: 0, losses: 0, teamScore: computeTeamScoreFor({lineup:t.lineup, starter:t.starter, bullpen:t.bullpen}) }));
    (campaign?.games || []).forEach(g => {
      const [away, home] = g.score.split('-').map(Number); const a = teams.find(t => t.name === g.label.split(' at ')[0]); const h = teams.find(t => t.name === g.label.split(' at ')[1]); if (!a || !h || Number.isNaN(away) || Number.isNaN(home)) return; if (away > home) { a.wins += 1; h.losses += 1; } else { h.wins += 1; a.losses += 1; }
    });
    return teams.sort((a,b) => b.wins - a.wins || a.losses - b.losses || b.teamScore - a.teamScore);
  }
  function generateBracket() {
    const campaign = campaigns.find(c => c.id === ui.playoffCampaignSelect.value) || campaigns[0]; if (!campaign) return; const standings = campaignStandings(campaign); const size = Number(ui.playoffSize.value || 4); const field = standings.slice(0,size); const series = []; for (let i=0;i<size/2;i+=1) { series.push({ teamA: field[i], teamB: field[size-1-i], winsA:0, winsB:0, winner:null }); }
    playoffBracket = { campaignId: campaign.id, size, seriesLength: Number(ui.playoffSeriesLength.value || 7), rounds:[{ name: size===2 ? 'Final' : 'Semifinal', series }], champion:null }; localStorage.setItem(STORAGE_KEYS.playoffs, JSON.stringify(playoffBracket)); renderPlayoffs();
  }
  function simulateSeries(teamA, teamB, bestOf) { const needed=Math.ceil(bestOf/2); let winsA=0, winsB=0; while (winsA<needed && winsB<needed) { const favChance = 50 + Math.min(30, Math.abs(teamA.teamScore - teamB.teamScore)); const aFav = teamA.teamScore >= teamB.teamScore; const aWin = aFav ? rollDie(100) <= favChance : rollDie(100) > favChance; if (aWin) winsA += 1; else winsB += 1; } return { winsA, winsB, winner: winsA>winsB ? teamA : teamB }; }
  function simulateBracket() {
    if (!playoffBracket) generateBracket(); if (!playoffBracket) return; const first = playoffBracket.rounds[0]; first.series.forEach(s => { const res = simulateSeries(s.teamA, s.teamB, playoffBracket.seriesLength); s.winsA = res.winsA; s.winsB = res.winsB; s.winner = res.winner.name; }); if (first.series.length > 1) { const finalists = first.series.map(s => s.winner).map(n => campaignStandings(campaigns.find(c => c.id === playoffBracket.campaignId)).find(t => t.name === n)); const fin = simulateSeries(finalists[0], finalists[1], playoffBracket.seriesLength); playoffBracket.rounds[1] = { name: 'Final', series:[{ teamA: finalists[0], teamB: finalists[1], winsA: fin.winsA, winsB: fin.winsB, winner: fin.winner.name }] }; playoffBracket.champion = fin.winner.name; } else { playoffBracket.champion = first.series[0].winner; } localStorage.setItem(STORAGE_KEYS.playoffs, JSON.stringify(playoffBracket)); renderPlayoffs();
  }
  function renderPlayoffs() {
    if (!ui.playoffOutput) return; if (!playoffBracket) { ui.playoffOutput.innerHTML = '<p class="small">Seed a bracket from a campaign. This is where tied pennant races can become the best-of-seven title series described in the books.</p>'; return; }
    ui.playoffOutput.innerHTML = playoffBracket.rounds.map(round => `<div class="stack-item"><h3>${round.name}</h3>${round.series.map(s => `<div class="series-card"><strong>${s.teamA.name}</strong> vs <strong>${s.teamB.name}</strong><br><span class="small">${s.winner ? `${s.teamA.name} ${s.winsA}, ${s.teamB.name} ${s.winsB}. Winner: ${s.winner}` : 'Pending'}</span></div>`).join('')}</div>`).join('') + (playoffBracket.champion ? `<div class="stack-item"><h3>Champion</h3><p>${playoffBracket.champion}</p></div>` : '');
  }
  function renderDeploy() {
    if (!ui.deployOutput) return; ui.deployOutput.innerHTML = `<div class="stack-item"><h3>Live public website status</h3><p>I cannot directly publish a live public site from this environment. I did prepare the app for static hosting and I can hand you the exact folder to deploy.</p></div><div class="stack-item"><h3>Recommended hosts</h3><p>Vercel, Netlify, Cloudflare Pages, and GitHub Pages all work because this app is static HTML, CSS, and JavaScript.</p><div class="deploy-code">1. Put the deadball-radio-app folder in a Git repository.
2. Connect the repo to your host of choice.
3. Publish the folder root as a static site.
4. The host will issue your public URL after deployment.</div></div>`;
  }

  function logPlay(game, text, options = {}) {
    const entry = {
      inningLabel: game ? `${capitalize(game.half)} ${game.inning}` : '',
      text,
      type: options.type || '',
      meta: options.meta || ''
    };
    game.logs.push(entry);
    game.events.push(entry);
  }

  function updateLeaderChanges(game) {
    let leader = null;
    if (game.score.away > game.score.home) leader = 'away';
    if (game.score.home > game.score.away) leader = 'home';
    if (game.previousLeader && leader && game.previousLeader !== leader) game.leadChanges += 1;
    if (!game.previousLeader && leader) game.previousLeader = leader;
    else if (leader) game.previousLeader = leader;
  }

  function teamAtBat(game) { return game.half === 'top' ? game.away : game.home; }
  function teamFielding(game) { return game.half === 'top' ? game.home : game.away; }
  function sideKey(team, game) { return team.name === game.away.name ? 'away' : 'home'; }
  function currentBatter(game) { return teamAtBat(game).lineup[teamAtBat(game).battingIndex]; }
  function previousBatter(game, offense) { return offense.lineup[(offense.battingIndex + offense.lineup.length - 1) % offense.lineup.length]; }
  function advanceBatterIndex(game) { const offense = teamAtBat(game); offense.battingIndex = (offense.battingIndex + 1) % offense.lineup.length; }
  function batterBook(game, team, name) { return team.teamBatting[name]; }
  function pitcherBook(game, team, name) { return team.teamPitching[name]; }

  function getDefender(team, pos) {
    return team.lineup.find(player => player.pos === pos) || team.lineup[0];
  }
  function randomFielder(team) { return team.lineup[Math.floor(Math.random() * Math.min(8, team.lineup.length))]; }
  function fielderOutNotation(fielder) {
    const map = { '1B': 'G-3', '2B': '4-3', '3B': '5-3', 'SS': '6-3', 'LF': 'F-7', 'CF': 'F-8', 'RF': 'F-9', 'C': '2-3', 'P': '1-3' };
    return map[fielder.pos] || '6-3';
  }

  function errorFielderFromMss(defense, mss) {
    const digit = ((mss % 10) + 10) % 10;
    if (digit === 0 || digit === 1) return getDefender(defense, 'SS');
    if (digit === 2) return getDefender(defense, '2B');
    if (digit === 3) return getDefender(defense, '1B');
    if (digit === 4) return getDefender(defense, '2B');
    if (digit === 5) return getDefender(defense, '3B');
    if (digit === 6) return getDefender(defense, 'SS');
    if (digit === 7) return getDefender(defense, 'LF');
    if (digit === 8) return getDefender(defense, 'CF');
    return getDefender(defense, 'RF');
  }

  function adjustedBt(game, batter, pitcher) {
    let value = batter.bt;
    if ((game.bases[1] || game.bases[2]) && hasTrait(batter, 'C-')) value -= 3;
    if (hasTrait(pitcher, 'K+')) value -= 1;
    return value;
  }

  function adjustedObt(game, batter, pitcher) {
    let value = batter.obt;
    if ((game.bases[1] || game.bases[2]) && hasTrait(batter, 'C-')) value -= 3;
    if (hasTrait(pitcher, 'CN+')) value -= 2;
    if (hasTrait(pitcher, 'CN-')) value += 3;
    return value;
  }

  function resolveHitRoll(batter, critical) {
    let roll = rollDie(20);
    if (hasTrait(batter, 'P+')) roll += 1;
    if (hasTrait(batter, 'P++')) roll += 2;
    if (hasTrait(batter, 'P-')) roll -= 1;
    if (hasTrait(batter, 'P--')) roll -= 2;
    roll = Math.max(1, Math.min(20, roll));
    if (hasTrait(batter, 'C+') && (roll === 1 || roll === 2)) return { kind: critical ? 'triple' : 'double' };
    if (hasTrait(batter, 'S+') && roll === 1) return { kind: critical ? 'triple' : 'double' };
    if (hasTrait(batter, 'S+') && roll === 2) return { kind: critical ? 'homeRun' : 'triple' };
    let kind = 'single';
    if (roll >= 10 && roll <= 14) kind = 'single2';
    if (roll === 15 || roll === 16 || roll === 17) kind = 'double';
    if (roll === 18) kind = 'double3';
    if (roll >= 19) kind = 'homeRun';
    if (critical) {
      kind = upgradeHit(kind);
    }
    return { kind };
  }

  function upgradeHit(kind) {
    if (kind === 'single') return 'double';
    if (kind === 'single2') return 'double3';
    if (kind === 'double') return 'triple';
    if (kind === 'double3') return 'triple';
    if (kind === 'triple') return 'homeRun';
    return 'homeRun';
  }

  function rollOddity() { return { roll: rollDie(10) + rollDie(10) }; }
  function pitchMeta(meta) { return `Swing ${meta.swing}, pitch ${meta.pitchRoll >= 0 ? '+' : ''}${meta.pitchRoll}, MSS ${meta.mss}`; }
  function defenseRoll(fielder) { return rollDie(12) + (hasTrait(fielder, 'D+') ? 1 : hasTrait(fielder, 'D-') ? -1 : 0); }
  function stealModifier(game, runner) { return hasTrait(runner, 'S+') ? 1 : hasTrait(runner, 'S-') ? -2 : 0; }
  function hasTrait(player, trait) { return !!player && Array.isArray(player.traits) && player.traits.includes(trait); }
  function baseSummary(game) {
    const runners = [];
    if (game.bases[0]) runners.push(`${game.bases[0].name} on first`);
    if (game.bases[1]) runners.push(`${game.bases[1].name} on second`);
    if (game.bases[2]) runners.push(`${game.bases[2].name} on third`);
    return runners.length ? runners.join(', ') : 'Bases empty';
  }
  function isInfieldOut(pos) { return ['1B', '2B', '3B', 'SS', 'P', 'C'].includes(pos); }
  function isFlyOrStrikeout(notation) { return notation === 'K' || notation.startsWith('F'); }
  function canProductiveOutAdvance(pos) { return ['1B', '2B', 'LF', 'CF', 'RF'].includes(pos); }
  function matchupPitchDie(pd, role, pitcherHand, batterHand) {
    if (pitcherHand !== batterHand) return pd;
    const max = role === 'RP' ? 'd20' : 'd12';
    const bumped = shiftPitchDie(pd, 1);
    return PITCH_LEVELS.indexOf(bumped) > PITCH_LEVELS.indexOf(max) ? max : bumped;
  }
  function pdIsEven(pd) {
    const roll = rollPitchDie(pd);
    return Math.abs(roll) % 2 === 0;
  }
  function shiftPitchDie(pd, delta) {
    const idx = PITCH_LEVELS.indexOf(pd);
    if (idx === -1) return pd;
    const next = Math.max(0, Math.min(PITCH_LEVELS.length - 1, idx + delta));
    return PITCH_LEVELS[next];
  }
  function rollPitchDie(pd) {
    const negative = pd.startsWith('-');
    const sides = Number(pd.replace('-', '').replace('d', ''));
    const value = rollDie(sides);
    return negative ? -value : value;
  }
  function rollDie(sides) { return Math.floor(Math.random() * sides) + 1; }
  function findTeamByName(name) { return getAllTeams().find(team => team.name === name); }
  function ensureInningSlots(game) {
    while (game.lineScore.away.length < game.inning) game.lineScore.away.push('');
    while (game.lineScore.home.length < game.inning) game.lineScore.home.push('');
  }
  function formatInnings(outs) { return `${Math.floor(outs / 3)}.${outs % 3}`; }
  function ordinal(n) { return `${n}${({1:'st',2:'nd',3:'rd'}[(n % 10)] && ![11,12,13].includes(n % 100) ? {1:'st',2:'nd',3:'rd'}[n % 10] : 'th')}`; }
  function capitalize(value) { return value.charAt(0).toUpperCase() + value.slice(1); }
  function sample(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function traitText(traits) { return traits && traits.length ? traits.join(', ') : 'No listed traits'; }
  function traitTextShort(traits) { return traits && traits.length ? traits.join(' • ') : 'No listed traits'; }
  function logTypeLabel(type) {
    const labels = {
      intro: 'Opening',
      scoring: 'Scoring Play',
      oddity: 'Oddity',
      injury: 'Injury',
      baserunning: 'Baserunning',
      bunt: 'Small Ball',
      summary: 'Update',
      flavor: 'Color'
    };
    return labels[type] || '';
  }
  function baseSummaryCompact(game) {
    const occupied = [];
    if (game.bases[0]) occupied.push('1st');
    if (game.bases[1]) occupied.push('2nd');
    if (game.bases[2]) occupied.push('3rd');
    return occupied.length ? `Runners on ${occupied.join(', ')}` : 'Bases empty';
  }
  function winningSummary(game) {
    if (game.score.away === game.score.home) return 'The game ended tied.';
    const winner = game.score.away > game.score.home ? game.away : game.home;
    return `${winner.name} win.`;
  }
  function injuryLocation(roll) {
    if (roll === 1) return 'Head';
    if (roll <= 5) return 'Shoulder';
    if (roll <= 9) return 'Elbow';
    if (roll === 10) return 'Forearm';
    if (roll === 11) return 'Wrist';
    if (roll === 12) return 'Hand';
    if (roll <= 14) return 'Back';
    if (roll === 15) return 'Oblique';
    if (roll === 16) return 'Hip';
    if (roll === 17) return 'Hamstring';
    if (roll === 18) return 'Knee';
    if (roll === 19) return 'Ankle';
    return 'Foot';
  }
  function injurySeverity(roll) {
    if (roll === 1) return 'Catastrophic injury';
    if (roll <= 5) return 'Major injury';
    if (roll <= 10) return 'Minor injury';
    if (roll <= 75) return 'Superficial injury';
    return 'Player is unhurt';
  }
  function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }
  function persistArchive() { localStorage.setItem(STORAGE_KEYS.archive, JSON.stringify(archive)); }
  function persistCampaigns() { localStorage.setItem(STORAGE_KEYS.campaigns, JSON.stringify(campaigns)); }
  function persistCustomTeams() { localStorage.setItem(STORAGE_KEYS.customTeams, JSON.stringify(customTeams)); }
  function persistFranchise() { localStorage.setItem(STORAGE_KEYS.franchise, JSON.stringify(currentFranchise)); }
  function persistProspects() { localStorage.setItem(STORAGE_KEYS.prospects, JSON.stringify(prospectBoard)); }
  function persistTradeEval() { localStorage.setItem(STORAGE_KEYS.tradeEval, JSON.stringify(tradeEval)); }
  function persistPlayoffs() { localStorage.setItem(STORAGE_KEYS.playoffs, JSON.stringify(playoffBracket)); }
  function makeId() { return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`; }
  function clone(obj) { return JSON.parse(JSON.stringify(obj)); }
  function formatDate(value) { return new Date(value).toLocaleString(); }
})();
