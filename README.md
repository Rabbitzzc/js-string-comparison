
# string-comparison

**JavaScript implementation of [tdebatty/java-string-similarity](https://github.com/tdebatty/java-string-similarity)**

A library implementing different string similarity, distance and sortMatch measures. A dozen of algorithms (including Levenshtein edit distance and sibblings, Longest Common Subsequence, cosine similarity etc.) are currently implemented. Check the summary table below for the complete list...

  - [Download & Usage](#download--usage)
  - [OverView](#overview)
  - [Normalized, metric, similarity and distance](#normalized-metric-similarity-and-distance)
    - [(Normalized) similarity and distance](#normalized-similarity-and-distance)
  - [Levenshtein](#levenshtein)
  - [Longest Common Subsequence](#longest-common-subsequence)
  - [Metric Longest Common Subsequence](#metric-longest-common-subsequence)
  - [Cosine similarity](#cosine-similarity)
  - [Sorensen-Dice coefficient](#sorensen-dice-coefficient)
  - [API](#api)
    - [similarity](#similarity)
      - [params](#params)
      - [return](#return)
    - [distance](#distance)
      - [params](#params-1)
      - [return](#return-1)
    - [sortMatch](#sortmatch)
      - [params](#params-2)
      - [return](#return-2)
      - [Params](#params)
      - [Return](#return)
  - [Release Notes](#release-notes)
    - [1.x version](#1x-version)
  - [MIT](#mit)


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

## OverView

The main characteristics of each implemented algorithm are presented below. The "cost" column gives an estimation of the computational cost to compute the similarity between two strings of length m and n respectively.

|                                                                                                                                      | Measure(s)                              | Normalized? | Metric? | Type    | Cost   | Typical usage   |
| ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------- | ----------- | ------- | ------- | ------ | --------------- |
| [Jaccard index](https://github.com/luozhouyang/python-string-similarity/blob/master/README.md#jaccard-index)                         | similarity<br/>distance<br />sortMatch  | Yes         | Yes     | Set     | O(m+n) |                 |
| [Cosine similarity](https://github.com/luozhouyang/python-string-similarity/blob/master/README.md#cosine-similarity)                 | similarity<br/>distance<br />sortMatch  | Yes         | No      | Profile | O(m+n) |                 |
| [Sorensen-Dice coefficient](https://github.com/luozhouyang/python-string-similarity/blob/master/README.md#sorensen-dice-coefficient) | similarity<br/>distance<br />sortMatch  | Yes         | No      | Set     | O(m+n) |                 |
| [Levenshtein](https://github.com/luozhouyang/python-string-similarity/blob/master/README.md#levenshtein)                             | similarity<br />distance<br />sortMatch | No          | Yes     |         | O(m*n) |                 |
| [Jaro-Winkler](https://github.com/luozhouyang/python-string-similarity/blob/master/README.md#jaro-winkler)                           | similarity distance<br />sortMatch      | Yes         | No      |         | O(m*n) | typo correction |

## Normalized, metric, similarity and distance

Although the topic might seem simple, a lot of different algorithms exist to measure text similarity or distance. Therefore the library defines some interfaces to categorize them.

### (Normalized) similarity and distance

- StringSimilarity : Implementing algorithms define a similarity between strings (0 means strings are completely different).
- NormalizedStringSimilarity : Implementing algorithms define a similarity between 0.0 and 1.0, like Jaro-Winkler for example.
- StringDistance : Implementing algorithms define a distance between strings (0 means strings are identical), like Levenshtein for example. The maximum distance value depends on the algorithm.
- NormalizedStringDistance : This interface extends StringDistance. For implementing classes, the computed distance value is between 0.0 and 1.0. NormalizedLevenshtein is an example of NormalizedStringDistance.

## Levenshtein

The Levenshtein distance between two words is the minimum number of single-character edits (insertions, deletions or substitutions) required to change one word into the other.

It is a metric string distance. This implementation uses dynamic programming (Wagner–Fischer algorithm), with only 2 rows of data. The space requirement is thus O(m) and the algorithm runs in O(m.n).

```js
const Thanos = 'healed'
const Rival = 'sealed'
const Avengers = ['edward', 'sealed', 'theatre']
let ls = Similarity.levenshtein

console.log(ls.similarity(Thanos, Rival))
console.log(ls.distance(Thanos, Rival))
console.log(ls.sortMatch(Thanos, Avengers))

// output
0.8333333333333334
1
[
  { member: 'edward', index: 0, rating: 0.16666666666666663 },
  { member: 'theatre', index: 2, rating: 0.4285714285714286 },
  { member: 'sealed', index: 1, rating: 0.8333333333333334 }
]
```


## Longest Common Subsequence

The longest common subsequence (LCS) problem consists in finding the longest subsequence common to two (or more) sequences. It differs from problems of finding common substrings: unlike substrings, subsequences are not required to occupy consecutive positions within the original sequences.

It is used by the diff utility, by Git for reconciling multiple changes, etc.

The LCS distance between strings X (of length n) and Y (of length m) is n + m - 2 |LCS(X, Y)|
min = 0
max = n + m

LCS distance is equivalent to Levenshtein distance when only insertion and deletion is allowed (no substitution), or when the cost of the substitution is the double of the cost of an insertion or deletion.

This class implements the dynamic programming approach, which has a space requirement O(m.n), and computation cost O(m.n).

In "Length of Maximal Common Subsequences", K.S. Larsen proposed an algorithm that computes the length of LCS in time O(log(m).log(n)). But the algorithm has a memory requirement O(m.n²) and was thus not implemented here.

```js
const Thanos = 'healed'
const Rival = 'sealed'
const Avengers = ['edward', 'sealed', 'theatre']
let lcs = Similarity.lcs

console.log(lcs.similarity(Thanos, Rival))
console.log(lcs.distance(Thanos, Rival))
console.log(lcs.sortMatch(Thanos, Avengers))

// output
0.8333333333333334
2
[
  { member: 'edward', index: 0, rating: 0.5 },
  { member: 'theatre', index: 2, rating: 0.6153846153846154 },
  { member: 'sealed', index: 1, rating: 0.8333333333333334 }
]
```

## Metric Longest Common Subsequence

Distance metric based on Longest Common Subsequence, from the notes "An LCS-based string metric" by Daniel Bakkelund.
http://heim.ifi.uio.no/~danielry/StringMetric.pdf

The distance is computed as 1 - |LCS(s1, s2)| / max(|s1|, |s2|)

```js
const Thanos = 'healed'
const Rival = 'sealed'
const Avengers = ['edward', 'sealed', 'theatre']
let mlcs = Similarity.mlcs

console.log(mlcs.similarity(Thanos, Rival))
console.log(mlcs.distance(Thanos, Rival))
console.log(mlcs.sortMatch(Thanos, Avengers))

// output
0.8333333333333334
0.16666666666666663
[
  { member: 'edward', index: 0, rating: 0.5 },
  { member: 'theatre', index: 2, rating: 0.5714285714285714 },
  { member: 'sealed', index: 1, rating: 0.8333333333333334 }
]
```

## Cosine similarity

Like Q-Gram distance, the input strings are first converted into sets of n-grams (sequences of n characters, also called k-shingles), but this time the cardinality of each n-gram is not taken into account. Each input string is simply a set of n-grams. The Jaccard index is then computed as |V1 inter V2| / |V1 union V2|.

Distance is computed as 1 - similarity.
Jaccard index is a metric distance.

## Sorensen-Dice coefficient

Similar to Jaccard index, but this time the similarity is computed as 2 * |V1 inter V2| / (|V1| + |V2|).

Distance is computed as 1 - similarity.

## API
* `similarity`.
* `distance`.
* `sortMatch`

### similarity

Implementing algorithms define a similarity between strings

#### params

1. thanos [String]
2. rival [String]

#### return

Return a similarity between 0.0 and 1.0

### distance

Implementing algorithms define a distance between strings (0 means strings are identical)

#### params

1. thanos [String]
2. rival [String]

#### return

Return a number

### sortMatch

#### params

1. thanos [String]
2. avengers [...String]

#### return

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

### 1.x version
* Basic building
* Cosine
* DiceCoefficient
* JaccardIndex
* Levenshtein
* LongestCommonSubsequence
* MetricLCS
* Add function sortMatch()


## MIT
[MIT](./LICENCE)