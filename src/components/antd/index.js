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
]

const install = (Vue) => {
  antdComponents.forEach((component) =>
    Vue.component(component.name, component)
  )
  Vue.use(Checkbox).use(Card)
  Vue.prototype.$message = message
}

export default { install }
