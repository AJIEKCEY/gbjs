## Задание 1

var a = 1, b = 1, c, d;
Выполняется операция префиксного инкримента переменной a затем значение из a копируется в переменную с 

c = ++a; alert(c);           // 2

значение из b копируется в переменную d затем значение переменной b увеличивается на единицу операцией постфиксного инкремента

d = b++; alert(d);           // 1

На данный момент в переменной а содержится значение 2. Затем оно увеличивается на единицу инкрементом и слаживается с 2. Результат записывается в переменную с

c = (2+ ++a); alert(c);      // 5

На данный момент в переменной b содержится значение 2. К нему прибавляется 2 и результат записывается в d. Затем b увеличивается на 1

d = (2+ b++); alert(d);      // 4

alert(a);                    // 3 Текущее значение а после 2 опреации инкремента

alert(b);                    // 3 Текущее значение b после 2 опреации инкремента

## Задание 2

var a = 2;
var x = 1 + (a *= 2); //5

### 7. Сравнить null и 0.


null > 0; // false
null == 0; // false
null < 0; // false

Тут разные типы как минимум.
null === 0  // false

null >= 0; // true

Для того чтоб разобраться используем абстрактный алгоритм сравнения для отношений из спецификации (http://javascript.ru/ecma/part11#a-11.8.5)

Первые три пункта в нашем случае не применимы.
4 и 5 преобразование к типу Number 

Null преобразуется к +0
0 преобразуется к 0

Получаем фактические следующие сравнения:

Согласно спецификации для операторов сравнения > и < если у нас числовые значения обоих операндов одинаковы вернуть false

+0 > 0; // false
+0 < 0; // false

По той же спецификации для сравнения ни один пункт алгоритма не подходит поэтому согласно последнему шагу возращается false по умолчанию

+0 == 0; // false

А тут интерсно! Дело в том что интерпритатор в целях оптимизации не делает 2 проверки на больше и равно, а одну на меньше. И она как мы увидели выше вернёт false.
Следуя законам логики выражение ниже должно быть истино. 
+0 >= 0; // true


Подробнее: https://habr.com/ru/company/ruvds/blog/337732/