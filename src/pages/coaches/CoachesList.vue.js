import CoachItem from '@/components/coaches/CoachItem.vue';
import CoachFilter from '@/components/coaches/CoachFilter.vue';
export default (await import('vue')).defineComponent({
    components: {
        CoachItem,
        CoachFilter
    },
    data() {
        return {
            isLoading: false,
            error: null,
            activeFilters: {
                frontend: true,
                backend: true,
                career: true
            }
        };
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isAuthenticated;
        },
        filteredCoaches() {
            const coaches = this.$store.getters['coaches/coaches'];
            return coaches.filter(coach => {
                if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
                    return true;
                }
                if (this.activeFilters.backend && coach.areas.includes('backend')) {
                    return true;
                }
                if (this.activeFilters.career && coach.areas.includes('career')) {
                    return true;
                }
                return false;
            });
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        },
        isCoach() {
            return !this.isLoading && this.$store.getters['coaches/isCoach'];
        }
    },
    created() {
        this.loadCoaches();
    },
    methods: {
        setFilters(updatedFilters) {
            this.activeFilters = updatedFilters;
        },
        async loadCoaches(refresh = false) {
            this.isLoading = true;
            try {
                await this.$store.dispatch('coaches/loadCoaches', { forceRefresh: refresh });
            }
            catch (error) {
                this.error = error.message || 'An error occurred.';
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
    const __VLS_8 = {}.CoachFilter;
    ({}.CoachFilter);
    ({}.CoachFilter);
    __VLS_components.CoachFilter;
    __VLS_components.coachFilter;
    __VLS_components.CoachFilter;
    __VLS_components.coachFilter;
    // @ts-ignore
    [CoachFilter, CoachFilter,];
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onChangeFilter': {} }, }));
    const __VLS_10 = __VLS_9({ ...{ 'onChangeFilter': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ ...{ 'onChangeFilter': {} }, }));
    let __VLS_14;
    const __VLS_15 = {
        onChangeFilter: (__VLS_ctx.setFilters)
    };
    // @ts-ignore
    [setFilters,];
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    let __VLS_11;
    let __VLS_12;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
    const __VLS_16 = {}.BaseCard;
    ({}.BaseCard);
    ({}.BaseCard);
    __VLS_components.BaseCard;
    __VLS_components.baseCard;
    __VLS_components.BaseCard;
    __VLS_components.baseCard;
    // @ts-ignore
    [BaseCard, BaseCard,];
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({}));
    const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
    ({}({}));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("controls") }, });
    const __VLS_22 = {}.BaseButton;
    ({}.BaseButton);
    ({}.BaseButton);
    __VLS_components.BaseButton;
    __VLS_components.baseButton;
    __VLS_components.BaseButton;
    __VLS_components.baseButton;
    // @ts-ignore
    [BaseButton, BaseButton,];
    const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({ ...{ 'onClick': {} }, mode: ("outline"), }));
    const __VLS_24 = __VLS_23({ ...{ 'onClick': {} }, mode: ("outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    ({}({ ...{ 'onClick': {} }, mode: ("outline"), }));
    let __VLS_28;
    const __VLS_29 = {
        onClick: (...[$event]) => {
            __VLS_ctx.loadCoaches(true);
            // @ts-ignore
            [loadCoaches,];
        }
    };
    (__VLS_27.slots).default;
    const __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24);
    let __VLS_25;
    let __VLS_26;
    if (!__VLS_ctx.isLoggedIn) {
        const __VLS_30 = {}.BaseButton;
        ({}.BaseButton);
        ({}.BaseButton);
        __VLS_components.BaseButton;
        __VLS_components.baseButton;
        __VLS_components.BaseButton;
        __VLS_components.baseButton;
        // @ts-ignore
        [BaseButton, BaseButton,];
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ link: (true), to: ("/auth?redirect=register"), }));
        const __VLS_32 = __VLS_31({ link: (true), to: ("/auth?redirect=register"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        ({}({ link: (true), to: ("/auth?redirect=register"), }));
        // @ts-ignore
        [isLoggedIn,];
        (__VLS_35.slots).default;
        const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    }
    if (__VLS_ctx.isLoggedIn && !__VLS_ctx.isCoach && !__VLS_ctx.isLoading) {
        const __VLS_36 = {}.BaseButton;
        ({}.BaseButton);
        ({}.BaseButton);
        __VLS_components.BaseButton;
        __VLS_components.baseButton;
        __VLS_components.BaseButton;
        __VLS_components.baseButton;
        // @ts-ignore
        [BaseButton, BaseButton,];
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ link: (true), to: ("/register"), }));
        const __VLS_38 = __VLS_37({ link: (true), to: ("/register"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        ({}({ link: (true), to: ("/register"), }));
        // @ts-ignore
        [isLoggedIn, isCoach, isLoading,];
        (__VLS_41.slots).default;
        const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    }
    if (__VLS_ctx.isLoading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        const __VLS_42 = {}.BaseSpinner;
        ({}.BaseSpinner);
        ({}.BaseSpinner);
        __VLS_components.BaseSpinner;
        __VLS_components.baseSpinner;
        __VLS_components.BaseSpinner;
        __VLS_components.baseSpinner;
        // @ts-ignore
        [BaseSpinner, BaseSpinner,];
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
        const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
        ({}({}));
        // @ts-ignore
        [isLoading,];
        const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    }
    else if (__VLS_ctx.hasCoaches) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        for (const [coach] of __VLS_getVForSourceType((__VLS_ctx.filteredCoaches))) {
            const __VLS_48 = {}.CoachItem;
            ({}.CoachItem);
            ({}.CoachItem);
            __VLS_components.CoachItem;
            __VLS_components.coachItem;
            __VLS_components.CoachItem;
            __VLS_components.coachItem;
            // @ts-ignore
            [CoachItem, CoachItem,];
            const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ key: ((coach.id)), id: ((coach.id)), firstName: ((coach.firstName)), lastName: ((coach.lastName)), rate: ((coach.hourlyRate)), areas: ((coach.areas)), }));
            const __VLS_50 = __VLS_49({ key: ((coach.id)), id: ((coach.id)), firstName: ((coach.firstName)), lastName: ((coach.lastName)), rate: ((coach.hourlyRate)), areas: ((coach.areas)), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
            ({}({ key: ((coach.id)), id: ((coach.id)), firstName: ((coach.firstName)), lastName: ((coach.lastName)), rate: ((coach.hourlyRate)), areas: ((coach.areas)), }));
            // @ts-ignore
            [hasCoaches, filteredCoaches,];
            const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    }
    (__VLS_21.slots).default;
    const __VLS_21 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['controls'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        CoachItem,
        CoachFilter
    };
    const __VLS_name = undefined;
    const __VLS_internalComponent = (await import('./CoachesList.vue')).default;
}
//# sourceMappingURL=CoachesList.vue.js.map