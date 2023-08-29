import type { SortMatchResultType } from './core/interface/Similarity'
import Cosine from './core/packages/Cosine'
import DiceCoefficient from './core/packages/DiceCoefficient'
import JaccardIndex from './core/packages/JaccardIndex'
import Levenshtein from './core/packages/Levenshtein'
import LongestCommonSubsequence from './core/packages/LongestCommonSubsequence'
import MetricLCS from './core/packages/MetricLCS'

export type { SortMatchResultType }

const cosine = new Cosine()
const diceCoefficient = new DiceCoefficient()
const jaccardIndex = new JaccardIndex()
const levenshtein = new Levenshtein()
const lcs = new LongestCommonSubsequence()
const longestCommonSubsequence = lcs
const mlcs = new MetricLCS()
const metricLcs = mlcs

const output = {
  cosine,
  diceCoefficient,
  jaccardIndex,
  levenshtein,
  lcs,
  longestCommonSubsequence,
  mlcs,
  metricLcs,
}

export default output
