const  Sim = ['Cosine', 'DiceCoefficient', 'JaccardIndex', 'Levenshtein', 'LongestCommonSubsequence', 'MetricLCS']
const [
    Cosine,
    DiceCoefficient,
    JaccardIndex,
    Levenshtein,
    LongestCommonSubsequence,
    MetricLCS
] = Sim.map(v => require(`./main/packages/${v}`))

module.exports = {
    cosine: new Cosine(),
    diceCoefficient: new DiceCoefficient(),
    jaccardIndex: new JaccardIndex(),
    levenshtein: new Levenshtein(),
    lcs: new LongestCommonSubsequence(),
    mlcs: new MetricLCS()
}