## 字符串相似度比较算法

### Dice's Coefficient

维基百科链接：[Algorithm Implementation/Strings/Dice's coefficient](https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Dice%27s_coefficient)

`Dice's Coefficient` 用于度量两个集合的相似性，可以将字符串理解为集合，因此使用 `Dice's Coefficient` 也可以比较两个字符串的相似性。


`Dice's Coefficient` 公式如下：

$${\displaystyle d={\frac {2n_{t}}{(n_{x}+n_{y})}}}$$

其中`nt`是在两个字符串中都找到的字符数，`nx`是字符串x的长度，而`ny`是字符串y中的长度
