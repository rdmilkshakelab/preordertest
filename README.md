:root {
  --bg: #07111f;
  --bg-2: #0d1827;
  --panel: rgba(11, 20, 35, 0.88);
  --panel-strong: rgba(17, 29, 47, 0.96);
  --line: rgba(148, 163, 184, 0.18);
  --text: #edf5ff;
  --muted: #a7b7ce;
  --accent: #7c9eff;
  --danger: #ff6d6d;
  --warning: #ffca6b;
  --success: #7ae4af;
  --shadow: 0 18px 48px rgba(6, 10, 22, 0.5);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: "Inter", sans-serif;
  background: radial-gradient(circle at top, #0d1b2a 0%, var(--bg) 38%, #050b14 100%);
  color: var(--text);
}

body {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}

button {
  font: inherit;
}

.background-glow {
  position: fixed;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.2;
  pointer-events: none;
}

.glow-one {
  width: 420px;
  height: 420px;
  background: rgba(124, 158, 255, 0.9);
  top: 4%;
  left: 5%;
}

.glow-two {
  width: 380px;
  height: 380px;
  background: rgba(82, 220, 173, 0.7);
  right: 8%;
  bottom: 7%;
}

.app-shell {
  position: relative;
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  padding: 28px 0 48px;
  z-index: 1;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 20px 24px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: rgba(8, 15, 25, 0.62);
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow);
}

.eyebrow {
  margin: 0 0 6px;
  letter-spacing: 0.2em;
  font-size: 11px;
  font-weight: 700;
  color: var(--muted);
}

h1 {
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  letter-spacing: -0.06em;
}

.status-pill {
  border: 1px solid rgba(122, 228, 175, 0.3);
  border-radius: 999px;
  padding: 8px 12px;
  background: rgba(122, 228, 175, 0.08);
  color: var(--success);
  font-size: 0.8rem;
  font-weight: 700;
}

#app {
  margin-top: 28px;
}

.menu-layout {
  display: grid;
  gap: 18px;
}

.hero-panel {
  display: grid;
  grid-template-columns: 1.5fr 0.9fr;
  gap: 18px;
  padding: 18px 20px;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: rgba(9, 17, 28, 0.82);
  box-shadow: var(--shadow);
}

.hero-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-copy h2 {
  margin: 0 0 14px;
  font-size: clamp(2rem, 4vw, 4rem);
  letter-spacing: -0.08em;
  line-height: 0.95;
}

.hero-copy p {
  margin: 0;
  color: var(--muted);
  max-width: 62ch;
  line-height: 1.6;
}

.hero-metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 18px;
}

.metric-box {
  flex: 1 1 120px;
  padding: 14px 16px;
  border-radius: 16px;
  background: rgba(18, 32, 52, 0.8);
  border: 1px solid var(--line);
}

.metric-label {
  color: var(--muted);
  font-size: 0.76rem;
  display: block;
  margin-bottom: 6px;
}

.metric-value {
  font-weight: 800;
  font-size: 1.15rem;
}

.terminal-preview {
  min-height: 250px;
  border-radius: 20px;
  border: 1px solid rgba(124, 158, 255, 0.25);
  background: linear-gradient(180deg, rgba(16, 27, 41, 0.95), rgba(8, 15, 26, 0.92));
  padding: 18px;
}

.preview-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
}

.preview-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
}

.preview-dot.red { background: #ff6d6d; }
.preview-dot.yellow { background: #ffca6b; }
.preview-dot.green { background: #7ae4af; }

.preview-window {
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
  padding: 16px;
}

.preview-window h3 {
  margin: 0 0 8px;
  font-size: 1rem;
}

.preview-window p {
  margin: 0 0 12px;
  color: var(--muted);
}

.preview-lines {
  display: grid;
  gap: 10px;
}

.preview-line {
  height: 8px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(124, 158, 255, 0.8), rgba(255, 255, 255, 0.12));
}

.preview-line.short {
  width: 62%;
}

.preview-line.tiny {
  width: 40%;
}

.scenario-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  gap: 18px;
  margin-top: 18px;
}

.scenario-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 280px;
  border-radius: 22px;
  padding: 18px 18px 16px;
  border: 1px solid var(--line);
  background: rgba(9, 17, 27, 0.9);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.scenario-card::before {
  content: "";
  position: absolute;
  inset: 0 auto auto 0;
  width: 100%;
  height: 5px;
  background: var(--card-accent, var(--accent));
}

.card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.brand-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 1.1rem;
  font-weight: 900;
  letter-spacing: -0.05em;
}

.card-head span:last-child {
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.scenario-card h3 {
  margin: 20px 0 10px;
  font-size: 1.7rem;
  letter-spacing: -0.05em;
}

.scenario-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.5;
}

.scenario-meta {
  display: grid;
  gap: 10px;
  margin-top: 18px;
  padding: 12px 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.meta-row {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 0.84rem;
}

.meta-row span:first-child {
  color: var(--muted);
}

.meta-row strong {
  font-size: 0.88rem;
}

.scenario-card button {
  margin-top: auto;
  border: 0;
  border-radius: 12px;
  padding: 12px 16px;
  font-weight: 800;
  color: white;
  background: linear-gradient(135deg, var(--card-accent, var(--accent)), rgba(255, 255, 255, 0.18));
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.scenario-card button:hover {
  transform: translateY(-1px);
  filter: brightness(1.08);
}

.run-screen {
  display: grid;
  gap: 18px;
}

.brand-shell {
  border-radius: 26px;
  border: 1px solid var(--line);
  background: rgba(9, 17, 28, 0.9);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.brand-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 20px;
  background: linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
}

.brand-left {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  font-weight: 900;
  font-size: 1.1rem;
}

.brand-hud {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--muted);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.pill {
  padding: 8px 11px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.03);
}

.brand-stage {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 18px;
  padding: 18px 20px 20px;
}

.product-card {
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255,255,255,0.02);
  padding: 18px;
}

.product-card h2 {
  margin: 0 0 10px;
  font-size: clamp(1.6rem, 3vw, 2.6rem);
  letter-spacing: -0.06em;
}

.product-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}

.scoreboard {
  display: grid;
  gap: 12px;
}

.score-box {
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 14px 15px;
  background: rgba(255,255,255,0.02);
}

.score-box .label {
  display: block;
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.score-box strong {
  display: block;
  margin-top: 8px;
  font-size: clamp(1.3rem, 3vw, 2rem);
}

.progress-wrap {
  display: grid;
  gap: 12px;
  border-radius: 22px;
  border: 1px solid var(--line);
  background: rgba(9, 17, 28, 0.9);
  padding: 18px 20px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 0.8rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.progress-bar {
  width: 100%;
  height: 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.07);
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.05);
}

.progress-fill {
  height: 100%;
  width: 0%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--brand-accent), rgba(255,255,255,0.2));
  transition: width 0.25s ease;
}

.step-panel {
  border-radius: 22px;
  border: 1px solid var(--line);
  background: rgba(9, 17, 28, 0.9);
  padding: 20px;
}

.step-panel h3 {
  margin: 0 0 8px;
  font-size: clamp(1.4rem, 2vw, 2rem);
  letter-spacing: -0.04em;
}

.step-panel p {
  margin: 0 0 18px;
  color: var(--muted);
  line-height: 1.6;
}

.captcha-panel,
.memory-panel,
.choice-panel,
.final-panel {
  display: grid;
  gap: 14px;
}

.captcha-label,
.muted-label {
  display: inline-block;
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.captcha-target {
  display: grid;
  place-items: center;
  width: 78px;
  height: 78px;
  border-radius: 18px;
  background: rgba(124, 158, 255, 0.12);
  border: 1px solid rgba(124, 158, 255, 0.2);
  font-size: 2.4rem;
}

.captcha-hint {
  margin: 0;
  font-size: 0.96rem;
}

.captcha-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(70px, 1fr));
  gap: 10px;
  max-width: 320px;
}

.captcha-tile {
  height: 72px;
  border-radius: 15px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.02);
  color: var(--text);
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.15s ease, border-color 0.15s ease, background 0.15s ease;
}

.captcha-tile.selected {
  background: rgba(124, 158, 255, 0.18);
  border-color: rgba(124, 158, 255, 0.58);
  transform: translateY(-1px);
}

.memory-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(255,255,255,0.02);
}

.memory-header p {
  margin: 6px 0 0;
  color: var(--text);
}

.memory-badge {
  display: grid;
  place-items: center;
  min-width: 88px;
  height: 52px;
  padding: 0 12px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(124,158,255,0.12);
  font-weight: 900;
  font-size: 1.5rem;
}

.field-label {
  display: block;
  font-size: 0.8rem;
  color: var(--muted);
  margin-top: 4px;
}

.security-input {
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.02);
  color: var(--text);
  padding: 12px 14px;
  font-size: 1rem;
}

.security-input:focus {
  outline: 2px solid rgba(124, 158, 255, 0.4);
  border-color: rgba(124, 158, 255, 0.4);
}

.passphrase-wrap {
  display: grid;
  gap: 10px;
  margin-top: 4px;
}

.passphrase-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.mini-btn {
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 10px;
  background: rgba(255,255,255,0.03);
  color: var(--text);
  padding: 8px 10px;
  cursor: pointer;
}

.choice-copy {
  color: var(--muted);
  margin: 0;
}

.option-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

.action-btn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  min-height: 96px;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 14px 16px;
  background: rgba(255,255,255,0.02);
  color: var(--text);
  text-align: left;
  cursor: pointer;
  transition: border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;
}

.action-btn:hover {
  transform: translateY(-1px);
  border-color: rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.04);
}

.action-btn small {
  color: var(--muted);
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.action-btn strong {
  font-size: 1rem;
}

.summary-block {
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 16px;
  background: rgba(255,255,255,0.02);
}

.summary-block h4 {
  margin: 8px 0 10px;
  font-size: 1.2rem;
}

.summary-block ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  display: grid;
  gap: 8px;
}

.cta-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.primary-btn,
.secondary-btn,
.restart-btn {
  border: 0;
  border-radius: 12px;
  padding: 12px 16px;
  font-weight: 800;
  cursor: pointer;
}

.primary-btn {
  background: linear-gradient(135deg, var(--accent), rgba(255,255,255,0.2));
  color: white;
}

.primary-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.secondary-btn {
  background: rgba(255,255,255,0.06);
  color: var(--text);
  border: 1px solid rgba(255,255,255,0.08);
}

.restart-btn {
  background: linear-gradient(135deg, #7c9eff, #4fe0c3);
  color: white;
}

.issue-modal {
  margin-top: 18px;
  border: 1px solid rgba(255, 109, 109, 0.35);
  border-radius: 18px;
  background: rgba(255, 109, 109, 0.08);
  padding: 18px;
}

.issue-modal h4 {
  margin: 0 0 8px;
  color: #ffb0b0;
  font-size: 1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.issue-modal p {
  color: #ffd7d7;
  margin: 0 0 16px;
}

.issue-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.result-screen {
  display: grid;
  place-items: center;
  min-height: 60vh;
}

.result-card {
  width: min(720px, 100%);
  border: 1px solid var(--line);
  border-radius: 24px;
  background: rgba(9, 17, 28, 0.92);
  box-shadow: var(--shadow);
  padding: 24px;
}

.result-card h2 {
  margin: 0 0 20px;
  font-size: clamp(2rem, 4vw, 3.3rem);
  letter-spacing: -0.06em;
}

.result-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}

.result-card p {
  margin: 0 0 18px;
  color: var(--muted);
  line-height: 1.6;
}

.result-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

@media (max-width: 980px) {
  .hero-panel,
  .brand-stage,
  .scenario-grid {
    grid-template-columns: 1fr;
  }

  .scenario-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
}

@media (max-width: 640px) {
  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .brand-topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .result-grid {
    grid-template-columns: 1fr;
  }
}

