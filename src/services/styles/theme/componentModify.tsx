/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

type CustomLinkProps = Omit<RouterLinkProps, 'to'> & {
  href: RouterLinkProps['to'];
};

const LinkBehavior = React.forwardRef<HTMLAnchorElement, CustomLinkProps>(
  (props, ref) => {
    const { href, ...other } = props;

    return <RouterLink ref={ref} to={href} {...other} />;
  }
);

export default LinkBehavior;
