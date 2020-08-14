import {
  Layout,
  Button,
  Table,
  Checkbox,
  Card,
  Menu,
  Icon,
  Avatar,
} from 'ant-design-vue'

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
]

const install = (Vue) => {
  antdComponents.forEach((component) =>
    Vue.component(component.name, component)
  )
  Vue.use(Checkbox).use(Card)
}

export default { install }
