const Cosine = require('./main/packages/Cosine')
const DiceCoefficient = require('./main/packages/DiceCoefficient')
const JaccardIndex = require('./main/packages/JaccardIndex')
const Levenshtein = require('./main/packages/Levenshtein')
const LongestCommonSubsequence = require('./main/packages/LongestCommonSubsequence')
const MetricLCS = require('./main/packages/MetricLCS')

module.exports = {
    cosine: new Cosine(),
    diceCoefficient: new DiceCoefficient(),
    jaccardIndex: new JaccardIndex(),
    levenshtein: new Levenshtein(),
    lcs: new LongestCommonSubsequence(),
    mlcs: new MetricLCS()
}