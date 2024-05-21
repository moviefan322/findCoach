export default (await import('vue')).defineComponent({
    props: {
        show: {
            type: Boolean,
            required: true
        },
        title: {
            type: String,
            required: false
        },
        fixed: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    emits: ['close'],
    methods: {
        tryClose() {
            if (this.fixed) {
                return;
            }
            this.$emit('close');
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
    const __VLS_0 = {}.teleport;
    ({}.teleport);
    ({}.teleport);
    __VLS_components.Teleport;
    __VLS_components.teleport;
    __VLS_components.Teleport;
    __VLS_components.teleport;
    // @ts-ignore
    [Teleport, Teleport,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("body"), }));
    const __VLS_2 = __VLS_1({ to: ("body"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ("body"), }));
    if (__VLS_ctx.show) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.tryClose) }, ...{ class: ("backdrop") }, });
        // @ts-ignore
        [show, tryClose,];
    }
    const __VLS_6 = {}.transition;
    ({}.transition);
    ({}.transition);
    __VLS_components.Transition;
    __VLS_components.transition;
    __VLS_components.Transition;
    __VLS_components.transition;
    // @ts-ignore
    [Transition, Transition,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ name: ("dialog"), }));
    const __VLS_8 = __VLS_7({ name: ("dialog"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ name: ("dialog"), }));
    if (__VLS_ctx.show) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.dialog, __VLS_intrinsicElements.dialog)({ open: (true), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
        var __VLS_12 = {};
        // @ts-ignore
        [show,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        (__VLS_ctx.title);
        // @ts-ignore
        [title,];
        (__VLS_11.slots).default;
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("mainSec") }, });
        var __VLS_13 = {};
        if (!__VLS_ctx.fixed) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.menu, __VLS_intrinsicElements.menu)({});
            var __VLS_14 = {};
            // @ts-ignore
            [fixed,];
            const __VLS_15 = {}.BaseButton;
            ({}.BaseButton);
            ({}.BaseButton);
            __VLS_components.BaseButton;
            __VLS_components.baseButton;
            __VLS_components.BaseButton;
            __VLS_components.baseButton;
            // @ts-ignore
            [BaseButton, BaseButton,];
            const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{ 'onClick': {} }, }));
            const __VLS_17 = __VLS_16({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
            ({}({ ...{ 'onClick': {} }, }));
            let __VLS_21;
            const __VLS_22 = {
                onClick: (__VLS_ctx.tryClose)
            };
            // @ts-ignore
            [tryClose,];
            (__VLS_20.slots).default;
            const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            let __VLS_18;
            let __VLS_19;
            (__VLS_11.slots).default;
        }
    }
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['backdrop'];
        __VLS_styleScopedClasses['mainSec'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    const __VLS_internalComponent = (await import('./BaseDialog.vue')).default;
}
//# sourceMappingURL=BaseDialog.vue.js.map