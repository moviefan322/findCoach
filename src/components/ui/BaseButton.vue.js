export default (await import('vue')).defineComponent({
    props: {
        mode: {
            type: String,
            default: null,
            required: false,
        },
        link: {
            type: Boolean,
            default: false,
            required: false,
        },
        to: {
            type: String,
            required: false,
            default: '/',
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
    if (!__VLS_ctx.link) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ((__VLS_ctx.mode)) }, });
        __VLS_styleScopedClasses = (mode);
        var __VLS_0 = {};
        // @ts-ignore
        [link, mode,];
    }
    else {
        const __VLS_1 = {}.RouterLink;
        ({}.RouterLink);
        ({}.RouterLink);
        __VLS_components.RouterLink;
        __VLS_components.routerLink;
        __VLS_components.RouterLink;
        __VLS_components.routerLink;
        // @ts-ignore
        [RouterLink, RouterLink,];
        const __VLS_2 = __VLS_asFunctionalComponent(__VLS_1, new __VLS_1({ to: ((__VLS_ctx.to)), ...{ class: ((__VLS_ctx.mode)) }, }));
        const __VLS_3 = __VLS_2({ to: ((__VLS_ctx.to)), ...{ class: ((__VLS_ctx.mode)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_2));
        ({}({ to: ((__VLS_ctx.to)), ...{ class: ((__VLS_ctx.mode)) }, }));
        __VLS_styleScopedClasses = (mode);
        var __VLS_7 = {};
        // @ts-ignore
        [mode, to,];
        (__VLS_6.slots).default;
        const __VLS_6 = __VLS_pickFunctionalComponentCtx(__VLS_1, __VLS_3);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    const __VLS_internalComponent = (await import('./BaseButton.vue')).default;
}
//# sourceMappingURL=BaseButton.vue.js.map