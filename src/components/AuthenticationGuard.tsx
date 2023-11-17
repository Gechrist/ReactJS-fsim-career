import { withAuthenticationRequired } from '@auth0/auth0-react';
import { ComponentType } from 'react';
import Loading from './Loading/Loading';
const AuthenticationGuard = ({
  component,
}: {
  component: ComponentType;
}): JSX.Element => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div>
        <Loading />
      </div>
    ),
  });

  return <Component />;
};
export default AuthenticationGuard;
