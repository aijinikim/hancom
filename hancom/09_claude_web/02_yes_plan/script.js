// 계산기 상태
let current = "0";     // 현재 입력 중인 값 (문자열)
let previous = null;   // 이전 피연산자 (숫자)
let operator = null;   // 선택된 연산자
let resetNext = false; // 다음 숫자 입력 시 current 초기화 여부
let errored = false;   // 오류 상태

const currentEl = document.getElementById("current");
const previousEl = document.getElementById("previous");
const buttonsEl = document.getElementById("buttons");

// 부동소수 오차 정리
function tidy(n) {
  if (!isFinite(n)) return n;
  return parseFloat(n.toPrecision(12));
}

function updateDisplay() {
  currentEl.textContent = current;
  if (operator !== null && previous !== null) {
    previousEl.textContent = `${previous} ${operator}`;
  } else {
    previousEl.textContent = "";
  }
}

function clearAll() {
  current = "0";
  previous = null;
  operator = null;
  resetNext = false;
  errored = false;
  updateDisplay();
}

// 오류 후 아무 입력이나 들어오면 초기화
function guardError() {
  if (errored) {
    clearAll();
    return true;
  }
  return false;
}

function inputDigit(d) {
  if (guardError()) { /* 초기화됨, 계속 입력 진행 */ }
  if (resetNext) {
    current = d;
    resetNext = false;
  } else {
    current = current === "0" ? d : current + d;
  }
  updateDisplay();
}

function inputDecimal() {
  if (guardError()) {}
  if (resetNext) {
    current = "0.";
    resetNext = false;
  } else if (!current.includes(".")) {
    current += ".";
  }
  updateDisplay();
}

function chooseOperator(op) {
  if (guardError()) return;
  // 이미 대기 중인 연산 있고 새 숫자도 입력됐으면 먼저 계산
  if (operator !== null && !resetNext) {
    compute();
  } else {
    previous = parseFloat(current);
  }
  operator = op;
  resetNext = true;
  updateDisplay();
}

function compute() {
  if (operator === null || previous === null) return;
  const a = previous;
  const b = parseFloat(current);
  let result;
  switch (operator) {
    case "+": result = a + b; break;
    case "−": result = a - b; break;
    case "×": result = a * b; break;
    case "÷":
      if (b === 0) {
        showError();
        return;
      }
      result = a / b;
      break;
    default: return;
  }
  current = String(tidy(result));
  previous = null;
  operator = null;
  resetNext = true;
  updateDisplay();
}

function showError() {
  current = "오류";
  previous = null;
  operator = null;
  errored = true;
  resetNext = true;
  currentEl.textContent = current;
  previousEl.textContent = "";
}

function del() {
  if (guardError()) return;
  if (resetNext) return;
  current = current.length > 1 ? current.slice(0, -1) : "0";
  updateDisplay();
}

function percent() {
  if (guardError()) return;
  current = String(tidy(parseFloat(current) / 100));
  updateDisplay();
}

function toggleSign() {
  if (guardError()) return;
  if (current === "0") return;
  current = current.startsWith("-") ? current.slice(1) : "-" + current;
  updateDisplay();
}

// 클릭 이벤트 위임
buttonsEl.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  if (btn.dataset.digit !== undefined) {
    inputDigit(btn.dataset.digit);
  } else if (btn.dataset.operator !== undefined) {
    chooseOperator(btn.dataset.operator);
  } else if (btn.dataset.action !== undefined) {
    switch (btn.dataset.action) {
      case "clear": clearAll(); break;
      case "delete": del(); break;
      case "percent": percent(); break;
      case "sign": toggleSign(); break;
      case "decimal": inputDecimal(); break;
      case "equals": compute(); break;
    }
  }
});

// 키보드 이벤트
document.addEventListener("keydown", (e) => {
  const k = e.key;
  if (k >= "0" && k <= "9") {
    inputDigit(k);
  } else if (k === ".") {
    inputDecimal();
  } else if (k === "+") {
    chooseOperator("+");
  } else if (k === "-") {
    chooseOperator("−");
  } else if (k === "*") {
    chooseOperator("×");
  } else if (k === "/") {
    e.preventDefault();
    chooseOperator("÷");
  } else if (k === "Enter" || k === "=") {
    e.preventDefault();
    compute();
  } else if (k === "Backspace") {
    del();
  } else if (k === "Escape") {
    clearAll();
  } else if (k === "%") {
    percent();
  }
});

// 초기 렌더
updateDisplay();
