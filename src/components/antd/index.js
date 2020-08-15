import {
  Layout,
  Button,
  Table,
  Checkbox,
  Card,
  Menu,
  Icon,
  Avatar,
  Pagination,
  message,
  Form,
  Input,
  Select,
  Upload,
  Modal,
} from 'ant-design-vue'

message.config({
  duration: 1,
  maxCount: 2,
})

const antdComponents = [
  Button,
  Layout,
  Layout.Header,
  Layout.Sider,
  Layout.Footer,
  Layout.Content,
  Table,
  Menu,
  Menu.Item,
  Icon,
  Avatar,
  Pagination,
  Form,
  Form.Item,
  Input,
  Input.TextArea,
  Upload,
  Modal,
  Select.Option,
]

const install = (Vue) => {
  antdComponents.forEach((component) =>
    Vue.component(component.name, component)
  )
  Vue.use(Checkbox)
    .use(Card)
    .use(Select)
  Vue.prototype.$message = message
}

export default { install }
