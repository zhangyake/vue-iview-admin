
const app = {
  state: {
    openedSubmenuArr: [], // 要展开的菜单数组,
    openedTags: [], // 打开过的标签,
    shrink: false

  },
  mutations: {
    SET_SHRINK (state, boolval) {
      state.shrink = boolval
    },
    addOpenSubmenu (state, name) {
      let hasThisName = false
      let isEmpty = false
      if (name.length === 0) {
        isEmpty = true
      }
      if (state.openedSubmenuArr.indexOf(name) > -1) {
        hasThisName = true
      }
      if (!hasThisName && !isEmpty) {
        state.openedSubmenuArr.push(name)
      }
    },
    removeOpenTag (state, name) {
      const index = state.openedTags.findIndex(item => {
        return item.name === name
      })
      state.openedTags.splice(index, 1)
    },
    addOpenTag (state, tag) {
      let isHas = state.openedTags.some(item => {
        return item.name === tag.name
      })
      if (!isHas) {
        state.openedTags.push(tag)
      }
    },
    clearAllTags (state) {
      state.openedTags.splice(0)
    },
    clearOtherTags (state, vm) {
      // let currentName = vm.$route.name
      state.openedTags = [vm.$route]
    },
    setOpenSubMenu (state, names) {
      state.openedSubmenuArr = names
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('')
    }

  }
}

export default app
