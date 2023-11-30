// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// ボタンが押されたときにtextの内容を変更する
btn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
});