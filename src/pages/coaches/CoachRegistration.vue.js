import CoachForm from '@/components/coaches/CoachForm.vue';
export default (await import('vue')).defineComponent({
    components: {
        CoachForm
    },
    methods: {
        saveData(data) {
            this.$store.dispatch('coaches/registerCoach', data);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    const __VLS_6 = {}.CoachForm;
    ({}.CoachForm);
    ({}.CoachForm);
    __VLS_components.CoachForm;
    __VLS_components.coachForm;
    __VLS_components.CoachForm;
    __VLS_components.coachForm;
    // @ts-ignore
    [CoachForm, CoachForm,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onSaveData': {} }, }));
    const __VLS_8 = __VLS_7({ ...{ 'onSaveData': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ 'onSaveData': {} }, }));
    let __VLS_12;
    const __VLS_13 = {
        onSaveData: (__VLS_ctx.saveData)
    };
    // @ts-ignore
    [saveData,];
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    let __VLS_9;
    let __VLS_10;
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        CoachForm
    };
    const __VLS_name = undefined;
    const __VLS_internalComponent = (await import('./CoachRegistration.vue')).default;
}
//# sourceMappingURL=CoachRegistration.vue.js.map