<template>
    <a-modal :maskClosable="false" v-model:visible="dd.visible" v-bind="dd.dialog" @cancel="onCancel" @ok="onOk">
        <BasicForm ref="form" :formSchema="dd.formSchema" :formData="dd.formData" :button="false">
        </BasicForm>
    </a-modal>
</template>
<script>
import { defineComponent, ref } from 'vue';
import BasicForm from '../Form/index.vue';
export default defineComponent({
    name: 'FormDialog',
    components: {
        BasicForm
    },
    props: {
        dialogConfig: {
            type: Object,
            default: () => {
                return {
                    visible: false,
                    formSchema: {},
                    formData: {},
                    dialog: {
                        title: 'aaa',
                    }
                }
            }

        }

    },
    setup(props, ctx) {
        const form = ref() 
       
        // 关闭弹框
        const onCancel = () => {
            ctx.emit('close')
            form.value.formRef.resetFields()
        }
        // 确认弹框
        const onOk = () => {
            console.log('onOk', form)
            form.value.formRef.validate().then((res) => {
                console.log('onOk11', res)
                ctx.emit('dialogSubmit', res)
            }).catch(err => {
                console.log('err', err)
            })
        }
        return {
            dd: props.dialogConfig,
            // ...toRefs(props.dialogConfig), 
            onCancel,
            onOk,
            form
        }

    }

})
</script>
