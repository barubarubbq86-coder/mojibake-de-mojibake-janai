"use strict";

const conversionMap = Object.freeze({
  "あ": "き",
  "い": "米",
  "う": "ウ",
  "え": "け",
  "お": "唖",
  "か": "ｨ有",
  "き": "葉ﾅ",
  "く": "す",
  "け": "せ",
  "こ": "ー",
  "さ": "緑",
  "し": "緑",
  "す": "緑",
  "せ": "緑",
  "そ": "緑",
  "た": "緑",
  "ち": "伊藤",
  "つ": "味",
  "て": "背男",
  "と": "斗",
  "な": "ﾅ",
  "に": "ゃ",
  "ぬ": "ｼｬｰﾍﾟﾝ",
  "ね": "ﾅ",
  "の": "ﾅ",
  "は": "二",
  "ひ": "ﾇ",
  "ふ": "ャ",
  "へ": "ちゃ",
  "ほ": "他",
  "ま": "蚊",
  "み": "い",
  "む": "む",
  "め": "目",
  "も": "森木",
  "や": "木",
  "ゆ": "目",
  "よ": "湯気",
  "ら": "乱",
  "り": "未",
  "る": "類",
  "れ": "例",
  "ろ": "組田",
  "わ": "な",
  "ゐ": "ｨ",
  "ゑ": "絵",
  "を": "尾ｫ゛",
  "ん": "のｺﾞ",
  "が": "ｨ◯田゛",
  "ぎ": "ギロｩ◯",
  "ぐ": "組具ﾗん✕",
  "げ": "゛✕組",
  "ご": "ト",
  "ざ": "雑食の四✕組、✕゛",
  "じ": "自由、¿.?!◯゛",
  "ず": "田◯",
  "ぜ": "゜",
  "ぞ": "゜゛",
  "だ": "た゛゜◯゛",
  "ぢ": "゛゜゛",
  "づ": "゜゛゜",
  "で": "゛゛゜",
  "ど": "゛゛゛",
  "ば": "゛゛゜",
  "び": "゛゜◯",
  "ぶ": "「",
  "べ": "緑◯゜",
  "ぼ": "緑゛",
  "ぁ": "ゃ",
  "ぃ": "゛",
  "ぅ": "田?7",
  "ぉ": "亜ｪ",
  "ゃ": "をw゛",
  "ゅ": "◯",
  "ょ": "゛◯",
  "ゎ": "ゐ゜,\\_d|€",
  "ー": "は",
  "〜": "版ﾊﾞ",
  "、": "、",
  "。": "◯゛",
  "？": "！",
  "！": "！゜゛"
});

const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const convertButton = document.getElementById("convertButton");
const copyButton = document.getElementById("copyButton");
const clearButton = document.getElementById("clearButton");
const exampleButton = document.getElementById("exampleButton");
const themeToggle = document.getElementById("themeToggle");
const message = document.getElementById("message");

function convertText(text) {
  return Array.from(text, (char) => Object.prototype.hasOwnProperty.call(conversionMap, char) ? conversionMap[char] : char).join("");
}

function updateOutput(showMessage = false) {
  outputText.value = convertText(inputText.value);

  if (showMessage) {
    setMessage(inputText.value ? "へんかん できた！✨" : "もじを いれてみてね！😊");
  }
}

function setMessage(text) {
  message.textContent = text;
}

async function copyResult() {
  if (!outputText.value) {
    setMessage("コピーする もじが ないよ！✏️");
    return;
  }

  try {
    await navigator.clipboard.writeText(outputText.value);
    setMessage("コピーしたよ！📋");
  } catch (error) {
    outputText.focus();
    outputText.select();

    const copied = document.execCommand && document.execCommand("copy");
    setMessage(copied ? "コピーしたよ！📋" : "コピーできなかったよ。もじを えらんで コピーしてね！");
  }
}

function clearAll() {
  inputText.value = "";
  outputText.value = "";
  inputText.focus();
  setMessage("きれいに けしたよ！🧹");
}

function insertExample() {
  inputText.value = "こんにちは！";
  updateOutput(false);
  inputText.focus();
  setMessage("れいを いれたよ！✨");
}

function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.textContent = isDark ? "☀️ ライト" : "🌙 ダーク";
  localStorage.setItem("mojibakeTheme", isDark ? "dark" : "light");
}

inputText.addEventListener("input", () => updateOutput(false));
convertButton.addEventListener("click", () => updateOutput(true));
copyButton.addEventListener("click", copyResult);
clearButton.addEventListener("click", clearAll);
exampleButton.addEventListener("click", insertExample);
themeToggle.addEventListener("click", () => applyTheme(!document.body.classList.contains("dark")));

const savedTheme = localStorage.getItem("mojibakeTheme");
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme ? savedTheme === "dark" : prefersDark);
updateOutput(false);
