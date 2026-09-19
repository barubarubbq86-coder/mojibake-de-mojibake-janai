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
  "！": "！゜゛",
  "日": "カゴ〜？.口",
  "国": "雲孫",
  "会": "店",
  "人": "忍者似",
  "年": "円",
  "大": "きい",
  "本": "細ん",
  "中": "カッコル",
  "長": "すぎる、い",
  "出": "無理",
  "同": "同盟",
  "時": "そんな時はこれを使えば良い！/0n..k.kl",
  "政": "正しくなく増えるサkai",
  "事": "ジ",
  "自": "超簡単な虫",
  "行": "ゴウヨウ",
  "一": "苺艹",
  "二": "お笑い芸人",
  "三": "最初の野菜です、馬ヒンーン",
  "四": "よご",
  "五": "ごよU。語ｩすう",
  "六": "や字",
  "七": "水ｧと-の、ほ鷹",
  "八": "実家の実家ノルウェー、",
  "九": "キリバ帰還ス",
  "十": "実家の字よくある-あるある",
  "百": "火",
  "千": "王",
  "万": "孫ッつぬ",
  "億": "大男",
  "兆": "おおおおおおおおおお",
  "京": "ガイザー",
  "垓": "豪快",
  "A": "合うg-h(+/",
  "B": "ぬぬぬぬｪｪぬぇぅ江ェ゙",
  "C": "！",
  "D": "ED",
  "E": "ビール",
  "F": "モザンビーク",
  "G": "モザイクビーク",
  "H": "門居る",
  "I": "丨♁マﾀﾃﾎﾞｳ",
  "J": "グニョングー",
  "K": "食うッキー",
  "L": "ルっ",
  "M": "ムンらさき",
  "N": "店店（みせてん）",
  "O": "三毛猫の段ボールの家",
  "P": "火",
  "Q": "クールぬ",
  "R": "ルっ",
  "S": "住んｧす",
  "T": "ミッツ・ゴゥー",
  "U": "ユーゔ",
  "V": "（",
  "W": "増えるまたは孫の人の馬の実家の家",
  "X": "シャン",
  "Y": "ゆい♂（）かせい）",
  "Z": "ずっと待つ",
  "Ñ": "猫と鷹の話化け",
  "Æ": "ない🫸",
  "Œ": "男",
  "ゕ": "子供",
  "ゖ": "かけろ",
  "ヵ": "水を溢す",
  "ヶ": "水鉄砲、消す、ｧｳｯﾁﾞｽ"
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
