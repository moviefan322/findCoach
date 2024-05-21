export default (await import('vue')).defineComponent({
    data() {
        return {
            selectedCoach: null,
            id: this.$route.params.id
        };
    },
    computed: {
        fullName() {
            return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
        },
        contactLink() {
            return this.$route.path + '/contact';
        },
        rate() {
            return this.selectedCoach.hourlyRate;
        },
        areas() {
            return this.selectedCoach.areas;
        },
        description() {
            return this.selectedCoach.description;
        }
    },
    created() {
        this.selectedCoach = this.$store.getters['coaches/coaches'].find(coach => coach.id === this.id);
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
    const __VLS_0 = {}.BaseCard;
    ({}.BaseCard);
    ({}.BaseCard);
    __VLS_components.BaseCard;
    __VLS_components.baseCard;
    __VLS_components.BaseCard;
    __VLS_components.baseCard;
    // @ts-ignore
    [BaseCard, BaseCard,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    (__VLS_ctx.fullName);
    // @ts-ignore
    [fullName,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    (__VLS_ctx.rate);
    // @ts-ignore
    [rate,];
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
    const __VLS_6 = {}.BaseCard;
    ({}.BaseCard);
    ({}.BaseCard);
    __VLS_components.BaseCard;
    __VLS_components.baseCard;
    __VLS_components.BaseCard;
    __VLS_components.baseCard;
    // @ts-ignore
    [BaseCard, BaseCard,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({}));
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    const __VLS_12 = {}.BaseButton;
    ({}.BaseButton);
    ({}.BaseButton);
    __VLS_components.BaseButton;
    __VLS_components.baseButton;
    __VLS_components.BaseButton;
    __VLS_components.baseButton;
    // @ts-ignore
    [BaseButton, BaseButton,];
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ link: (true), to: ((__VLS_ctx.contactLink)), }));
    const __VLS_14 = __VLS_13({ link: (true), to: ((__VLS_ctx.contactLink)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ link: (true), to: ((__VLS_ctx.contactLink)), }));
    // @ts-ignore
    [contactLink,];
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    const __VLS_18 = {}.RouterView;
    ({}.RouterView);
    ({}.RouterView);
    __VLS_components.RouterView;
    __VLS_components.routerView;
    __VLS_components.RouterView;
    __VLS_components.routerView;
    // @ts-ignore
    [RouterView, RouterView,];
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({}));
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
    const __VLS_24 = {}.BaseCard;
    ({}.BaseCard);
    ({}.BaseCard);
    __VLS_components.BaseCard;
    __VLS_components.baseCard;
    __VLS_components.BaseCard;
    __VLS_components.baseCard;
    // @ts-ignore
    [BaseCard, BaseCard,];
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({}));
    for (const [area] of __VLS_getVForSourceType((__VLS_ctx.areas))) {
        const __VLS_30 = {}.BaseBadge;
        ({}.BaseBadge);
        ({}.BaseBadge);
        __VLS_components.BaseBadge;
        __VLS_components.baseBadge;
        __VLS_components.BaseBadge;
        __VLS_components.baseBadge;
        // @ts-ignore
        [BaseBadge, BaseBadge,];
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ key: ((area)), type: ((area)), title: ((area)), }));
        const __VLS_32 = __VLS_31({ key: ((area)), type: ((area)), title: ((area)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        ({}({ key: ((area)), type: ((area)), title: ((area)), }));
        // @ts-ignore
        [areas,];
        const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.description);
    // @ts-ignore
    [description,];
    (__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    const __VLS_internalComponent = (await import('./CoachDetail.vue')).default;
}
//# sourceMappingURL=CoachDetail.vue.js.map