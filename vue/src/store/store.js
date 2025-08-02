import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const definedPerson = defineStore('personPinia', () => {
    // ========== state 状态 ==========
    const username = ref('张三')
    const age = ref(0)
    const hobbies = ref(['唱歌', '跳舞'])

    // ========== getters 计算属性 ==========
    const getHobbiesCount = computed(() => hobbies.value.length)
    const getAge = computed(() => age.value)

    // ========== actions 方法 ==========
    function doubleAge() {
        age.value *= 2
    }

    // 暴露所有需要访问的属性和方法
    return {
        username,
        age,
        hobbies,
        getHobbiesCount,
        getAge,
        doubleAge
    }
})