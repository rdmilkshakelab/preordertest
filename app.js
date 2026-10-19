const scenarios = {
  apple: {
    id: 'apple',
    name: 'Apple',
    badge: 'A',
    accent: '#7c9eff',
    product: 'iPhone 16 Pro Max',
    price: '$1,199',
    emoji: '📱',
    variant: 'Natural Titanium',
    storage: '256 GB',
    summary: 'Official reserve terminal for the latest flagship.',
    issues: [
      {
        title: 'Apple ID session expired',
        description: 'Your sign-in token hit a wall and the preorder terminal is requesting a fresh verification flow.',
        fix: 'Refresh account session'
      },
      {
        title: 'Payment gateway hiccup',
        description: 'The bank handoff failed during the wallet check. The system is asking for a clean retry.',
        fix: 'Retry payment'
      },
      {
        title: 'Bot verification triggered',
        description: 'The terminal flagged suspicious activity and dropped you into a short fraud check.',
        fix: 'Complete verification'
      }
    ],
    steps: [
      {
        title: 'Sign in',
        prompt: 'Access your account and keep the secure checkout line alive.',
        options: [
          { label: 'Use saved Apple ID', hint: 'Fast path' },
          { label: 'Verify with trusted device', hint: 'Secure flow' },
          { label: 'Recover session', hint: 'Fallback' }
        ]
      },
      {
        title: 'Choose configuration',
        prompt: 'Select the model, finish, and storage that matches the preorder queue.',
        options: [
          { label: 'Natural Titanium', hint: '256 GB' },
          { label: 'Black Titanium', hint: '512 GB' },
          { label: 'White Titanium', hint: '1 TB' }
        ]
      },
      {
        title: 'Shipping',
        prompt: 'Confirm the address and delivery lane before the reservation window closes.',
        options: [
          { label: 'Home delivery', hint: '2-4 days' },
          { label: 'Store pickup', hint: 'Ready in 2 hours' },
          { label: 'Carrier secure drop', hint: 'Hazmat safe' }
        ]
      },
      {
        title: 'Payment',
        prompt: 'Complete the secure payment step while the queue is still open.',
        options: [
          { label: 'Use default card', hint: 'Visa •••• 1049' },
          { label: 'Add backup wallet', hint: 'Instant retry' },
          { label: 'Pay later', hint: 'No lock-in' }
        ]
      },
      {
        title: 'Finalize preorder',
        prompt: 'Submit the reservation and lock in the queue slot before the terminal resets.',
        options: [
          { label: 'Submit reservation', hint: 'Go live' },
          { label: 'Review details', hint: 'Check final pass' },
          { label: 'Confirm queue', hint: 'One-click lock' }
        ]
      }
    ]
  },
  nintendo: {
    id: 'nintendo',
    name: 'Nintendo',
    badge: 'N',
    accent: '#ff4d4d',
    product: 'Nintendo Switch 2',
    price: '$449',
    emoji: '🎮',
    variant: 'Mario Red',
    storage: 'Standard Edition',
    summary: 'High-demand hardware reservation flow with stricter queue checks.',
    issues: [
      {
        title: 'Login session timeout',
        description: 'The Nintendo Account session timed out during the reservation handshake.',
        fix: 'Refresh account check'
      },
      {
        title: 'Inventory hold expired',
        description: 'The retail pool was briefly capped and the stock slot vanished before finalization.',
        fix: 'Reclaim inventory slot'
      },
      {
        title: 'Bot shield triggered',
        description: 'The system is demanding a visual challenge step before it will process your queue request.',
        fix: 'Solve challenge'
      }
    ],
    steps: [
      {
        title: 'Nintendo Account',
        prompt: 'Log in before the reservation window snaps closed.',
        options: [
          { label: 'Use saved account', hint: 'Fast sign-in' },
          { label: 'Verify device', hint: 'Secure check' },
          { label: 'Recover session', hint: 'Fallback' }
        ]
      },
      {
        title: 'Select hardware',
        prompt: 'Choose your configuration and confirm the launch bundle.',
        options: [
          { label: 'Mario Red', hint: 'Standard bundle' },
          { label: 'Dark Blue', hint: 'Pro controller pack' },
          { label: 'Neon set', hint: 'Collector style' }
        ]
      },
      {
        title: 'Delivery setup',
        prompt: 'Set delivery preferences and confirm the address can receive shipments.',
        options: [
          { label: 'Home delivery', hint: '3-5 days' },
          { label: 'Pickup', hint: 'Store pickup' },
          { label: 'Pickup point', hint: 'Partner locker' }
        ]
      },
      {
        title: 'Payment',
        prompt: 'Run the checkout through the standard payment sequence.',
        options: [
          { label: 'Use default card', hint: 'Mastercard' },
          { label: 'Pay with wallet', hint: 'Quick trigger' },
          { label: 'Manual review', hint: 'Full check' }
        ]
      },
      {
        title: 'Place reservation',
        prompt: 'Finalize the order before the terminal cycles or the stock window disappears.',
        options: [
          { label: 'Reserve hardware', hint: 'Place queue' },
          { label: 'Review order', hint: 'No mistakes' },
          { label: 'Confirm final slot', hint: 'Lock in' }
        ]
      }
    ]
  },
  playstation: {
    id: 'playstation',
    name: 'PlayStation',
    badge: 'PS',
    accent: '#5ea5ff',
    product: 'PlayStation 5 Pro',
    price: '$799',
    emoji: '🕹️',
    variant: 'Midnight Black',
    storage: '2 TB',
    summary: 'Console launch queue that keeps reloading under heavy traffic.',
    issues: [
      {
        title: 'Account verification failed',
        description: 'Your PlayStation Network session is stale and the queue needs a new handshake.',
        fix: 'Verify account'
      },
      {
        title: 'Payment authorization timeout',
        description: 'The payment terminal stalled while the card processor checked your billing details.',
        fix: 'Retry card auth'
      },
      {
        title: 'Queue anti-bot check',
        description: 'The load balancer suspecting automated activity triggered a challenge step before checkout.',
        fix: 'Complete anti-bot check'
      }
    ],
    steps: [
      {
        title: 'PSN sign in',
        prompt: 'Authenticate to start the reservation flow and keep your queue alive.',
        options: [
          { label: 'Use PSN account', hint: 'Saved login' },
          { label: 'Quick sign-in', hint: 'Trust this device' },
          { label: 'Recovery flow', hint: 'Reset session' }
        ]
      },
      {
        title: 'Select console',
        prompt: 'Choose the hardware bundle before the stock pool is reassigned.',
        options: [
          { label: 'Midnight Black', hint: '2 TB' },
          { label: 'Nova White', hint: '1 TB' },
          { label: 'Limited pack', hint: 'Collector bundle' }
        ]
      },
      {
        title: 'Shipping and pickup',
        prompt: 'Decide how you want the console delivered or prepared for pickup.',
        options: [
          { label: 'Home delivery', hint: 'Next week' },
          { label: 'Store pickup', hint: 'Fast lane' },
          { label: 'Market pickup', hint: 'Partner store' }
        ]
      },
      {
        title: 'Wallet check',
        prompt: 'The payment lane is volatile. Keep the request moving and avoid a dropped signal.',
        options: [
          { label: 'Use default card', hint: 'Visa •••• 5021' },
          { label: 'Wallet transfer', hint: '1 tap' },
          { label: 'One-time secure code', hint: 'Manual approval' }
        ]
      },
      {
        title: 'Reserve and lock',
        prompt: 'Send the final signal and hold your place in the launch queue.',
        options: [
          { label: 'Lock queue slot', hint: 'Complete' },
          { label: 'Review lock', hint: 'Check details' },
          { label: 'Process now', hint: 'Final submission' }
        ]
      }
    ]
  },
  xbox: {
    id: 'xbox',
    name: 'Xbox',
    badge: 'X',
    accent: '#4adf9d',
    product: 'Xbox Series X',
    price: '$599',
    emoji: '🟢',
    variant: 'Carbon Black',
    storage: '1 TB',
    summary: 'Fast queue lane with fake stock pressure, bot checks, and payment retries.',
    issues: [
      {
        title: 'Microsoft account sign-in issue',
        description: 'The account token was interrupted while the queue system was validating your reservation status.',
        fix: 'Refresh identity'
      },
      {
        title: 'Card processing failure',
        description: 'The payment path returned a decline and the checkout page requires a fresh auth roundtrip.',
        fix: 'Retry auth'
      },
      {
        title: 'Bot shield challenge',
        description: 'The queue check identified suspicious activity and is asking for a quick confirmation.',
        fix: 'Solve anti-bot challenge'
      }
    ],
    steps: [
      {
        title: 'Microsoft account',
        prompt: 'Secure the queue lane by signing in with your active account.',
        options: [
          { label: 'Use saved account', hint: 'Fast resume' },
          { label: 'Verify security code', hint: 'Manual check' },
          { label: 'Recover session', hint: 'Reset sign-in' }
        ]
      },
      {
        title: 'Select console',
        prompt: 'Choose your preferred hardware configuration and bundle before the line refreshes.',
        options: [
          { label: 'Carbon Black', hint: '1 TB' },
          { label: 'Velocity Green', hint: '2 TB' },
          { label: 'Limited launch kit', hint: 'Bonus bundle' }
        ]
      },
      {
        title: 'Shipping details',
        prompt: 'Set delivery to a secure address or a nearby pickup lane.',
        options: [
          { label: 'Ship to home', hint: '2-5 days' },
          { label: 'Pickup in store', hint: 'Fastest route' },
          { label: 'Secure locker', hint: 'Low-friction' }
        ]
      },
      {
        title: 'Confirm payment',
        prompt: 'Process the secure checkout and keep the queue alive while the network settles.',
        options: [
          { label: 'Use default method', hint: 'Visa •••• 9714' },
          { label: 'Automatic retry', hint: 'Resubmit card' },
          { label: 'One-time code', hint: 'Manual approve' }
        ]
      },
      {
        title: 'Lock in preorder',
        prompt: 'Final submit the reservation before the countdown forces a queue reset.',
        options: [
          { label: 'Complete preorder', hint: 'Finalize' },
          { label: 'Review checkout', hint: 'Confirm details' },
          { label: 'Confirm reservation', hint: 'Hold slot' }
        ]
      }
    ]
  }
};

const bestTimesKey = 'preorderScrimBestTimes';
const app = document.getElementById('app');

const state = {
  screen: 'menu',
  scenarioId: null,
  scenario: null,
  stepIndex: 0,
  timerStart: 0,
  elapsedMs: 0,
  errors: 0,
  challenge: null,
  interval: null,
  bestTimes: JSON.parse(localStorage.getItem(bestTimesKey) || '{}')
};

function timeLabel(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const centis = Math.floor((ms % 1000) / 10);
  return `${minutes}:${String(seconds).padStart(2, '0')}.${String(centis).padStart(2, '0')}`;
}

function getScenarioById(id) {
  return scenarios[id] || scenarios.apple;
}

function startTimer() {
  if (state.interval) {
    clearInterval(state.interval);
  }

  state.timerStart = Date.now();
  state.elapsedMs = 0;
  state.interval = setInterval(() => {
    state.elapsedMs = Date.now() - state.timerStart;
    if (state.screen === 'run') {
      updateLiveStats();
    }
  }, 100);
}

function updateLiveStats() {
  const elapsedEl = document.getElementById('elapsed-time');
  const scoreEl = document.getElementById('score');
  if (elapsedEl) {
    elapsedEl.textContent = timeLabel(state.elapsedMs);
  }
  if (scoreEl) {
    const score = Math.max(0, 2200 - Math.floor(state.elapsedMs / 100) - state.errors * 120);
    scoreEl.textContent = `${score}`;
  }
}

function renderMenu() {
  state.screen = 'menu';
  app.innerHTML = `
    <section class="menu-layout">
      <div class="hero-panel">
        <div class="hero-copy">
          <h2>Beat the queue.<br />Break the bots.</h2>
          <p>
            This is a sandbox preorder speed test. Every scenario mimics an official storefront,
            but nothing is actually purchased. Race through login, payment, inventory, and anti-bot checks as fast as you can.
          </p>
          <div class="hero-metrics">
            <div class="metric-box">
              <span class="metric-label">Scenarios</span>
              <span class="metric-value">4</span>
            </div>
            <div class="metric-box">
              <span class="metric-label">Challenges</span>
              <span class="metric-value">Login + Bot + Payment</span>
            </div>
            <div class="metric-box">
              <span class="metric-label">Mode</span>
              <span class="metric-value">Sandbox</span>
            </div>
          </div>
        </div>
        <div class="terminal-preview">
          <div class="preview-bar">
            <span class="preview-dot red"></span>
            <span class="preview-dot yellow"></span>
            <span class="preview-dot green"></span>
          </div>
          <div class="preview-window">
            <h3>Checkout status</h3>
            <p>Anti-bot check active. Queue lane unstable.</p>
            <div class="preview-lines">
              <div class="preview-line"></div>
              <div class="preview-line short"></div>
              <div class="preview-line tiny"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="scenario-grid">
        ${Object.values(scenarios).map((scenario) => `
          <article class="scenario-card" style="--card-accent:${scenario.accent};">
            <div class="card-head">
              <div class="brand-badge">${scenario.badge}</div>
              <span>${scenario.name}</span>
            </div>
            <h3>${scenario.product}</h3>
            <p>${scenario.summary}</p>
            <div class="scenario-meta">
              <div class="meta-row"><span>Price</span><strong>${scenario.price}</strong></div>
              <div class="meta-row"><span>Storage</span><strong>${scenario.storage}</strong></div>
              <div class="meta-row"><span>Variant</span><strong>${scenario.variant}</strong></div>
            </div>
            <button data-scenario="${scenario.id}" type="button">Start run</button>
          </article>
        `).join('')}
      </div>
    </section>
  `;

  document.querySelectorAll('[data-scenario]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.scenario;
      startScenario(id);
    });
  });
}

function startScenario(id) {
  state.scenarioId = id;
  state.scenario = getScenarioById(id);
  state.stepIndex = 0;
  state.errors = 0;
  state.challenge = null;
  state.elapsedMs = 0;
  startTimer();
  renderRun();
}

function renderRun() {
  state.screen = 'run';
  const scenario = state.scenario;
  const currentStep = scenario.steps[state.stepIndex];
  const progress = ((state.stepIndex + (state.challenge ? 0 : 1)) / scenario.steps.length) * 100;
  const score = Math.max(0, 2200 - Math.floor(state.elapsedMs / 100) - state.errors * 120);

  app.innerHTML = `
    <section class="run-screen">
      <div class="brand-shell" style="--brand-accent:${scenario.accent};">
        <div class="brand-topbar" style="background: linear-gradient(90deg, ${scenario.accent}22, rgba(255,255,255,0.01));">
          <div class="brand-left">
            <div class="brand-mark" style="background:${scenario.accent}18; border-color:${scenario.accent}44;">${scenario.badge}</div>
            <div>
              <div style="font-weight:800; font-size: 1.1rem; letter-spacing:-0.03em;">${scenario.name}</div>
              <div style="color: var(--muted); font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase;">Official preorder terminal</div>
            </div>
          </div>
          <div class="brand-hud">
            <span class="pill">Queue live</span>
            <span class="pill">${scenario.price}</span>
          </div>
        </div>

        <div class="brand-stage">
          <div class="product-card">
            <h2>${scenario.product}</h2>
            <p>${scenario.summary}</p>
            <div style="margin-top:18px; display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; color: var(--muted); font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase;">
              <span>${scenario.variant}</span>
              <span>${scenario.storage}</span>
            </div>
          </div>

          <div class="scoreboard">
            <div class="score-box">
              <span class="label">Elapsed</span>
              <strong id="elapsed-time">${timeLabel(state.elapsedMs)}</strong>
            </div>
            <div class="score-box">
              <span class="label">Score</span>
              <strong id="score">${score}</strong>
            </div>
            <div class="score-box">
              <span class="label">Errors</span>
              <strong>${state.errors}</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="progress-wrap">
        <div class="progress-header">
          <span>Preorder progress</span>
          <span>${Math.min(state.stepIndex + 1, scenario.steps.length)} / ${scenario.steps.length}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:${Math.min(progress, 100)}%; background: linear-gradient(90deg, ${scenario.accent}, rgba(255,255,255,0.3));"></div>
        </div>
      </div>

      <div class="step-panel">
        <h3>${currentStep.title}</h3>
        <p>${currentStep.prompt}</p>

        <div class="option-grid">
          ${currentStep.options.map((option) => `
            <button class="action-btn" data-step-choice="${option.label}" type="button">
              <small>${option.hint}</small>
              <strong>${option.label}</strong>
            </button>
          `).join('')}
        </div>

        ${state.challenge ? `
          <div class="issue-modal">
            <h4>Issue detected</h4>
            <p><strong>${state.challenge.title}</strong><br>${state.challenge.description}</p>
            <div class="issue-actions">
              <button class="primary-btn" data-resolve="1" type="button">Resolve: ${state.challenge.fix}</button>
              <button class="secondary-btn" data-retry="1" type="button">Retry lane</button>
            </div>
          </div>
        ` : ''}
      </div>
    </section>
  `;

  attachRunHandlers();
  updateLiveStats();
}

function attachRunHandlers() {
  document.querySelectorAll('[data-step-choice]').forEach((button) => {
    button.addEventListener('click', () => {
      const isFailure = Math.random() < 0.48;
      if (isFailure) {
        const issue = state.scenario.issues[Math.floor(Math.random() * state.scenario.issues.length)];
        state.challenge = issue;
        renderRun();
        return;
      }

      advanceStep();
    });
  });

  document.querySelectorAll('[data-resolve]').forEach((button) => {
    button.addEventListener('click', () => {
      state.challenge = null;
      state.errors += 1;
      advanceStep();
    });
  });

  document.querySelectorAll('[data-retry]').forEach((button) => {
    button.addEventListener('click', () => {
      state.challenge = null;
      state.errors += 1;
      renderRun();
    });
  });
}

function advanceStep() {
  if (state.stepIndex >= state.scenario.steps.length - 1) {
    finishRun();
    return;
  }

  state.stepIndex += 1;
  renderRun();
}

function finishRun() {
  if (state.interval) {
    clearInterval(state.interval);
  }

  const score = Math.max(0, 2200 - Math.floor(state.elapsedMs / 100) - state.errors * 120);
  const scenario = state.scenario;
  const previousBest = state.bestTimes[scenario.id];

  if (!previousBest || state.elapsedMs < previousBest) {
    state.bestTimes[scenario.id] = state.elapsedMs;
    localStorage.setItem(bestTimesKey, JSON.stringify(state.bestTimes));
  }

  app.innerHTML = `
    <section class="result-screen">
      <div class="result-card">
        <h2>Queue complete.</h2>
        <div class="result-grid">
          <div class="score-box">
            <span class="label">Time</span>
            <strong>${timeLabel(state.elapsedMs)}</strong>
          </div>
          <div class="score-box">
            <span class="label">Score</span>
            <strong>${score}</strong>
          </div>
          <div class="score-box">
            <span class="label">Best</span>
            <strong>${timeLabel(state.bestTimes[scenario.id] ?? state.elapsedMs)}</strong>
          </div>
        </div>
        <p>
          You cleared the ${scenario.name} sandbox terminal without placing any real order. This was a speed test wash:
          login failed, payment got rejected, and anti-bot checks stacked up like a real launch-day headache.
        </p>
        <div class="result-actions">
          <button class="restart-btn" type="button" data-back="menu">Pick another scenario</button>
        </div>
      </div>
    </section>
  `;

  document.querySelectorAll('[data-back]').forEach((button) => {
    button.addEventListener('click', renderMenu);
  });
}

renderMenu();
