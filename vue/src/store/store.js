import {defineStore} from 'pinia'

//定义数据并且对外暴露

// 内部包含四个属性：
//1 id 唯一标识
//2 state 完整类型推理，推荐使用箭头函数，
//3 getter用来存放数据
//4 actions 存储数据的复杂业务逻辑方法

// 理解： store类似Java中的实体类， id就是类名， state 就是装数据值的属性  getters就是get方法，actions就是对数据操作的其他方法
export const definedPerson = defineStore('personPinia', //必须唯一
    {
        state: () => { // state中用于定义数据
            return {
                username: '张三',
                age: 0,
                hobbies: ['唱歌', '跳舞']
            }
        },
        getters: {

            // 用于定义一些通过数据计算而得到结果的一些方法 一般在此处不做对数据的修改操作
            // getters中的方法可以当做属性值方式使用
            getHobbiesCount() {
                return this.hobbies.length
            },
            getAge() {
                return this.age
            }
        },
        actions: {

            // 用于定义一些对数据修改的方法
            doubleAge() {
                this.age = this.age * 2
            }
        }
    }
)