# string-comparison

**JavaScript implementation of [tdebatty/java-string-similarity](https://github.com/tdebatty/java-string-similarity)**

A library implementing different string similarity, distance and sortMatch measures. A dozen of algorithms (including Levenshtein edit distance and sibblings, Jaro-Winkler, Longest Common Subsequence, cosine similarity etc.) are currently implemented. Check the summary table below for the complete list...

## Download & Usage

download

```shell
npm install string-comparision --save
yarn add string-comparision
```
usage

```js
let stringComparision = require('string-comparision')

const Thanos = 'healed'
const Rival = 'sealed'
const Avengers = ['edward', 'sealed', 'theatre']

use by Consine
let cos = stringComparision.consine

console.log(cos.similarity(Thanos, Rival))
console.log(cos.distance(Thanos, Rival))
console.log(cos.sortMatch(Thanos, Avengers))

```

## OverViews
The main characteristics of each implemented algorithm are presented below. The "cost" column gives an estimation of the computational cost to compute the similarity between two strings of length m and n respectively.

|                                                                                                                                      | Measure(s)                              | Normalized? | Metric? | Type    | Cost   | Typical usage   |
| ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------- | ----------- | ------- | ------- | ------ | --------------- |
| [Jaccard index](https://github.com/luozhouyang/python-string-similarity/blob/master/README.md#jaccard-index)                         | similarity<br/>distance<br />sortMatch  | Yes         | Yes     | Set     | O(m+n) |                 |
| [Cosine similarity](https://github.com/luozhouyang/python-string-similarity/blob/master/README.md#cosine-similarity)                 | similarity<br/>distance<br />sortMatch  | Yes         | No      | Profile | O(m+n) |                 |
| [Sorensen-Dice coefficient](https://github.com/luozhouyang/python-string-similarity/blob/master/README.md#sorensen-dice-coefficient) | similarity<br/>distance<br />sortMatch  | Yes         | No      | Set     | O(m+n) |                 |
| [Levenshtein](https://github.com/luozhouyang/python-string-similarity/blob/master/README.md#levenshtein)                             | similarity<br />distance<br />sortMatch | No          | Yes     |         | O(m*n) |                 |
| [Jaro-Winkler](https://github.com/luozhouyang/python-string-similarity/blob/master/README.md#jaro-winkler)                           | similarity distance<br />sortMatch      | Yes         | No      |         | O(m*n) | typo correction |



## API
* `similarity`.
* `distance`.
* `sortMatch`

### `similarity`

Implementing algorithms define a similarity between strings

#### Params

1. thanos [String]
2. rival [String]

#### Return

Return a similarity between 0.0 and 1.0

### `distance`

Implementing algorithms define a distance between strings (0 means strings are identical)

#### Params

1. thanos [String]
2. rival [String]

#### Return

Return a number

### `sortMatch`

介绍

#### Params

1. thanos [String]
2. avengers [...String]

#### Return

Return an array of objects. ex:
```js
[
  { member: 'edward', rating: 0.16666666666666663 },
  { member: 'theatre', rating: 0.4285714285714286 },
  { member: 'mailed', rating: 0.5 },
  { member: 'sealed', rating: 0.8333333333333334 }
]
```

## Release Notes

### 1.0 version
* Basic building
* Cosine
* DiceCoefficient
* JaccardIndex
* Levenshtein
* LongestCommonSubsequence
* MetricLCS

### 2.0 version
* none


## MIT
[MIT](#)