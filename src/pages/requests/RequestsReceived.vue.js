import RequestItem from '@/components/requests/RequestItem.vue';
export default (await import('vue')).defineComponent({
    components: {
        RequestItem
    },
    data() {
        return {
            isLoading: false,
            error: null
        };
    },
    computed: {
        recievedRequests() {
            return this.$store.getters['requests/requests'];
        },
        hasRequests() {
            return this.$store.getters['requests/hasRequests'];
        }
    },
    created() {
        this.loadRequests();
    },
    methods: {
        async loadRequests() {
            this.isLoading = true;
            try {
                await this.$store.dispatch('requests/loadRequests');
            }
            catch (error) {
                this.error = error.message || 'An error occurred while loading requests';
            }
            this.isLoading = false;
        },
        handleError() {
            this.error = null;
        }
    }
});
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_0 = {}.BaseDialog;
    ({}.BaseDialog);
    ({}.BaseDialog);
    __VLS_components.BaseDialog;
    __VLS_components.baseDialog;
    __VLS_components.BaseDialog;
    __VLS_components.baseDialog;
    // @ts-ignore
    [BaseDialog, BaseDialog,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClose': {} }, show: ((!!__VLS_ctx.error)), title: ("An error occured"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClose': {} }, show: ((!!__VLS_ctx.error)), title: ("An error occured"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClose': {} }, show: ((!!__VLS_ctx.error)), title: ("An error occured"), }));
    let __VLS_6;
    const __VLS_7 = {
        onClose: (__VLS_ctx.handleError)
    };
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.error);
    // @ts-ignore
    [error, error, handleError,];
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
    const __VLS_8 = {}.BaseCard;
    ({}.BaseCard);
    ({}.BaseCard);
    __VLS_components.BaseCard;
    __VLS_components.baseCard;
    __VLS_components.BaseCard;
    __VLS_components.baseCard;
    // @ts-ignore
    [BaseCard, BaseCard,];
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({}));
    const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({}));
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    if (__VLS_ctx.isLoading) {
        const __VLS_14 = {}.BaseSpinner;
        ({}.BaseSpinner);
        ({}.BaseSpinner);
        __VLS_components.BaseSpinner;
        __VLS_components.baseSpinner;
        __VLS_components.BaseSpinner;
        __VLS_components.baseSpinner;
        // @ts-ignore
        [BaseSpinner, BaseSpinner,];
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({}));
        const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
        ({}({}));
        // @ts-ignore
        [isLoading,];
        const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    }
    else if (__VLS_ctx.hasRequests && !__VLS_ctx.isLoading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        for (const [request] of __VLS_getVForSourceType((__VLS_ctx.recievedRequests))) {
            const __VLS_20 = {}.RequestItem;
            ({}.RequestItem);
            ({}.RequestItem);
            __VLS_components.RequestItem;
            __VLS_components.requestItem;
            __VLS_components.RequestItem;
            __VLS_components.requestItem;
            // @ts-ignore
            [RequestItem, RequestItem,];
            const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ key: ((request.id)), email: ((request.userEmail)), message: ((request.message)), }));
            const __VLS_22 = __VLS_21({ key: ((request.id)), email: ((request.userEmail)), message: ((request.message)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
            ({}({ key: ((request.id)), email: ((request.userEmail)), message: ((request.message)), }));
            // @ts-ignore
            [isLoading, hasRequests, recievedRequests,];
            const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    }
    (__VLS_13.slots).default;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        RequestItem
    };
    const __VLS_name = undefined;
    const __VLS_internalComponent = (await import('./RequestsReceived.vue')).default;
}
//# sourceMappingURL=RequestsReceived.vue.js.map