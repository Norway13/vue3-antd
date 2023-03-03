
<template>
    <!-- :span="value.hide?0:value.colProps.span" -->
    <a-form :model="form" style="padding:10px 10px 0" @finish="onFinish" ref="formRef">
        <a-row :gutter="[16, 0]">
            <a-col v-bind="value.colProps" v-for="(value, key) in formConfig" :key="value"
                :style="{ display: value.hide ? 'none' : 'block' }">
                <a-form-item v-bind="value.formItem" :name="key">
                    <a-input v-if="value.component === 'Input'" v-model:value="form[key]"
                        v-bind="value.componentProps"></a-input>
                    <a-select v-else-if="value.component === 'Select'" v-model:value="form[key]">
                        <a-select-option :value="item.value" v-for="(item, index) in value.options" :key="index">{{
                            item.label
                        }}</a-select-option>
                        <!-- <a-select-option value="lucy">Lucy</a-select-option>
                        <a-select-option value="disabled" disabled>Disabled</a-select-option>
                        <a-select-option value="Yiminghe">yiminghe</a-select-option> -->
                    </a-select>
                    <a-tree-select v-else-if="value.component === 'SelectTree'" :search-value="form[key]"
                        v-model:value="form[key]" show-search style="width: 100%"
                        :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }" placeholder="Please select"
                        allow-clear tree-default-expand-all :tree-data="value.treeData" v-bind="value.componentProps">
                        <!-- <template #title="{ value: val, title }">
                            <b v-if="val === 'parent 1-1'" style="color: #08c">sss</b>
                            <template v-else>{{ title }}</template>
                        </template> -->
                    </a-tree-select>
                </a-form-item>
            </a-col>
            <a-col v-if="button">
                <a-form-item>
                    <a-button type="primary" html-type="submit">查询</a-button>
                    <a-button @click="onReset">重置</a-button>
                </a-form-item>
            </a-col>

        </a-row>
    </a-form>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'BasicForm',
    props: {
        formSchema: {
            type: Object,
            default: () => ({}),
        },
        formData: {
            type: Object,
            default: () => ({}),
        },
        button: {
            type: Boolean,
            default: true
        }
    },
    setup(props, context) {
        const formRef = ref()
        // 校验成功
        const onFinish = () => {
            console.log('onFinish')
            context.emit('submitForm')
        }
        const onReset = () => {
            console.log('formRef', formRef)
            // console.log('getCurrentInstance',getCurrentInstance())
            // const vm = getCurrentInstance()
            formRef.value.resetFields() //getFieldsValue
            // const ada =  formRef.value.getFieldsValue()
            // console.log('ada', ada)

        }
        // //暴露state和play方法
        // defineExpose({ 
        //     onFinish
        // });

        return {
            formConfig: props.formSchema,
            form: props.formData,
            onFinish,
            onReset,
            formRef
        }
    }
})


</script>