<template>
  <a-form class="descriForm" :model="form" style="padding:10px 10px 0" @finish="onFinish" ref="formRef">
    <a-descriptions title="User Info" bordered :column="3">
      <a-descriptions-item v-for="(value, key) in formConfig" :key="value" :span="value.span?value.span:''">
        <template v-slot:label>
          <span v-if="value.formItem.required">
            <span style="color:red">*</span>{{ value.formItem.label }}
          </span>
          <span v-else>{{ value.formItem.label }}</span>
        </template>
        <a-form-item :name="key" v-bind="value.formItem" :label="''">
          <a-input v-if="value.component === 'Input'" v-model:value="form[key]" v-bind="value.componentProps"></a-input>
          <a-select v-else-if="value.component === 'Select'" v-model:value="form[key]">
            <a-select-option :value="item.value" v-for="(item, index) in value.options" :key="index">{{
              item.label
            }}</a-select-option>
          </a-select>
          <a-tree-select v-else-if="value.component === 'SelectTree'" :search-value="form[key]"
            v-model:value="form[key]" show-search style="width: 100%"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }" placeholder="Please select" allow-clear
            tree-default-expand-all :tree-data="value.treeData" v-bind="value.componentProps">
          </a-tree-select>
        </a-form-item>
      </a-descriptions-item>

    </a-descriptions>
  </a-form>
</template>

<script>

import { defineComponent, reactive, toRaw } from 'vue';

export default defineComponent({
  name: 'we',
  components: {
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
            min: 3, message: 'dfdsjfsd', trigger: 'change'
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
      mxbh2: {
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
      mxmc2: {
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
      jg2: {
        field: 'jg',
        component: 'SelectTree',
        label: '机构',
        span:3,
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
      cp2: {
        field: 'whbm',
        component: 'Select',
        span:3,
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
      cp: '',
      mxbh2: 'qwwqw',
      mxmc2: '',
      jg2: '',
      cp2: ''
    })

    return {
      formConfig: formSchema,
      form: formData
    }
  }

}); 
</script>
<style lang="less">
.descriForm {
  .ant-descriptions-item-label {
    padding: 0;
    text-align: right;
    padding-right: 10px;
    // background-color: #999;
  }

  .ant-descriptions-item-content {
    padding: 10px;

    .ant-form-item {
      margin-bottom: 0;
      border-radius: 5px;
    }
  }

}
</style>
