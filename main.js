// 暗号とカギの取得
let hirabun = document.getElementById('Hirabun');
let key = document.getElementById('Key');
let ans = document.getElementById('Ans');

// 暗号化処理
function angou() {
	ans.value = hirabun.value ^ key.value;
}

// クリップボードコピー
function copyToClipboard() {
	let copyTarget = document.getElementById("Ans");
	copyTarget.select();
	document.execCommand("Copy");
	alert("コピー完了！ : " + Ans.value);
}