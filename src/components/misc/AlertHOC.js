import React from 'react'
import { useToasts } from 'react-toast-notifications'

export function withToast(Component) {
  return function WrappedComponent(props) {
    const toastFuncs = useToasts()
    return <Component {...props} {...toastFuncs} />;
  }
}
