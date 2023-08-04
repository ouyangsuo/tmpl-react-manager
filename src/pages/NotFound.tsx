import React from "react";
import "./NotFound.scss";

const NotFound: React.FC = () => {
    return (
        <div className="error-container">
            {/* <h1 className="error-title">404 - 页面不见了</h1> */}
            <p className="error-message">很抱歉，你所访问的页面不存在。</p>
            
            <img
                className="error-image"
                src="/404.png"
                alt="Page Not Found"
            />

            <button className="error-button" onClick={() => window.history.back()}>
                返回上一页
            </button>
            
        </div>
    );
};

export default NotFound;