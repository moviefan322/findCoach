import TheHeader from './components/layout/TheHeader.vue';
export default (await import('vue')).defineComponent({
    components: {
        TheHeader
    },
    computed: {
        didAutoLogout() {
            return this.$store.getters.didAutoLogout;
        },
    },
    watch: {
        didAutoLogout(curValue, oldValue) {
            if (curValue && curValue !== oldValue) {
                this.$router.replace('/coaches');
            }
        }
    },
    created() {
        this.$store.dispatch('tryLogin');
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
    const __VLS_0 = {}.TheHeader;
    ({}.TheHeader);
    ({}.TheHeader);
    __VLS_components.TheHeader;
    __VLS_components.theHeader;
    __VLS_components.TheHeader;
    __VLS_components.theHeader;
    // @ts-ignore
    [TheHeader, TheHeader,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_6 = {}.RouterView;
    ({}.RouterView);
    ({}.RouterView);
    __VLS_components.RouterView;
    __VLS_components.routerView;
    __VLS_components.RouterView;
    __VLS_components.routerView;
    // @ts-ignore
    [RouterView, RouterView,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({}));
    {
        const [slotProps] = __VLS_getSlotParams((__VLS_11.slots).default);
        const __VLS_12 = {}.transition;
        ({}.transition);
        ({}.transition);
        __VLS_components.Transition;
        __VLS_components.transition;
        __VLS_components.Transition;
        __VLS_components.transition;
        // @ts-ignore
        [Transition, Transition,];
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ name: ("route"), mode: ("out-in"), }));
        const __VLS_14 = __VLS_13({ name: ("route"), mode: ("out-in"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ name: ("route"), mode: ("out-in"), }));
        const __VLS_18 = (slotProps.Component);
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
        const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({}));
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
        (__VLS_17.slots).default;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        __VLS_11.slots['' /* empty slot name completion */];
    }
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        TheHeader
    };
    const __VLS_name = undefined;
    const __VLS_internalComponent = (await import('./App.vue')).default;
}
//# sourceMappingURL=App.vue.js.map