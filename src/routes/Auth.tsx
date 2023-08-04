import NotFound from "@/pages/NotFound";
import { RootState } from "@/store/rootState";
import React, { ComponentType } from "react";
import { useSelector } from "react-redux";

type AuthProps = {
    roles?: string[];
};

export const RoleAuth = <P extends object>(Com: ComponentType<P>, whereIsRole: (state: any) => string): React.FC<P & AuthProps> => {

    const AuthComponent: React.FC<P & AuthProps> = (props) => {
        const { roles, ...rest } = props;

        const role = useSelector(whereIsRole)

        if (!roles) {
            // 通过守卫条件，渲染传入组件
            return <Com {...rest as P} />;
        }

        // 进行访问守卫逻辑判断
        if (!roles.includes(role)) {
            // 未通过守卫条件，可以进行相应的操作，比如重定向到登录页
            return <NotFound />;
        }

        // 通过守卫条件，渲染传入组件
        return <Com {...rest as P} />;
    };

    return AuthComponent;
};

export const RoleInReduxAuth = (Com: ComponentType<any>) =>
    RoleAuth.bind(
        null,
        Com,
        (state: RootState) => state.user.role
    )