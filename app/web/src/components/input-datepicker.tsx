/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useComponent } from "web.utils/component";

export default ({ children, label, value, calendarChange,  inputStyle, style }) => {
  const _component = useComponent("input-datepicker","/app/web/src/components/input-datepicker",{
    label,
    value,
    calendarChange, inputStyle, style
  });
  return eval(_component.render)
}