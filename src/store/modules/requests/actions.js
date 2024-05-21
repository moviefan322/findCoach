export default {
    async contactCoach(context, payload) {
        const userId = context.rootGetters.userId;
        const newRequest = {
            userEmail: payload.email,
            message: payload.message
        };
        const response = await fetch(`https://vue-http-fb066-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        });
        const responseData = await response.json();
        const localRequest = {
            userEmail: payload.email,
            message: payload.message,
            id: responseData.name,
            coachId: userId
        };
        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request.');
            throw error;
        }
        context.commit('addRequest', localRequest);
    },
    async loadRequests(context) {
        const coachId = context.rootGetters.userId;
        const response = await fetch(`https://vue-http-fb066-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=${context.rootGetters.token}`);
        const responseData = await response.json();
        console.log(response.status);
        if (response.status === 401) {
            throw new Error('Unauthenticated!');
        }
        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch requests.');
            throw error;
        }
        const requests = [];
        for (const key in responseData) {
            const request = {
                id: key,
                coachId: coachId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message
            };
            requests.push(request);
        }
        context.commit('setRequests', requests);
    }
};
//# sourceMappingURL=actions.js.map