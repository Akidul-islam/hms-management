import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props {
  children: React.ReactNode;
  portalId: string;
}
const PortalComponent: React.FC<Props> = ({ children, portalId }) => {
  const portalRoot = document.getElementById(portalId);

  if (!portalRoot) {
    console.error(`Element with id '${portalId}' not found in the DOM.`);
    return null;
  }

  return ReactDOM.createPortal(children, portalRoot);
};

export default PortalComponent;
