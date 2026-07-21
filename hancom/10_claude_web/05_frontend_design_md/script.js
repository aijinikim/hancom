// ============================================================
// 계산기 로직 — eval() 금지, 명시적 switch 계산
// ============================================================
(function () {
  "use strict";

  var currentEl = document.getElementById("current");
  var previousEl = document.getElementById("previous");

  var state = {
    current: "0",   // 입력 중인 값(문자열)
    previous: null, // 확정된 피연산자(숫자)
    operator: null, // "+", "−", "×", "÷"
    overwrite: true, // 다음 숫자 입력 시 current 덮어쓰기
    error: false,
  };

  var OP_SYMBOL = { "+": "+", "−": "−", "×": "×", "÷": "÷" };

  // --- 렌더 ---------------------------------------------------
  function formatNumber(numStr) {
    // 화면 표시용: 천단위 구분 없이 그대로 (소수 입력 중 처리 위해)
    return numStr;
  }

  function render() {
    currentEl.textContent = state.error ? "오류" : formatNumber(state.current);
    currentEl.classList.toggle("is-error", state.error);

    if (state.error) {
      previousEl.textContent = "";
    } else if (state.previous !== null && state.operator) {
      previousEl.textContent = trimResult(state.previous) + " " + OP_SYMBOL[state.operator];
    } else {
      previousEl.textContent = "";
    }
  }

  // --- 계산 ---------------------------------------------------
  function trimResult(x) {
    // 부동소수점 정리: 12자리 정밀도 후 불필요한 0 제거
    if (!isFinite(x)) return String(x);
    var r = parseFloat(x.toPrecision(12));
    return String(r);
  }

  function compute(a, b, op) {
    switch (op) {
      case "+": return a + b;
      case "−": return a - b;
      case "×": return a * b;
      case "÷": return b === 0 ? NaN : a / b;
      default: return b;
    }
  }

  // --- 입력 핸들러 --------------------------------------------
  function resetIfError() {
    if (state.error) clearAll();
  }

  function inputDigit(d) {
    resetIfError();
    if (state.overwrite) {
      state.current = d;
      state.overwrite = false;
    } else {
      // 앞자리 0 처리
      if (state.current === "0") state.current = d;
      else state.current += d;
    }
    render();
  }

  function inputDecimal() {
    resetIfError();
    if (state.overwrite) {
      state.current = "0.";
      state.overwrite = false;
    } else if (state.current.indexOf(".") === -1) {
      state.current += ".";
    }
    render();
  }

  function chooseOperator(op) {
    resetIfError();
    var inputVal = parseFloat(state.current);

    if (state.previous === null) {
      state.previous = inputVal;
    } else if (!state.overwrite) {
      // 연쇄 계산: 이전 결과에 현재값 적용
      var result = compute(state.previous, inputVal, state.operator);
      if (isNaN(result)) return showError();
      state.previous = result;
      state.current = trimResult(result);
    }

    state.operator = op;
    state.overwrite = true;
    render();
  }

  function equals() {
    resetIfError();
    if (state.operator === null || state.previous === null) return;
    var inputVal = parseFloat(state.current);
    var result = compute(state.previous, inputVal, state.operator);
    if (isNaN(result)) return showError();

    state.current = trimResult(result);
    state.previous = null;
    state.operator = null;
    state.overwrite = true;
    render();
  }

  function negate() {
    resetIfError();
    if (state.current === "0") return;
    state.current = state.current.charAt(0) === "-"
      ? state.current.slice(1)
      : "-" + state.current;
    render();
  }

  function percent() {
    resetIfError();
    var val = parseFloat(state.current) / 100;
    state.current = trimResult(val);
    state.overwrite = true;
    render();
  }

  function backspace() {
    if (state.error) return clearAll();
    if (state.overwrite) return;
    if (state.current.length <= 1 || (state.current.length === 2 && state.current.charAt(0) === "-")) {
      state.current = "0";
      state.overwrite = true;
    } else {
      state.current = state.current.slice(0, -1);
    }
    render();
  }

  function clearAll() {
    state.current = "0";
    state.previous = null;
    state.operator = null;
    state.overwrite = true;
    state.error = false;
    render();
  }

  function showError() {
    state.error = true;
    state.previous = null;
    state.operator = null;
    render();
  }

  // --- 버튼 클릭 (이벤트 위임) --------------------------------
  document.querySelector(".calc-keys").addEventListener("click", function (e) {
    var btn = e.target.closest("button.key");
    if (!btn) return;

    if (btn.dataset.num !== undefined) return inputDigit(btn.dataset.num);
    if (btn.dataset.op !== undefined) return chooseOperator(btn.dataset.op);

    switch (btn.dataset.action) {
      case "decimal": return inputDecimal();
      case "equals": return equals();
      case "clear": return clearAll();
      case "negate": return negate();
      case "percent": return percent();
    }
  });

  // --- 키보드 바인딩 -----------------------------------------
  var KEY_OP = { "+": "+", "-": "−", "*": "×", "/": "÷" };

  document.addEventListener("keydown", function (e) {
    if (e.key >= "0" && e.key <= "9") { inputDigit(e.key); return; }
    if (e.key === ".") { inputDecimal(); return; }
    if (KEY_OP[e.key]) { chooseOperator(KEY_OP[e.key]); return; }
    if (e.key === "Enter" || e.key === "=") { e.preventDefault(); equals(); return; }
    if (e.key === "Backspace") { backspace(); return; }
    if (e.key === "Escape") { clearAll(); return; }
    if (e.key === "%") { percent(); return; }
  });

  // 초기 렌더
  render();
})();
