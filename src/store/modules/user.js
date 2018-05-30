
import { constantRouterMap, asyncRouterMap, errorRouterMap } from '@/router/routes'
import { setToken } from '@/utils/auth'
import router from './../../router'
const user = {
  state: {
    token: '',
    name: '',
    avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    roles: [],
    hasMenus: {},
    menuList: []
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_MENULIST: (state, routes) => {
      state.menuList = constantRouterMap.concat(routes)
    },
    SET_HASMENUS: (state, menus) => {
      state.hasMenus = menus
    }
  },
  actions: {
    Login: ({ commit }) => {
      return new Promise((resolve, reject) => {
        const data = {menus: {'home': 1, 'main': 1, 'home1': 1, 'home2': 1}}
        commit('SET_TOKEN', '123123123')
        setToken('123123123')
        commit('SET_NAME', '天空之城')
        commit('SET_AVATAR', '图片url')
        commit('SET_AVATAR', '图片url')

        const userMenus = data.menus
        let routes = []
        asyncRouterMap.forEach(item => {
          if (userMenus.hasOwnProperty(item.name) && userMenus[item.name]) {
            if (item.children && item.children.length) {
              let children = item.children.filter(element => {
                return userMenus.hasOwnProperty(element.name) && userMenus[element.name]
              })
              item.children = children
            }
            routes.push(item)
          }
        })
        console.log(routes)
        // router.addRoutes(routes)
        console.log('add routes')
        resolve()
      })
    },
    GetUserInfo: ({ commit }) => {
      return new Promise((resolve, reject) => {
        const data = {menus: {'home': 1, 'main': 1, 'home1': 1, 'home2': 1}}

        const userMenus = data.menus
        commit('SET_HASMENUS', userMenus)
        let routes = []
        asyncRouterMap.forEach(item => {
          if (userMenus.hasOwnProperty(item.name) && userMenus[item.name]) {
            if (item.children && item.children.length) {
              let children = item.children.filter(element => {
                return userMenus.hasOwnProperty(element.name) && userMenus[element.name]
              })
              item.children = children
            }
            routes.push(item)
          }
        })
        console.log(routes = asyncRouterMap)
        commit('SET_MENULIST', routes)

        router.addRoutes(routes.concat(errorRouterMap))
        console.log('add routes')
        resolve()
      })
    }

  }
}

export default user
