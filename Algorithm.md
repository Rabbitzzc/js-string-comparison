## 字符串相似度比较算法

### Dice's Coefficient

维基百科链接：[Algorithm Implementation/Strings/Dice's coefficient](https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Dice%27s_coefficient)

`Dice's Coefficient` 用于度量两个集合的相似性，可以将字符串理解为集合，因此使用 `Dice's Coefficient` 也可以比较两个字符串的相似性。


`Dice's Coefficient` 公式如下：

$${\displaystyle d={\frac {2n_{t}}{(n_{x}+n_{y})}}}$$

其中`nt`是在两个字符串中都找到的字符数，`nx`是字符串x的长度，而`ny`是字符串y中的长度

### Jaccard index
维基百科链接：[https://en.wikipedia.org/wiki/Jaccard_index](https://en.wikipedia.org/wiki/Jaccard_index)

`Jaccard index` (雅卡尔系数)是用于比较样本集的相似性与多样性的统计量，雅卡尔系数能够量度有限样本集合的相似度，其定义为两个集合交集大小与并集大小之间的比例。雅卡尔系数有点类似`Dice's Coefficient`，我们也可以将字符串理解为集合