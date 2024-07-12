import React from 'react';
import styles from "@site/src/pages/index.module.css";
export default function FooterCopyright({copyright}) {
  return (
    <>
      <div
        className="footer__copyright"
        // Developer provided the HTML, so assume it's safe.
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: copyright}}/>
    </>
)
  ;
}
