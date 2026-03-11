/**
 * watermark.js — "PROOF OF CONCEPT PROTOTYPE" stencil watermark
 *
 * Usage (light background):
 *   <script src="watermark.js"></script>
 *
 * Usage (dark background):
 *   <script src="watermark.js" data-color="rgba(255,255,255,0.10)"></script>
 */
(function () {
  'use strict';

  const script  = document.currentScript;
  const color   = (script && script.dataset.color) || 'rgba(150, 20, 0, 0.09)';
  const TEXT    = 'PROOF OF CONCEPT PROTOTYPE';
  const ROWS    = 7;
  const COLS    = 2;

  /* ── Load Black Ops One (stencil typeface) from Google Fonts ──────────── */
  const link    = document.createElement('link');
  link.rel      = 'stylesheet';
  link.href     = 'https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap';
  document.head.appendChild(link);

  /* ── Styles ───────────────────────────────────────────────────────────── */
  const style = document.createElement('style');
  style.textContent = `
    .poc-wm {
      position: fixed;
      /* Oversized container so text covers viewport in all scroll states */
      width: 220vw;
      height: 220vh;
      left: -60vw;
      top:  -60vh;
      pointer-events: none;
      z-index: 99999;
      overflow: hidden;
      /* Diagonal slant */
      transform: rotate(-25deg);
      transform-origin: 50vw 50vh;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 160px;
      padding: 80px 0;
    }
    .poc-wm-row {
      display: flex;
      gap: 160px;
      white-space: nowrap;
      flex-shrink: 0;
    }
    /* Stagger every other row for a proper stamp-grid look */
    .poc-wm-row:nth-child(even) {
      margin-left: 160px;
    }
    .poc-wm-text {
      font-family: "Black Ops One", Impact, "Arial Black", fantasy;
      font-size: clamp(24px, 3.2vw, 52px);
      color: ${color};
      text-transform: uppercase;
      letter-spacing: 0.07em;
      user-select: none;
      flex-shrink: 0;
    }
  `;
  document.head.appendChild(style);

  /* ── Build the watermark DOM ──────────────────────────────────────────── */
  const wm = document.createElement('div');
  wm.className = 'poc-wm';
  wm.setAttribute('aria-hidden', 'true');
  wm.setAttribute('role', 'presentation');

  for (let row = 0; row < ROWS; row++) {
    const rowEl = document.createElement('div');
    rowEl.className = 'poc-wm-row';
    for (let col = 0; col < COLS; col++) {
      const span = document.createElement('span');
      span.className = 'poc-wm-text';
      span.textContent = TEXT;
      rowEl.appendChild(span);
    }
    wm.appendChild(rowEl);
  }

  document.body.appendChild(wm);
}());
