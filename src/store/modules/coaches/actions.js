export default {
    async registerCoach(context, payload) {
        const userId = context.rootGetters.userId;
        const coachData = {
            firstName: payload.first,
            lastName: payload.last,
            areas: payload.areas,
            description: payload.desc,
            hourlyRate: payload.rate
        };
        const response = await fetch(`https://vue-http-fb066-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=${context.rootGetters.token}`, {
            method: 'PUT',
            body: JSON.stringify(coachData)
        });
        // const responseData = await response.json()
        if (!response.ok) {
            // error...
        }
        context.commit('registerCoach', {
            ...coachData,
            id: userId
        });
    },
    async loadCoaches(context, payload) {
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return;
        }
        const response = await fetch(`https://vue-http-fb066-default-rtdb.firebaseio.com/coaches.json`);
        const responseData = await response.json();
        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }
        const coaches = [];
        for (const key in responseData) {
            const coach = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                areas: responseData[key].areas,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate
            };
            coaches.push(coach);
        }
        context.commit('setCoaches', coaches);
        context.commit('setFetchTimestamp');
    }
};
//# sourceMappingURL=actions.js.map