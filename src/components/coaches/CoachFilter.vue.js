export default (await import('vue')).defineComponent({
    emits: ['change-filter'],
    data() {
        return {
            filters: {
                frontend: true,
                backend: true,
                career: true
            }
        };
    },
    methods: {
        setFilter(event) {
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updateFilters = { ...this.filters, [inputId]: isActive };
            this.filters = updateFilters;
            this.$emit('change-filter', updateFilters);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("filter-option") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onChange: (__VLS_ctx.setFilter) }, type: ("checkbox"), id: ("frontend"), checked: (true), });
    // @ts-ignore
    [setFilter,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("frontend"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("filter-option") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onChange: (__VLS_ctx.setFilter) }, type: ("checkbox"), id: ("backend"), checked: (true), });
    // @ts-ignore
    [setFilter,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("backend"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("filter-option") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onChange: (__VLS_ctx.setFilter) }, type: ("checkbox"), id: ("career"), checked: (true), });
    // @ts-ignore
    [setFilter,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("career"), });
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['filter-option'];
        __VLS_styleScopedClasses['filter-option'];
        __VLS_styleScopedClasses['filter-option'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    const __VLS_internalComponent = (await import('./CoachFilter.vue')).default;
}
//# sourceMappingURL=CoachFilter.vue.js.map