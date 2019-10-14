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

### Cosine similarity

维基百科：[https://en.wikipedia.org/wiki/Cosine_similarity](https://en.wikipedia.org/wiki/Cosine_similarity)

`Cosine similarity` (余弦相似度)通过测量两个向量的夹角的余弦值来度量它们之间的相似性。0度角的余弦值是1，而其他任何角度的余弦值都不大于1；并且其最小值是-1。从而两个向量之间的角度的余弦值确定两个向量是否大致指向相同的方向。

在信息检索中，每个词项被赋予不同的维度，而一个文档由一个向量表示，其各个维度上的值对应于该词项在文档中出现的频率。余弦相似度因此可以给出两篇文档在其主题方面的相似度

