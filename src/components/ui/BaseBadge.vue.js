export default (await import('vue')).defineComponent({
    props: ['type', 'title'],
    computed: {
        text() {
            return this.title.toUpperCase();
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("badge") }, ...{ class: ((__VLS_ctx.type)) }, });
    __VLS_styleScopedClasses = (type);
    (__VLS_ctx.text);
    // @ts-ignore
    [type, text,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['badge'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    const __VLS_internalComponent = (await import('./BaseBadge.vue')).default;
}
//# sourceMappingURL=BaseBadge.vue.js.map