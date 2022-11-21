import React, { useState, useEffect } from 'react';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import rootReducer from './todos/reducers'
import TodoApp from './todos'
import { FloatButton, Rate } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined, HeartOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Widget } from 'react-chat-widget';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import 'react-chat-widget/lib/styles.css';
import Request from './request.js'
import { Button, message } from 'antd';
import Rates from './honor/Rates'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer);// a normal Redux store
let persistor = persistStore(store)


const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
};

export default function App() {
    const [count, setCount] = useState(0);
    const [fart, setFart] = useState("");
    const [messageApi, contextHolder] = message.useMessage();

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
        let loadFart = async function(){
            let fartMsg = await Request.getRainbowFart();
            setFart(fartMsg);
        }
        loadFart();
    }, []);

    useEffect(()=>{
        console.log(`fart is: ${fart}`)
        if(message.length === 0) return;

        messageApi.open({
            type: 'info',
            content: fart,
            duration: 5,
          });
    }, [fart, messageApi])

    return (<Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <div>
               {contextHolder}
                <Rates />
                <TodoApp />
                <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ left: 24 }} onClick={() => console.log('click')} />
                <FloatButton icon={<QuestionCircleOutlined />} type="default" style={{ right: 94 }} onClick={() => console.log('click')} />
                <Widget handleNewUserMessage={handleNewUserMessage} />
            </div>
        </PersistGate>
    </Provider>
    );
}