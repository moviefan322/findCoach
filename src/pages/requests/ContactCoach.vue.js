export default (await import('vue')).defineComponent({
    data() {
        return {
            email: '',
            message: '',
            formIsValid: true
        };
    },
    methods: {
        submitForm() {
            this.formIsValid = true;
            if (this.email === '' || !this.email.includes('@') || this.message === '') {
                this.formIsValid = false;
                return;
            }
            this.$store.dispatch('requests/contactCoach', {
                email: this.email,
                message: this.message,
                coachId: this.$route.params.id
            });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.submitForm) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-control") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("email"), });
    // @ts-ignore
    [submitForm,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("email"), id: ("email"), });
    (__VLS_ctx.email);
    // @ts-ignore
    [email,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-control") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("message"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ rows: ("5"), id: ("message"), value: ((__VLS_ctx.message)), });
    // @ts-ignore
    [message,];
    if (!__VLS_ctx.formIsValid) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("errors") }, });
        // @ts-ignore
        [formIsValid,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("actions") }, });
    const __VLS_0 = {}.BaseButton;
    ({}.BaseButton);
    ({}.BaseButton);
    __VLS_components.BaseButton;
    __VLS_components.baseButton;
    __VLS_components.BaseButton;
    __VLS_components.baseButton;
    // @ts-ignore
    [BaseButton, BaseButton,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['errors'];
        __VLS_styleScopedClasses['actions'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    const __VLS_internalComponent = (await import('./ContactCoach.vue')).default;
}
//# sourceMappingURL=ContactCoach.vue.js.map