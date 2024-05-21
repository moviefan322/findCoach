export default (await import('vue')).defineComponent({
    props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        coachContactLink() {
            return `${this.$route.path}/${this.id}/contact`;
        },
        coachDetailsLink() {
            return `${this.$route.path}/${this.id}`;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    (__VLS_ctx.fullName);
    // @ts-ignore
    [fullName,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    (__VLS_ctx.rate);
    // @ts-ignore
    [rate,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    for (const [area] of __VLS_getVForSourceType((__VLS_ctx.areas))) {
        const __VLS_0 = {}.BaseBadge;
        ({}.BaseBadge);
        ({}.BaseBadge);
        __VLS_components.BaseBadge;
        __VLS_components.baseBadge;
        __VLS_components.BaseBadge;
        __VLS_components.baseBadge;
        // @ts-ignore
        [BaseBadge, BaseBadge,];
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ key: ((area)), type: ((area)), title: ((area)), }));
        const __VLS_2 = __VLS_1({ key: ((area)), type: ((area)), title: ((area)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ key: ((area)), type: ((area)), title: ((area)), }));
        // @ts-ignore
        [areas,];
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("actions") }, });
    const __VLS_6 = {}.BaseButton;
    ({}.BaseButton);
    ({}.BaseButton);
    __VLS_components.BaseButton;
    __VLS_components.baseButton;
    __VLS_components.BaseButton;
    __VLS_components.baseButton;
    // @ts-ignore
    [BaseButton, BaseButton,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ mode: ("outline"), link: (true), to: ((__VLS_ctx.coachContactLink)), }));
    const __VLS_8 = __VLS_7({ mode: ("outline"), link: (true), to: ((__VLS_ctx.coachContactLink)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ mode: ("outline"), link: (true), to: ((__VLS_ctx.coachContactLink)), }));
    // @ts-ignore
    [coachContactLink,];
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_12 = {}.BaseButton;
    ({}.BaseButton);
    ({}.BaseButton);
    __VLS_components.BaseButton;
    __VLS_components.baseButton;
    __VLS_components.BaseButton;
    __VLS_components.baseButton;
    // @ts-ignore
    [BaseButton, BaseButton,];
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ link: (true), to: ((__VLS_ctx.coachDetailsLink)), }));
    const __VLS_14 = __VLS_13({ link: (true), to: ((__VLS_ctx.coachDetailsLink)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ link: (true), to: ((__VLS_ctx.coachDetailsLink)), }));
    // @ts-ignore
    [coachDetailsLink,];
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['actions'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    const __VLS_internalComponent = (await import('./CoachItem.vue')).default;
}
//# sourceMappingURL=CoachItem.vue.js.map