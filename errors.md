1. `Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist.`
   1. 原因: 未在background.js里面初始化webext redux导致的。在background.js里面完成redux store的初始化就可以了。
2. `The above error occurred in the <ReactRedux.Provider> component:`