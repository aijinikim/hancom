/* ===== CLAUDE-84 레트로 계산기 로직 ===== */
(function () {
  "use strict";

  const mainEl = document.getElementById("main");
  const exprEl = document.getElementById("expr");
  const buttons = document.querySelector(".buttons");

  const MAX_DIGITS = 12; // LCD 표시 한계

  // 상태
  let current = "0";    // 현재 입력 문자열
  let previous = null;  // 이전 피연산자 (number)
  let operator = null;  // '+', '-', '*', '/'
  let overwrite = true; // 다음 숫자 입력 시 current 덮어쓰기
  let memory = 0;       // 메모리 값
  let hasError = false; // 에러 상태(÷0 등)

  const OP_SYMBOL = { "+": "+", "-": "−", "*": "×", "/": "÷" };

  /* ---------- 표시 ---------- */
  function formatNumber(numStr) {
    if (numStr === "Error") return "Error";
    // 입력 중(문자열, 끝이 '.' 등)은 그대로, 숫자면 자릿수 정리
    if (numStr.endsWith(".")) return withCommas(numStr.slice(0, -1)) + ".";
    const n = Number(numStr);
    if (!isFinite(n)) return "Error";

    let out = numStr;
    // 지나치게 길면 정밀도 줄이기
    if (out.replace(/[-.]/g, "").length > MAX_DIGITS) {
      out = trimPrecision(n);
    }
    return addCommasToNumber(out);
  }

  function trimPrecision(n) {
    const abs = Math.abs(n);
    if (abs !== 0 && (abs >= 1e12 || abs < 1e-6)) {
      return n.toExponential(6).replace(/\.?0+e/, "e");
    }
    // 소수 자리 잘라서 전체 길이 맞춤
    let s = n.toPrecision(MAX_DIGITS);
    if (s.indexOf(".") >= 0) s = s.replace(/\.?0+$/, "");
    return s;
  }

  function addCommasToNumber(s) {
    const neg = s.startsWith("-");
    if (neg) s = s.slice(1);
    if (s.indexOf("e") >= 0 || s.indexOf("E") >= 0) return (neg ? "-" : "") + s;
    const [int, dec] = s.split(".");
    const withC = withCommas(int);
    return (neg ? "-" : "") + (dec !== undefined ? withC + "." + dec : withC);
  }

  function withCommas(intStr) {
    return intStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function updateDisplay() {
    mainEl.textContent = hasError ? "Error" : formatNumber(current);

    let expr = "";
    if (!hasError && previous !== null && operator) {
      expr = addCommasToNumber(String(previous)) + " " + OP_SYMBOL[operator];
    }
    // 메모리 표시자
    exprEl.textContent = (memory !== 0 ? "M  " : "") + expr;

    // 활성 연산자 하이라이트
    document.querySelectorAll(".btn.op").forEach((b) => b.classList.remove("active"));
    if (!hasError && operator && overwrite) {
      const active = document.querySelector('.btn.op[data-value="' + cssEscape(operator) + '"]');
      if (active) active.classList.add("active");
    }
  }

  function cssEscape(v) { return v.replace(/([+*])/g, "\\$1"); }

  /* ---------- 입력 ---------- */
  function inputDigit(d) {
    if (hasError) clearAll();
    if (overwrite) {
      current = d;
      overwrite = false;
    } else {
      if (current === "0") current = d;
      else if (current.replace(/[-.]/g, "").length < MAX_DIGITS) current += d;
    }
    updateDisplay();
  }

  function inputDecimal() {
    if (hasError) clearAll();
    if (overwrite) {
      current = "0.";
      overwrite = false;
    } else if (!current.includes(".")) {
      current += ".";
    }
    updateDisplay();
  }

  function backspace() {
    if (hasError) { clearAll(); return; }
    if (overwrite) return;
    if (current.length <= 1 || (current.length === 2 && current.startsWith("-"))) {
      current = "0";
      overwrite = true;
    } else {
      current = current.slice(0, -1);
    }
    updateDisplay();
  }

  /* ---------- 연산 ---------- */
  function chooseOperator(op) {
    if (hasError) return;
    if (operator && !overwrite) {
      // 연쇄 계산: 먼저 이전 결과 계산
      const result = compute(previous, Number(current), operator);
      if (result === null) return;
      previous = result;
      current = String(result);
    } else if (previous === null) {
      previous = Number(current);
    }
    operator = op;
    overwrite = true;
    updateDisplay();
  }

  function compute(a, b, op) {
    let r;
    switch (op) {
      case "+": r = a + b; break;
      case "-": r = a - b; break;
      case "*": r = a * b; break;
      case "/":
        if (b === 0) { showError(); return null; }
        r = a / b; break;
      default: return b;
    }
    // 부동소수 오차 정리
    r = Math.round((r + Number.EPSILON) * 1e10) / 1e10;
    return r;
  }

  function equals() {
    if (hasError || operator === null || previous === null) return;
    const b = overwrite ? previous : Number(current);
    const result = compute(previous, b, operator);
    if (result === null) return;
    current = String(result);
    previous = null;
    operator = null;
    overwrite = true;
    updateDisplay();
  }

  /* ---------- 부가 기능 ---------- */
  function clearAll() {
    current = "0";
    previous = null;
    operator = null;
    overwrite = true;
    hasError = false;
    updateDisplay();
  }

  function toggleSign() {
    if (hasError) return;
    if (current === "0") return;
    current = current.startsWith("-") ? current.slice(1) : "-" + current;
    updateDisplay();
  }

  function percent() {
    if (hasError) return;
    let val = Number(current);
    // 연산 중이면 이전 값 기준 퍼센트, 아니면 /100
    if (previous !== null && operator) val = previous * (val / 100);
    else val = val / 100;
    current = String(val);
    overwrite = true;
    updateDisplay();
  }

  function showError() {
    hasError = true;
    previous = null;
    operator = null;
    overwrite = true;
    updateDisplay();
  }

  /* ---------- 메모리 ---------- */
  function currentValue() { return hasError ? 0 : Number(current); }
  function memAdd()    { if (!hasError) { memory += currentValue(); overwrite = true; updateDisplay(); } }
  function memSub()    { if (!hasError) { memory -= currentValue(); overwrite = true; updateDisplay(); } }
  function memRecall() {
    if (hasError) clearAll();
    current = String(memory);
    overwrite = true;
    updateDisplay();
  }
  function memClear()  { memory = 0; updateDisplay(); }

  /* ---------- 액션 디스패치 ---------- */
  function dispatch(action, value) {
    switch (action) {
      case "number":     inputDigit(value); break;
      case "decimal":    inputDecimal(); break;
      case "operator":   chooseOperator(value); break;
      case "equals":     equals(); break;
      case "clear":      clearAll(); break;
      case "sign":       toggleSign(); break;
      case "percent":    percent(); break;
      case "mem-add":    memAdd(); break;
      case "mem-sub":    memSub(); break;
      case "mem-recall": memRecall(); break;
      case "mem-clear":  memClear(); break;
    }
  }

  /* ---------- 마우스 (이벤트 위임) ---------- */
  buttons.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn");
    if (!btn) return;
    dispatch(btn.dataset.action, btn.dataset.value);
    flash(btn);
  });

  function flash(btn) {
    btn.classList.add("pressed");
    setTimeout(() => btn.classList.remove("pressed"), 100);
  }

  /* ---------- 키보드 ---------- */
  const KEY_MAP = {
    "0": "0","1": "1","2": "2","3": "3","4": "4",
    "5": "5","6": "6","7": "7","8": "8","9": "9",
    ".": ".", "+": "+", "-": "-", "*": "*", "/": "/",
    "%": "%", "Enter": "=", "=": "=", "Escape": "C", "Backspace": "Back"
  };

  document.addEventListener("keydown", (e) => {
    const k = KEY_MAP[e.key];
    if (k === undefined) return;
    e.preventDefault();

    let selector = null;
    if (/[0-9]/.test(k))       { inputDigit(k); selector = '[data-value="' + k + '"]'; }
    else if (k === ".")        { inputDecimal(); selector = '[data-action="decimal"]'; }
    else if ("+-*/".includes(k)){ chooseOperator(k); selector = '.btn.op[data-value="' + cssEscape(k) + '"]'; }
    else if (k === "=")        { equals(); selector = '.btn.equals'; }
    else if (k === "C")        { clearAll(); selector = '[data-action="clear"]'; }
    else if (k === "%")        { percent(); selector = '[data-action="percent"]'; }
    else if (k === "Back")     { backspace(); }

    if (selector) {
      const btn = document.querySelector(selector);
      if (btn) flash(btn);
    }
  });

  /* ---------- 초기화 ---------- */
  updateDisplay();
})();
