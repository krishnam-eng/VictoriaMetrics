import React, { FC } from "preact/compat";
import dayjs from "dayjs";
import "./style.scss";
import { IssueIcon, LogoIcon, WikiIcon } from "../../Main/Icons";

const Footer: FC = () => {
  const copyrightYears = `2019-${dayjs().format("YYYY")}`;

  return <footer className="vm-footer">
    <a
      className="vm-link vm-footer__website"
      target="_blank"
      href="https://victoriametrics.com/"
      rel="me noreferrer"
    >
      <LogoIcon/>
      victoriametrics.com
    </a>
    <a
      className="vm-link vm-footer__link"
      target="_blank"
      href="https://docs.victoriametrics.com/#vmui"
      rel="help noreferrer"
    >
      <WikiIcon/>
      Documentation
    </a>
    <a
      className="vm-link vm-footer__link"
      target="_blank"
      href="https://github.com/VictoriaMetrics/VictoriaMetrics/issues/new/choose"
      rel="noreferrer"
    >
      <IssueIcon/>
      Create an issue
    </a>
    <div className="vm-footer__copyright">
      &copy; {copyrightYears} VictoriaMetrics
    </div>
  </footer>;
};

export default Footer;
