/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const button = document.createElement('button');
    button.insertAdjacentText('afterbegin', 'Удали меня');
    button.addEventListener('click', function () {
        button.remove();
    });
    document.body.insertAdjacentElement('afterbegin', button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ul = document.createElement('ul');
    ul.addEventListener('mouseover', function (e) {
        if (e.target && e.target.nodeName === 'LI') {
            e.target.setAttribute('title', e.target.textContent);
        }
    });
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.insertAdjacentText('afterbegin', arr[i]);
        ul.insertAdjacentElement('beforeend', li);
    }
    document.body.insertAdjacentElement('afterbegin', ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const a = document.createElement('a');
    a.setAttribute('href', 'https://tensor.ru/');
    a.insertAdjacentText('afterbegin', 'tensor');
    a.addEventListener(
        'click',
        function (e) {
            e.target.textContent += ' ' + e.target.getAttribute('href');
        },
        { once: true },
    );
    document.body.insertAdjacentElement('afterbegin', a);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const ul = createUlWithItem();
    document.body.insertAdjacentElement('afterbegin', ul);
    document.body.insertAdjacentElement('beforeend', createAddLiButton(ul));
}

function createUlWithItem() {
    const ul = document.createElement('ul');
    ul.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName === 'LI') {
            e.target.textContent += '!';
        }
    });
    ul.insertAdjacentElement('afterbegin', createLiWithTextItem());
    return ul;
}

function createAddLiButton(ul) {
    const button = document.createElement('button');
    button.insertAdjacentText('afterbegin', 'Добавить пункт');
    button.addEventListener('click', function () {
        ul.insertAdjacentElement('beforeend', createLiWithTextItem());
    });
    return button;
}

function createLiWithTextItem() {
    const li = document.createElement('li');
    li.insertAdjacentText('afterbegin', 'Пункт');
    return li;
}
