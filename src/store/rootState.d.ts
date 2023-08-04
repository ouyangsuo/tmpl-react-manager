// rootState.ts

interface Counter {
    count: number
}

// 根据您的应用程序状态结构进行定义
export interface RootState {
    // 状态属性和类型定义
    counter: Counter
}