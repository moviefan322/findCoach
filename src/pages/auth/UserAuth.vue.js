export default (await import('vue')).defineComponent({
    data() {
        return {
            email: '',
            password: '',
            formIsValid: true,
            mode: 'login',
            isLoading: false,
            error: null,
        };
    },
    computed: {
        submitButtonCaption() {
            if (this.mode === 'login') {
                return 'Login';
            }
            else {
                return 'Signup';
            }
        },
        switchModeButtonCaption() {
            if (this.mode === 'login') {
                return 'Signup instead';
            }
            else {
                return 'Login instead';
            }
        },
    },
    methods: {
        async submitForm() {
            this.formIsValid = true;
            if (this.email === '' ||
                !this.email.includes('@') ||
                this.password.length < 6) {
                this.formIsValid = false;
                return;
            }
            this.isLoading = true;
            const actionPayload = {
                email: this.email,
                password: this.password,
            };
            try {
                if (this.mode === 'login') {
                    await this.$store.dispatch('login', actionPayload);
                }
                else {
                    await this.$store.dispatch('signup', actionPayload);
                }
                const redirectUrl = '/' + (this.$route.query.redirect || 'coaches');
                this.$router.replace(redirectUrl);
            }
            catch (err) {
                this.error = err.message || 'Failed to authenticate, try later.';
            }
            this.isLoading = false;
        },
        switchAuthMode() {
            if (this.mode === 'login') {
                this.mode = 'signup';
            }
            else {
                this.mode = 'login';
            }
        },
        handleError() {
            this.error = null;
        },
    },
});
;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_0 = {}.BaseDialog;
    ({}.BaseDialog);
    ({}.BaseDialog);
    __VLS_components.BaseDialog;
    __VLS_components.baseDialog;
    __VLS_components.BaseDialog;
    __VLS_components.baseDialog;
    // @ts-ignore
    [BaseDialog, BaseDialog,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClose': {} }, show: ((!!__VLS_ctx.error)), title: ("An error occurred"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClose': {} }, show: ((!!__VLS_ctx.error)), title: ("An error occurred"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClose': {} }, show: ((!!__VLS_ctx.error)), title: ("An error occurred"), }));
    let __VLS_6;
    const __VLS_7 = {
        onClose: (__VLS_ctx.handleError)
    };
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.error);
    // @ts-ignore
    [error, error, handleError,];
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    const __VLS_8 = {}.BaseDialog;
    ({}.BaseDialog);
    ({}.BaseDialog);
    __VLS_components.BaseDialog;
    __VLS_components.baseDialog;
    __VLS_components.BaseDialog;
    __VLS_components.baseDialog;
    // @ts-ignore
    [BaseDialog, BaseDialog,];
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ show: ((__VLS_ctx.isLoading)), title: ("Authenticating..."), fixed: (true), }));
    const __VLS_10 = __VLS_9({ show: ((__VLS_ctx.isLoading)), title: ("Authenticating..."), fixed: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ show: ((__VLS_ctx.isLoading)), title: ("Authenticating..."), fixed: (true), }));
    const __VLS_14 = {}.BaseSpinner;
    ({}.BaseSpinner);
    ({}.BaseSpinner);
    __VLS_components.BaseSpinner;
    __VLS_components.baseSpinner;
    __VLS_components.BaseSpinner;
    __VLS_components.baseSpinner;
    // @ts-ignore
    [BaseSpinner, BaseSpinner,];
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({}));
    // @ts-ignore
    [isLoading,];
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    (__VLS_13.slots).default;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    const __VLS_20 = {}.BaseCard;
    ({}.BaseCard);
    ({}.BaseCard);
    __VLS_components.BaseCard;
    __VLS_components.baseCard;
    __VLS_components.BaseCard;
    __VLS_components.baseCard;
    // @ts-ignore
    [BaseCard, BaseCard,];
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
    const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({}));
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("password"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("password"), id: ("password"), });
    (__VLS_ctx.password);
    // @ts-ignore
    [password,];
    if (!__VLS_ctx.formIsValid) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        // @ts-ignore
        [formIsValid,];
    }
    const __VLS_26 = {}.BaseButton;
    ({}.BaseButton);
    ({}.BaseButton);
    __VLS_components.BaseButton;
    __VLS_components.baseButton;
    __VLS_components.BaseButton;
    __VLS_components.baseButton;
    // @ts-ignore
    [BaseButton, BaseButton,];
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({}));
    const __VLS_28 = __VLS_27({}, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({}));
    (__VLS_ctx.submitButtonCaption);
    // @ts-ignore
    [submitButtonCaption,];
    (__VLS_31.slots).default;
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    const __VLS_32 = {}.BaseButton;
    ({}.BaseButton);
    ({}.BaseButton);
    __VLS_components.BaseButton;
    __VLS_components.baseButton;
    __VLS_components.BaseButton;
    __VLS_components.baseButton;
    // @ts-ignore
    [BaseButton, BaseButton,];
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{ 'onClick': {} }, type: ("button"), mode: ("flat"), }));
    const __VLS_34 = __VLS_33({ ...{ 'onClick': {} }, type: ("button"), mode: ("flat"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ ...{ 'onClick': {} }, type: ("button"), mode: ("flat"), }));
    let __VLS_38;
    const __VLS_39 = {
        onClick: (__VLS_ctx.switchAuthMode)
    };
    (__VLS_ctx.switchModeButtonCaption);
    // @ts-ignore
    [switchAuthMode, switchModeButtonCaption,];
    (__VLS_37.slots).default;
    const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    let __VLS_35;
    let __VLS_36;
    (__VLS_25.slots).default;
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['form-control'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    const __VLS_internalComponent = (await import('./UserAuth.vue')).default;
}
//# sourceMappingURL=UserAuth.vue.js.map