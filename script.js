document.addEventListener('DOMContentLoaded', () => {
    loadItems();
});

function addItem() {
    const newItem = document.getElementById('newItem').value;
    if (newItem.trim() === '') return;

    const items = JSON.parse(localStorage.getItem('shoppingList')) || [];

    // 新しいアイテムが既にリストに存在するか確認
    if (items.includes(newItem)) {
        alert('このアイテムは既にリストに存在します。'); // またはユーザーにフィードバックを与える他の方法を使用
        return;
    }

    items.push(newItem);
    localStorage.setItem('shoppingList', JSON.stringify(items));
    renderItems();
    document.getElementById('newItem').value = ''; // 入力フィールドをクリア
}

function renderItems() {
    const itemsList = document.getElementById('itemsList');
    itemsList.innerHTML = ''; // リストをクリア
    const items = JSON.parse(localStorage.getItem('shoppingList')) || [];

    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '削除';
        deleteBtn.onclick = () => deleteItem(index);
        li.appendChild(deleteBtn);
        itemsList.appendChild(li);
    });
}

function deleteItem(index) {
    const items = JSON.parse(localStorage.getItem('shoppingList'));
    items.splice(index, 1);
    localStorage.setItem('shoppingList', JSON.stringify(items));
    renderItems();
}

function loadItems() {
    renderItems();
}
