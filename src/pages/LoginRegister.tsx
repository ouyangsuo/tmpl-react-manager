import React, { useState } from 'react';
import './LoginRegister.scss';

const LoginRegister: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 在此处处理登录或注册逻辑

        setEmail(''); // 清空表单字段
        setPassword('');
    };

    const switchForm = () => {
        // 切换登录和注册表单
        setIsLogin(!isLogin);
    };

    return (
        <div className="login-register">
            <form onSubmit={handleSubmit} className="form">

                <h2 className="form__title">{isLogin ? '登 录' : '注 册'}</h2>

                <div className="form__group">
                    <label htmlFor="email" className="form__label">
                        邮箱
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder='请输入用户名...'
                        className="form__input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form__group">
                    <label htmlFor="password" className="form__label">
                        密码
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder='请输入密码...'
                        className="form__input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="form__button">
                    {isLogin ? '登录' : '注册'}
                </button>
                <p className="form__switch">
                    {isLogin ? '还没有账号？' : '已有账号？'}
                    <span className="form__switch-link" onClick={switchForm}>
                        {isLogin ? '注册' : '登录'}
                    </span>
                </p>
            </form>
        </div>
    );
};

export default LoginRegister;