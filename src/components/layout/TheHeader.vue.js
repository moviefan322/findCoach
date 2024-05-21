export default (await import('vue')).defineComponent({
    computed: {
        isLoggedIn() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout');
            this.$router.replace('/coaches');
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    const __VLS_0 = {}.RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), }));
    const __VLS_2 = __VLS_1({ to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ("/"), }));
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    const __VLS_6 = {}.RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("/coaches"), }));
    const __VLS_8 = __VLS_7({ to: ("/coaches"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ to: ("/coaches"), }));
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    if (__VLS_ctx.isLoggedIn) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        const __VLS_12 = {}.RouterLink;
        ({}.RouterLink);
        ({}.RouterLink);
        __VLS_components.RouterLink;
        __VLS_components.routerLink;
        __VLS_components.RouterLink;
        __VLS_components.routerLink;
        // @ts-ignore
        [RouterLink, RouterLink,];
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: ("/requests"), }));
        const __VLS_14 = __VLS_13({ to: ("/requests"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ to: ("/requests"), }));
        // @ts-ignore
        [isLoggedIn,];
        (__VLS_17.slots).default;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        const __VLS_18 = {}.RouterLink;
        ({}.RouterLink);
        ({}.RouterLink);
        __VLS_components.RouterLink;
        __VLS_components.routerLink;
        __VLS_components.RouterLink;
        __VLS_components.routerLink;
        // @ts-ignore
        [RouterLink, RouterLink,];
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ to: ("/auth"), }));
        const __VLS_20 = __VLS_19({ to: ("/auth"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ to: ("/auth"), }));
        (__VLS_23.slots).default;
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    }
    if (__VLS_ctx.isLoggedIn) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        const __VLS_24 = {}.BaseButton;
        ({}.BaseButton);
        ({}.BaseButton);
        __VLS_components.BaseButton;
        __VLS_components.baseButton;
        __VLS_components.BaseButton;
        __VLS_components.baseButton;
        // @ts-ignore
        [BaseButton, BaseButton,];
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ 'onClick': {} }, }));
        const __VLS_26 = __VLS_25({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        ({}({ ...{ 'onClick': {} }, }));
        let __VLS_30;
        const __VLS_31 = {
            onClick: (__VLS_ctx.logout)
        };
        // @ts-ignore
        [isLoggedIn, logout,];
        (__VLS_29.slots).default;
        const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
        let __VLS_27;
        let __VLS_28;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    const __VLS_internalComponent = (await import('./TheHeader.vue')).default;
}
//# sourceMappingURL=TheHeader.vue.js.map