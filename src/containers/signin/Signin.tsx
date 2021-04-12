import React, { Component } from "react";
import {
  connect,
  MapStateToProps,
  MapDispatchToPropsFunction,
} from "react-redux";
import { Login } from "../../components/login/Login";
import { LoginResult } from "../../components/loginResult/LoginResult";
import { NavBar } from "../../components/navBar/NavBar";
import { Footer } from "../../components/footer/Footer";
import { loginFetch, loginReload } from "../../modules/action";
import { RootState } from "../../modules/reducer";
import { selectLoading, selectStatus, selectMsg } from "../../modules/selector";

interface ReduxProps {
  loading: boolean;
  status: boolean;
  msg: string;
}

interface DispatchProps {
  loginFetch: typeof loginFetch;
  loginReload: typeof loginReload;
}

type Props = ReduxProps & DispatchProps;

class Signin extends Component<Props> {
  render() {
    const { loginReload, loginFetch, loading, status, msg } = this.props;
    return (
      <>
        <NavBar />
        <div className="pg-signin">
          <div className="pg-signin_box">
            {loading ? (
              <Login loginFetch={loginFetch} />
            ) : (
              <LoginResult
                loginReload={loginReload}
                loginStatus={status}
                msg={msg}
              />
            )}
            <h1>git</h1>
            <h3>how</h3>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, RootState> = (
  state: RootState
): ReduxProps => ({
  loading: selectLoading(state),
  status: selectStatus(state),
  msg: selectMsg(state),
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> = (
  dispatch
) => ({
  loginFetch: ({ email, password }) =>
    dispatch(loginFetch({ email, password })),
  loginReload: () => dispatch(loginReload()),
});

const SigInScreen = connect(mapStateToProps, mapDispatchToProps)(Signin);

export { SigInScreen };
