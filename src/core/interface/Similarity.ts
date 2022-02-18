export default abstract class Similarity {
	/**
	 * @description 比较两个字符串
	 */
	abstract similarity(thanos: string, rival: string): number;

	/**
	 * @description 寻找最佳匹配结果
	 */
	sortMatch(thanos: string, avengers: string[]) {
		Similarity.checkThanosType(thanos);
		Similarity.checkAvengersType(avengers);

		return avengers
			.map((str, index) => {
				return {
					member: str,
					index,
					rating: this.similarity(thanos, str),
				};
			})
			.sort((a, b) => a.rating - b.rating);
	}

	// distance
	abstract distance(thanos: string, rival: string): number;

	static checkThanosType(thanos: string) {
		if (typeof thanos !== 'string')
			throw new Error('first argument should be a string');
	}

	static checkRivalType(rival: string) {
		if (typeof rival !== 'string')
			throw new Error('second argument should be a string');
	}

	static checkAvengersType(avengers: string[]) {
		if (!Array.isArray(avengers))
			throw new Error('second argument should be an array of strings');
		if (avengers.find((s) => typeof s !== 'string'))
			throw new Error('second argument should be an array of strings');
	}

	static initParams(thanos: string, rival: string) {
		return [
			thanos.replace(/\s+/g, '').toLowerCase(),
			rival.replace(/\s+/g, '').toLowerCase(),
		];
	}
}
