<template>
  <div class="form">
    <BasicForm :formSchema="formSchema" :formData="formData" @submitForm="submitForm"></BasicForm>
    <FormDialog :dialogConfig="dialogConfig" @close="close" @dialogSubmit="dialogSubmit"></FormDialog>
    <a-button @click="openDialog">点击弹框</a-button>
  </div>
</template>

<script>
import BasicForm from '@/components/Form/index.vue'
import FormDialog from '@/components/Dialog/FormDialog.vue'
import { defineComponent, reactive, toRaw } from 'vue';

export default defineComponent({
  name: 'we',
  components: {
    BasicForm,
    FormDialog
  },
  setup() {
    const formSchema = reactive({
      mxbh: {
        field: 'mxbh',
        component: 'Input',
        colProps: {
          span: 8,
        },
        formItem: {
          label: '模型编号',
          rules: [{
            min: 3, message: 'dfdsjfsd'
          },
          {
            max: 7, message: 'xcxcxc'
          }]

        },
        componentProps: {
          placeholder: '自定义111placeholder',

          onChange: (e) => {
            console.log('formData', formData)
            formSchema.cp.hide = true
            formSchema.cp.formItem.required = false
            // formSchema.mxbh.colProps.span = formSchema.mxbh.colProps.span === 12 ? 8 : 12
            // formSchema.cp.options = [
            //   { value: '444', label: '444' },
            //   { value: '555', label: '555' }
            // ]

          },
        }
      },
      mxmc: {
        field: 'mxmc',
        component: 'Input',
        colProps: {
          span: 8,
        },
        formItem: {
          label: '模型名称',
          required: true
        },
        componentProps: {
          placeholder: '自定义placeholder',
          onChange: (e) => {
            console.log(e);
            formSchema.cp.hide = false
            formSchema.cp.formItem.required = true
          },
        }
      },
      jg: {
        field: 'jg',
        component: 'SelectTree',
        label: '机构',
        colProps: {
          span: 8,
        },
        formItem: {
          label: '机构',
          rules: [{
            required: true
          }]

        },
        treeData: [{
          title: 'parent 1',
          value: 'parent 1',
          children: [
            {
              title: 'parent 1-0',
              value: 'parent 1-0',
              children: [
                {
                  title: 'my leaf',
                  value: 'leaf1',
                },
                {
                  title: 'your leaf',
                  value: 'leaf2',
                },
              ],
            },
            {
              title: 'parent 1-1',
              value: 'parent 1-1',
            },
          ],
        }],
        componentProps: {
          onSearch: (value) => {
            console.log('value', value)

          }
        }
      },
      cp: {
        field: 'whbm',
        component: 'Select',
        colProps: {
          span: 8,
        },
        formItem: {
          label: '产品',
          required: true
        },
        options: [
          { value: 1, label: '111' },
          { value: 2, label: '222' },
        ],

        componentProps: {

        }
      },

    })
    const formData = reactive({
      mxbh: 'qwwqw',
      mxmc: '',
      jg: '',
      cp: ''
    })
    const submitForm = () => {
      console.log('我登入', toRaw(formData))
    }

    const dialogConfig = reactive({
      visible: false,
      formSchema: {
        mxbh: {
          field: 'mxbh',
          component: 'Input',
          colProps: {
            span: 24,
          },
          formItem: {
            label: '模型编号',
            rules: [{
              min: 3, message: 'dfdsjfsd'
            },
            {
              max: 7, message: 'xcxcxc'
            }]

          },
          componentProps: {
            placeholder: '自定义111placeholder',

            onChange: (e) => {
              console.log('formData', formData)
              dialogConfig.formSchema.mxmc.hide = true
              // formSchema.cp.formItem.required = false
              // formSchema.mxbh.colProps.span = formSchema.mxbh.colProps.span === 12 ? 8 : 12
              // formSchema.cp.options = [
              //   { value: '444', label: '444' },
              //   { value: '555', label: '555' }
              // ]

            },
          }
        },
        mxmc: {
          field: 'mxmc',
          component: 'Input',
          colProps: {
            span: 24,
          },
          formItem: {
            label: '模型名称',
            required: true
          },
          componentProps: {
            placeholder: '自定义placeholder',
            onChange: (e) => {
              console.log(e);
              formSchema.cp.hide = false
              formSchema.cp.formItem.required = true
            },
          }
        },
      },
      formData: {
        mxbh: '',
        mxmc: '',
      },
      dialog: {
        title: '12121223',
        width: 800
      },

    })

    const openDialog = () => {
      dialogConfig.visible = true
    }
    // 关闭弹框
    const close = () => {
      dialogConfig.visible = false
    }
    const dialogSubmit = (values) => {
      console.log('values', values)
      dialogConfig.visible = false
    }
    return {
      formSchema,
      formData,
      submitForm,
      openDialog,
      dialogConfig,
      close,
      dialogSubmit
    }
  }

}); 
</script>
