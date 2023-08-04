// src/components/Counter.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../store/features/counterSlice';
import { RootState } from '@/store/rootState';
import { RoleAuth, RoleInReduxAuth } from '@/routes/Auth';

const Counter: React.FC<{}> = () => {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        </div>
    );
};

export default RoleInReduxAuth(Counter)();