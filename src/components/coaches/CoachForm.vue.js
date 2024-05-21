export default (await import('vue')).defineComponent({
    emits: ['save-data'],
    data() {
        return {
            firstName: {
                val: '',
                isValid: true
            },
            lastName: {
                val: '',
                isValid: true
            },
            description: {
                val: '',
                isValid: true
            },
            rate: {
                val: null,
                isValid: true
            },
            areas: {
                val: [],
                isValid: true
            },
            formIsValid: true
        };
    },
    methods: {
        clearValidity(input) {
            this[input].isValid = true;
        },
        validateForm() {
            this.formIsValid = true;
            if (this.firstName.val === '') {
                this.firstName.isValid = false;
                this.formIsValid = false;
            }
            if (this.lastName.val === '') {
                this.lastName.isValid = false;
                this.formIsValid = false;
            }
            if (this.description.val === '') {
                this.description.isValid = false;
                this.formIsValid = false;
            }
            if (!this.rate.val || this.rate.val < 0) {
                this.rate.isValid = false;
                this.formIsValid = false;
            }
            if (this.areas.val.length === 0) {
                this.areas.isValid = false;
                this.formIsValid = false;
            }
        },
        submitForm() {
            this.validateForm();
            if (!this.formIsValid) {
                return;
            }
            const formData = {
                first: this.firstName.val,
                last: this.lastName.val,
                description: this.description.val,
                rate: this.rate.val,
                areas: this.areas.val
            };
            this.$emit('save-data', formData);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-control") }, ...{ class: (({ invalid: !__VLS_ctx.firstName.isValid })) }, });
    __VLS_styleScopedClasses = ({ invalid: !firstName.isValid });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("firstname"), });
    // @ts-ignore
    [submitForm, firstName,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onBlur: (...[$event]) => {
                __VLS_ctx.clearValidity('firstName');
                // @ts-ignore
                [clearValidity,];
            } }, type: ("text"), id: ("firstname"), value: ((__VLS_ctx.firstName.val)), });
    // @ts-ignore
    [firstName,];
    if (!__VLS_ctx.firstName.isValid) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        // @ts-ignore
        [firstName,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-control") }, ...{ class: (({ invalid: !__VLS_ctx.lastName.isValid })) }, });
    __VLS_styleScopedClasses = ({ invalid: !lastName.isValid });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("lastname"), });
    // @ts-ignore
    [lastName,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onBlur: (...[$event]) => {
                __VLS_ctx.clearValidity('lastName');
                // @ts-ignore
                [clearValidity,];
            } }, type: ("text"), id: ("lastname"), value: ((__VLS_ctx.lastName.val)), });
    // @ts-ignore
    [lastName,];
    if (!__VLS_ctx.lastName.isValid) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        // @ts-ignore
        [lastName,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-control") }, ...{ class: (({ invalid: !__VLS_ctx.description.isValid })) }, });
    __VLS_styleScopedClasses = ({ invalid: !description.isValid });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("description"), });
    // @ts-ignore
    [description,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ ...{ onBlur: (...[$event]) => {
                __VLS_ctx.clearValidity('description');
                // @ts-ignore
                [clearValidity,];
            } }, type: ("text"), id: ("description"), value: ((__VLS_ctx.description.val)), });
    // @ts-ignore
    [description,];
    if (!__VLS_ctx.description.isValid) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        // @ts-ignore
        [description,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-control") }, ...{ class: (({ invalid: !__VLS_ctx.rate.isValid })) }, });
    __VLS_styleScopedClasses = ({ invalid: !rate.isValid });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("rate"), });
    // @ts-ignore
    [rate,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onBlur: (...[$event]) => {
                __VLS_ctx.clearValidity('rate');
                // @ts-ignore
                [clearValidity,];
            } }, type: ("number"), id: ("rate"), });
    (__VLS_ctx.rate.val);
    // @ts-ignore
    [rate,];
    if (!__VLS_ctx.rate.isValid) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        // @ts-ignore
        [rate,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-control") }, ...{ class: (({ invalid: !__VLS_ctx.areas.isValid })) }, });
    __VLS_styleScopedClasses = ({ invalid: !areas.isValid });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    // @ts-ignore
    [areas,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onBlur: (...[$event]) => {
                __VLS_ctx.clearValidity('areas');
                // @ts-ignore
                [clearValidity,];
            } }, type: ("checkbox"), id: ("frontend"), value: ("frontend"), });
    (__VLS_ctx.areas.val);
    // @ts-ignore
    [areas,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("frontend"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onBlur: (...[$event]) => {
                __VLS_ctx.clearValidity('areas');
                // @ts-ignore
                [clearValidity,];
            } }, type: ("checkbox"), id: ("backend"), value: ("backend"), });
    (__VLS_ctx.areas.val);
    // @ts-ignore
    [areas,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("backend"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onBlur: (...[$event]) => {
                __VLS_ctx.clearValidity('areas');
                // @ts-ignore
                [clearValidity,];
            } }, type: ("checkbox"), id: ("career"), value: ("career"), });
    (__VLS_ctx.areas.val);
    // @ts-ignore
    [areas,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("career"), });
    if (!__VLS_ctx.areas.isValid) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        // @ts-ignore
        [areas,];
    }
    if (!__VLS_ctx.formIsValid) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        // @ts-ignore
        [formIsValid,];
    }
    const __VLS_0 = {}.BaseButton;
    ({}.BaseButton);
    ({}.BaseButton);
    __VLS_components.BaseButton;
    __VLS_components.baseButton;
    __VLS_components.BaseButton;
    __VLS_components.baseButton;
    // @ts-ignore
    [BaseButton, BaseButton,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ type: ("submit"), }));
    const __VLS_2 = __VLS_1({ type: ("submit"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ type: ("submit"), }));
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['form-control'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    const __VLS_internalComponent = (await import('./CoachForm.vue')).default;
}
//# sourceMappingURL=CoachForm.vue.js.map