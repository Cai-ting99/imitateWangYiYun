import {
    SHOW_LEFT,
    HIDE_LEFT
} from './mutations-types.js'

export default {
    [SHOW_LEFT](state) {
        state.isLeftShow = true
            // console.log('显示左侧', state.isLeftShow)
    },
    [HIDE_LEFT](state) {
        // console.log('隐藏左侧')
        state.isLeftShow = false
    }
}