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

```

## OverViews
The main characteristics of each implemented algorithm are presented below. The "cost" column gives an estimation of the computational cost to compute the similarity between two strings of length m and n respectively.

|                                                              | Measure(s)                               | Normalized? | Metric? | Type    | Cost   | Typical usage   |
| ------------------------------------------------------------ | --------------------------------------- | ----------- | ------- | ------- | ------ | --------------- |
| [Jaccard index](https://github.com/luozhouyang/python-string-similarity/blob/master/README.md#jaccard-index) | similarity<br/>distance<br />sortMatch  | Yes         | Yes     | Set     | O(m+n) |                 |
| [Cosine similarity](https://github.com/luozhouyang/python-string-similarity/blob/master/README.md#cosine-similarity) | similarity<br/>distance<br />sortMatch  | Yes         | No      | Profile | O(m+n) |                 |
| [Sorensen-Dice coefficient](https://github.com/luozhouyang/python-string-similarity/blob/master/README.md#sorensen-dice-coefficient) | similarity<br/>distance<br />sortMatch  | Yes         | No      | Set     | O(m+n) |                 |
| [Levenshtein](https://github.com/luozhouyang/python-string-similarity/blob/master/README.md#levenshtein) | similarity<br />distance<br />sortMatch | No          | Yes     |         | O(m*n) |                 |
| [Jaro-Winkler](https://github.com/luozhouyang/python-string-similarity/blob/master/README.md#jaro-winkler) | similarity distance<br />sortMatch      | Yes         | No      |         | O(m*n) | typo correction |



## API
* `similarity`.
* `distance`.
* `sortMatch`

### `similarity`

介绍

#### 参数

1. thanos [String]
2. rival [String]

#### 返回

### `distance`

介绍

#### 参数

1. thanos [String]
2. rival [String]

#### 返回

### `sortMatch`

介绍

#### 参数

1. thanos [String]
2. avengers [...String]

#### 返回

## Release Notes

### 1.0 version
* Basic building

### 2.0 version
* none


## MIT
[MIT](#)