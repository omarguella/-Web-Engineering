
   const struct = {
    name: "omar",
    vorname: "guella",
    objekt: {
        matrikel: ["student", 123]
			}
		}
			const deepCopy = (struct) => {
			return Object.fromEntries(Object.entries(struct));
		}
		const copy = deepCopy(struct);

		console.assert(struct === copy, "richtig copiert");
		console.assert(struct !== copy, "ACHTUNG nicht richtig copiert");
